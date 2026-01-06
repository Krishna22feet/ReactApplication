import Container from '../common/Container'
import { features } from '../../data/homeData'
import './features.css'

const Features = () => {
  return (
    <section className="features">
      <Container>
        {/* Header */}
        <header className="features-header">
          <span className="features-eyebrow">Features</span>
          <h2 className="features-title">
            Everything you need to <span>build faster</span>
          </h2>
          <p className="features-subtitle">
            A carefully crafted toolkit that helps teams ship products
            with speed, confidence, and clarity.
          </p>
        </header>

        {/* Creative Layout */}
        <div className="features-canvas">
          {features.map((item, index) => (
            <article
              key={index}
              className={`feature-card feature-card-${index % 3}`}
            >
              <div className="feature-icon-wrapper">
                <div className="feature-icon">
                  {item.icon || '⚡'}
                </div>
              </div>

              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-description">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Features
