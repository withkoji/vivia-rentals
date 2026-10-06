# VIVIA Rentals Public Preview

[![Netlify Status](https://api.netlify.com/api/v1/badges/9207acdc-efc0-4b6e-9a93-576ec4b3622d/deploy-status)](https://app.netlify.com/projects/withkoji/deploys)

**Active deployment:** [Open the VIVIA Rentals Netlify deployment dashboard](https://app.netlify.com/projects/withkoji/deploys)

This repository is the public preview and deployment surface for VIVIA Rentals. It provides safe public navigation to the live VIVIA applications while keeping production data, credentials, payment secrets, and private operational code out of the public repository.

## Live applications

- Property Listings: https://viviarentalhomes.zite.so
- Payment Portal: https://pay-now.zite.so
- VIVIA Wallet: https://vv-wallet.zite.so
- Employee Portal: internal access through the VIVIA Zite workspace

## Connected services

The VIVIA workspace currently uses Stripe, HubSpot, Fillout, Gmail/email, Slack, OpenAI, Google Analytics, and GitHub. Additional partners such as Square, Zillow, Zumper, TurboTenant, and Make.com should only be connected when supported accounts or credentials are available.

## Local preview

```bash
npm install
npm run dev
```

The Vite preview runs locally on port 3000.

## Production build

```bash
npm run build
```

The generated site is written to `dist/` and is suitable for Netlify deployment.

## Security

Do not commit API keys, Stripe secrets, webhook secrets, database credentials, or private customer/tenant data to this repository. Production integrations remain managed in the VIVIA Zite workspace.
