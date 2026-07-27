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
        <nav aria-label="Tools" className="flex gap-2 overflow-x-auto text-sm font-black">
          {links.map(([href, label]) => <Link key={href} href={href} className="whitespace-nowrap rounded-full px-3 py-2 hover:bg-[#c8f36a]">{label}</Link>)}
        </nav>
      </div>
    </header>
  );
}

