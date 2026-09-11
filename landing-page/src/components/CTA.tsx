import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

function CTA() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-28 bg-zinc-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            building for a market you know deeply?
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            We are working on practical AI foundations for South African organisations. Let&apos;s talk about the difficult, valuable work in front of you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4">
            <Button size="lg" className="bg-white hover:bg-zinc-100 text-zinc-950 flex items-center justify-center gap-2 w-full sm:w-auto" asChild>
              <a href="#contact">
                get in touch
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white w-full sm:w-auto" asChild>
              <a href="#approach">our approach</a>
            </Button>
          </div>
          <p className="text-xs sm:text-sm text-zinc-500 pt-2">
            skills server • data foundations • nano cloud
          </p>
        </div>
      </div>
    </section>
  )
}

export default CTA
