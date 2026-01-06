import Container from '../common/Container'
import './trustedby.css'

const logos = [
  {
    name: 'Google',
    src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
  },
  {
    name: 'Microsoft',
    src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'
  },
  {
    name: 'Amazon',
    src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
  },
  {
    name: 'Netflix',
    src: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
  },
  {
    name: 'Spotify',
    src: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg'
  }
]

const TrustedBy = () => {
  return (
    <section className="trusted">
      <Container>
        <p className="trusted-label">Trusted by teams at</p>

        {/* Logo Marquee */}
        <div className="logo-marquee">
          <div className="logo-track">
            {[...logos, ...logos].map((logo, index) => (
              <div className="logo-item" key={index}>
                <img src={logo.src} alt={logo.name} />
              </div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="trusted-metrics">
          <div>
            <strong>10k+</strong>
            <span>Active users</span>
          </div>
          <div>
            <strong>99.9%</strong>
            <span>Uptime</span>
          </div>
          <div>
            <strong>120+</strong>
            <span>Countries</span>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default TrustedBy
