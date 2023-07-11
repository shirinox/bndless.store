## What is bndless.store?

"bndless.store" is an app devloped for a solution to sell League Of Legends accounts. It uses common seen technologies such as Stripe Webhook integration for payments, Xata API for querying the database and Resend for email delivery of goods. The platform is built using Next.js 13 & Tailwind CSS, together with Typescript for a bug-free experience.

## Installation

First of all, clone this repository by using:

```bash
git clone https://github.com/shirinox/bndless.store.git
```

Before going forward, a little setup is needed in order for the app to be working correctly:

- Create a file named `.env` in the base directory

```bash
nano .env
```

- Paste the following configuration in the `.env` file:
  
```bash
XATA_BRANCH=main #if you changed your xata branch name this will differ
XATA_API_KEY=YOUR_XATA_KEY
STRIPE_SECRET=YOUR_STRIPE_SECRET
WEBHOOK_SECRET=STRIPE_WEBHOOK_SECRET
RESEND_SECRET=RESEND_SECRET_KEY
DISCORD_WEBHOOK=DISCORD_WEBHOOK
```

Complete the installation by pasting your keys into the required fields.

## Running in a development enviroment

For running in a development enviroment you will the follwing command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to access the local development app.


