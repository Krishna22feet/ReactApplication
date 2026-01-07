import Container from '../common/Container'
import Button from '../common/Button'
import './finalcta.css'

const FinalCTA = ({ finalCta }) => {
  if (!finalCta) return null

  const metaItems = finalCta.metaItems || []

  return (
    <section className="final-cta">
      {/* Decorative Orbs */}
      <div className="cta-orb orb-1" />
      <div className="cta-orb orb-2" />

      <Container>
        <div className="cta-card">
          <span className="cta-eyebrow">
            {finalCta.eyebrow}
          </span>

          <h2>
            {finalCta.title}
            <br />
            {finalCta.highlight && (
              <span>{finalCta.highlight}</span>
            )}
          </h2>

          <p>{finalCta.description}</p>

          <div className="cta-actions">
            {finalCta.primaryCtaText && (
              <Button
                as="a"
                href={finalCta.primaryCtaLink}
                size="lg"
              >
                {finalCta.primaryCtaText}
              </Button>
            )}

            {finalCta.secondaryCtaText && (
              <Button
                as="a"
                href={finalCta.secondaryCtaLink}
                variant="outline"
                size="lg"
              >
                {finalCta.secondaryCtaText}
              </Button>
            )}
          </div>

          {metaItems.length > 0 && (
            <div className="cta-meta">
              {metaItems.map((item) => (
                <span key={item.id}>
                  ✓ {item.text}
                </span>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

export default FinalCTA