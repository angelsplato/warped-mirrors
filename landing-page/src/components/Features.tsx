import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Scan, BookOpen, Gauge, FileSpreadsheet, Database } from "lucide-react"

function Products() {
  const products = [
    {
      id: 'scanwise',
      title: 'scanwise',
      tagline: 'turn every document into structured data',
      description: 'document intelligence & text extraction',
      icon: Scan,
      details: 'ai-powered text extraction and document intelligence platform that transforms unstructured paper documents into clean, searchable, actionable data. whether you\'re dealing with contracts, case files, invoices, forms, or handwritten notes, scanwise automatically extracts key information and structures it for immediate use.',
      features: ['intelligent text extraction from any document format', 'automatic field recognition and data structuring', 'multi-language support across african languages', 'batch processing for large document volumes', 'api integration for seamless workflow automation'],
      status: 'ready for law firms | early access'
    },
    {
      id: 'knowhub',
      title: 'knowhub',
      tagline: 'your organization\'s collective intelligence, searchable',
      description: 'ai knowledge base',
      icon: BookOpen,
      details: 'ai-powered knowledge base that captures, organizes, and makes searchable all institutional knowledge—documents, precedents, best practices, templates, and lessons learned. your team can instantly find relevant information using natural language search, and the ai continuously learns from your organization\'s collective experience.',
      features: ['natural language search across all documents', 'automatic knowledge extraction from documents', 'ai-powered recommendations and similar document suggestions', 'version control for templates and precedents', 'integration with document libraries'],
      status: 'coming soon'
    },
    {
      id: 'datadash',
      title: 'datadash',
      tagline: 'see what your data is telling you',
      description: 'analytics & insights engine',
      icon: Gauge,
      details: 'transforms your captured documents into visual intelligence. create automated dashboards, generate reports, identify patterns, and extract actionable insights from data that was previously locked in filing cabinets. datadash connects directly to your scanwise data and your existing systems.',
      features: ['pre-built industry-specific dashboards', 'real-time analytics and reporting', 'pattern recognition and anomaly detection', 'predictive insights powered by machine learning', 'export reports in multiple formats'],
      status: 'coming soon'
    },
    {
      id: 'formflow',
      title: 'formflow',
      tagline: 'replace paper processes with intelligent workflows',
      description: 'process digitization & automation',
      icon: FileSpreadsheet,
      details: 'digitizes and automates your paper-based processes. transform manual intake forms, application workflows, approval processes, and client interactions into intelligent digital workflows powered by ai. routes documents automatically, validates information, and eliminates manual data entry.',
      features: ['drag-and-drop form builder', 'pre-built templates for common industry processes', 'intelligent field validation and auto-population', 'workflow automation and routing rules', 'e-signature integration'],
      status: 'coming soon'
    },
    {
      id: 'dataengine',
      title: 'dataengine',
      tagline: 'build ai that understands your business',
      description: 'custom ai model training',
      icon: Database,
      details: 'empowers organizations to train custom ai models on their own data. no data science expertise needed. using your documents and historical data, dataengine learns your specific business rules, document types, and processes—then creates ai tools tailored to your unique workflows.',
      features: ['no-code model training interface', 'automatic model optimization', 'continuous learning and improvement', 'explainable ai—understand why decisions are made', 'deploy models with one click'],
      status: 'coming soon'
    }
  ]

  return (
    <section id="products" className="w-full bg-zinc-900 py-12 sm:py-16 md:py-20 lg:py-24" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="flex flex-col space-y-2 sm:space-y-3 mb-8 sm:mb-12">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">products</h2>
          <p className="max-w-[700px] text-base leading-7 text-zinc-400">
            powerful tools designed to streamline your document workflows
          </p>
        </div>

        <Tabs defaultValue="scanwise" className="w-full">
          <TabsList className="mb-6 grid h-auto w-full grid-cols-2 gap-2 bg-zinc-950 p-2 sm:flex sm:flex-wrap sm:justify-start">
            {products.map((product) => {
              const Icon = product.icon
              return (
                <TabsTrigger
                  key={product.id}
                  value={product.id}
                  className="flex w-full items-center gap-2 data-[state=active]:bg-zinc-800 data-[state=active]:text-white text-zinc-400 sm:w-auto"
                >
                  <Icon className="h-4 w-4" />
                  <span>{product.title}</span>
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
                    <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-3">
                        <Icon className="h-8 w-8 text-zinc-400" />
                        <div>
                          <CardTitle className="text-white text-2xl font-semibold mb-1">{product.title}</CardTitle>
                          <p className="text-sm text-zinc-500 italic">{product.tagline}</p>
                        </div>
                      </div>
                      <span className="w-fit text-xs leading-5 px-3 py-1 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800">
                        {product.status}
                      </span>
                    </div>
                    <CardDescription className="text-zinc-400 text-base">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-base text-zinc-400 leading-7">
                      {product.details}
                    </p>
                    <div>
                      <h4 className="text-base font-semibold text-white mb-2">key features:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="text-base leading-7 text-zinc-400 flex items-start gap-2">
                            <span className="text-zinc-600 mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
