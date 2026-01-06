import Container from '../common/Container'
import './testimonials.css'

const testimonials = [
  {
    quote:
      'This platform completely transformed how our team ships products. The performance and reliability are unmatched.',
    name: 'Aarav Patel',
    role: 'Engineering Lead',
    company: 'Fintech Corp',
    avatar: 'https://i.pravatar.cc/150?img=12'
  },
  {
    quote:
      'Setup was seamless, and the customization options fit perfectly into our existing workflow.',
    name: 'Emily Johnson',
    role: 'Product Manager',
    company: 'SaaS Labs',
    avatar: 'https://i.pravatar.cc/150?img=32'
  },
  {
    quote:
      'We scaled to thousands of users without worrying about infrastructure or downtime.',
    name: 'Daniel Kim',
    role: 'CTO',
    company: 'Cloudify',
    avatar: 'https://i.pravatar.cc/150?img=48'
  },
  {
    quote:
      'The attention to detail and overall experience feels very premium. Our customers love it.',
    name: 'Sophia Martinez',
    role: 'UX Director',
    company: 'DesignHub',
    avatar: 'https://i.pravatar.cc/150?img=25'
  }
]

const Testimonials = () => {
  return (
    <section className="testimonials">
      <Container>
        <div className="testimonials-grid">
          {/* Featured */}
          <div className="testimonial-featured">
            <span className="eyebrow">Testimonials</span>
            <h2>Trusted by fast-moving teams worldwide</h2>

            <blockquote>
              “{testimonials[0].quote}”
            </blockquote>

            <div className="author">
              <img src={testimonials[0].avatar} alt={testimonials[0].name} />
              <div>
                <strong>{testimonials[0].name}</strong>
                <span>
                  {testimonials[0].role} · {testimonials[0].company}
                </span>
              </div>
            </div>
          </div>

          {/* Scroll Rail */}
          <div className="testimonial-rail">
            {testimonials.slice(1).map((item, index) => (
              <div className="testimonial-card" key={index}>
                <p className="quote">“{item.quote}”</p>

                <div className="author">
                  <img src={item.avatar} alt={item.name} />
                  <div>
                    <strong>{item.name}</strong>
                    <span>
                      {item.role} · {item.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Testimonials
