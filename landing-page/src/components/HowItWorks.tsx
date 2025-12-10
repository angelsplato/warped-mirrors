import './HowItWorks.css'

function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Sign Up',
      description: 'Create your account in seconds. No credit card required to start.'
    },
    {
      number: '02',
      title: 'Configure',
      description: 'Customize your experience with our intuitive setup wizard.'
    },
    {
      number: '03',
      title: 'Launch',
      description: 'Start experiencing the power of Warped Mirrors immediately.'
    },
    {
      number: '04',
      title: 'Scale',
      description: 'Grow your usage as your needs expand with seamless scaling.'
    }
  ]

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="how-it-works-container">
        <div className="how-it-works-header">
          <h2>How It Works</h2>
          <p>Get started in four simple steps</p>
        </div>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
