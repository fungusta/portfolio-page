# Deployment Notes

This is my quick reference for deploying changes to my portfolio site.

Live site: [https://www.peterjosephfung.com](https://www.peterjosephfung.com)
Repo: [https://github.com/fungusta/portfolio-page](https://github.com/fungusta/portfolio-page)
Main branch: `main`

## Normal Deploy Flow

1. Make my changes.
2. Run lint locally:

```bash
npm run lint
```

3. Commit and push my latest changes to `main`:

```bash
git add .
git commit -m "your commit message"
git push origin main
```

4. Deploy the site:

```bash
npm run deploy
```

## What `npm run deploy` Does

- Runs `npm run build`
- Exports the site
- Copies `public/CNAME` into the output folder
- Publishes the built site with `gh-pages`

## If The Site Preview Looks Old

- Hard refresh the browser
- Wait a minute for GitHub Pages / CDN cache to update
- If it is a LinkedIn preview issue, re-scrape the site with LinkedIn Post Inspector

## Useful Commands

Run locally:

```bash
npm run dev
```

Build without deploying:

```bash
npm run build
```
