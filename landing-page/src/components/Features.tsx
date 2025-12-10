import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

function Features() {
  const features = [
    {
      title: 'Immersive Experience',
      description: 'Step into a world where reality and imagination blend seamlessly',
      icon: '🌟'
    },
    {
      title: 'Real-Time Processing',
      description: 'Lightning-fast performance that adapts to your every movement',
      icon: '⚡'
    },
    {
      title: 'Secure & Private',
      description: 'Your data is encrypted and protected with industry-leading security',
      icon: '🔒'
    },
    {
      title: 'Cross-Platform',
      description: 'Works seamlessly across all your devices and platforms',
      icon: '🌐'
    },
    {
      title: 'AI-Powered',
      description: 'Advanced algorithms that learn and adapt to your preferences',
      icon: '🤖'
    },
    {
      title: '24/7 Support',
      description: 'Our team is always here to help you succeed',
      icon: '💬'
    }
  ]

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-zinc-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Powerful Features
            </h2>
            <p className="max-w-[900px] text-zinc-600 dark:text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to transform your experience
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 transition-all hover:shadow-lg hover:scale-105">
              <CardHeader>
                <div className="text-5xl mb-2">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
