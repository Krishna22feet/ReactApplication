import Container from '../components/common/Container'
import FinalCTA from '../components/home/FinalCTA'
import '../styles/about.css'

const values = [
  {
    title: 'Customer First',
    desc: 'We design and build with real users in mind, always.'
  },
  {
    title: 'Quality at Scale',
    desc: 'Production-ready systems that don’t break when you grow.'
  },
  {
    title: 'Speed with Stability',
    desc: 'Move fast without sacrificing reliability or security.'
  },
  {
    title: 'Transparency',
    desc: 'Clear communication, honest pricing, no dark patterns.'
  }
]

const team = [
  { name: 'Krishna', role: 'Founder & Engineer' },
  { name: 'Aarav', role: 'Product Lead' },
  { name: 'Emily', role: 'Design Head' }
]

const About = () => {
  return (
    <main className="about">
      {/* HERO */}
      <section className="about-hero">
        <Container>
          <span className="eyebrow">About Us</span>
          <h1>
            Building software that
            <span> scales with ambition</span>
          </h1>
          <p>
            We help teams design, ship, and scale production-grade applications
            with confidence.
          </p>
        </Container>
      </section>

      {/* STORY */}
      <section className="about-story">
        <Container>
          <div className="story-grid">
            <div>
              <h2>Our Story</h2>
              <p>
                We started with a simple idea — developers shouldn’t have to
                choose between speed and quality.
              </p>
              <p>
                Today, we help fast-moving teams build reliable, scalable
                software using modern tools, proven patterns, and thoughtful
                design.
              </p>
            </div>

            <div className="story-card">
              <strong>10k+</strong>
              <span>Active Users</span>

              <strong>120+</strong>
              <span>Countries</span>

              <strong>99.9%</strong>
              <span>Uptime</span>
            </div>
          </div>
        </Container>
      </section>

      {/* VALUES */}
      <section className="about-values">
        <Container>
          <h2>What we stand for</h2>

          <div className="values-grid">
            {values.map((item, i) => (
              <div className="value-card" key={i}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* TEAM */}
      <section className="about-team">
        <Container>
          <h2>Our Team</h2>

          <div className="team-grid">
            {team.map((member, i) => (
              <div className="team-card" key={i}>
                <div className="avatar" />
                <strong>{member.name}</strong>
                <span>{member.role}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <FinalCTA />
    </main>
  )
}

export default About
