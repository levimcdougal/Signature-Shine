import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          <span className="logo-text">
            <span className="logo-script">
              <span className="logo-script-pink">Signature</span>
              <span className="logo-script-gold"> Shine</span>
            </span>
            <span className="logo-sub">Luxe &amp; Co.</span>
          </span>
        </NavLink>

        <ul className={`navbar-links${open ? ' open' : ''}`}>
          <li>
            <NavLink to="/" end onClick={() => setOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={() => setOpen(false)}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbar-cta" onClick={() => setOpen(false)}>
              Contact Us
            </NavLink>
          </li>
        </ul>

        <button
          className="hamburger"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
