# KF Biz Interactive Business Plan Creator

**Current project:** A single interactive business-plan questionnaire for KF Biz clients in Finland, connected to Supabase for submission storage and a private administrator dashboard for client follow-up.

- **Live creator:** https://kfbiz.github.io/Business-plan/interactive.html
- **Admin dashboard:** https://kfbiz.github.io/Business-plan/admin/
- **Repository:** https://github.com/kfbiz/Business-plan

The tool is intended to support KF Biz's paid business-planning service. The questionnaire is the only client-facing creator; the older duplicate questionnaire was removed from the workflow. The root `index.html` redirects to `interactive.html`.

> **Access-control status:** GitHub Pages hosts public static files. The dashboard is protected by Supabase authentication and an administrator allowlist, and database row-level security protects stored records. However, the creator itself is not yet restricted to paying clients: its URL is public, and the current browser submission flow permits anonymous inserts under the database policy. Do not treat an unlisted link as access control. Implement server-verified client invitations/access control before relying on the tool as an exclusive paid-client service.

## 1. What the current version does

### Client questionnaire
- Guides users through business-planning sections using Back/Continue navigation and a progress indicator.
- Includes conditional questions for Starttiraha, Finnvera/lender-related purposes and employer planning where relevant.
- Covers the business idea, founder readiness, products/services, customers and market, marketing, sales, operations and compliance, risks/SWOT, entrepreneur wellbeing, and relevant conditional topics.
- Validates required fields and provides a review screen before submission or export.
- Saves draft answers in the browser's local storage so users can continue on the same browser and device.
- Supports downloading a Markdown draft (`.md`) and printing/saving to PDF through the browser.
- Uses responsive HTML/CSS/JavaScript without a build step or package installation.

### Supabase submissions
When a user completes the submission form, the client name, email, answers, consent timestamp and source are submitted to the Supabase database. The database uses row-level security (RLS). The intended public policy is insert-only: anonymous users may submit a record but must not be able to read, update or delete submitted records.

The publishable key used by the browser is designed to be public. **Never put a Supabase service-role key or another secret in frontend code or this repository.**

### Private administrator dashboard
The `admin/` page provides an authenticated workspace for authorised KF Biz administrators. Current functionality includes:
- Email/password sign-in and sign-out through Supabase Auth.
- Administrator allowlist verification.
- A submission list with name/email search and status filtering.
- A detail view that displays each question with its full wording and the answer underneath it.
- Client-management fields for workflow status, industry, business stage, service needed, next action, follow-up date, estimated fee, actual revenue and internal notes.
- Summary metrics for total submissions, active opportunities, follow-ups due and recorded revenue.

The dashboard's `noindex` metadata only discourages search indexing; it is not a security feature. Supabase authentication, RLS policies and the administrator allowlist are the actual data-access controls.

## 2. Repository map

| File or folder | Purpose |
|---|---|
| `index.html` | Redirects visitors to the one supported creator. |
| `interactive.html` | Questionnaire interface, submission form, privacy-consent link and export controls. |
| `app.js` | Question definitions, conditional logic, local saving, review, exports and Supabase submission flow. |
| `admin/index.html` | Authenticated KF Biz submission and client-management dashboard. |
| `supabase-setup.sql` | **Initial setup script only. It is not a current full-schema migration. See the warning below.** |
| `README.md` | Project status, operating notes, setup cautions and roadmap. |

## 3. Current data flow

1. The client opens `interactive.html` and fills in the questionnaire.
2. The browser saves working answers locally on that device.
3. The client reviews the answers and may download a Markdown draft or print/save a PDF copy.
4. If the client submits the form, the browser sends their name, email, answers and consent timestamp to Supabase.
5. An authorised KF Biz administrator signs in at `admin/`.
6. The dashboard loads permitted submissions and the associated client-management records. The administrator can update follow-up details and save them to Supabase.

**Important distinction:** browser-local drafts are not a cloud account and do not automatically follow the user to another device. Users should download a copy before submitting if they want a personal backup. The current submission page says answers cannot be retrieved from that page after submission; the administrator can review stored submissions through the protected dashboard.

## 4. Supabase database and security

The current project uses the Supabase project configured in the application. Its main tables are:

- `public.business_plan_submissions`: submitted contact details, JSON answers, submission timestamp, consent timestamp and source.
- `public.kfbiz_dashboard_admins`: allowlist of administrator Auth user IDs.
- `public.business_plan_client_management`: internal workflow details associated with each submission.

RLS is enabled for the protected data. The browser should use only the Supabase publishable key. Do not expose secret keys, bypass RLS, or grant anonymous read access to submissions or internal notes.

### Critical SQL warning

**Do not rerun `supabase-setup.sql` against the live project as-is.** It was written as the initial submission-table setup. Its broad privilege revocation for the `authenticated` role can remove permissions the current authenticated dashboard depends on, and the file does not fully describe the administrator and client-management tables or all current policies.

For future database changes:
1. Inspect the current live schema and RLS policies first.
2. Create a separate, versioned migration for the specific change.
3. Avoid broad permission revocations unless their impact is understood and all required grants are restored.
4. Test with a dummy submission and verify that an anonymous visitor, a signed-in non-admin and an authorised admin each have only the intended access.
5. Keep a record of the migration and update this README when the schema changes.

