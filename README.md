# Pixelnest — Website Studio

Multi-page, responsive HTML/CSS/JavaScript Pixelnest site with an original colorful **Care Club** section, a FAQ + WhatsApp call card, animated concept work reel, Vibhog family-business showcase, and three clearly labeled fictional portfolio demos.

**No Node.js packages or build step are required.** All assets are local. The navigation, FAQs, WhatsApp CTAs, carousel, and image gallery work with plain JavaScript.

## Folder structure

```
index.html           Home, Care Club, FAQ
services.html        Services
projects.html        Portfolio, Vibhog reference, concepts
process.html         How it works
plans.html           Pricing and maintenance details
team.html            About Pixelnest
policies.html        Privacy/terms (review before publishing)
assets/              CSS, JavaScript and illustrations
 demos/              Fictional sample sites
vercel.json          Static deployment configuration
```

## Preview locally

1. Download and extract the website ZIP.
2. Open `index.html` in Chrome, OR serve locally from the root with `python3 -m http.server 8000` then open `http://localhost:8000`.

## Upload to GitHub from your browser

1. Sign into https://github.com and choose **New repository**.
2. Name it something like `pixelnest-studio` and create the repository (don't initialize with a README if uploading via Git).
3. On the repository page use **Add file → Upload files**. Drag all extracted files and folders from this project root into GitHub (not the outer ZIP). Include `index.html`, `vercel.json`, `assets/`, and `demos/`.
4. Commit the changes. The uploaded repo should show `index.html` at its top level.

Alternative with Git CLI (run from the extracted project folder):

```bash
git init
git add .
git commit -m "Launch Pixelnest agency website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/pixelnest-studio.git
git push -u origin main
```

## Deploy to Vercel from GitHub

1. Go to https://vercel.com/new and choose **Import Git Repository**.
2. Connect your GitHub account and select `pixelnest-studio`.
3. **Framework Preset: Other**; **Root Directory: `./`**; **Build Command: empty / none**; **Output Directory: `.`**.
4. Click **Deploy**. `vercel.json` is already included in the project root.
5. Your Vercel preview URL should serve `index.html` at `/`, and separate pages at paths like `/projects.html`.
6. Once GitHub is linked, later pushed changes generally generate new Vercel deployments automatically.

If you are **replacing an existing Pixelnest Vercel site**, connect this GitHub repository under that project's **Settings → Git** instead of creating an unrelated production project. Check that the connected repo, branch and root directory are correct before publishing.

## Things to review before launching

- WhatsApp buttons point to `+91 95595 90705`. Replace those links if needed.
- Website prices are introductory examples: ₹3,999 one-time website / ₹1,499 optional monthly care.
- The intro-call button **opens WhatsApp to request a time**; there is no calendar booking integration.
- Vibhog is described as a real **family-business showcase**, not a paid commissioned Pixelnest project.
- Northstar Academy, Solace Botanicals and Forma Spaces are fictional concept demos.
- Technology row is **not a list of client logos or vendor endorsements**.
- Get permission before publishing third-party photos, trademarks, or case studies.
- Review and customize privacy and service terms before taking paying clients.
- Do not promise unlimited updates or guaranteed 48-hour project completion; maintenance is limited to the included scope.

## Website files ownership

All original Pixelnest HTML/CSS/JS and custom artwork included here can be modified for your studio. Any client-specific trademarks or screenshots remain subject to their respective owners.


## Razorpay Payments

`payments.html` has three merchant-supplied Razorpay Payment Buttons (₹5,000, ₹9,000, ₹15,000 project advances). Before going live, follow `PAYMENTS_SETUP.md` and check actual button amounts in Razorpay Dashboard. No API secret is used.


## Pricing clarity update
- `index.html`: A four-tier pricing preview and clearer FAQ (Lite Launch ₹3,999; Starter ₹9,999; Professional ₹17,999; Premium ₹29,999).
- `plans.html`: Full plan descriptions, feature matrix, deposit/balance example, and separate optional ₹1,499/month maintenance.
- `payments.html`: Explanation of why deposits are charged, how they reduce the total price, each package's remaining balance, and four Razorpay embeds. The Lite ₹3,999 offer is NOT one of those deposits.
- `assets/pricing-guide.css`: Responsive design for comparison sections.
- All posted amounts are starting examples; final scope, amount and payment timings must be approved in writing.

## Updated payment-flow UX
Four monthly-care-page website package cards now include `Pay now` above `Discuss this plan`. The payments page is redesigned as a simple "Pick a plan that fits" redirect plus an interactive four-package checkout selector that can be changed at any time before starting payment. `assets/payment-flow.css` and `assets/payment-picker.js` are required. Do not remove these when uploading to GitHub.
Pixelnest website updated with Razorpay payments.
