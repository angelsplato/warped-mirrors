import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

function Hero() {
  return (
    <section className="w-full bg-zinc-950 py-10 sm:py-16 md:py-24 lg:py-32 xl:py-40" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-5 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-block">
                <span className="inline-flex text-xs leading-5 sm:text-sm font-medium px-3 py-1 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800">
                  catapulting africa to the forefront of the ai age
                </span>
              </div>
              <h1 className="max-w-2xl text-[clamp(2.25rem,9vw,4rem)] font-semibold tracking-[-0.04em] text-white leading-[1.05]">
                turn every document into structured data
              </h1>
              <p className="max-w-[600px] text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
                critical information is trapped in documents, inaccessible to the people and systems that need it. we unlock that information with ai-powered document intelligence—starting with scanwise.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="bg-white hover:bg-zinc-100 text-zinc-950 flex items-center justify-center gap-2 w-full sm:w-auto">
                book a demo
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-900 hover:text-white w-full sm:w-auto" asChild>
                <a href="#products">explore products</a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center order-first lg:order-last">
            <div className="relative flex h-52 w-full items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 sm:h-[300px] md:h-[350px] lg:h-[400px]">
              <span className="text-zinc-600 font-medium text-xs sm:text-sm">product visualization</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
