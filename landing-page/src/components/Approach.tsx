import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Layers3, Wrench } from "lucide-react"

const principles = [
  {
    title: "Start local",
    detail: "We begin with South African organisations, where local context is a product requirement—not an afterthought.",
    icon: MapPin,
  },
  {
    title: "Do the groundwork",
    detail: "Legacy systems and fragmented data are hard problems. They are also the work that makes durable AI possible.",
    icon: Layers3,
  },
  {
    title: "Build for use",
    detail: "We focus on practical skills and tools that fit real teams, instead of technology looking for a use case.",
    icon: Wrench,
  },
]

function Approach() {
  return (
    <section id="approach" className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-zinc-950" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="flex flex-col space-y-2 sm:space-y-3 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">our approach</h2>
          <p className="max-w-[700px] text-zinc-400 text-sm sm:text-base">
            Grounded in local reality. Designed to make AI useful over the long term.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {principles.map(({ title, detail, icon: Icon }) => (
            <Card key={title} className="border-zinc-800 bg-zinc-900">
              <CardHeader>
                <Icon className="h-7 w-7 text-zinc-400 mb-4" />
                <CardTitle className="text-white text-xl">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-zinc-500 leading-relaxed">{detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Approach
