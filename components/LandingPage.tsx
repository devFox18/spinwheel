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
      <div className="dot-grid border-b border-[#e8e2d8]">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-12 sm:px-6 sm:pt-16">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-[.2em] text-[#ff5c35]">{content.eyebrow}</p>
            <h1 className="text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">{content.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{content.intro}</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-[1fr_180px]">
            <Wheel storageKey={content.storageKey} initialEntries={content.initialEntries} mode={content.mode} />
            <AdSlot />
          </div>
        </div>
      </div>
      <article className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          {content.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-black tracking-tight">{section.heading}</h2>
              <p className="mt-3 leading-7 text-slate-600">{section.body}</p>
            </section>
          ))}
        </div>
        <section className="mt-14 border-t border-[#e8e2d8] pt-10">
          <h2 className="text-3xl font-black">Frequently asked questions</h2>
          <div className="mt-6 space-y-4">
            {content.faq.map((item) => (
              <details key={item.q} className="group rounded-2xl border border-[#e8e2d8] bg-white p-5">
                <summary className="cursor-pointer list-none font-bold">{item.q}<span className="float-right text-[#ff5c35] group-open:rotate-45">+</span></summary>
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
