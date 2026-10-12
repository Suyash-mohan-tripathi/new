# Pixelnest Razorpay payment buttons

This static website includes four Razorpay-hosted Payment Buttons on `payments.html`:

| Amount label | Razorpay button ID |
| --- | --- |
| ₹3,999 Lite full payment | `pl_Tn7U5yacFlssc5` |
| ₹5,000 advance | `pl_Tn7fleSaTDzVm7` |
| ₹9,000 advance | `pl_Tn7h0XvSsO8zpV` |
| ₹15,000 advance | `pl_Tn7hpdcOqFYY5T` |

These were supplied by the business owner. Their actual configured amounts, activation status and account ownership must be checked **inside Razorpay Dashboard**, since the display labels on the site cannot enforce payment amounts.

## Before publishing

1. Confirm all four buttons are **Live** and the amounts, currency (INR), merchant account name, receipt notifications and redirect behavior are correct.
2. **Confirm pricing:** current public site still lists a ₹3,999 one-page starter website. ₹3,999 is a separate **full payment for Lite Launch** after written quote approval; the ₹5,000 / ₹9,000 / ₹15,000 buttons are advances for higher-tier approved quotations. Update public package prices separately if desired.
3. Open `payments.html` on mobile and desktop over HTTPS and confirm **all 4 buttons render**. Some browser blockers can hide embedded third-party buttons.
4. Click each button to inspect the checkout **without completing a live payment**, and confirm the displayed amount and the merchant name. Do not run an actual charge merely to test layout.
5. Agree in writing with the customer on scope, price, deposit, remaining balance, refund/cancellation handling and deliverables, then direct them to the correct button. For unusual deposit values use an individually issued Razorpay Payment Link.
6. Check Razorpay Dashboard for a successful **captured** payment before beginning work. Never treat frontend notifications or a screenshot as conclusive proof.
7. Check `policies.html` against actual business operations and applicable law. This is website copy, not legal advice.

This site never embeds a Razorpay key secret or stores sensitive card information. It contains **public payment-button IDs only**. Razorpay handles the actual checkout. The CSS makes room for Razorpay-generated buttons but **does not determine checkout prices**.

## GitHub + Vercel

Upload all files including `payments.html` and `assets/payments.css` to the root of your GitHub repository. If the repository is connected to Vercel, updating `main` may trigger automatic deployment. Verify the hosting plan permits commercial use.


## Price-to-deposit examples
| Package | Published starting fee | Razorpay advance | Remaining balance |
| --- | ---: | ---: | ---: |
| Lite Launch | ₹3,999 | Individually quoted, ₹3,999 (full amount, no balance) | ₹0 |
| Starter | ₹9,999 | ₹5,000 | ₹4,999 |
| Professional | ₹17,999 | ₹9,000 | ₹8,999 |
| Premium | ₹29,999 | ₹15,000 | ₹14,999 |

These are illustrative only. Check that every Razorpay live button is configured for the correct amount, account and currency before deployment. A payment button does not automatically know which package the client purchased, so reconcile payments against written quotations and invoice references.

## Navigation and plan switching
- `plans.html#website-plans`: four packages, Pay Now above Discuss this plan.
- Each Pay Now link opens `payments.html?plan=NAME#checkout`, showing the chosen plan.
- `payments.html` now includes an invitation to compare plans and a selector to switch Lite / Starter / Professional / Premium freely before opening Razorpay.
- The ₹3,999 code originally provided by the merchant is used for a **full Lite payment**, not a deposit; verify the live button in Razorpay.
- The checkout uses third-party scripts; test each of the four panels in a real browser and inspect merchant name, currency and amount before accepting payments.
