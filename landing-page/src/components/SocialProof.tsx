import { Card, CardContent } from "@/components/ui/card"

function SocialProof() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      content: 'Warped Mirrors transformed how we approach innovation. The experience is truly groundbreaking.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, StartupXYZ',
      content: 'The best investment we made this year. Our team productivity increased by 300%.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Designer, CreativeAgency',
      content: 'Intuitive, powerful, and beautiful. Everything we needed in one platform.',
      rating: 5
    }
  ]

  const stats = [
    { value: '10K+', label: 'Active Users' },
    { value: '99.9%', label: 'Uptime' },
    { value: '4.9/5', label: 'Rating' },
    { value: '24/7', label: 'Support' }
  ]

  const companies = ['TechCorp', 'StartupXYZ', 'CreativeAgency', 'InnovateLab', 'FutureTech']

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50 dark:bg-zinc-950">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">
            Trusted by Industry Leaders
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
                <CardContent className="pt-6">
                  <div className="text-yellow-500 mb-4">
                    {'★'.repeat(testimonial.rating)}
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-zinc-900 dark:text-zinc-100">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mb-6">
            Trusted by
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {companies.map((company, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-700 dark:text-zinc-300 font-semibold"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
