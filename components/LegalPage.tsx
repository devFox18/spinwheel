import Link from "next/link";

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export function LegalPage({ eyebrow, title, summary, sections }: {
  eyebrow: string;
  title: string;
  summary: string;
  sections: LegalSection[];
}) {
  return (
    <main className="dot-grid">
      <header className="border-b-2 border-[#20201f]">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="inline-flex rounded-full border-2 border-[#20201f] bg-[#c8f36a] px-4 py-2 text-xs font-black uppercase tracking-[.18em] shadow-[3px_3px_0_#20201f]">{eyebrow}</p>
          <h1 className="mt-7 text-5xl font-black uppercase leading-[.9] tracking-[-.06em] sm:text-7xl">{title}</h1>
          <p className="mt-7 max-w-3xl text-lg font-bold leading-8 text-[#686861]">{summary}</p>
          <p className="mt-5 text-xs font-black uppercase tracking-[.16em] text-[#3657ff]">Last updated: 27 July 2026</p>
        </div>
      </header>
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[220px_1fr]">
        <aside>
          <div className="sticky top-6 rounded-2xl border-2 border-[#20201f] bg-white p-5 shadow-[4px_4px_0_#ff6b45]">
            <p className="text-xs font-black uppercase tracking-[.16em]">Legal menu</p>
            <nav className="mt-4 grid gap-3 text-sm font-bold">
              <Link href="/privacy" className="hover:text-[#3657ff]">Privacy policy</Link>
              <Link href="/terms" className="hover:text-[#3657ff]">Terms of use</Link>
              <Link href="/disclaimer" className="hover:text-[#3657ff]">Disclaimer</Link>
              <Link href="/cookie-policy" className="hover:text-[#3657ff]">Cookies & storage</Link>
            </nav>
          </div>
        </aside>
        <article className="space-y-5">
          {sections.map((section, index) => (
            <section key={section.title} className="rounded-2xl border-2 border-[#20201f] bg-white p-6 shadow-[4px_4px_0_#d8d1c3] sm:p-8">
              <p className="text-xs font-black text-[#3657ff]">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-2 text-2xl font-black uppercase tracking-[-.04em]">{section.title}</h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph} className="mt-4 leading-7 text-[#686861]">{paragraph}</p>)}
              {section.bullets && <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#686861]">{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
            </section>
          ))}
        </article>
      </div>
    </main>
  );
}

