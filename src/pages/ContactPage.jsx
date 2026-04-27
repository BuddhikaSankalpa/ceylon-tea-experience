import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function ContactPage({ navigate }) {
  const [form, setForm] = useState({ name: '', email: '', type: 'Private Tasting Event', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen font-sans text-gray-800">
      <Nav navigate={navigate} currentPage="contact" />

      {/* Hero */}
      <section
        className="py-24 px-8 text-center relative bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582793988951-9aed5509eb97?q=80&w=2000&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-[#0a1f11]/75"></div>
        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#a67c00] mb-4">Connect With Us</p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">Inquire & Immerse</h1>
          <p className="text-gray-300 max-w-md mx-auto text-sm">
            Our specialists are ready to guide you through every note and aroma.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Left: Info */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-[#1b3b22] mb-8">The Galle Flagship</h2>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4 items-start">
                <div className="text-[#a67c00] text-lg mt-0.5">📍</div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Address</div>
                  <div className="text-sm text-gray-700">42 Church Street, Fort<br />Galle 80000, Sri Lanka</div>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-[#a67c00] text-lg mt-0.5">✉️</div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Email</div>
                  <div className="text-sm text-gray-700">concierge@ceylonheritage.com</div>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-[#a67c00] text-lg mt-0.5">📞</div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Phone</div>
                  <div className="text-sm text-gray-700">+94 91 222 1567</div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Tea Tasting Hours</div>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                <div>Monday – Friday</div><div className="font-bold text-[#1b3b22]">09:00 – 20:00</div>
                <div>Saturday – Sunday</div><div className="font-bold text-[#1b3b22]">10:00 – 22:00</div>
              </div>
            </div>

            <div className="mb-8">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Annual Reservations</div>
              <p className="text-sm text-gray-600">High season (Dec–Apr) books out weeks in advance. We recommend reserving at least 2 weeks ahead for group experiences.</p>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Follow Our Journey</div>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#a67c00] hover:text-[#a67c00] transition">📸</a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#a67c00] hover:text-[#a67c00] transition">📘</a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#a67c00] hover:text-[#a67c00] transition">✉️</a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-[#1b3b22] mb-2">Send an Inquiry</h2>
            <p className="text-sm text-gray-500 mb-8">Allow us to curate your perfect tea journey. Our specialists will respond within 24 hours.</p>

            {submitted ? (
              <div className="bg-[#1b3b22] text-white p-10 rounded text-center">
                <div className="text-4xl mb-4">🍃</div>
                <h3 className="text-2xl font-serif font-bold mb-3">Thank You</h3>
                <p className="text-gray-300 text-sm">We've received your inquiry and will respond within 24 hours. Your Ceylon Heritage journey awaits.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 block">Full Name</label>
                    <input
                      type="text"
                      placeholder="Augustina Pereira"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      required
                      className="w-full border border-gray-200 px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-[#1b3b22] transition"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 block">Email Address</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      required
                      className="w-full border border-gray-200 px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-[#1b3b22] transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 block">Inquiry Type</label>
                  <select
                    value={form.type}
                    onChange={e => setForm({ ...form, type: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-[#1b3b22] transition bg-white"
                  >
                    <option>Private Tasting Event</option>
                    <option>The Leaf Experience ($45)</option>
                    <option>The Artisan Experience ($120)</option>
                    <option>The Planter Stay ($450)</option>
                    <option>Corporate / Group Booking</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 block">Your Message</label>
                  <textarea
                    rows={5}
                    placeholder="How may we assist you today?"
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    required
                    className="w-full border border-gray-200 px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-[#1b3b22] transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1b3b22] text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#122917] transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="h-64 md:h-80 bg-gray-200 relative overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.3905769756!2d80.21546931477005!3d6.026083395766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173a73a9f3cd9%3A0x43e04d3f31c7c46a!2sGalle%20Fort!5e0!3m2!1sen!2slk!4v1634541238000!5m2!1sen!2slk"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(20%)' }}
          allowFullScreen=""
          loading="lazy"
          title="Ceylon Heritage Location"
        ></iframe>
        <div className="absolute bottom-4 left-4 bg-white shadow-lg px-4 py-2 rounded text-xs font-bold text-[#1b3b22] uppercase tracking-wider">
          📍 The Galle Flagship
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-8 bg-[#1b3b22] text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[#a67c00] mb-4">Begin Your Heritage Journey</p>
        <h2 className="text-4xl font-serif font-bold text-white mb-4">Experience the Unparalleled</h2>
        <p className="text-gray-300 text-sm max-w-lg mx-auto mb-8">
          Our curators are ready to guide you through every note and aroma of Pure Ceylon Tea.
        </p>
        <button
          onClick={() => navigate('services')}
          className="bg-[#a67c00] text-white px-10 py-4 text-xs font-bold uppercase tracking-wider hover:bg-[#856300] transition"
        >
          Explore the Estates
        </button>
      </section>

      <Footer navigate={navigate} />
    </div>
  )
}