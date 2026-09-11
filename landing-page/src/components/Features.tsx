import { ArrowUpRight } from "lucide-react"

function Products() {
  return (
    <section id="product" className="border-b border-white/10 bg-[#0d0d0f] py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow">First product</p>
            <h2 className="mt-5 max-w-md text-4xl font-medium leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl">
              Skills that meet the market where it is.
            </h2>
          </div>
          <div className="border-t border-white/10 pt-6 lg:pt-2">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <span className="text-sm uppercase tracking-[0.14em] text-zinc-500">Now building</span>
              <span className="h-2 w-2 rounded-full bg-lime-300"></span>
            </div>
            <h3 className="mt-12 text-[clamp(3rem,6vw,6rem)] font-medium leading-none tracking-[-0.07em] text-white">Skills server</h3>
            <p className="mt-6 max-w-xl text-xl leading-relaxed tracking-[-0.025em] text-zinc-400">
              A skills server made for the South African market—designed to make local capability easier to find, understand and put to work.
            </p>
            <a href="#contact" className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-lime-300 transition hover:text-lime-200">
              Ask about the product <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
