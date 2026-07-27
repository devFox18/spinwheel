import { AdSlot } from "./AdSlot";
import { Wheel } from "./Wheel";
import Link from "next/link";
import { absoluteUrl } from "@/lib/site";

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
      url: absoluteUrl(content.path),
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      description: content.intro,
      browserRequirements: "Requires JavaScript. Works in modern web browsers.",
      featureList: ["Equal-probability random selection", "Local list saving", "Offline support", "Responsive wheel"],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Spinwheel", item: absoluteUrl("/") },
        ...(content.path === "/" ? [] : [{ "@type": "ListItem", position: 2, name: content.title, item: absoluteUrl(content.path) }]),
      ],
    },
    ...(content.path === "/" ? [{
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Spinwheel",
      alternateName: "Spin Wheel",
      url: absoluteUrl("/"),
      description: content.intro,
    }] : []),
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
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-8 sm:px-6 sm:pb-14 sm:pt-16">
          <div className="mb-7 grid items-end gap-5 sm:mb-10 md:grid-cols-[1.25fr_.75fr] md:gap-7">
            <div>
              <p className="mb-3 inline-flex -rotate-1 rounded-full border-2 border-[#20201f] bg-[#c8f36a] px-3 py-1.5 text-[10px] font-black uppercase tracking-[.16em] shadow-[3px_3px_0_#20201f] sm:mb-4 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[.18em]">{content.eyebrow}</p>
              <h1 className="max-w-4xl text-[2.65rem] font-black uppercase leading-[.88] tracking-[-.065em] sm:text-7xl lg:text-[5.5rem]">
                {titleWords.join(" ")} <span className="text-[#3657ff]">{titleEnd}</span>
              </h1>
            </div>
            <div className="rounded-2xl border-2 border-[#20201f] bg-white p-4 shadow-[4px_4px_0_#ff6b45] sm:p-5 sm:shadow-[5px_5px_0_#ff6b45]">
              <p className="text-sm font-bold leading-6 text-[#686861] sm:text-base sm:leading-7">{content.intro}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-wider sm:mt-4 sm:text-[11px]">
                <span className="rounded-full bg-[#20201f] px-3 py-2 text-white">No signup</span>
                <span className="rounded-full bg-[#c8f36a] px-3 py-2">Saved locally</span>
              </div>
            </div>
          </div>
          <div className="grid gap-5 lg:grid-cols-[1fr_180px]">
            <Wheel storageKey={content.storageKey} initialEntries={content.initialEntries} mode={content.mode} />
            <AdSlot />
          </div>
          <ul className="mt-10 grid overflow-hidden rounded-2xl border-2 border-[#20201f] bg-[#20201f] text-white sm:grid-cols-3" aria-label="Product benefits">
            {[
              ["01", "Equal odds", "Every line receives the same chance."],
              ["02", "Device only", "Your lists stay in this browser."],
              ["03", "Works offline", "Return after your first visit."],
            ].map(([number, title, body]) => (
              <li key={number} className="border-white/15 p-5 not-last:border-b sm:not-last:border-b-0 sm:not-last:border-r">
                <span className="text-xs font-black text-[#c8f36a]">{number}</span>
                <strong className="ml-3 uppercase">{title}</strong>
                <p className="mt-2 text-sm leading-6 text-white/60">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <article className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mb-12 flex items-end justify-between gap-5 border-b-2 border-[#20201f] pb-5">
          <div>
            <p className="text-xs font-black uppercase tracking-[.2em] text-[#3657ff]">How it fits your day</p>
            <h2 className="mt-2 text-4xl font-black uppercase tracking-[-.05em]">Simple by design</h2>
          </div>
          <span className="hidden rounded-full bg-[#ff6b45] px-4 py-2 text-xs font-black uppercase sm:block">No learning curve</span>
        </div>
        <div className="grid gap-12 md:grid-cols-2">
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
        <nav aria-label="Related picker tools" className="mt-14 rounded-3xl border-2 border-[#20201f] bg-[#c8f36a] p-6 shadow-[5px_5px_0_#20201f]">
          <p className="text-xs font-black uppercase tracking-[.18em]">Try another free tool</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              ["/random-name-picker", "Random name picker"],
              ["/random-team-generator", "Random team generator"],
              ["/yes-no-wheel", "Yes or no wheel"],
              ["/raffle-picker", "Raffle picker"],
            ].filter(([path]) => path !== content.path).map(([path, label]) => (
              <Link key={path} href={path} className="rounded-full border-2 border-[#20201f] bg-white px-4 py-2 text-sm font-black shadow-[2px_2px_0_#20201f] hover:-translate-y-0.5">{label}</Link>
            ))}
          </div>
        </nav>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}

