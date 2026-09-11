import { ArrowUpRight } from "lucide-react"

function Products() {
  return (
    <section id="product" className="section-space border-b border-white/10 bg-[#0d0d0f]">
      <div className="page-shell">
        <div className="grid min-w-0 gap-9 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <div>
            <p className="eyebrow">First product</p>
            <h2 className="type-section mt-5 max-w-md font-medium text-white">
              Skills that meet the market where it is.
            </h2>
          </div>
          <div className="border-t border-white/10 pt-6 lg:pt-2">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <span className="text-[0.75rem] uppercase tracking-[0.14em] text-zinc-400">Now building</span>
              <span className="h-2 w-2 rounded-full bg-lime-300"></span>
            </div>
            <h3 className="type-product mt-9 font-medium text-white sm:mt-12">Skills server</h3>
            <p className="type-lead mt-6 max-w-xl text-zinc-300">
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
