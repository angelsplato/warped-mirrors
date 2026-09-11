import { ArrowDownRight, ArrowUpRight } from "lucide-react"

function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 pt-24 sm:pt-32">
      <div className="absolute inset-0 -z-10 bg-[#09090b]"></div>
      <div className="hero-grid absolute inset-0 -z-10 opacity-50"></div>
      <div className="absolute -right-32 top-16 -z-10 h-[34rem] w-[34rem] rounded-full bg-lime-300/10 blur-[120px]"></div>
      <div className="mx-auto max-w-[1440px] px-4 pb-12 sm:px-8 lg:px-12 lg:pb-16">
        <div className="max-w-6xl">
          <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.14em] text-lime-300 sm:mb-8 sm:tracking-[0.18em]">
            <span className="h-px w-8 bg-lime-300"></span> Built in South Africa
          </p>
          <h1 className="max-w-6xl text-balance text-[clamp(3rem,13vw,9.5rem)] font-medium leading-[0.9] tracking-[-0.065em] text-white sm:leading-[0.88] sm:tracking-[-0.075em]">
            The groundwork for an <span className="text-zinc-500">AI-ready</span> organisation.
          </h1>
        </div>
        <div className="mt-10 grid items-end gap-8 border-t border-white/10 pt-7 sm:mt-12 sm:gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="text-sm uppercase tracking-[0.13em] text-zinc-500">warpedmirrors / 01</div>
          <div>
            <p className="max-w-xl text-base leading-7 tracking-[-0.02em] text-zinc-300 sm:text-xl sm:leading-relaxed">
              We do the unglamorous data work that helps legacy organisations compete in the AI age.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#contact" className="inline-flex min-h-11 items-center justify-center gap-2 bg-lime-300 px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-lime-200">
                Start a conversation <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#product" className="inline-flex min-h-11 items-center justify-center gap-2 border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:border-white/50 hover:bg-white/5">
                Explore the work <ArrowDownRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="relative mt-14 overflow-hidden border border-white/10 bg-zinc-950 p-4 sm:mt-24 sm:p-8">
          <div className="absolute right-0 top-0 h-24 w-24 border-b border-l border-lime-300/60"></div>
          <div className="relative grid min-h-[250px] gap-5 sm:grid-cols-3">
            {["Legacy systems", "Structured data", "Useful intelligence"].map((label, index) => (
              <div key={label} className="flex flex-col justify-between border border-white/10 bg-white/[0.02] p-5">
                <span className="text-xs text-zinc-500">0{index + 1}</span>
                <span className="max-w-28 text-xl leading-tight tracking-[-0.04em] text-zinc-100">{label}</span>
                <div className={`h-1 w-full ${index === 1 ? "bg-lime-300" : "bg-zinc-700"}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
