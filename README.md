# Roldan Ortiz Molinares — Portfolio website

An original, responsive engineering portfolio built with **Astro**, hosted at `https://roldanwilfrido.github.io` once published.

**This repository is separate from:**
- `roldanwilfrido/roldanwilfrido` (GitHub profile README)
- `rholdanx/SanidApp` (SanidApp, other GitHub account)

## What is included

- An editorial two-column layout inspired by traditional developer portfolios (not a copy of Hydejack).
- Home, Projects, Writing, Experience and Contact pages.
- Honest project statuses: SanidApp is an active independent rebuild with private source; Job Tracker is in planning; Webhook Inbox is on the roadmap.
- Two original engineering learning notes, including code examples.
- Accessible navigation, responsive layout, light/dark toggle, page metadata, and a 404 page.
- No analytics, advertising, or third-party form processing.
- Automated GitHub Pages deployment workflow.

## Run locally

Prerequisite: **Node.js 22.12+** and npm. On your Mac:

```bash
cd "/Volumes/ExternalSSD/01-Development/roldanwilfrido.github.io"
npm install
npm run dev
```

Open the local URL printed by Astro (usually `http://localhost:4321`).

## Build and check

```bash
npm run build
npm run check:links
npm run preview
```

`npm install` generates `package-lock.json`; commit it before publishing to GitHub.

## Publish to GitHub Pages

1. Sign in as **`roldanwilfrido`** and create a **public** repository named **`roldanwilfrido.github.io`**. **Do not** create another `roldanwilfrido` repository—your profile README already lives there. Leave README initialization off for the new site repo.
2. Place these files in your local folder `/Volumes/ExternalSSD/01-Development/roldanwilfrido.github.io`.
3. Verify the local build succeeds (`npm install && npm run build && npm run check:links`).
4. Set this repository's *local* commit identity to the professional GitHub account:

```bash
git init -b main
git config --local user.name "Roldan Ortiz Molinares"
git config --local user.email "YOUR_PORTFOLIO_ACCOUNT_VERIFIED_EMAIL_OR_NOREPLY"
git add .
git commit -m "feat: add Astro engineering portfolio"
git remote add origin git@github-portfolio:roldanwilfrido/roldanwilfrido.github.io.git
git push -u origin main
```

5. In the new repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
6. Open **Actions** and verify **Publish portfolio** finished successfully.
7. Open `https://roldanwilfrido.github.io` after deployment. GitHub Pages propagation may take a little time.

The workflow uses the maintained official Astro Pages action. See [Astro's deployment guide](https://docs.astro.build/en/guides/deploy/github/) and [GitHub Pages documentation](https://docs.github.com/en/pages/quickstart).

## Update information

- `src/data/site.ts`: name, contact, history, projects, and writing list.
- `src/pages/index.astro`: home sections.
- `src/pages/experience.astro`: experience presentation.
- `src/pages/projects/`: project detail pages, including the SanidApp personal-project case study.
- `src/pages/writing/`: technical notes.
- `src/styles/global.css`: visual design and responsive behavior.

**Before publishing:** review public contact details, career descriptions and project statuses. Please don't publish proprietary work, employer code, personal phone numbers, or details you don't want searchable.

## Development notes

- This project was assembled offline; the Astro package couldn't be installed or executed in the creation environment. The included files were structurally inspected, and a separate browser-rendered layout preview was created. **Run the commands above to validate the Astro build before publishing.**
- Typography uses system font fallbacks without requesting remote font files.
- The site is generated statically; the theme preference uses local storage in the browser.

## Future updates

- Add live GitHub links, demos and screenshots **after** the public open-source MVPs exist. SanidApp remains a private-source personal project.
- Add a public résumé PDF after choosing which personal contact details should be visible.
- Add a custom domain only if useful; the GitHub Pages URL is sufficient to start.
