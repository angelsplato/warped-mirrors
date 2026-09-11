import { Button } from "@/components/ui/button"
import { ArrowRight, Menu } from "lucide-react"
import { Logo } from "./Logo"

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="container mx-auto flex h-16 items-center justify-between px-6 md:px-12 lg:px-16 xl:px-24">
        <a href="#" aria-label="warpedmirrors home">
          <Logo wordmarkClassName="text-base font-semibold tracking-tight text-white" />
        </a>
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
          <a href="#product" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">product</a>
          <a href="#approach" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">approach</a>
          <a href="#contact" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">contact</a>
        </nav>
        <Button size="sm" className="bg-white hover:bg-zinc-100 text-zinc-950 flex items-center gap-2" asChild>
          <a href="#contact">
            <span className="hidden sm:inline">get in touch</span>
            <Menu className="h-4 w-4 sm:hidden" />
            <ArrowRight className="hidden h-4 w-4 sm:block" />
          </a>
        </Button>
      </div>
    </header>
  )
}

export default SiteHeader
