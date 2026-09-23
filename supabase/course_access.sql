-- Execute este arquivo no SQL Editor do Supabase uma única vez.
-- O acesso é concedido por e-mail após o webhook da Cakto confirmar pagamento.

create table if not exists public.course_entitlements (
  id bigint generated always as identity primary key,
  email text not null,
  course_key text not null default 'potencia-training-completo',
  payment_status text not null default 'paid' check (payment_status in ('paid', 'refunded', 'cancelled')),
  provider text not null default 'cakto',
  provider_payment_id text,
  granted_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (email, course_key)
);

alter table public.course_entitlements enable row level security;

-- Nenhum usuário lê ou altera permissões diretamente.
revoke all on public.course_entitlements from anon, authenticated;

create or replace function public.has_course_access(requested_course text default 'potencia-training-completo')
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1
    from public.course_entitlements
    where lower(email) = lower(coalesce(auth.jwt() ->> 'email', ''))
      and course_key = requested_course
      and payment_status = 'paid'
  );
$$;

revoke all on function public.has_course_access(text) from public;
grant execute on function public.has_course_access(text) to authenticated;
