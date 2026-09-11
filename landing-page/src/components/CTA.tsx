import { ArrowUpRight } from "lucide-react"

function CTA() {
  return (
    <section id="contact" className="section-space border-y border-white/10 bg-lime-300 text-zinc-950">
      <div className="page-shell">
        <div className="grid min-w-0 gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <p className="text-[0.75rem] uppercase tracking-[0.14em] text-zinc-800">The next layer starts here</p>
          <div>
            <h2 className="type-section max-w-4xl font-medium">
              Ready to make your data useful?
            </h2>
            <p className="type-lead mt-7 max-w-xl text-zinc-800">
              Tell us where the groundwork is getting in the way. We are building for the next era of South African organisations.
            </p>
            <a href="mailto:hello@warpedmirrors.com" className="mt-8 inline-flex min-h-11 w-full items-center justify-center gap-2 bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 sm:mt-10 sm:w-auto">
              Get in touch <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
