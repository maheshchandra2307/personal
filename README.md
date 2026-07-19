# AP Electricity Bill Calculator

Unofficial Andhra Pradesh electricity bill helper with APERC **FY 2026-27** LT tariff estimation and official DISCOM payment redirects.

## Features

- **Bill Calculator** for Domestic, Commercial, Industry, Agriculture, Institutional, and Temporary categories
- **Telescopic slab billing** with live slab preview
- **Meter reading mode** (From / To → units)
- **Time-of-Day (ToD)** splits for industrial categories
- **Agriculture free-quota** monthly estimate (1200 units/HP/year)
- **Tariff reference tabs** for Domestic, Commercial, Industry, Agriculture, Others, and Other Charges
- **Pay Bill page** with APEPDCL / APCPDCL / APSPDCL official redirects
- **Help chat FAQ bot** for DISCOM lookup, payment steps, and helplines
- Responsive layout with sticky result panel on desktop

## Tech Stack

- React 19 + Vite
- React Router
- Tailwind CSS
- Axios (shared client available)
- ESLint + Prettier
- React Icons

## Scripts

```bash
npm install
npm run dev
npm run build
npm run lint
npm run format
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Bill calculator + tariff tabs |
| `/pay` | DISCOM quick pay links + help chat |
| `/about` | About / disclaimer |

## Disclaimer

This project is independent and unofficial. It is **not affiliated with** APERC, APEPDCL, APCPDCL, APSPDCL, or the Government of Andhra Pradesh. Estimates may differ from actual bills. Payments happen only on official DISCOM / BillDesk sites.
