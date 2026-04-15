# NixFelis

Static website for **NixFelis** — a software house and game development organization. Dark, hacker/cat-themed, professional.

- **100% static** — no backend, no server-side rendering
- **GitHub Pages ready** — builds to `/dist`, deploy to `gh-pages` or GitHub Actions
- **Vite + Vue 3** — fast dev and production builds
- **Tailwind CSS** — responsive, dark-mode-first styling
- **FontAwesome** — icons

---

## Project structure

```
nixfelis/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions: auto-deploy to GitHub Pages
├── public/
│   └── favicon.svg          # Site favicon (static asset)
├── src/
│   ├── assets/
│   │   └── main.css         # Tailwind + global styles
│   ├── components/
│   │   ├── AppNav.vue       # Top navigation (responsive, mobile menu)
│   │   └── AppFooter.vue    # Footer with links
│   ├── views/
│   │   ├── HomeView.vue     # Home: tagline, description, CTAs
│   │   ├── ProjectsView.vue # Projects: app/game cards (placeholder data)
│   │   ├── AboutView.vue    # About: mission, vision, values
│   │   ├── ContactView.vue  # Contact: email, GitHub org link
│   │   ├── PrivacyView.vue  # Legal: Privacy Policy
│   │   └── TermsView.vue    # Legal: Terms of Service
│   ├── router/
│   │   └── index.js         # Vue Router routes + meta titles (SEO)
│   ├── App.vue              # Root layout (nav + main + footer)
│   └── main.js              # Vue app + router + Tailwind + FontAwesome
├── index.html               # Entry HTML, meta tags, fonts
├── package.json
├── vite.config.js          # Vite config, base path for GitHub Pages
├── tailwind.config.js      # Tailwind theme (nix colors, animations)
├── postcss.config.js
├── .gitignore
└── README.md                # This file
```

**Build output:** `npm run build` writes everything to `dist/`. That folder is what you deploy (e.g. to GitHub Pages).

---

## Local development

```bash
npm install
npm run dev
```

Open **http://localhost:5173/**.

**Troubleshooting:** If you see *"Failed to resolve module specifier 'vue'"* or favicon 404s, you're loading the **source** without the dev server (e.g. opening `index.html` via `file://` or a plain static server). Use `npm run dev` and open the URL above, or run `npm run build` and serve the `dist/` folder. Opening `index.html` directly shows a short message explaining this.

Preview production build:

```bash
npm run build
npm run preview
```

Again, use the URL shown (e.g. http://localhost:4173/).

---

## Deploy to GitHub Pages

### Option A: GitHub Actions (recommended)

1. Push the repo to GitHub (e.g. `your-org/nixfelis` or `your-user/nixfelis`).
2. In the repo: **Settings → Pages**.
3. Under **Build and deployment**:
   - **Source:** choose **GitHub Actions** (not "Deploy from a branch").  
   If you use "Deploy from a branch", GitHub serves the raw repo (unbuilt source), so the site will show *"Failed to resolve module specifier vue"* — the built `dist/` must be deployed via the workflow.
4. Push to `main` (or run the workflow manually). The **Deploy to GitHub Pages** workflow will:
   - install deps, run `npm run build`, and deploy the `dist/` contents to GitHub Pages.

Site URL will be your GitHub Pages URL (e.g. `https://nixfelis.github.io/`).

**Custom domain (e.g. nixfelis.com):** In **Settings → Pages**, set **Custom domain** to your domain and follow GitHub’s DNS instructions. The build outputs `404.html` (a copy of `index.html`) so that direct visits or refreshes on routes like `/projects` or `/about` still serve the SPA instead of a 404 page.

### App Privacy URLs for Play Store

For app-store listings (for example Google Play), prefer a real static privacy page URL that returns HTTP 200 instead of an SPA route.

- Create each app privacy page at `public/legal/privacy/<app-slug>/index.html`
- Public URL pattern becomes: `https://nixfelis.com/legal/privacy/<app-slug>/`
- Example in this repo: `public/legal/privacy/quack-match/index.html`

This avoids deep-link SPA status-code issues on static hosting and gives a stable policy URL per app.

---

### Option B: Manual deploy (gh-pages branch)

1. Build locally:
   ```bash
   npm run build
   ```
2. Deploy the `dist/` folder to the `gh-pages` branch (e.g. with `ghpagen` or by copying `dist` contents into a branch that GitHub Pages uses).

Using a script with `gh-pages` (install once: `npm i -D gh-pages`):

**package.json** (add under `"scripts"`):

```json
"deploy": "npm run build && gh-pages -d dist"
```

Then:

```bash
npm run deploy
```

Ensure in **Settings → Pages** the source is the `gh-pages` branch (root or `/ (root)`). The site will be at your Pages URL (root or subpath depending on repo).

---

## Customization

- **Base path:** Site is at root by default (`base: '/'`). For a project Pages subpath, set `base: '/<repo-name>/'` in `vite.config.js`.
- **Contact:** Update email and GitHub link in `src/views/ContactView.vue`.
- **Projects:** Edit the `projects` array in `src/views/ProjectsView.vue`.
- **Legal:** Edit `src/views/PrivacyView.vue` and `src/views/TermsView.vue` and their “Last updated” dates.

---

## Tech stack

| Purpose        | Choice           |
|----------------|------------------|
| Build         | Vite 5           |
| Framework     | Vue 3            |
| Router        | Vue Router 4     |
| Styling       | Tailwind CSS 3   |
| Icons         | FontAwesome 6    |
| Hosting       | Static (e.g. GitHub Pages) |

No backend, no paid services, no external APIs — only static assets and optional Google Fonts (Inter, JetBrains Mono).
