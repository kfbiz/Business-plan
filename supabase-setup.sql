-- KF Biz Business Plan Creator: initial database setup
-- Run this script in Supabase Dashboard -> SQL Editor.
-- This intentionally grants anonymous visitors INSERT only. They cannot read, update or delete submissions.

create table if not exists public.business_plan_submissions (
  id uuid primary key default gen_random_uuid(),
  submitted_at timestamptz not null default now(),
  client_name text not null check (char_length(trim(client_name)) between 1 and 160),
  client_email text not null check (char_length(trim(client_email)) between 3 and 254),
  answers jsonb not null check (jsonb_typeof(answers) = 'object'),
  consented_at timestamptz not null,
  source text not null default 'KF Biz Interactive Business Plan Creator'
);

alter table public.business_plan_submissions enable row level security;

-- Remove broad table access, then explicitly grant only what the browser needs.
revoke all on table public.business_plan_submissions from anon, authenticated;
grant insert on table public.business_plan_submissions to anon;

drop policy if exists "Public can submit business plans" on public.business_plan_submissions;
create policy "Public can submit business plans"
  on public.business_plan_submissions
  for insert
  to anon
  with check (
    char_length(trim(client_name)) between 1 and 160
    and char_length(trim(client_email)) between 3 and 254
    and jsonb_typeof(answers) = 'object'
    and consented_at <= now()
  );

-- No SELECT, UPDATE, or DELETE policy is created for anon.
-- Review submissions through the authenticated Supabase dashboard only.
