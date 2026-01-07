import Container from '../common/Container'
import './features.css'

const Features = ({ features }) => {
  if (!features) return null

  const items = features.items || []

  return (
    <section className="features">
      <Container>
        {/* Header */}
        <header className="features-header">
          <span className="features-eyebrow">
            {features.eyebrow}
          </span>

          <h2 className="features-title">
            {features.title}{' '}
            {features.highlight && <span>{features.highlight}</span>}
          </h2>

          <p className="features-subtitle">
            {features.subtitle}
          </p>
        </header>

        {/* Creative Layout */}
        <div className="features-canvas">
          {items.map((item, index) => (
            <article
              key={item.id || index}
              className={`feature-card feature-card-${index % 3}`}
            >
              <div className="feature-icon-wrapper">
                <div className="feature-icon">
                  {item.icon || '⚡'}
                </div>
              </div>

              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-description">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Features