import { useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#09090b]/80 backdrop-blur-xl">
      <div className="page-shell flex min-h-16 items-center justify-between">
        <a href="#" className="flex min-h-11 items-center" aria-label="warpedmirrors home">
          <img
            src="/warpedmirrors-logo.svg"
            alt="warpedmirrors"
            className="h-7 w-auto sm:h-8"
          />
        </a>
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          <a href="#product" className="nav-link flex min-h-11 items-center">Product</a>
          <a href="#approach" className="nav-link flex min-h-11 items-center">Approach</a>
          <a href="#contact" className="nav-link flex min-h-11 items-center">Contact</a>
        </nav>
        <a href="#contact" className="hidden min-h-11 items-center gap-2 bg-lime-300 px-4 py-2.5 text-sm font-medium text-zinc-950 transition hover:bg-lime-200 md:flex">
          Start a conversation <ArrowUpRight className="h-4 w-4" />
        </a>
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="grid h-11 w-11 place-items-center text-zinc-300 transition hover:bg-white/5 md:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {menuOpen && (
        <nav aria-label="Mobile navigation" className="border-t border-white/10 bg-[#09090b] md:hidden">
          <div className="page-shell flex flex-col py-3">
            {[
              ["Product", "#product"],
              ["Approach", "#approach"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="flex min-h-11 items-center border-b border-white/10 text-[1rem] text-zinc-200 transition last:border-0 hover:text-lime-300">
                {label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
