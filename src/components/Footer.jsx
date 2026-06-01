import { Link } from 'react-router-dom'
import { Phone, MessageSquare } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-brand-wrap">
              <div className="footer-brand">Signature Shine</div>
              <div className="footer-brand-sub">Luxe &amp; Co.</div>
            </div>
            <p className="footer-tagline">
              Luxury cleaning services you can trust. We make your space shine so you can enjoy what matters most.
            </p>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Residential</Link></li>
              <li><Link to="/services">Commercial</Link></li>
              <li><Link to="/services">Airbnb</Link></li>
              <li><Link to="/services">Move In / Move Out</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p>
              <Phone size={13} style={{ marginRight: 6, verticalAlign: 'middle' }} />
              352-667-8583<br />
              <MessageSquare size={13} style={{ marginRight: 6, verticalAlign: 'middle' }} />
              352-667-8583
            </p>
            <h4 style={{ marginTop: 20 }}>Service Area</h4>
            <p>Pasco, Hernando, Hillsborough &amp; Pinellas Counties</p>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; {year} Signature Shine Luxe &amp; Co. &mdash; Owner Kellie Allen. All rights reserved.
        </div>
        <div className="footer-strip">
          Clean Spaces. &hearts; &nbsp; Happy Faces. &hearts; &nbsp; Elevated Living. &hearts; &nbsp;
          <em>That's the Signature Shine Way!</em>
        </div>
      </div>
    </footer>
  )
}
