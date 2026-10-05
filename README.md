# VIVIA Rentals Preview

A public-facing preview of the VIVIA Rentals operations flow for listings, applicant processing, leasing, and payment tracking.

This repository is intentionally informational and sanitized for public use. It highlights the operational experience without exposing private tenant, payment, or internal system data.

## Preview includes
- Property marketplace cards
- Leasing workflow stages
- Applicant and verification flow
- Payment and deposit status view
- Public/private data separation overview

## Open the preview locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## Files
- `index.html` — public landing page preview
- `style.css` — visual design
- `script.js` — minimal interactions

## Notes
The live product flow remains private and production-bound. This repository is designed to show the user-facing concept and workflow structure in a safe preview format.
