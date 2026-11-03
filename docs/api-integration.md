# Posts API

The site gets projects and thoughts from `https://api.eduardteodor.co.uk` when it builds. No API key is needed.

For local development, set this in `.env.local`:

```env
API_BASE_URL=http://localhost:5163
```

## Endpoints

`GET /v1/posts` returns all posts, including their content. You can filter by type and tag:

```text
/v1/posts?postType=Project
/v1/posts?postType=Thought&tag=dotnet
```

`postType` also accepts `0` for projects and `1` for thoughts. Invalid types return 400. Tags match exactly, with surrounding query whitespace trimmed. Both filters can be used together.

Posts are sorted by ID, and tags are sorted by name. There is no pagination or search. No matches returns an empty array.

`GET /v1/posts/{slug}` returns one post, or 404 if it doesn't exist. The site doesn't need this endpoint because the list already includes the full content.

## Post format

```ts
interface Post {
  id: string;
  postType: 0 | 1; // 0 = Project, 1 = Thought
  slug: string;
  title: string;
  description: string;
  image: string | null;
  content: string;
  href: string | null;
  tags: string[];
}
```

The site treats `content` as Markdown. The API stores and returns it without formatting it.

## How the site uses it

`app/data/posts.ts` fetches and validates the posts. These populate the homepage and the `/projects` and `/thoughts` listings.

Each title links to `/projects/{slug}` or `/thoughts/{slug}`. Next.js generates these pages during the build using `generateStaticParams`. Unknown paths return the static 404 page.

Detail pages render Markdown with `react-markdown`, with raw HTML disabled. If a post has an external `href`, it appears as a separate link. The post's title, description, slug, and optional image also supply its page metadata and social cards.

An empty collection shows a “no posts published yet” message. API failures, invalid responses, and duplicate routes stop the build so they don't get deployed as missing content.

## Building and deploying

`pnpm build` exports the site to `out/`. GitHub Actions runs lint and build checks for pull requests, then deploys to Cloudflare when changes reach `main`.

The API must be reachable during the build. Visitors read the generated pages, so browser CORS settings aren't needed for this integration. Images still load from their original host.

Adding, editing, or deleting a post requires a rebuild and redeploy. CMS changes don't trigger this automatically yet.
