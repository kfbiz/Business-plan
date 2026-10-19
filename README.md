# KF Biz Business Plan Creator

An industry-independent questionnaire for preparing a structured business plan for a new or existing business in Finland.

## Current version

The first version is a single-page HTML questionnaire. It runs in a modern browser and does not require a build system or external JavaScript libraries.

### Included

- Three main planning purposes: Starttiraha preparation, general new-business planning, and Finnvera/lender financing preparation.
- Shared questions for the business idea, entrepreneur profile, offer and customer value, target customers, market and competitors, marketing and sales, operations, compliance, risks, and launch roadmap.
- Additional questions appear for Starttiraha and lender-related purposes.
- Required-field checks and a simple completion indicator.
- Export answers as a Markdown business-plan draft.
- Print the questionnaire or use the browser's print dialog to save a copy as PDF.
- Responsive layout for desktop and mobile.

## Try it

Open `index.html` from the repository, or enable GitHub Pages for this repository to publish the questionnaire as a website.

## Scope boundary: financial calculations are separate

This repository is for **business planning and qualitative business analysis**. It must not implement financial calculations such as:

- Revenue or sales forecasts
- Startup or operating cost calculations
- Profitability or profit-and-loss projections
- Cash-flow forecasts or break-even calculations
- Loan repayment or debt-service capacity calculations

Those functions belong in a separate KF Biz financial tool. A business plan produced here may describe the purpose of funding and refer to separately prepared financial documents, but must not invent or calculate financial figures.

## Important limitations

- The generated document is a working draft, not a completed or verified application.
- Users should substantiate market claims, identify assumptions, and check current requirements with the relevant authority or lender.
- The tool does not determine Starttiraha eligibility or guarantee a grant or loan.
- For Starttiraha, applicants should verify current timing and eligibility requirements with the relevant authority before starting full-time business activity.
- Industry-specific permits, registration, insurance, safety, and other obligations must be checked for each business.
- The current version runs locally in the browser and does not send answers to a server. Users should download and store drafts securely. Do not enter sensitive personal information that is not needed for the plan.

## Planned improvements

1. Add a review screen so users can check answers before export.
2. Improve the generated document into a more polished, coherent narrative.
3. Add optional, industry-specific follow-up questions while keeping the core questionnaire reusable.
4. Add a structured export format for future integration with the separate financial tool, without moving financial calculation logic into this repository.
5. Add versioning and clear privacy/security information before collecting or storing customer answers online.

## Development

The initial version uses plain HTML, CSS, and JavaScript. No package installation is needed.
