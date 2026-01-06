import Container from '../common/Container'
import Button from '../common/Button'
import './finalcta.css'

const FinalCTA = () => {
  return (
    <section className="final-cta">
      {/* Decorative Orbs */}
      <div className="cta-orb orb-1" />
      <div className="cta-orb orb-2" />

      <Container>
        <div className="cta-card">
          <span className="cta-eyebrow">Ready to move faster?</span>

          <h2>
            Build, launch, and scale
            <br />
            <span>without limits</span>
          </h2>

          <p>
            Everything you need to ship production-ready software,
            trusted by teams worldwide.
          </p>

          <div className="cta-actions">
            <Button size="lg">Get Started Free</Button>
            <Button variant="outline" size="lg">
              Talk to Sales
            </Button>
          </div>

          <div className="cta-meta">
            <span>✓ No credit card required</span>
            <span>✓ Cancel anytime</span>
            <span>✓ Enterprise ready</span>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FinalCTA
