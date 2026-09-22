# Jelil Abdulqadir — Portfolio

A multi-page developer portfolio built with the Next.js App Router and Tailwind
CSS. Flat colours only (no gradients), no emoji — every icon is a real SVG — and
motion is limited to short, subtle colour and shadow transitions.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Intro, availability, featured work, services summary, current focus |
| `/about` | Background, quick facts, working principles |
| `/skills` | Grouped tooling with what each group is used for |
| `/projects` | Filterable project grid (All / Featured / Training / Earlier) |
| `/experience` | Timeline: training, project work, education |
| `/services` | Service cards plus the four-step delivery process |
| `/contact` | Email panel with copy button, channels, availability |

Also generated: `app/not-found.js` (404), `app/sitemap.js`, `app/robots.js`,
and `app/icon.svg` (favicon).

## Structure

```
app/
  layout.js            root layout: fonts, metadata, JSON-LD, header + footer
  globals.css          design tokens (CSS variables) + shared component classes
  page.js              home            about/page.js      about
  skills/page.js       skills          projects/page.js   projects
  experience/page.js   experience      services/page.js   services
  contact/page.js      contact         not-found.js       404
  sitemap.js robots.js icon.svg
components/
  Header.js            sticky nav + CSS-driven theme toggle + mobile sheet
  Footer.js            site map and contact links
  ThemeToggle.js       theme switch (icon state handled in CSS, no mismatch)
  ThemeScript.js       applies the saved theme before first paint
  PageHeader.js        eyebrow + single h1 per page
  SectionHeading.js    in-page section headings with optional action
  Button.js            link / anchor / button variants
  ProjectCard.js       project card (optional screenshot support)
  ProjectsExplorer.js  project filter state
  CopyEmailButton.js   clipboard copy with confirmation
  icons.js             vendored Lucide-style SVG icon set (no dependency)
data/
  site.js              site URL, nav, contact details, socials, availability
  projects.js          project entries and filter categories
  skills.js            skill groups and core stack
  services.js          service cards and delivery process
  experience.js        timeline entries
```

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

# Editing content

- **Contact details, nav, socials, availability:** `data/site.js`
- **Projects:** `data/projects.js` — `categories` controls the filters, add
  `image: "/projects/name.png"` (file in `public/projects/`) to show a
  screenshot. Without one the card stays typographic, so nothing breaks.
- **Page copy:** the matching `app/<route>/page.js`
- **Colours:** the CSS variables at the top of `app/globals.css`. The whole site
  uses one accent — change `--accent`, `--accent-strong`, and `--accent-soft` in
  both `:root` and `.dark` to re-skin it.

## Before you deploy

1. Set `NEXT_PUBLIC_SITE_URL` to the real domain in your host's environment
   variables. It is what `data/site.js` uses for canonical URLs, the sitemap,
   and Open Graph tags. Until it is set, a placeholder domain is used.
2. Check `availability` in `data/site.js` says what you want it to say.
3. Add a link-preview image: save a 1200x630 PNG to `public/og.png` and it is
   used automatically for WhatsApp, LinkedIn, X, and Slack previews. (It is
   detected at build time, so rebuild after adding it.)
4. Optionally add project screenshots (see above) — they are the single biggest
   improvement you can make to the projects page.

## Known environment gotcha: a space in the folder name

`@vercel/og` (the engine behind Next's generated `opengraph-image` routes)
resolves its bundled font through `fileURLToPath`, which throws
`ERR_INVALID_URL` when the project path contains a space. This is why the social
card here is a plain file in `public/og.png` rather than a generated route.

If you ever want generated OG images, rename the project folder so it has no
space — for example `portfolio Next` to `portfolio-next` — then the standard
`app/opengraph-image.js` convention will work. Spaces in project paths cause a
number of small tooling problems on Windows, so the rename is worth doing
regardless.

## Deploying

Standard Next.js app, so it deploys straight to Vercel: push the repository and
import it on vercel.com. Any host that runs Next.js (Netlify, Render, a Node
server) works too.
