import { ArrowUpRight, Menu } from "lucide-react"

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#09090b]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#" className="flex items-center gap-2.5 text-[15px] font-semibold tracking-[-0.04em] text-white">
          <span className="grid h-5 w-5 place-items-center border border-lime-300/80 text-[10px] text-lime-300">w</span>
          warpedmirrors
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#product" className="nav-link">Product</a>
          <a href="#approach" className="nav-link">Approach</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        <a href="#contact" className="hidden items-center gap-2 bg-lime-300 px-4 py-2.5 text-sm font-medium text-zinc-950 transition hover:bg-lime-200 md:flex">
          Start a conversation <ArrowUpRight className="h-4 w-4" />
        </a>
        <a href="#contact" aria-label="Open contact section" className="text-zinc-300 md:hidden"><Menu className="h-5 w-5" /></a>
      </div>
    </header>
  )
}

export default Header
