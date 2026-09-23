export default async function handler(request, response) {
  if (request.method !== 'POST') return response.status(405).json({ error: 'Method not allowed' });

  const payload = request.body || {};
  const webhookSecret = process.env.CAKTO_WEBHOOK_SECRET;
  if (!webhookSecret || !safeEqual(String(payload.secret || ''), webhookSecret)) {
    return response.status(401).json({ error: 'Unauthorized' });
  }

  const event = String(payload.event || payload.type || '').toLowerCase();
  const data = payload.data || payload;
  const status = String(data.status || data.order_status || payload.status || '').toLowerCase();
  const isPaid = event === 'purchase_approved' || status === 'paid';
  const isRevoked = ['refund', 'purchase_refunded', 'chargeback', 'purchase_cancelled'].includes(event)
    || ['refunded', 'cancelled', 'chargeback', 'chargedback'].includes(status);
  if (!isPaid && !isRevoked) return response.status(200).json({ ignored: true });

  const values = JSON.stringify(payload);
  const email = String(
    data.customer?.email || data.buyer?.email || data.customer_email || data.buyer_email || data.email || ''
  ).match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0]?.toLowerCase()
    || values.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0]?.toLowerCase();
  if (!email) return response.status(400).json({ error: 'Buyer email not found' });

  const paymentId = String(data.id || data.order_id || payload.id || '');
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) return response.status(500).json({ error: 'Server not configured' });

  const upsert = await fetch(`${supabaseUrl}/rest/v1/course_entitlements?on_conflict=email,course_key`, {
    method: 'POST',
    headers: {
      apikey: serviceKey,
      Authorization: `Bearer ${serviceKey}`,
      'Content-Type': 'application/json',
      Prefer: 'resolution=merge-duplicates,return=minimal'
    },
    body: JSON.stringify([{
      email,
      course_key: 'potencia-training-completo',
      payment_status: isRevoked ? 'refunded' : 'paid',
      provider: 'cakto',
      provider_payment_id: paymentId,
      updated_at: new Date().toISOString()
    }])
  });
  if (!upsert.ok) return response.status(502).json({ error: 'Could not grant course access' });
  return response.status(200).json({ received: true });
}

function safeEqual(received, expected) {
  if (received.length !== expected.length) return false;
  let difference = 0;
  for (let index = 0; index < received.length; index += 1) {
    difference |= received.charCodeAt(index) ^ expected.charCodeAt(index);
  }
  return difference === 0;
}
