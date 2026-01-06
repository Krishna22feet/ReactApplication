import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Container from '../common/Container'
import Button from '../common/Button'
import './header.css'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Features', to: '/features' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Contact', to: '/contact' }
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="header">
      <Container>
        <div className="header-inner">
          {/* Logo */}
          <Link to="/" className="logo">
            <span className="logo-badge">⚡</span>
            <span className="logo-text">
              My<span className="logo-accent">Application</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="nav">
            {navItems.map(item => (
              <Link
                key={item.label}
                to={item.to}
                className={`nav-link ${
                  location.pathname === item.to ? 'active' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="header-actions">
            <button className="login-btn">Login</button>
            <Button>Get Started</Button>

            <button
              className="menu-btn"
              onClick={() => setMenuOpen(prev => !prev)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
          {navItems.map(item => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  )
}

export default Header
