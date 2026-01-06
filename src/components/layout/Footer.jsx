import Container from '../common/Container'
import './footer.css'

const footerLinks = {
  Product: ['Features', 'Pricing', 'Integrations', 'Demo'],
  Company: ['About', 'Careers', 'Blog', 'Contact'],
  Resources: ['Docs', 'Support', 'Community', 'Status']
}

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com', icon: '🐦' },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: '💼' },
  { name: 'GitHub', href: 'https://github.com', icon: '🐙' }
]

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        {/* Main */}
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand">
            <div className="logo">
              My<span>Application</span>
            </div>

            <p className="footer-tagline">
              Build, scale, and ship your product with confidence.
            </p>

            <form className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Join newsletter</button>
            </form>
          </div>

          {/* Navigation */}
          <nav className="footer-nav">
            {Object.entries(footerLinks).map(([title, links], i) => (
              <div key={i} className="footer-column">
                <h4>{title}</h4>
                {links.map((link, idx) => (
                  <a key={idx} href="#">
                    {link}
                  </a>
                ))}
              </div>
            ))}

            <div className="footer-column">
              <h4>Follow</h4>
              <div className="footer-social">
                {socialLinks.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    aria-label={item.name}
                  >
                    <span>{item.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} MyProduct. All rights reserved.
          </span>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
