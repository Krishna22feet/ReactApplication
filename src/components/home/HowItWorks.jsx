import Container from '../common/Container'
import './howitworks.css'

const steps = [
  {
    step: '01',
    title: 'Connect your workflow',
    description:
      'Integrate seamlessly with your existing tools and infrastructure in minutes.'
  },
  {
    step: '02',
    title: 'Configure & customize',
    description:
      'Tailor features, permissions, and workflows to match your team’s needs.'
  },
  {
    step: '03',
    title: 'Launch with confidence',
    description:
      'Deploy faster with built-in performance, security, and scalability.'
  }
]

const HowItWorks = () => {
  return (
    <section className="how">
      <Container>
        {/* Header */}
        <header className="how-header">
          <span className="how-eyebrow">How it works</span>
          <h2 className="how-title">
            From setup to launch <span>in three simple steps</span>
          </h2>
          <p className="how-subtitle">
            A streamlined process designed to help your team move faster —
            without unnecessary complexity.
          </p>
        </header>

        {/* Steps */}
        <div className="how-steps">
          {steps.map((item, index) => (
            <article className="how-step" key={index}>
              <div className="step-indicator">
                <span>{item.step}</span>
              </div>

              <h3 className="step-title">{item.title}</h3>
              <p className="step-description">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default HowItWorks
