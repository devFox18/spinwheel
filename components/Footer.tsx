import Link from "next/link";

const tools = [
  ["/", "Wheel"],
  ["/random-name-picker", "Name picker"],
  ["/random-team-generator", "Team generator"],
  ["/yes-no-wheel", "Yes / No"],
  ["/raffle-picker", "Raffle picker"],
];

const legal = [
  ["/privacy", "Privacy"],
  ["/terms", "Terms"],
  ["/disclaimer", "Disclaimer"],
  ["/cookie-policy", "Cookies & storage"],
];

export function Footer() {
  return (
    <footer className="border-t-2 border-[#20201f] bg-[#20201f] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Link href="/" className="text-2xl font-black uppercase tracking-[-.05em]">
            Spin<span className="text-[#7890ff]">wheel</span>
          </Link>
          <p className="mt-4 max-w-sm leading-7 text-white/65">
            Fast, fair browser-based tools for everyday decisions. No account, no database, no unnecessary tracking.
          </p>
          <p className="mt-6 text-xs font-black uppercase tracking-[.16em] text-[#c8f36a]">Choose. Spin. Done.</p>
        </div>
        <div>
          <h2 className="text-xs font-black uppercase tracking-[.18em] text-white/45">Picker tools</h2>
          <nav className="mt-4 grid gap-3 text-sm font-bold" aria-label="Footer tools">
            {tools.map(([href, label]) => <Link key={href} href={href} className="hover:text-[#c8f36a]">{label}</Link>)}
          </nav>
        </div>
        <div>
          <h2 className="text-xs font-black uppercase tracking-[.18em] text-white/45">Legal</h2>
          <nav className="mt-4 grid gap-3 text-sm font-bold" aria-label="Legal pages">
            {legal.map(([href, label]) => <Link key={href} href={href} className="hover:text-[#c8f36a]">{label}</Link>)}
          </nav>
        </div>
      </div>
      <div className="border-t border-white/15 px-4 py-5 text-center text-xs text-white/45">
        © {new Date().getFullYear()} Spinwheel. Built for low-stakes, human decisions.
      </div>
    </footer>
  );
}

