import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Scale, Building2, Home, DollarSign } from "lucide-react"

function HowItWorks() {
  const industries = [
    {
      id: 'law',
      title: 'law firms',
      description: 'transform legal operations with intelligent document processing',
      icon: Scale,
      challenge: 'law firms operate on expertise, but that expertise is often locked in disparate systems, case files, and people\'s heads. document management is manual and time-consuming. precedents are hard to find. case analysis requires hours of manual research.',
      solutions: [
        'scanwise extracts key data from contracts, case files, pleadings, and legal documents',
        'datadash shows case pipeline, litigation trends, and billing metrics',
        'dataengine learns your firm\'s document categories and automatically categorizes new incoming documents',
        'formflow digitizes client intake and matter opening processes',
        'knowhub makes your case library instantly searchable—precedents, templates, and successful case strategies in one place'
      ],
      impact: [
        '70% reduction in document processing time',
        'faster case preparation with instant precedent access',
        'better decision-making with case outcome analytics',
        'more scalable firm growth without proportional staff increases',
        'improved client experience with faster response times'
      ],
      status: 'scanwise is live and ready for law firms today'
    },
    {
      id: 'finance',
      title: 'finance & banking',
      description: 'enhance financial operations with automated document intelligence',
      icon: DollarSign,
      challenge: 'financial institutions are drowning in documentation. loan applications, compliance forms, kyc documents, statements, and audit trails are scattered across systems. manual review processes are slow and error-prone. risk assessment relies on incomplete data.',
      solutions: [
        'scanwise extracts data from loan applications, financial statements, invoices, and compliance documents',
        'datadash provides risk dashboards, portfolio performance analysis, and compliance reporting',
        'dataengine trains models to predict loan defaults, identify fraud patterns, and assess credit risk',
        'formflow digitizes loan applications, kyc processes, and approval workflows',
        'knowhub centralizes compliance documentation and audit trails'
      ],
      impact: [
        '60% faster loan processing times',
        'reduced fraud through pattern detection',
        'better risk assessment with comprehensive data',
        'automated compliance documentation',
        'improved regulatory audit readiness'
      ],
      status: 'currently in development with pilot partners'
    },
    {
      id: 'realestate',
      title: 'real estate',
      description: 'accelerate property transactions and portfolio management',
      icon: Home,
      challenge: 'real estate businesses manage hundreds or thousands of documents—property deeds, leases, inspection reports, tenant applications, maintenance records. finding information is time-consuming. property valuations are manual. tenant screening takes weeks.',
      solutions: [
        'scanwise extracts property details from deeds, inspection reports, and appraisals',
        'datadash shows portfolio performance, vacancy rates, maintenance costs, and roi by property',
        'dataengine trains models for property valuation, tenant creditworthiness assessment, and maintenance prediction',
        'formflow digitizes tenant applications, lease agreements, and property inquiries',
        'knowhub maintains searchable property records, comparables, and market analysis'
      ],
      impact: [
        '80% faster property information retrieval',
        'faster tenant screening and onboarding',
        'data-driven property investment decisions',
        'automated maintenance scheduling',
        'reduced vacancy periods through better marketing'
      ],
      status: 'currently in development'
    },
    {
      id: 'government',
      title: 'government & public sector',
      description: 'modernize citizen services with digital workflows',
      icon: Building2,
      challenge: 'government agencies process millions of documents—permit applications, licenses, registrations, inspections, complaints. manual processing creates backlogs and frustrates citizens. information is scattered across departments. service delivery is slow.',
      solutions: [
        'scanwise extracts information from applications, forms, and permits',
        'datadash shows application processing metrics, approval rates, and service delivery performance',
        'dataengine automates application reviews, eligibility checks, and compliance verification',
        'formflow digitizes application processes, reducing citizen burden and processing time',
        'knowhub centralizes regulations, procedures, and precedents for staff reference'
      ],
      impact: [
        '70% reduction in application processing time',
        'improved citizen satisfaction through faster service',
        'better compliance and audit trails',
        'data-driven policy insights',
        'reduced operational costs'
      ],
      status: 'currently in development with government partners'
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
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Icon className="h-8 w-8 text-zinc-400" />
                        <CardTitle className="text-white text-2xl font-semibold">{industry.title}</CardTitle>
                      </div>
                      <span className="text-xs px-3 py-1 rounded-full bg-zinc-950 text-zinc-400 border border-zinc-800">
                        {industry.status}
                      </span>
                    </div>
                    <CardDescription className="text-zinc-400 text-base">
                      {industry.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">the challenge:</h4>
                      <p className="text-sm text-zinc-500 leading-relaxed">
                        {industry.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">how we help:</h4>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, idx) => (
                          <li key={idx} className="text-sm text-zinc-500 flex items-start gap-2">
                            <span className="text-zinc-600 mt-1">•</span>
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">impact:</h4>
                      <ul className="space-y-2">
                        {industry.impact.map((item, idx) => (
                          <li key={idx} className="text-sm text-zinc-500 flex items-start gap-2">
                            <span className="text-zinc-600 mt-1">✓</span>
                            <span>{item}</span>
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

export default HowItWorks