The dashboard uses an administrator allowlist as an additional check, but this should be reviewed together with the database policies. Use a strong, unique administrator password and enable MFA and leaked-password protection where available. Never use real client information for testing.

## 5. Privacy and client information

Submissions may contain personal contact information and commercially sensitive business details. Before collecting real client data, ensure the privacy notice at https://kfbiz.github.io/privacy.html accurately covers this specific service, including:
- what questionnaire and contact data are collected;
- why the data are used and the applicable lawful basis;
- Supabase and other relevant service providers;
- who can access submissions and internal notes;
- retention and deletion procedures, including how a client can make a request;
- relevant data-subject rights and contact details.

The current questionnaire links to that privacy page. **Verify and update the notice before treating it as complete for the Business Plan Creator**; a general website-contact-form notice may not cover questionnaire answers stored in Supabase. Collect only information needed for the service, keep internal notes professional and relevant, and sign out of the dashboard on shared devices.

The anonymous insert policy alone does not provide client-only access, robust abuse prevention or server-side validation. Before wider use, consider a server-side submission endpoint (such as a Supabase Edge Function) with input validation, rate limiting and bot/abuse controls, as well as a server-verified client invitation or access mechanism.

## 6. Business-plan scope and output limitations

This repository is for business planning and qualitative analysis. It is not the official Job Market Finland service, does not determine Starttiraha eligibility and does not guarantee a grant or loan. The generated file is a **working draft**, not a verified application or a complete professional business plan.

The current export primarily organises questionnaire answers. A key quality improvement is to turn those answers into a coherent, editable business-plan document with sections such as:
- Executive summary and business concept
- Founder background and readiness
- Products/services and customer value
- Customers, market, competitors and supporting evidence
- Marketing, sales and customer acquisition
- Operations, compliance and responsibilities
- Risks, mitigation and implementation roadmap
- Assumptions, unanswered questions and items to verify

The tool should not invent facts, market evidence, eligibility conclusions or financial figures. It should clearly distinguish user-provided information from assumptions and missing information.

### Financial calculations are out of scope

Keep financial calculation logic in a separate KF Biz tool. Do not add calculation features here for:
- sales or revenue forecasts;
- start-up or operating cost totals;
- profit and loss or profitability projections;
- cash-flow or break-even calculations;
- loan repayment or debt-service capacity.

The business plan may describe a funding purpose and refer to separately prepared financial documents, but it must not invent or calculate financial figures.

## 7. How to run and publish

### Run locally
1. Download or clone the repository.
2. Keep `interactive.html` and `app.js` together in the same folder.
3. Open `interactive.html` in a modern browser.
4. Test the questionnaire, conditional sections, review screen and exports.

Supabase submission and dashboard functions require the configured project and appropriate browser connectivity. Do not use real client data while testing.

### Publish through GitHub Pages
The site is a static HTML/CSS/JavaScript project; there is no build command. Publish the repository through GitHub Pages using the configured branch/folder. After changing JavaScript or CSS, update the relevant cache-busting query string (for example, the `app.js?v=...` value in `interactive.html`) when needed, then hard-refresh the browser to avoid an old cached version.

## 8. Recommended next steps

Prioritise work in this order so the existing working submission process is not unnecessarily broken:

1. **Access control and privacy:** implement server-verified client access/invitations, review RLS and dashboard permissions, and update the Business Plan Creator privacy notice.
2. **Safe database migrations:** replace reliance on the stale initial SQL script with versioned migrations and a written record of the live schema and policies.
3. **Submission reliability:** validate input server-side, add abuse prevention, and test anonymous, non-admin and admin access separately.
4. **Questionnaire maintainability:** move question IDs, full labels, conditions and section metadata into one shared schema so the questionnaire and dashboard cannot drift apart.
5. **Higher-quality output:** create a structured, editable business-plan narrative while preserving Markdown and PDF export.
6. **Client workflow:** separate lead status, paid-client conversion date and service-delivery status. A completed service should not automatically be treated as the date a prospect became a paying client. Add quotation outcomes and lost reasons where useful.
7. **Dashboard and analytics:** add a clear next-action queue, overdue follow-ups, demand by industry/service, conversion tracking and revenue summaries only after the underlying data model is reliable.
8. **Acceptance testing:** verify a full dummy submission, correct question-and-answer display, saved management fields after refresh, export behaviour, sign-out, and denial of protected reads to unauthorised users.

## 9. Release checklist

Before collecting real submissions after a meaningful change, verify:

- [ ] Only the Interactive Business Plan Creator is presented as the questionnaire.
- [ ] Required-field validation, conditional questions, review, Markdown export and PDF printing still work.
- [ ] Consent and the privacy link are visible and the notice covers Supabase submissions.
- [ ] A dummy submission is saved with the expected contact fields, answers and consent timestamp.
- [ ] An anonymous visitor cannot read or alter submitted records.
- [ ] A signed-in non-admin cannot read submissions or internal management data.
- [ ] An authorised administrator can view submissions and save client-management fields.
- [ ] Signing out blocks access to dashboard data.
- [ ] No secret/service-role key appears in frontend files.
- [ ] Client access restrictions are tested if the tool is being offered as an exclusive paid service.
- [ ] The generated plan makes no unsupported claims and does not perform financial calculations.

---

Maintained by **KF Biz**, Turku, Finland. Update this README whenever the live workflow, database schema, security policies or client-facing behaviour changes.
