import type { Metadata } from "next";
import ExternalLinkIcon from "@/app/components/icons/ExternalLinkIcon";
import { socialLinks } from "@/app/data/social-links";
import CopyEmailButton from "@/app/components/CopyEmailButton";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Eduard Teodor about career opportunities, freelance projects and collaboration.",
};

const descriptions: Record<string, string> = {
  GitHub: "Explore my projects and code",
  LinkedIn: "Connect with me professionally",
};

export default function ContactsPage() {
  const email = socialLinks.find((link) => link.label === "Email");
  const profiles = socialLinks.filter((link) => link.label !== "Email");

  return (
    <section
      aria-labelledby="contact-heading"
      className="mt-4 grid min-w-0 items-start gap-8 md:mt-8 lg:grid-cols-2 lg:gap-12"
    >
      {/* Heading */}
      <div className="min-w-0">
        <h1
          id="contact-heading"
          className="w-fit border-b-4 border-accent pb-2 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
        >
          Let&#39;s talk.
        </h1>

        <div className="mt-6 space-y-4 md:mt-8">
          <p className="text-xl leading-relaxed font-medium md:text-2xl">
            I&#39;m always happy to meet new people, hear about interesting
            opportunities or chat about something we&#39;re both curious about.
          </p>

          <p className="text-base leading-relaxed text-neutral-700 md:text-lg">
            The easiest way to reach me is by email or LinkedIn.
          </p>
        </div>
      </div>

      {/* Contact directory */}
      <div className="min-w-0 border border-neutral-300">
        <div className="border-b border-border px-4 py-3 text-lg font-bold md:px-6 md:text-xl">
          Get in touch
        </div>

        <ul className="divide-y divide-border">
          {/* Email */}
          {email && (
            <li className="flex min-w-0 items-stretch">
              <a
                href={email.href}
                className="group flex min-w-0 flex-1 flex-col justify-center gap-1 px-4 py-3 no-underline! transition-colors hover:bg-orange-50 md:px-6"
              >
                <span className="text-sm text-neutral-600">Email</span>
                <span className="break-words font-medium group-hover:text-accent">
                  {email.href.replace(/^mailto:/, "")}
                </span>
              </a>

              <CopyEmailButton email={email.href.replace(/^mailto:/, "")} />
            </li>
          )}

          {/* Other social profiles */}
          {profiles.map((profile) => (
            <li key={profile.label}>
              <a
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-16 items-stretch no-underline! transition-colors hover:bg-orange-50"
              >
                <div className="flex min-w-0 flex-1 flex-col justify-center gap-1 px-4 py-3 md:px-6">
                  <span className="font-semibold group-hover:text-accent">
                    {profile.label}
                  </span>

                  <span className="text-sm text-neutral-600">
                    {descriptions[profile.label]}
                  </span>
                </div>

                <span className="flex w-16 shrink-0 items-center justify-center border-l border-border transition-colors group-hover:text-accent">
                  <ExternalLinkIcon />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
