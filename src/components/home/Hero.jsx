import Container from '../common/Container'
import Button from '../common/Button'
import './hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-content">
            <span className="hero-badge">
              ✨ Built for modern teams
            </span>

            <h1 className="hero-title">
              Build, scale, and ship your product
              <span className="highlight"> faster</span>
            </h1>

            <p className="hero-description">
              A production-ready platform to design, develop, and deploy
              modern applications with speed, security, and confidence. A production-ready platform to design, develop, and deploy
              modern applications with speed, security, and confidence.
            </p>

            <div className="hero-actions">
              <Button>Get Started</Button>
              <button className="secondary-action">
                View Demo →
              </button>
            </div>
          </div>

          {/* Right Visual (Placeholder for later) */}
          <div className="hero-visual">
            <div className="visual-card">
              <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*rQ3d_dKG7V2JhX8SrUjs6g.png" alt="Dashboard Preview" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
