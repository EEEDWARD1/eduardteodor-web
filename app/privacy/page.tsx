import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How this portfolio handles contact information, optional analytics, and cookie preferences.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto mt-4 mb-8 max-w-3xl md:mt-8">
      <h1 className="w-fit border-b-4 border-accent pb-2 text-4xl font-bold tracking-tight sm:text-5xl">
        Privacy policy
      </h1>
      <p className="mt-4 text-sm text-neutral-600">
        Last updated: 3 November 2026
      </p>
      <div className="post-content mt-8">
        <p>
          I’m Eduard Teodor, the owner of this portfolio. This page explains how
          information is handled when you visit eduardteodor.co.uk or contact
          me. For privacy questions, email{" "}
          <a href="mailto:ed@eduardteodor.co.uk">ed@eduardteodor.co.uk</a>.
        </p>
        <h2>Visiting the website</h2>
        <p>
          This site is hosted by Cloudflare. Delivering and protecting the site
          involves processing technical information such as your IP address,
          requested URL, browser information, and request time. This processing
          supports my legitimate interests in running a reliable, secure
          portfolio. See{" "}
          <a href="https://www.cloudflare.com/privacypolicy/">
            Cloudflare’s privacy policy
          </a>{" "}
          for information about its processing and retention.
        </p>
        <h2>Optional PostHog analytics</h2>
        <p>
          If you accept analytics, PostHog measures visits to this portfolio.
          This includes page URLs, campaign parameters such as UTM sources,
          referring websites, browser and device information, selected link
          clicks, successful contact-email copy actions, and technical errors.
          Requests to the analytics service also expose your IP address to the
          provider. I use this information to understand where visitors come
          from, improve the site, and diagnose problems. The basis for this
          optional processing is your consent.
        </p>
        <p>
          PostHog is not initialized before you accept analytics. Rejecting
          analytics does not limit access to the site. Session recording,
          general interaction autocapture, and surveys are disabled. The site
          does not identify visitors using names or email addresses, and copying
          the contact email does not send the copied text to PostHog.
        </p>
        <p>
          After consent, PostHog uses first-party cookies and browser storage to
          maintain a pseudonymous visitor identifier, session information, and
          campaign attribution. It also stores its capture preference. See{" "}
          <a href="https://posthog.com/docs/libraries/js/persistence">
            PostHog’s storage documentation
          </a>{" "}
          for details.
        </p>
        <p>
          Analytics is sent to PostHog’s EU-hosted service. PostHog receives and
          processes this information as the analytics provider. See the{" "}
          <a href="https://posthog.com/privacy">PostHog Privacy Policy</a> and{" "}
          <a href="https://posthog.com/docs/privacy">privacy documentation</a>{" "}
          for information about its processing and safeguards, including any
          international transfers.
        </p>
        <p>
          Analytics retention follows the PostHog project’s retention settings.
          See{" "}
          <a href="https://posthog.com/docs/settings/projects#events-retention">
            PostHog’s retention documentation
          </a>{" "}
          or contact me for information about data associated with a visit.
        </p>
        <h2>Your cookie choice</h2>
        <p>
          The site saves your analytics choice in your browser’s local storage
          under <code>analytics-consent-posthog-v1</code> for 180 days. This
          preference storage is used only to remember your decision. If browser
          storage is unavailable, your decision applies to the current page
          visit.
        </p>
        <p>
          Use Cookie settings in the footer to accept or reject analytics at any
          time. Withdrawing consent opts this browser out of PostHog, clears its
          analytics persistence, and reloads the page to unload analytics. It
          does not undo processing that happened before withdrawal or delete
          information already received by PostHog. Contact me with any related
          data request.
        </p>
        <h2>Contacting me</h2>
        <p>
          If you email me, I receive the details you include, such as your name,
          email address, and message. I use them to respond and manage the
          conversation, based on my legitimate interest in handling enquiries,
          or to take steps at your request before entering a contract. I keep
          correspondence for as long as needed for the enquiry, any resulting
          work, and applicable record-keeping obligations.
        </p>
        <h2>Your rights and other websites</h2>
        <p>
          Depending on the circumstances, you may have rights to access,
          correct, erase, restrict, or object to processing of your personal
          information, and to data portability. You can withdraw analytics
          consent at any time. Contact me using the email above to discuss a
          request. You can also complain to the{" "}
          <a href="https://ico.org.uk/make-a-complaint/">
            UK Information Commissioner’s Office
          </a>
          .
        </p>
        <p>
          Links to other sites, including GitHub and LinkedIn, take you to
          services with their own privacy policies. This policy may change as
          the site changes; the date above shows when it was last updated.
        </p>
      </div>
    </article>
  );
}
