import Link from "next/link";

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-heading"
      className="flex min-h-[60vh] flex-col items-start justify-center"
    >
      <h1
        id="not-found-heading"
        className="w-fit border-b-4 border-accent pb-2 text-6xl font-bold tracking-tight text-foreground md:text-8xl"
      >
        oops.
      </h1>

      <p className="mt-6 text-xl font-semibold md:text-2xl">
        404 — Page not found
      </p>

      <p className="mt-3 max-w-md text-base leading-relaxed text-neutral-700 md:text-lg">
        The page you’re looking for doesn’t exist or may have moved.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex items-center border border-border px-5 py-2.5 font-medium text-foreground no-underline! transition-colors hover:border-accent hover:bg-orange-50 hover:text-accent"
      >
        Back to home
        <span aria-hidden="true" className="ml-3">
          →
        </span>
      </Link>
    </section>
  );
}
