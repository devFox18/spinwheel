import Link from "next/link";

const links = [
  ["/random-name-picker", "Names"],
  ["/random-team-generator", "Teams"],
  ["/yes-no-wheel", "Yes / No"],
  ["/raffle-picker", "Raffle"],
];

export function Header() {
  return (
    <header className="border-b-2 border-[#20201f] bg-[#f5f0e6]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-black uppercase tracking-[-.04em]">
          <span className="grid h-9 w-9 place-items-center rounded-xl border-2 border-[#20201f] bg-[#3657ff] text-xl text-white shadow-[3px_3px_0_#20201f]">↻</span>
          Spin<span className="text-[#3657ff]">wheel</span>
        </Link>
        <nav aria-label="Tools" className="hidden gap-2 text-sm font-black sm:flex">
          {links.map(([href, label]) => <Link key={href} href={href} className="whitespace-nowrap rounded-full px-3 py-2 hover:bg-[#c8f36a]">{label}</Link>)}
        </nav>
        <details className="relative sm:hidden">
          <summary className="cursor-pointer list-none rounded-full border-2 border-[#20201f] bg-white px-4 py-2 text-sm font-black shadow-[2px_2px_0_#20201f]">
            Tools
          </summary>
          <nav aria-label="Mobile tools" className="absolute right-0 top-12 z-40 grid min-w-52 gap-1 rounded-2xl border-2 border-[#20201f] bg-white p-2 shadow-[5px_5px_0_#20201f]">
            {links.map(([href, label]) => <Link key={href} href={href} className="rounded-xl px-4 py-3 text-sm font-black hover:bg-[#c8f36a]">{label}</Link>)}
          </nav>
        </details>
      </div>
    </header>
  );
}

