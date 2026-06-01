import { Link } from 'react-router-dom'
import { Star, ShieldCheck, Award, Leaf, Clock } from 'lucide-react'
import crownImg from '../assets/crown.png'
import img1 from '../assets/IMG1.jpg'
import img2 from '../assets/IMG2.jpg'
import img3 from '../assets/IMG3.jpg'
import img4 from '../assets/IMG4.jpg'
import img5 from '../assets/IMG5.jpg'
import img6 from '../assets/IMG6.jpg'
import img7 from '../assets/IMG7.jpg'
import img8 from '../assets/IMG8.jpg'
import img9 from '../assets/IMG9.jpg'
import img10 from '../assets/IMG10.jpg'
import img11 from '../assets/IMG11.jpg'
import img12 from '../assets/IMG12.jpg'
import img13 from '../assets/IMG13.jpg'
import img14 from '../assets/IMG14.jpg'
import img15 from '../assets/IMG15.jpg'

const galleryImages = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15]
import houseImg from '../assets/home.png'
import buildingImg from '../assets/com.png'
import moveImg from '../assets/key.png'
import partyImg from '../assets/party.png'

const reviews = [
  {
    name: 'Sarah M.',
    type: 'Residential Client',
    text: 'Absolutely incredible service. My house has never looked this clean. They were on time, thorough, and paid attention to every detail. Will definitely book again!',
  },
  {
    name: 'James T.',
    type: 'Airbnb Host',
    text: 'I use them for all my Airbnb turnovers and my guests consistently rave about how clean the place is. They are fast, reliable, and my listings stay at 5 stars.',
  },
  {
    name: 'Maria L.',
    type: 'Move-Out Clean',
    text: 'Hired them for a move-out clean and got my full deposit back. The place looked better than when I moved in. Highly recommend to anyone moving!',
  },
  {
    name: 'David R.',
    type: 'Commercial Client',
    text: 'We use them weekly for our office and the difference is night and day. Professional, discreet, and our team loves coming into a clean workspace every Monday.',
  },
]

const services = [
  {
    img: houseImg,
    title: 'Residential',
    desc: 'Thorough top-to-bottom cleaning for homes of all sizes. We treat your home like our own.',
    imgStyle: { width: '64px', height: '64px' },
  },
  {
    img: moveImg,
    title: 'Move In / Move Out',
    desc: 'Deep cleaning for a fresh start or a spotless finish — helping you settle in or get your deposit back.',
    imgStyle: { width: '64px', height: '64px' },
  },
  {
    img: buildingImg,
    title: 'Commercial',
    desc: 'Keep your workspace clean, professional, and welcoming for employees and clients alike.',
  },
  {
    img: partyImg,
    title: 'After Party',
    desc: 'Let us handle the cleanup after your event so you can relax and enjoy the memories.',
    imgStyle: { width: '64px', height: '64px', marginTop: '3px' },
  },
]

const whyUs = [
  {
    Icon: ShieldCheck,
    title: 'Fully Insured',
    desc: 'We are fully licensed and insured, giving you complete peace of mind every visit.',
  },
  {
    Icon: Award,
    title: 'Experienced Team',
    desc: 'Our trained cleaners bring years of experience to every job, big or small.',
  },
  {
    Icon: Leaf,
    title: 'Eco-Friendly Products',
    desc: 'We use safe, non-toxic cleaning products that are effective and family-friendly.',
  },
  {
    Icon: Clock,
    title: 'On-Time, Every Time',
    desc: 'We respect your schedule. Punctuality and reliability are part of every service.',
  },
]

export default function HomePage() {
  return (
    <main className="page-wrapper">
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-crown"><img src={crownImg} alt="crown" /></div>
          <div className="hero-brand-block">
            <span className="hero-script">Signature</span>
            <span className="hero-shine">SHINE</span>
            <span className="hero-luxe">— Luxe &amp; Co. —</span>
          </div>
          <div className="hero-gold-rule" />
          <p className="hero-tagline">
            We don't just clean, we <em>Elevate.</em> Every space. Every time.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn-primary">Get In Touch</Link>
            <Link to="/services" className="btn-outline">View Services</Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section">
        <div className="section-inner section-inner--wide">
          <div className="section-header">
            <p className="section-label">What We Offer</p>
            <h2 className="section-title">Cleaning Services for Every Need</h2>
            <p className="section-subtitle">
              Whether it's your home, business, rental, or a fresh start — we have the right cleaning service for you.
            </p>
          </div>
          <div className="services-grid">
            {services.map(({ img, title, desc, imgStyle }) => (
              <div className="service-card" key={title}>
                <div className="service-img-circle">
                  <img src={img} alt={title} className="service-img" style={imgStyle} />
                </div>
                <div className="service-card-body">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <Link to="/services" className="service-link">Learn more →</Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '52px' }}>
            <Link to="/services" className="btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-header">
            <p className="section-label">Why Choose Us</p>
            <h2 className="section-title">The Signature Shine Difference</h2>
            <p className="section-subtitle">
              We go beyond clean. Here's what sets us apart from the rest.
            </p>
          </div>
          <div className="why-grid">
            {whyUs.map(({ Icon, title, desc }) => (
              <div className="why-item" key={title}>
                <div className="why-icon why-icon--filled">
                  <Icon size={24} color="white" strokeWidth={1.75} />
                </div>
                <div className="why-content">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="gallery-section">
        <div className="gallery-header section-inner">
          <p className="section-label">Our Work</p>
          <h2 className="section-title">A Glimpse of the Shine</h2>
        </div>
        <div className="gallery-track-wrapper">
          <div className="gallery-track">
            {[...galleryImages, ...galleryImages].map((img, i) => (
              <div className="gallery-item" key={i}>
                <img src={img} alt={`Gallery ${(i % 15) + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <p className="section-label">Customer Reviews</p>
            <h2 className="section-title">What Our Clients Are Saying</h2>
            <p className="section-subtitle">
              Don't just take our word for it — here's what real customers have to say.
            </p>
          </div>
          <div className="reviews-grid">
            {reviews.map(r => (
              <div className="review-card" key={r.name}>
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} color="#c9a55a" fill="#c9a55a" strokeWidth={0} />
                  ))}
                </div>
                <p className="review-text">"{r.text}"</p>
                <div className="review-author">
                  <div className="review-avatar">{r.name[0]}</div>
                  <div>
                    <div className="review-name">{r.name}</div>
                    <div className="review-type">{r.type}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="section-inner">
          <h2>Ready for a Spotless Space?</h2>
          <p>Reach out today and let's make your place shine.</p>
          <Link to="/contact" className="btn-primary">Contact Us</Link>
        </div>
      </section>
    </main>
  )
}
