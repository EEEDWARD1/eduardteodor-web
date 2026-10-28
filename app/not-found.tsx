import Link from "next/link";

export default function NotFound() {
    return (
        <main className="py-20">
            <section className="border border-neutral-300 bg-white p-8" aria-labelledby="not-found-heading">
                <h1 id="not-found-heading" className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
                    oops.
                </h1>
                <p className=" font-bold uppercase tracking-widest text-[#FE5F55] mt-4">404 - Not found</p>
                <p className="mt-4 leading-relaxed text-neutral-700">
                    The page you’re looking for doesn’t exist or may have moved.
                </p>
                <p className="mt-6">
                    <Link href="/">Back to home</Link>
                </p>
            </section>
        </main>
    );
}
