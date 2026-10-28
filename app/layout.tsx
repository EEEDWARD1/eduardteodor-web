import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://eduardteodor.co.uk"),

  title: {
    default: "Eduard Teodor | Software, Data & Technology",
    template: "%s | Eduard Teodor",
  },

  description:
      "Eduard Teodor is a London-based First-Class Honours Computer Science graduate working across software engineering, data analysis, automation and freelance development.",

  applicationName: "Eduard Teodor",

  openGraph: {
    title: "Eduard Teodor | Software, Data & Technology",
    description:
        "Explore the projects, technical work and thoughts of Eduard Teodor, a London-based First-Class Honours Computer Science graduate.",
    url: "https://eduardteodor.co.uk",
    siteName: "Eduard Teodor",
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Eduard Teodor | Software, Data & Technology",
    description:
        "Software engineering, data analysis, automation and freelance development.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body className={`${inter.className} mx-auto flex min-h-screen w-full max-w-4xl flex-col bg-[#fffdf8] p-4 text-slate-900 sm:p-0`}>
        <Nav />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
