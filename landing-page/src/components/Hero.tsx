import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

function Hero() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 xl:py-40 bg-zinc-950" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-block">
                <span className="text-xs sm:text-sm font-medium px-3 py-1 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800">
                  built for the south african market
                </span>
              </div>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white leading-tight">
                the groundwork for useful ai
              </h1>
              <p className="max-w-[600px] text-zinc-400 text-base sm:text-lg leading-relaxed">
                warpedmirrors does the unglamorous data work that helps legacy organisations compete in the age of ai. our first product is a skills server designed for South Africa.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="bg-white hover:bg-zinc-100 text-zinc-950 flex items-center justify-center gap-2 w-full sm:w-auto" asChild>
                <a href="#contact">
                  start a conversation
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-900 hover:text-white w-full sm:w-auto" asChild>
                <a href="#product">our product</a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center order-first lg:order-last">
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800">
              <span className="text-zinc-600 font-medium text-xs sm:text-sm">skills, data, and models—made useful</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
