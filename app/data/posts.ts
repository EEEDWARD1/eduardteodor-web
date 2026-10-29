export type Posts = {
  type: "project" | "thought";
  slug: string;
  title: string;
  description: string;
  content: string;
  href: string | null;
  tags: readonly string[];
};

export const posts: readonly Posts[] = [
  {
    type: "project",
    slug: "eduardteodor-co-uk",
    title: "eduardteodor.co.uk",
    description: "This site, built with Next.js and TypeScript.",
    content: "lorem ipsum blagh blah blah md file content woah crazy!",
    href: "https://github.com/EEEDWARD1/EduardTeodor.co.uk",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    type: "project",
    slug: "applytrail",
    title: "applytrail.co.uk",
    description: "Application tracker built for myself!",
    content: "lorem ipsum blah blah blah",
    href: "https://applytrail.co.uk",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", ".NET"],
  },
  {
    type: "thought",
    slug: "lorem-ipsum",
    title: "Lorem ipsum",
    description: "A short preview of this thought.",
    content: "lorem ipsum blagh blah blah md file content woah crazy!",
    href: "",
    tags: ["Writing"],
  },
];
