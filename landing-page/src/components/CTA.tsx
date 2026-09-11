import { ArrowUpRight } from "lucide-react"

function CTA() {
  return (
    <section id="contact" className="border-y border-white/10 bg-lime-300 py-20 text-zinc-950 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1fr_1.4fr]">
          <p className="text-sm uppercase tracking-[0.14em] text-zinc-800">The next layer starts here</p>
          <div>
            <h2 className="max-w-4xl text-[clamp(2.75rem,12vw,4.5rem)] font-medium leading-[0.92] tracking-[-0.065em] sm:leading-[0.9] sm:tracking-[-0.07em]">
              Ready to make your data useful?
            </h2>
            <p className="mt-7 max-w-xl text-base leading-7 text-zinc-800 sm:text-lg sm:leading-relaxed">
              Tell us where the groundwork is getting in the way. We are building for the next era of South African organisations.
            </p>
            <a href="mailto:hello@warpedmirrors.com" className="mt-8 inline-flex min-h-11 items-center gap-2 bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 sm:mt-10">
              Get in touch <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
