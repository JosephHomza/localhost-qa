# Localhost QA

Evidence-backed QA for explicitly supplied localhost apps. It uses fresh Playwright browser contexts, captures console/network/basic accessibility/responsive evidence, stops at CAPTCHA/MFA/payment boundaries, and generates tests only from verified reproducible flows.

## Setup

On Windows PowerShell, use `npm.cmd install` and `npx.cmd playwright install chromium` (the `.cmd` form avoids `npm.ps1` execution-policy blocks). Browser binaries are downloaded by Playwright and are not included in this repository.

Run `node scripts/lib/preflight.mjs`, then `node scripts/qa/session.mjs --url http://localhost:5173`. Artifacts remain local. Non-local origins are denied unless the exact origin is explicitly authorized per session. Use fixture accounts only—never real credentials or payment data.

Tests: `npm.cmd run ci`. A live browser E2E may skip if Chromium is not installed.
