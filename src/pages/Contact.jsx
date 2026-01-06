import Container from '../components/common/Container'
import Button from "../components/common/Button";
import "../styles/contact.css";

export default function Contact() {
  return (
    <section className="contact">

      {/* HERO */}
      <div className="contact-hero">
        <Container>
          <span className="eyebrow">Get in touch</span>
          <h1>
            Let’s talk about
            <span> your goals</span>
          </h1>
          <p>
            Have questions, feedback, or want a custom demo?
            Our team is ready to help.
          </p>
        </Container>
      </div>

      {/* CONTACT OPTIONS */}
      <div className="contact-options">
        <Container>
          <div className="options-grid">
            <div className="option-card">
              <h3>Sales</h3>
              <p>Talk to our sales team about pricing and plans.</p>
              <span>sales@myapplication.com</span>
            </div>

            <div className="option-card">
              <h3>Support</h3>
              <p>Need help using the product? We’re here.</p>
              <span>support@myapplication.com</span>
            </div>

            <div className="option-card">
              <h3>Careers</h3>
              <p>Want to join our team? Let’s connect.</p>
              <span>careers@myapplication.com</span>
            </div>
          </div>
        </Container>
      </div>

      {/* FORM */}
      <div className="contact-form-section">
        <Container>
          <div className="form-wrapper">
            <div className="form-info">
              <h2>Send us a message</h2>
              <p>
                Fill out the form and we’ll get back to you within 24 hours.
              </p>

              <ul>
                <li>✔ Fast response</li>
                <li>✔ No spam, ever</li>
                <li>✔ Secure & private</li>
              </ul>
            </div>

            <form className="contact-form">
              <div className="field">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" />
              </div>

              <div className="field">
                <label>Email Address</label>
                <input type="email" placeholder="you@company.com" />
              </div>

              <div className="field">
                <label>Subject</label>
                <input type="text" placeholder="How can we help?" />
              </div>

              <div className="field">
                <label>Message</label>
                <textarea rows="5" placeholder="Write your message here..." />
              </div>

              <Button full>Send Message</Button>
            </form>
          </div>
        </Container>
      </div>

      {/* TRUST STRIP */}
      <div className="contact-trust">
        <Container>
          <p>
            Trusted by 10,000+ teams • 99.9% uptime • Enterprise-grade security
          </p>
        </Container>
      </div>

    </section>
  );
}
