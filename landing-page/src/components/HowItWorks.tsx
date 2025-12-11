import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Scale, Building2, Home, DollarSign } from "lucide-react"

function HowItWorks() {
  const industries = [
    {
      id: 'law',
      title: 'law',
      description: 'streamline case management, contract analysis, and legal document review with automated processing',
      icon: Scale,
      details: 'transform legal operations with intelligent document processing. automatically review contracts, extract key clauses, manage case files, and ensure compliance. our solutions help law firms reduce review time by 70% while maintaining accuracy and security.'
    },
    {
      id: 'government',
      title: 'government',
      description: 'digitize public records, automate permit processing, and improve citizen service workflows',
      icon: Building2,
      details: 'modernize government services with digital document workflows. process permits faster, digitize historical records, automate FOIA requests, and improve citizen access to services. reduce processing times from weeks to hours while maintaining data security and compliance.'
    },
    {
      id: 'realestate',
      title: 'real estate',
      description: 'accelerate property transactions with automated document verification and contract processing',
      icon: Home,
      details: 'speed up property transactions and reduce closing times. automatically verify documents, extract property information, process title documents, and manage lease agreements. streamline workflows between agents, lenders, and title companies with secure document sharing.'
    },
    {
      id: 'finance',
      title: 'finance',
      description: 'process financial documents, automate compliance checks, and extract data from statements',
      icon: DollarSign,
      details: 'enhance financial operations with automated document intelligence. process loan applications, extract data from financial statements, automate KYC/AML compliance, and analyze invoices at scale. reduce manual data entry and improve accuracy across all financial workflows.'
    }
  ]

  return (
    <section id="industries" className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-zinc-950" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="flex flex-col space-y-2 sm:space-y-3 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">industries</h2>
          <p className="max-w-[700px] text-zinc-400 text-sm sm:text-base">
            trusted by teams across diverse sectors
          </p>
        </div>

        <Tabs defaultValue="law" className="w-full">
          <TabsList className="w-full flex flex-wrap justify-start gap-2 h-auto bg-zinc-900 p-2 mb-6">
            {industries.map((industry) => {
              const Icon = industry.icon
              return (
                <TabsTrigger
                  key={industry.id}
                  value={industry.id}
                  className="flex items-center gap-2 data-[state=active]:bg-zinc-800 data-[state=active]:text-white text-zinc-400"
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{industry.title}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>

          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <TabsContent key={industry.id} value={industry.id} id={`industry-${industry.id}`}>
                <Card className="border-zinc-800 bg-zinc-900">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="h-8 w-8 text-zinc-400" />
                      <CardTitle className="text-white text-2xl font-semibold">{industry.title}</CardTitle>
                    </div>
                    <CardDescription className="text-zinc-400 text-base">
                      {industry.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-zinc-500 leading-relaxed">
                      {industry.details}
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

export default HowItWorks
