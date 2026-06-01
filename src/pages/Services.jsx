import { Link } from 'react-router-dom'
import houseImg from '../assets/res.jpg'
import buildingImg from '../assets/home.jpg'
import starImg from '../assets/bnb.jpg'
import moveInImg from '../assets/in.jpg'
import moveOutImg from '../assets/out.jpg'
import partyImg from '../assets/par.jpg'

const services = [
  {
    img: houseImg,
    title: 'Residential Cleaning',
    desc: 'Your home deserves to be a sanctuary. Our residential cleaning service covers every room, every corner, and every surface — leaving your space fresh, organized, and truly clean.',
    includes: [
      'Kitchen deep clean (counters, appliances, sink)',
      'Bathroom scrubbing and sanitizing',
      'Vacuuming and mopping all floors',
      'Dusting surfaces, blinds, and fans',
      'Bedroom tidying and linen change (on request)',
      'Trash removal throughout',
    ],
  },
  {
    img: buildingImg,
    imgPosition: 'center 70%',
    title: 'Commercial Cleaning',
    desc: 'A clean workplace boosts productivity and leaves a lasting impression on clients and visitors. We offer flexible scheduling — including after-hours — to keep your business spotless without disruption.',
    includes: [
      'Common areas, lobbies, and hallways',
      'Restroom deep cleaning and restocking',
      'Workstation and desk sanitizing',
      'Break rooms and kitchen areas',
      'Window sill and glass cleaning',
      'Trash collection and liner replacement',
    ],
  },
  {
    img: starImg,
    title: 'Airbnb Cleaning',
    desc: 'Impress every guest with a hotel-quality clean. We specialize in fast, thorough turnovers timed to your check-in and check-out windows — so your listing always looks 5-star ready.',
    includes: [
      'Full linen change and bed making',
      'Kitchen and dishes cleaned and reset',
      'Bathroom scrubbed and restocked',
      'Floors vacuumed and mopped',
      'Amenities checked and restocked',
      'Listing inspection walkthrough',
    ],
  },
  {
    img: moveInImg,
    title: 'Move In Cleaning',
    desc: "Starting fresh in a new space? Let us deep clean before you unpack so you can settle in with confidence knowing every surface has been properly cleaned and sanitized.",
    includes: [
      'Interior cabinet and drawer cleaning',
      'Appliance deep clean inside and out',
      'Bathroom scrub and full sanitize',
      'Baseboards, trim, and windowsills wiped',
      'All floors scrubbed and polished',
      'Final walkthrough inspection',
    ],
  },
  {
    img: moveOutImg,
    title: 'Move Out Cleaning',
    desc: "Moving out and want your deposit back? We'll leave your old place in pristine condition — cleaner than when you arrived — so you can close that chapter with confidence.",
    includes: [
      'Walls spot-cleaned where needed',
      'Interior cabinet and drawer cleaning',
      'Appliance cleaned inside and out',
      'Bathroom deep scrub and sanitize',
      'All floors scrubbed and polished',
      'Final walkthrough to maximize deposit return',
    ],
  },
  {
    img: partyImg,
    title: 'After Party Cleaning',
    desc: "You threw the party — we'll handle the aftermath. From trash to spills to general disarray, our after party cleaning service gets your home or venue back to pristine in no time.",
    includes: [
      'Trash and recycling removal',
      'Surface cleaning and sanitizing',
      'Kitchen clean-up and full reset',
      'Floor vacuuming and mopping',
      'Bathroom cleaning and restocking',
      'Furniture arrangement back to original',
    ],
  },
]

export default function Services() {
  return (
    <main className="page-wrapper">
      <section className="page-hero">
        <h1>Our Services</h1>
        <p>Professional cleaning for homes, businesses, rentals, events, and everything in between.</p>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="services-full-grid">
            {services.map(({ img, imgPosition, title, desc, includes }) => (
              <div className="service-card-full" key={title}>
                <img src={img} alt={title} className="service-img" style={imgPosition ? { objectPosition: imgPosition } : undefined} />
                <div className="service-card-full-body">
                  <h2>{title}</h2>
                  <p>{desc}</p>
                  <div className="service-includes">
                    <h4>What's Included</h4>
                    <ul>
                      {includes.map(item => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="section-inner">
          <h2>Not Sure Which Service You Need?</h2>
          <p>Reach out and we'll help you figure out the best fit for your situation.</p>
          <Link to="/contact" className="btn-primary">Get In Touch</Link>
        </div>
      </section>
    </main>
  )
}
