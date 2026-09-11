function HowItWorks() {
  return (
    <section id="approach" className="bg-[#09090b] py-20 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <p className="eyebrow">The approach</p>
        <div className="mt-5 grid gap-10 sm:gap-12 lg:grid-cols-[1fr_1.4fr]">
          <h2 className="max-w-md text-[clamp(2.25rem,10vw,3.75rem)] font-medium leading-[0.95] tracking-[-0.06em] text-white">
            Build the foundation before the frontier.
          </h2>
          <div className="divide-y divide-white/10 border-t border-white/10">
            {[
              ["01", "Data foundations", "Make the information inside established systems usable, reliable and ready for what comes next."],
              ["02", "Purpose-built infrastructure", "Bring the right systems closer to the work—and closer to the realities of the market."],
              ["03", "Smaller, sharper models", "Move toward finely tuned models and nano cloud infrastructure where they can create real leverage."],
            ].map(([number, title, description]) => (
              <article key={number} className="grid gap-4 py-7 sm:grid-cols-[4rem_1fr] sm:gap-8 sm:py-9">
                <span className="text-sm text-lime-300">{number}</span>
                <div>
                  <h3 className="text-2xl leading-tight tracking-[-0.04em] text-white">{title}</h3>
                  <p className="mt-3 max-w-lg text-base leading-7 text-zinc-400">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
