import Link from "next/link";

const solutionItems = [
  { href: "/solutions/building", label: "Building" },
  { href: "/solutions/marketing", label: "Marketing" },
  { href: "/solutions/scaling", label: "Scaling" },
];

export function SolutionsHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-emerald-300/30 bg-black/80 backdrop-blur">
      <nav className="mx-auto flex h-[92px] w-[min(1240px,calc(100vw-32px))] items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full border border-emerald-300/40 bg-emerald-300/10" />
          <span className="text-3xl font-semibold tracking-[0.045em] text-[#1ed760]">AXOLITY</span>
        </Link>
        <div className="hidden items-center gap-14 md:flex">
          <div className="group relative">
            <button className="border-b border-emerald-300/60 pb-1 text-lg text-white drop-shadow-[0_0_10px_rgba(30,215,96,0.42)]">
              Solutions ▾
            </button>
            <div className="pointer-events-none absolute left-1/2 top-full z-10 mt-3 grid min-w-[200px] -translate-x-1/2 gap-1 rounded-2xl border border-white/20 bg-black/85 p-2 opacity-0 shadow-[0_16px_36px_rgba(0,0,0,0.45)] transition group-hover:pointer-events-auto group-hover:opacity-100">
              {solutionItems.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-[#1ed760]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/research" className="text-lg text-white/95">Research</Link>
          <Link href="/company" className="text-lg text-white/95">Company</Link>
          <Link href="/hiring" className="text-lg text-white/95">Jobs</Link>
        </div>
        <button className="hidden rounded-full border border-white/60 px-8 py-2 text-lg md:inline-flex">Sign in</button>
      </nav>
    </header>
  );
}
