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
    slug: "CP Consultancy Services — Consultancy Website",
    title: "CP Consultancy Services — Consultancy Website",
    description:
      "Designed and developed a modern consultancy website that strengthens the company's online presence.",
    content: "lorem ipsum blah blah blah",
    href: "https://eduardteodor.co.uk/projects/cgu-construction",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", ".NET"],
  },
  {
    type: "thought",
    slug: "adding-analytics-to-my-site",
    title: "Adding analytics to my site",
    description:
      "Integrating Microsoft Clarity to understand visitor behaviour and improve my portfolio through real usage data.",
    content: "lorem ipsum blagh blah blah md file content woah crazy!",
    href: "https://eduardteodor.co.uk/thoughts/what-i-learned-from-adding-behaviour-analytics-to-my-personal-website",
    tags: ["Writing"],
  },
];
