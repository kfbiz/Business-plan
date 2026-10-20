# KF Biz Interactive Business Plan Creator

An industry-independent, step-by-step business planning tool for new and existing businesses in Finland. This repository maintains **one questionnaire experience only**: the Interactive Business Plan Creator.

## Open the tool

- [Open the Interactive Business Plan Creator](./interactive.html)
- [Application logic](./app.js)

When GitHub Pages is enabled, the repository homepage redirects to `interactive.html`. The tool uses plain HTML, CSS and JavaScript and requires no build system or external libraries.

## Features

- Step-by-step sections with Back and Continue navigation.
- Questions informed by the topics in the Job Market Finland business-plan document supplied for this project.
- Conditional Starttiraha and Finnvera/lender prompts, plus employer-planning questions when relevant.
- Multiple-choice checklists for skills, marketing channels, sales channels and risks.
- Required-field checks and a progress indicator.
- Local browser saving so the user can close and continue on the same browser/device.
- Review screen before export.
- Download a Markdown business-plan draft or print/save using the browser's PDF function.
- Responsive layout for desktop and mobile.

## How to run

1. Open the published GitHub Pages site, or download the repository.
2. Keep `interactive.html` and `app.js` in the same folder.
3. Open `interactive.html` in a modern browser.
4. Choose the purpose and work through the sections. Review your answers before exporting.

## Privacy and storage

The tool runs in the user's browser and does not send answers to a KF Biz server. It saves progress in the browser's local storage on that device. This means progress may not follow the user to another browser or device, and clearing browser data may remove it. Avoid entering unnecessary sensitive personal information. Download the draft to keep a separate copy.

**Important:** GitHub Pages is public hosting. Keeping the link off your marketing pages does not restrict access or make the tool password-protected. Do not use the public URL as a security control for confidential client information.

## Scope boundary: financial calculations are separate

This repository is for **business planning and qualitative business analysis**. It must not implement financial calculations such as:
- Revenue or sales forecasts
- Startup or operating cost calculations
- Profitability or profit-and-loss projections
- Cash-flow forecasts or break-even calculations
- Loan repayment or debt-service capacity calculations

Those functions belong in a separate KF Biz financial tool. The business plan may describe the purpose of funding and refer to separately prepared financial documents, but must not invent or calculate financial figures.

## Important limitations

- This is an independent KF Biz tool informed by the topic structure of the supplied Job Market Finland material. It is not the official government service and does not replace it.
- The generated document is a working draft, not a completed or verified application.
- Users should substantiate market claims, identify assumptions, and check current requirements with the relevant authority or lender.
- The tool does not determine Starttiraha eligibility or guarantee a grant or loan.
- For Starttiraha, applicants should verify current timing and eligibility requirements with the relevant authority before starting full-time business activity.
- Industry-specific permits, registration, insurance, safety and other obligations must be checked for each business.

## Planned improvements

1. Test the questionnaire with sample business types and improve the generated business-plan narrative.
2. Add a structured export format for future integration with the separate financial tool, without moving financial calculation logic into this repository.
3. Consider a downloadable backup/import feature for users who want to move saved answers between devices.
4. Add industry-specific follow-up questions while keeping the core questionnaire reusable.

## Development

The tool uses plain HTML, CSS and JavaScript. No package installation is required.
