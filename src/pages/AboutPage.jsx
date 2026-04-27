import Nav from '../components/Nav'
import Footer from '../components/Footer'

const values = [
  {
    icon: "🌿",
    title: "Sustainability",
    desc: "We nurture the soil that nurtures our tea, employing regenerative practices to ensure the land thrives for generations to come."
  },
  {
    icon: "⚱️",
    title: "Authenticity",
    desc: "Unblended and true to origin. We protect the unique character of our estates with no artificial flavoring or mass-market blending."
  },
  {
    icon: "✦",
    title: "Excellence",
    desc: "From the precise plucking standard of two leaves and a bud to the final liquoring, our commitment to quality is uncompromising."
  }
]

const team = [
  {
    name: "Rohan de Silva",
    role: "Master Tea Maker, 3rd Generation",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
  },
  {
    name: "Priya Jayawardena",
    role: "Head of Experiences & Hospitality",
    img: "https://images.unsplash.com/photo-1494790108755-2616b6b63e5a?w=400&q=80"
  },
  {
    name: "Sanjay Perera",
    role: "Estate Manager & Agronomist",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
  }
]

export default function AboutPage({ navigate }) {
  return (
    <div className="min-h-screen font-sans text-gray-800">
      <Nav navigate={navigate} currentPage="about" />

      {/* Hero */}
      <section className="py-20 px-8 bg-[#fdfaf5] text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[#a67c00] mb-4">Our Story</p>
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#1b3b22] mb-6">Our Heritage</h1>
        <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
          A legacy woven into the misty hills of Sri Lanka, where every leaf tells a story of artisanal perfection and deep-rooted tradition.
        </p>
      </section>

      {/* Full-width landscape image */}
      <div className="w-full h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1582793988951-9aed5509eb97?q=80&w=2000&auto=format&fit=crop"
          alt="Tea Estate Landscape"
          className="w-full h-full object-cover"
        />
      </div>

      {/* The Artisan's Journey */}
      <section className="py-24 px-8 bg-[#fdfaf5]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#a67c00] mb-4">Since 1887</p>
            <h2 className="text-4xl font-serif font-bold text-[#1b3b22] mb-6">The Artisan's Journey</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              For over a century, our family has cultivated the finest high-grown teas in the Nuwara Eliya region. We believe that true luxury lies in patience — allowing the unique terroir to express itself in every steep.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Our process remains largely unchanged from our ancestors. Hand-plucked leaves are gently withered, rolled, and oxidized under the watchful eyes of our Master Makers, ensuring that the golden liquor in your cup is a pure reflection of its origin.
            </p>
            <button
              onClick={() => navigate('services')}
              className="text-[#a67c00] text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:gap-4 transition-all"
            >
              Discover the Process →
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1594631252845-29fc4cc8cbf9?w=600&q=80"
              alt="Artisan hands"
              className="w-full rounded shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#1b3b22] text-white p-6 rounded shadow-lg hidden md:block">
              <div className="text-3xl font-serif font-bold text-[#a67c00]">136</div>
              <div className="text-xs uppercase tracking-wider mt-1">Years of Craft</div>
            </div>
          </div>
        </div>
      </section>

      {/* Handcrafting image + text */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1576092762791-dd9e2220cad1?w=600&q=80"
              alt="Tea cup"
              className="w-full rounded shadow-xl"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-xs uppercase tracking-[0.3em] text-[#a67c00] mb-4">The Cup</p>
            <h2 className="text-3xl font-serif font-bold text-[#1b3b22] mb-4">Where Every Sip Tells a Story</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              The altitude of Nuwara Eliya — over 6,000 feet above sea level — creates a natural cool that slows the growth of tea leaves, concentrating their complexity and giving Ceylon tea its signature brightness and delicate muscatel notes.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              When you hold a cup of Ceylon Heritage tea, you hold 136 years of a family's devotion, a mountain's patience, and a culture's pride.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-8 bg-[#f9f8f3]">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[#a67c00] mb-3">What We Stand For</p>
          <h2 className="text-4xl font-serif font-bold text-[#1b3b22]">Our Core Tenets</h2>
          <p className="text-sm text-gray-500 mt-3">The principles that guide every harvest and every blend.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={i} className="bg-white rounded p-8 shadow-sm border border-gray-100 text-center">
              <div className="text-3xl mb-4">{v.icon}</div>
              <h3 className="text-xl font-serif font-bold text-[#1b3b22] mb-3">{v.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[#a67c00] mb-3">The People</p>
          <h2 className="text-4xl font-serif font-bold text-[#1b3b22]">Meet Our Team</h2>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((m, i) => (
            <div key={i} className="text-center group">
              <div className="relative overflow-hidden rounded-full w-40 h-40 mx-auto mb-4">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#1b3b22]">{m.name}</h3>
              <p className="text-xs text-[#a67c00] uppercase tracking-wider mt-1">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8 bg-[#1b3b22] text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[#a67c00] mb-4">Come See For Yourself</p>
        <h2 className="text-4xl font-serif font-bold text-white mb-6">Experience the Heritage</h2>
        <button
          onClick={() => navigate('services')}
          className="bg-[#a67c00] text-white px-10 py-4 text-xs font-bold uppercase tracking-wider hover:bg-[#856300] transition"
        >
          Explore Our Experiences
        </button>
      </section>

      <Footer navigate={navigate} />
    </div>
  )
}