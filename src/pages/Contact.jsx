import { useState } from 'react'
import { Phone, MessageSquare, Mail, CalendarCheck, Sparkles, ThumbsUp, ChevronDown } from 'lucide-react'

function BookingCalendar() {
  return (
    <iframe
      src="https://cal.com/signature-shine"
      width="100%"
      height="700px"
      frameBorder="0"
      title="Book a Cleaning"
    />
  )
}

const contactMethods = [
  {
    Icon: Phone,
    label: 'Call Us',
    value: '352-667-8583',
    desc: 'Give us a call anytime during business hours. We love hearing from you.',
    btnLabel: 'Call Now',
    href: 'tel:+13526678583',
  },
  {
    Icon: MessageSquare,
    label: 'Text Us',
    value: '352-667-8583',
    desc: "Prefer to text? Send us a message and we'll get back to you quickly.",
    btnLabel: 'Send a Text',
    href: 'sms:+13526678583',
  },
  {
    Icon: Mail,
    label: 'Email Us',
    value: 'signatureshineluxe@gmail.com',
    desc: 'Drop us an email for quotes, questions, or scheduling.',
    btnLabel: 'Send Email',
    href: 'mailto:signatureshineluxe@gmail.com',
  },
]

const steps = [
  {
    Icon: Phone,
    step: '01',
    title: 'Reach Out',
    desc: "Call, text, or email us to tell us about your space and what you need. We'll get back to you promptly.",
  },
  {
    Icon: CalendarCheck,
    step: '02',
    title: 'Schedule Your Clean',
    desc: "We'll find a date and time that works for you. No complicated booking — just a quick conversation.",
  },
  {
    Icon: Sparkles,
    step: '03',
    title: 'We Show Up & Clean',
    desc: "Our team arrives on time, fully equipped, and gets to work. You don't have to lift a finger.",
  },
  {
    Icon: ThumbsUp,
    step: '04',
    title: 'Enjoy Your Space',
    desc: "Walk into a spotless home or business and enjoy the results. We're not done until you're happy.",
  },
]

const faqs = [
  {
    q: 'How do I get a quote?',
    a: "Simply call, text, or email us with details about your space — square footage, number of rooms, and the type of clean you need. We'll give you a fair, transparent quote with no hidden fees.",
  },
  {
    q: 'Do I need to be home during the cleaning?',
    a: "Not at all. Many of our clients provide access and go about their day. We're fully insured and trustworthy, so you can have peace of mind whether you're home or not.",
  },
  {
    q: 'What cleaning products do you use?',
    a: 'We use eco-friendly, non-toxic cleaning products that are safe for kids, pets, and the environment — without sacrificing results.',
  },
  {
    q: 'How far in advance should I book?',
    a: "We recommend booking at least 48 hours in advance, but we do our best to accommodate last-minute requests. Give us a call and we'll see what we can do.",
  },
  {
    q: 'Do you offer recurring cleaning services?',
    a: 'Yes! We offer weekly, bi-weekly, and monthly recurring cleans at discounted rates. Consistency means a consistently clean space.',
  },
  {
    q: "What if I'm not satisfied with the clean?",
    a: "Your satisfaction is our priority. If something wasn't done to your standard, let us know within 24 hours and we'll come back to make it right — at no extra charge.",
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(o => !o)}>
        <span>{q}</span>
        <ChevronDown size={18} strokeWidth={2} className="faq-chevron" />
      </button>
      {open && <p className="faq-answer">{a}</p>}
    </div>
  )
}

export default function Contact() {
  return (
    <main className="page-wrapper">
      <section className="page-hero">
        <h1>Get In Touch</h1>
        <p>We'd love to hear from you. Reach out by phone, text, or email — whatever works best for you.</p>
      </section>

      {/* Booking */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <p className="section-label">Book Online</p>
            <h2 className="section-title">Schedule Your Clean</h2>
            <p className="section-subtitle">
              Pick a date and time that works for you — it only takes a minute.
            </p>
          </div>
          <div className="booking-wrap">
            <BookingCalendar />
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section section-alt">
        <div className="section-inner">
          <div className="contact-intro">
            <h2>Prefer to Reach Us Directly?</h2>
            <p>We're always happy to hear from you. Call, text, or email — whatever feels easiest.</p>
          </div>

          <div className="contact-cards">
            {contactMethods.map(({ Icon, label, value, desc, btnLabel, href }) => (
              <div className="contact-card" key={label}>
                <div className="contact-card-icon">
                  <Icon size={30} color="white" strokeWidth={1.75} />
                </div>
                <h3>{label}</h3>
                <div className="contact-card-value">{value}</div>
                <p className="contact-card-desc">{desc}</p>
                <a href={href} className="contact-card-btn">{btnLabel}</a>
              </div>
            ))}
          </div>

          <div className="hours-section">
            <h3>Business Hours</h3>
            <div className="hours-grid">
              <span className="hours-day">Monday – Friday</span>
              <span className="hours-time">8:00 AM – 6:00 PM</span>
              <span className="hours-day">Saturday</span>
              <span className="hours-time">9:00 AM – 4:00 PM</span>
              <span className="hours-day">Sunday</span>
              <span className="hours-time">By Appointment</span>
            </div>
            <div className="service-area">
              <h3>Service Area</h3>
              <p>Pasco, Hernando, Hillsborough &amp; Pinellas Counties</p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <p className="section-label">The Process</p>
            <h2 className="section-title">What to Expect</h2>
            <p className="section-subtitle">
              Getting started is simple. Here's how it works from first contact to a spotless space.
            </p>
          </div>
          <div className="steps-grid">
            {steps.map(({ Icon, step, title, desc }) => (
              <div className="step-card" key={step}>
                <div className="step-number">{step}</div>
                <div className="step-icon">
                  <Icon size={24} color="white" strokeWidth={1.75} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Everything you need to know before booking. Can't find your answer? Just reach out.
            </p>
          </div>
          <div className="faq-list">
            {faqs.map(({ q, a }) => (
              <FaqItem key={q} q={q} a={a} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
