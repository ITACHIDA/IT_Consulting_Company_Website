# TechAlpha Solutions Website

Next.js (App Router) + Tailwind CSS marketing site for the TechAlpha Solutions white-label engineering collective.

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. Key sections live in `src/app/page.tsx`; global styles live in `src/app/globals.css`.

### Contact form email delivery
Add a `.env.local` file in `web/` with your SMTP and destination email so the `/api/contact` route can send messages directly to your inbox:

```
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=587
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
SMTP_FROM="TechAlpha Contact <no-reply@yourdomain.com>" # optional
CONTACT_TO=james.wang@techalphasolutions.com
```

Example for webmail.dynu.com:  
```
SMTP_HOST=mail.dynu.com
SMTP_PORT=587
SMTP_USER=james.wang@techalphasolutions.com
SMTP_PASS=your_dynu_mail_password
CONTACT_TO=james.wang@techalphasolutions.com
```

## Sections
- Hero + CTA for booking
- Services, process, pricing, and about
- Contact CTA with james.wang@techalphasolutions.com

## Contact
james.wang@techalphasolutions.com
