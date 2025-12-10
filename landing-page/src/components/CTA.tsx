import './CTA.css'

function CTA() {
  return (
    <section className="cta">
      <div className="cta-container">
        <div className="cta-content">
          <h2>Ready to Transform Your Experience?</h2>
          <p>
            Join thousands of satisfied users and start your journey today.
            No credit card required for your free trial.
          </p>
          <div className="cta-buttons">
            <button className="cta-primary">Start Free Trial</button>
            <button className="cta-secondary">Schedule a Demo</button>
          </div>
          <p className="cta-note">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}

export default CTA
