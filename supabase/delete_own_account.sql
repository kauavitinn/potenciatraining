-- Allows an authenticated user to permanently delete only their own account.
-- Run this once in Supabase: SQL Editor > New query > Run.
create or replace function public.delete_own_account()
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
    delete from auth.users
    where id = auth.uid();
end;
$$;

revoke all on function public.delete_own_account() from public;
grant execute on function public.delete_own_account() to authenticated;
