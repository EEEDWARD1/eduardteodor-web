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
        <h2>Optional Microsoft Clarity analytics</h2>
        <p>
          If you accept analytics, Microsoft Clarity collects information about
          your visit, including pages viewed, clicks, scrolling, browser and
          device information, and session recordings. I use this to understand
          how the site is used and improve its usability. The basis for this
          optional processing is your consent.
        </p>
        <p>
          Clarity is not loaded before you accept analytics. Rejecting analytics
          does not limit access to the site. Advertising storage consent is not
          granted by this site’s analytics choice. Clarity may use cookies such
          as <code>_clck</code> and <code>_clsk</code> to associate activity
          with a visitor or session where permitted by the consent settings.
        </p>
        <p>
          Microsoft receives the analytics information and may process it
          outside the UK. See the{" "}
          <a href="https://privacy.microsoft.com/privacystatement">
            Microsoft Privacy Statement
          </a>{" "}
          and
          <a href="https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-cookies">
            Clarity cookie documentation
          </a>{" "}
          for details about its processing, cookies, and international
          transfers.
        </p>
        <p>
          Microsoft’s published retention periods include 30 days for ordinary
          session playback and up to nine months for heatmaps and labelled or
          favourited sessions. See{" "}
          <a href="https://learn.microsoft.com/en-us/clarity/setup-and-installation/data-retention">
            Clarity’s retention documentation
          </a>{" "}
          for current details.
        </p>
        <h2>Your cookie choice</h2>
        <p>
          The site saves your analytics choice in your browser’s local storage
          under <code>analytics-consent-v1</code> for 180 days. This preference
          storage is used only to remember your decision. If browser storage is
          unavailable, your decision applies to the current page visit.
        </p>
        <p>
          Use Cookie settings in the footer to accept or reject analytics at any
          time. Withdrawing consent clears this site’s Clarity cookies and
          reloads the page to stop the recorder. It does not undo processing
          that happened before withdrawal or remove cookies controlled by other
          domains.
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
