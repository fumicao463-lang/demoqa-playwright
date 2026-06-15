# demoqa-playwright

Playwright automation for [https://demoqa.com/text-box](https://demoqa.com/text-box).

## Project Structure

```
demoqa-playwright/
├── config/
│   ├── env.ts          # Environment variables
│   └── paths.ts        # Project paths
├── pages/
│   ├── basePage.ts     # Base class for all page objects
│   ├── urls.ts         # URL constants
│   └── textbox/
│       └── textBoxPage.ts  # Text Box page object + locators
├── tests/
│   └── textbox.spec.ts # Test cases
├── .env.example        # Environment variable template
├── playwright.config.ts
└── tsconfig.json
```

## Setup

```bash
npm install
npx playwright install chromium
cp .env.example .env
```

## Run Tests

```bash
npm test
npm run test:headed
npm run report
```

## Test Cases

| ID   | Description |
|------|-------------|
| TC01 | Submit all fields and verify output |
| TC02 | Fill Full Name |
| TC03 | Fill Email |
| TC04 | Fill Current Address |
| TC05 | Fill Permanent Address |
| TC06 | Submit with name + email only |
| TC07 | Invalid email triggers error state |
