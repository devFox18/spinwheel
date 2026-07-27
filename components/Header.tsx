import Link from "next/link";

const links = [
  ["/random-name-picker", "Names"],
  ["/random-team-generator", "Teams"],
  ["/yes-no-wheel", "Yes / No"],
  ["/raffle-picker", "Raffle"],
];

export function Header() {
  return (
    <header className="border-b border-[#e8e2d8] bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-black tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#ff5c35] text-white">↻</span>
          Spinwheel
        </Link>
        <nav aria-label="Tools" className="flex gap-4 overflow-x-auto text-sm font-semibold text-slate-600">
          {links.map(([href, label]) => <Link key={href} href={href} className="whitespace-nowrap hover:text-[#ff5c35]">{label}</Link>)}
        </nav>
      </div>
    </header>
  );
}
