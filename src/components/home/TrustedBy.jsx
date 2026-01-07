import Container from '../common/Container'
import './trustedby.css'

const TrustedBy = ({ trustedBy }) => {
  if (!trustedBy) return null

  // if trustedBy is already an object (Option A fix)
  const logos = trustedBy.logos || []
  const metrics = trustedBy.metrics || []

  return (
    <section className="trusted">
      <Container>
        <p className="trusted-label">
          {trustedBy.label}
        </p>

        {/* Logo Marquee */}
        <div className="logo-marquee">
          <div className="logo-track">
            {[...logos, ...logos].map((logo, index) => {
              const image = logo.image?.[0]
              const imgSrc =
                image?.formats?.small?.url ||
                image?.url

              return (
                <div className="logo-item" key={index}>
                  {imgSrc && (
                    <img src={imgSrc} alt={logo.name} />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Metrics */}
        <div className="trusted-metrics">
          {metrics.map((metric) => (
            <div key={metric.id}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default TrustedBy
