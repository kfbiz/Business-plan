# KF Biz Business Plan Creator

An industry-independent questionnaire for preparing a structured business plan for a new or existing business in Finland.

## Main reference

The questionnaire is informed by the topic structure in the Job Market Finland business-plan document supplied for this project. See [QUESTIONNAIRE-GUIDE.md](./QUESTIONNAIRE-GUIDE.md) for the clear, grouped question list. This is an independent KF Biz tool, not the official Job Market Finland service, and it does not replace the official service.

## Current version

The first version is a single-page HTML questionnaire. It runs in a modern browser and does not require a build system or external JavaScript libraries.

### Included in the current HTML questionnaire

- Business idea, company name and form, motivation, and goals.
- Entrepreneur skills, preparation, missing competence, bookkeeping arrangements, and responsibility split.
- Products/services, customer value, pricing approach, competitive advantages, and intellectual-property considerations.
- Target customers, market area, competitors, partners, and market research gaps.
- Marketing channels, brand image, marketing review, sales channels, and sales process.
- Operations, Finnish permits/rules to verify, insurance considerations, and responsible business practices.
- Risk mapping, risk mitigation, and all four parts of SWOT.
- Entrepreneur working routine, personal livelihood approach, holidays, and wellbeing.
- Conditional employer-planning prompts.
- Future trends, customer development, product/service development, vision, and values.
- Additional questions for Starttiraha preparation and Finnvera/lender preparation.
- Required-field checks, completion indicator, Markdown draft export, and print/save as PDF.
- Responsive layout for desktop and mobile.

## Try it

Open index.html from the repository, or enable GitHub Pages for this repository to publish the questionnaire as a website.

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
- The current HTML version runs locally in the browser and does not send answers to a server. Users should download and store drafts securely. Do not enter sensitive personal information that is not needed for the plan.

## Planned improvements

1. Integrate the full reference-based question set from QUESTIONNAIRE-GUIDE.md into the interactive HTML questionnaire.
2. Add a review screen so users can check answers before export.
3. Improve the generated document into a more polished, coherent narrative.
4. Add optional, industry-specific follow-up questions while keeping the core questionnaire reusable.
5. Add versioning and clear privacy/security information before collecting or storing customer answers online.

## Development

The initial version uses plain HTML, CSS, and JavaScript. No package installation is needed.
