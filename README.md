# eduardteodor.co.uk
This is the repository for [eduardteodor.co.uk](https://eduardteodor.co.uk). The purpose of the site is to display information about me and my portfolio.

This is a part of a bigger collection of repositories that builds my personal ecosystem.
- [eduardteodor-web](https://github.com/EEEDWARD1/eduardteodor-web) ← you are here!
- [eduardteodor-api](https://github.com/EEEDWARD1/eduardteodor-api)
- [eduardteodor-cms](https://github.com/EEEDWARD1/eduardteodor-cms)

The backend contract, current content architecture, and build-time integration plan are recorded in [API integration notes](docs/api-integration.md).

## Current Pages
Currently implemented:
- **[Home-page](https://eduardteodor.co.uk):** The page you land on when you open the site.
- **[404-page](https://eduardteodor.co.uk/404):** The redirect page when the actual route doesn't exist.
- **Projects & Thoughts:** API-backed listings and statically generated Markdown detail pages.

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
Pull requests targeting `main` run the lint and build checks. When a pull request is merged into `main`, the site is deployed to Cloudflare Workers at [eduardteodor.co.uk](https://eduardteodor.co.uk).

The deployment uses the `production` GitHub environment, which must contain the `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets.

After updating posts in the backend, open **Actions → Build and deploy website → Run workflow**, select **main**, and click **Run workflow**. This runs lint, builds the site with the latest API content, and deploys it to Cloudflare. Manual runs from other branches build the site without deploying. The workflow change must be merged into the default branch before the manual trigger appears.

## Project structure
```text
app/
  components/       Shared page components
  data/             Posts API reader and social links
  projects/         Projects page
  thoughts/         Thoughts page
  globals.css       Site-wide styles
  layout.tsx        Shared site layout
  not-found.tsx     Custom 404 page
  page.tsx          Home page
```

## Content API

The homepage, project/thought listings, and detail pages fetch posts during the static build. The default API is `https://api.eduardteodor.co.uk`; to use a local backend, set `API_BASE_URL=http://localhost:5163` in `.env.local`. No API key is required.

Post content is rendered as Markdown; raw HTML is ignored. Listing titles open `/projects/[slug]` or `/thoughts/[slug]`. An optional external `href` appears separately on the detail page.

Builds fail if the API cannot be reached or returns invalid data, so a failed build does not deploy empty replacement content. An empty API collection is valid. Published content changes require a rebuild and redeploy; the workflow runs for frontend pull requests and pushes to main, or manually from the Actions tab.
