# Deploying this repo

## What went wrong

The site in **`portfolio-next/`** is the **Next.js** portfolio. The root **`vercel.json`** used to run **`build.js`**, which only copies **`index.html`** and static files into **`dist/`**. That meant Vercel never built Next.js, so new changes (hero, reels, etc.) never appeared on the live URL.

## Current setup (fixed)

Root **`vercel.json`** now:

1. Installs dependencies inside **`portfolio-next/`**
2. Runs **`npm run build`** there (Next.js)

Redeploy after pulling this change (**Redeploy** in the Vercel dashboard, or push to `main`).

## If the build still fails on Vercel

1. Open the project on [vercel.com](https://vercel.com) → **Settings** → **General**.
2. Set **Root Directory** to **`portfolio-next`**.
3. Clear custom **Build Command** / **Install Command** in the dashboard (let `package.json` handle it), **or** remove the root **`vercel.json`** so only the subfolder settings apply.
4. Save and **Redeploy**.

## Large videos

Reel MP4s under **`portfolio-next/public/videos/`** are large. If uploads time out, compress the files or host them on a CDN and point `videoSrc` in **`lib/data.ts`** at those URLs.
