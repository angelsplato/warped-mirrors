import { ArrowUpRight } from "lucide-react"

function CTA() {
  return (
    <section id="contact" className="border-y border-white/10 bg-lime-300 py-24 text-zinc-950 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <p className="text-sm uppercase tracking-[0.14em] text-zinc-800">The next layer starts here</p>
          <div>
            <h2 className="max-w-4xl text-5xl font-medium leading-[0.9] tracking-[-0.07em] sm:text-7xl">
              Ready to make your data useful?
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-zinc-800">
              Tell us where the groundwork is getting in the way. We are building for the next era of South African organisations.
            </p>
            <a href="mailto:hello@warpedmirrors.com" className="mt-10 inline-flex items-center gap-2 bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800">
              Get in touch <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
