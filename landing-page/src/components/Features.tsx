import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Braces, Database, Cpu } from "lucide-react"

function Products() {
  const products = [
    {
      title: 'skills server',
      description: 'our first product, for the south african market',
      icon: Braces,
      details: 'A focused way to make reliable, local skills available where teams already work. We are building it for the context, systems, and constraints of South African organisations.',
      status: 'in development'
    },
    {
      title: 'data foundations',
      description: 'the boring groundwork that makes ai dependable',
      icon: Database,
      details: 'AI is only as useful as the data and operating context beneath it. We help organisations turn fragmented information and legacy processes into foundations they can build on.',
      status: 'how we work'
    },
    {
      title: 'nano cloud',
      description: 'a longer-term direction',
      icon: Cpu,
      details: 'We are exploring fine-tuned, smaller models and infrastructure that bring capable AI closer to the organisations and markets that need it.',
      status: 'on the horizon'
    }
  ]

  return (
    <section id="product" className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-zinc-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="flex flex-col space-y-2 sm:space-y-3 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">what we are building</h2>
          <p className="max-w-[700px] text-zinc-400 text-sm sm:text-base">
            Practical AI starts with the work that most teams cannot afford to skip.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon
            return (
              <Card key={product.title} className="border-zinc-800 bg-zinc-950">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3 gap-3">
                    <Icon className="h-8 w-8 shrink-0 text-zinc-400" />
                    <span className="text-xs px-3 py-1 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800">
                      {product.status}
                    </span>
                  </div>
                  <CardTitle className="text-white text-2xl font-semibold mb-1">{product.title}</CardTitle>
                  <CardDescription className="text-zinc-400 text-base">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-zinc-500 leading-relaxed">{product.details}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Products
