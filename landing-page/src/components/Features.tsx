import { ArrowUpRight } from "lucide-react"

function Products() {
  return (
    <section id="product" className="border-b border-white/10 bg-[#0d0d0f] py-20 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <div className="grid gap-9 sm:gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow">First product</p>
            <h2 className="mt-5 max-w-md text-[clamp(2.25rem,10vw,3.75rem)] font-medium leading-[0.95] tracking-[-0.06em] text-white">
              Skills that meet the market where it is.
            </h2>
          </div>
          <div className="border-t border-white/10 pt-6 lg:pt-2">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <span className="text-sm uppercase tracking-[0.14em] text-zinc-500">Now building</span>
              <span className="h-2 w-2 rounded-full bg-lime-300"></span>
            </div>
            <h3 className="mt-10 text-[clamp(2.75rem,12vw,6rem)] font-medium leading-none tracking-[-0.07em] text-white sm:mt-12">Skills server</h3>
            <p className="mt-6 max-w-xl text-base leading-7 tracking-[-0.025em] text-zinc-400 sm:text-xl sm:leading-relaxed">
              A skills server made for the South African market—designed to make local capability easier to find, understand and put to work.
            </p>
            <a href="#contact" className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-lime-300 transition hover:text-lime-200 sm:mt-10">
              Ask about the product <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
