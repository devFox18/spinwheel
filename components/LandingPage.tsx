import { AdSlot } from "./AdSlot";
import { Wheel } from "./Wheel";

export type PageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  storageKey: string;
  initialEntries: string[];
  mode?: "wheel" | "teams";
  sections: { heading: string; body: string }[];
  faq: { q: string; a: string }[];
  path: string;
};

export function LandingPage({ content }: { content: PageContent }) {
  const titleWords = content.title.split(" ");
  const titleEnd = titleWords.pop();
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: content.title,
      url: `https://spinwheel.app${content.path}`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      description: content.intro,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: content.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  return (
    <main>
      <div className="dot-grid border-b-2 border-[#20201f]">
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-12 sm:px-6 sm:pt-16">
          <div className="mb-10 grid items-end gap-7 md:grid-cols-[1.25fr_.75fr]">
            <div>
              <p className="mb-4 inline-flex -rotate-1 rounded-full border-2 border-[#20201f] bg-[#c8f36a] px-4 py-2 text-xs font-black uppercase tracking-[.18em] shadow-[3px_3px_0_#20201f]">{content.eyebrow}</p>
              <h1 className="max-w-4xl text-5xl font-black uppercase leading-[.9] tracking-[-.065em] sm:text-7xl lg:text-[5.5rem]">
                {titleWords.join(" ")} <span className="text-[#3657ff]">{titleEnd}</span>
              </h1>
            </div>
            <div className="rounded-2xl border-2 border-[#20201f] bg-white p-5 shadow-[5px_5px_0_#ff6b45]">
              <p className="text-base font-bold leading-7 text-[#686861]">{content.intro}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-black uppercase tracking-wider">
                <span className="rounded-full bg-[#20201f] px-3 py-2 text-white">No signup</span>
                <span className="rounded-full bg-[#c8f36a] px-3 py-2">Saved locally</span>
              </div>
            </div>
          </div>
          <div className="grid gap-5 lg:grid-cols-[1fr_180px]">
            <Wheel storageKey={content.storageKey} initialEntries={content.initialEntries} mode={content.mode} />
            <AdSlot />
          </div>
        </div>
      </div>
      <article className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          {content.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-3xl font-black uppercase leading-none tracking-[-.04em]">{section.heading}</h2>
              <p className="mt-4 leading-7 text-[#686861]">{section.body}</p>
            </section>
          ))}
        </div>
        <section className="mt-14 border-t-2 border-[#20201f] pt-10">
          <p className="text-xs font-black uppercase tracking-[.2em] text-[#3657ff]">Good to know</p>
          <h2 className="mt-2 text-4xl font-black uppercase tracking-[-.05em]">Frequently asked questions</h2>
          <div className="mt-6 space-y-4">
            {content.faq.map((item) => (
              <details key={item.q} className="group rounded-2xl border-2 border-[#20201f] bg-white p-5 shadow-[3px_3px_0_#d8d1c3]">
                <summary className="cursor-pointer list-none font-black">{item.q}<span className="float-right text-[#3657ff] group-open:rotate-45">+</span></summary>
                <p className="mt-3 max-w-3xl leading-7 text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}

