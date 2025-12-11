import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Scan, BookOpen, Gauge, FileSpreadsheet, Database } from "lucide-react"

function Products() {
  const products = [
    {
      id: 'scanwise',
      title: 'scanwise',
      description: 'intelligent document scanning and ocr',
      icon: Scan,
      details: 'convert physical documents into searchable, editable digital formats with advanced recognition technology. our ai-powered scanning solution automatically detects document types, enhances image quality, and extracts text with industry-leading accuracy.'
    },
    {
      id: 'knowhub',
      title: 'knowhub',
      description: 'centralized knowledge management',
      icon: BookOpen,
      details: 'organize, search, and access your document library with ai-powered insights and recommendations. create a centralized knowledge base that learns from your content, suggests relevant documents, and helps teams find information faster.'
    },
    {
      id: 'datadash',
      title: 'datadash',
      description: 'real-time analytics dashboard',
      icon: Gauge,
      details: 'visualize document metrics, processing status, and workflow performance at a glance. track key performance indicators, monitor processing bottlenecks, and gain actionable insights into your document operations with customizable dashboards.'
    },
    {
      id: 'formflow',
      title: 'formflow',
      description: 'automated form processing',
      icon: FileSpreadsheet,
      details: 'extract structured data from forms and documents with intelligent field recognition. automate data entry, reduce manual errors, and process thousands of forms with configurable validation rules and export options.'
    },
    {
      id: 'dataengine',
      title: 'dataengine',
      description: 'custom data extraction pipelines',
      icon: Database,
      details: 'build tailored workflows to extract, validate, and transform document data at scale. design custom extraction rules, integrate with your existing systems, and process millions of documents with enterprise-grade reliability.'
    }
  ]

  return (
    <section id="products" className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-zinc-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="flex flex-col space-y-2 sm:space-y-3 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">products</h2>
          <p className="max-w-[700px] text-zinc-400 text-sm sm:text-base">
            powerful tools designed to streamline your document workflows
          </p>
        </div>

        <Tabs defaultValue="scanwise" className="w-full">
          <TabsList className="w-full flex flex-wrap justify-start gap-2 h-auto bg-zinc-950 p-2 mb-6">
            {products.map((product) => {
              const Icon = product.icon
              return (
                <TabsTrigger
                  key={product.id}
                  value={product.id}
                  className="flex items-center gap-2 data-[state=active]:bg-zinc-800 data-[state=active]:text-white text-zinc-400"
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{product.title}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>

          {products.map((product) => {
            const Icon = product.icon
            return (
              <TabsContent key={product.id} value={product.id} id={`product-${product.id}`}>
                <Card className="border-zinc-800 bg-zinc-950">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="h-8 w-8 text-zinc-400" />
                      <CardTitle className="text-white text-2xl font-semibold">{product.title}</CardTitle>
                    </div>
                    <CardDescription className="text-zinc-400 text-base">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-zinc-500 leading-relaxed">
                      {product.details}
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            )
          })}
        </Tabs>
      </div>
    </section>
  )
}

export default Products
