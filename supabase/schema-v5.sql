-- Execute DEPOIS do schema.sql da V4 (ou use ambos em projeto novo).
create table if not exists public.profiles (
 user_id uuid primary key references auth.users(id) on delete cascade,
 display_name text,
 plan text not null default 'paper' check(plan in ('paper','pro')),
 created_at timestamptz not null default now()
);
alter table public.profiles enable row level security;
create policy "own profile read" on public.profiles for select using(auth.uid()=user_id);
create policy "own profile insert" on public.profiles for insert with check(auth.uid()=user_id);
create policy "own profile update" on public.profiles for update using(auth.uid()=user_id);
create or replace function public.handle_new_user() returns trigger language plpgsql security definer set search_path=public as $$
begin insert into public.profiles(user_id,display_name) values(new.id,coalesce(new.raw_user_meta_data->>'display_name','')) on conflict do nothing; return new; end; $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();
