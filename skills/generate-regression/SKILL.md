---
name: generate-localhost-regression
description: Generate a Playwright regression test from a completed Localhost QA flow that is explicitly marked verified and reproducible. Use after a bug or user flow has been proven in a Localhost QA run.
---

# Generate Regression

Accept only a completed flow record with `verified: true`, `flakyChecked: true`, and reproducible steps. Refuse raw guesses, unverified flows, production credentials, CAPTCHA/MFA bypass, and payment completion.

Run `node scripts/generate/emit-playwright.mjs --flow-json <json> --output <path>`. Review the emitted selectors and assertions, keep the target origin localhost-only by default, and tell the user where the generated `.spec.mjs` was written.
