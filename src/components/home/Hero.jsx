import Container from '../common/Container'
import Button from '../common/Button'
import './hero.css'

const Hero = ({ hero }) => {
  if (!hero) return null

  const image = hero.image?.[0]
  const imageUrl = image?.formats?.large?.url || image?.url
  const imageAlt = image?.alternativeText || 'Dashboard Preview'

  return (
    <section className="hero">
      <Container>
        <div className="hero-grid">
          <div className="hero-content">
            {hero.badgeText && (
              <span className="hero-badge">
                {hero.badgeText}
              </span>
            )}

            <h1 className="hero-title">
              {hero.title}
              <span className="highlight"> {hero.highlight}</span>
            </h1>

            <p className="hero-description">
              {hero.description}
            </p>

            <div className="hero-actions">
              {hero.primaryCtaText && (
                <Button as="a" href={hero.primaryCtaLink}>
                  {hero.primaryCtaText}
                </Button>
              )}

              {hero.secondaryCtaText && (
                <a
                  className="secondary-action"
                  href={hero.secondaryCtaLink}
                >
                  {hero.secondaryCtaText}
                </a>
              )}
            </div>
          </div>

          <div className="hero-visual">
            {imageUrl && (
              <div className="visual-card">
                <img src={imageUrl} alt={imageAlt} />
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero