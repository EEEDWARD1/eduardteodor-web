# dev.eduardteodor.co.uk
This is the repository for [dev.eduardteodor.co.uk](https://dev.eduardteodor.co.uk). The purpose of the site is to display information about me and my portfolio.

This is a part of a bigger collection of repositories that builds my personal ecosystem.
- [eduardteodor-web](https://github.com/EEEDWARD1/eduardteodor-web) ← you are here!
- [eduardteodor-api](https://github.com/EEEDWARD1/eduardteodor-api)
- [eduardteodor-cms](https://github.com/EEEDWARD1/eduardteodor-cms)

## Current Pages
Currently implemented:
- **[Home-page](https://dev.eduardteodor.co.uk):** The page you land on when you open the site.
- **[404-page](https://dev.eduardteodor.co.uk/404):** The redirect page when the actual route doesn't exist.
- **Projects & Thoughts route:** We have implemented the routes of projects and thoughts (currently placeholders).

## Getting Started
To run the site locally, install Node.js 24 and pnpm 12.11.2. Then install the dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

## Available Scripts
- `pnpm dev`: Starts the local development server.
- `pnpm lint`: Checks the project for lint errors.
- `pnpm build`: Builds the site and exports the static files to the `out/` directory.
- `pnpm exec wrangler deploy`: Deploys the static site to Cloudflare Workers. Run `pnpm build` first.

## Deployment
Pull requests targeting `main` run the lint and build checks. When a pull request is merged into `main`, the site is deployed to Cloudflare Workers at [dev.eduardteodor.co.uk](https://dev.eduardteodor.co.uk).

The deployment uses the `production` GitHub environment, which must contain the `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets.

## Project structure
```text
app/
  components/       Shared page components
  data/             Placeholder content for projects, thoughts, and social links
  projects/         Projects page
  thoughts/         Thoughts page
  globals.css       Site-wide styles
  layout.tsx        Shared site layout
  not-found.tsx     Custom 404 page
  page.tsx          Home page
```
