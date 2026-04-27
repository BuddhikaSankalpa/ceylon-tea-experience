import Nav from '../components/Nav'
import Footer from '../components/Footer'

const packages = [
  {
    tag: "INTRODUCTION",
    title: "The Leaf",
    img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&q=80",
    desc: "A two-hour guided walk through our lowest elevation estates. Learn the fundamentals of plucking and enjoy a guided tasting of three signature black teas.",
    perks: ["Guided Estate Walk", "3-Tea Tasting Flight", "2 Hours Duration"],
    price: "$45",
    unit: "/ person",
    cta: "Inquire Now",
    featured: false
  },
  {
    tag: "IMMERSIVE",
    title: "The Artisan",
    img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80",
    desc: "A half-day deep dive. Participate in the morning pluck, observe the withering and rolling processes in the heritage factory, and conclude with a masterclass tasting of rare white and green teas.",
    perks: ["Factory Process Tour", "Artisanal Lunch Included", "5 Hours Duration", "Masterclass Tasting"],
    price: "$120",
    unit: "/ person",
    cta: "Reserve Your Spot",
    featured: true
  },
  {
    tag: "RESIDENCY",
    title: "The Planter",
    img: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?w=600&q=80",
    desc: "An overnight stay at the historic Planter's Bungalow. Experience a private sunrise tasting, create your own custom blend, and enjoy a private dinner overlooking the valleys.",
    perks: ["Luxury Bungalow Stay", "Custom Blending Session", "2 Days / 1 Night", "Private Dinner"],
    price: "$450",
    unit: "/ couple",
    cta: "Inquire Now",
    featured: false
  }
]

export default function ServicesPage({ navigate }) {
  return (
    <div className="min-h-screen font-sans text-gray-800">
      <Nav navigate={navigate} currentPage="services" />

      {/* Hero */}
      <section className="py-20 px-8 bg-[#fdfaf5] text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[#a67c00] mb-4">Curated For Every Soul</p>
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#1b3b22] mb-6">Curated Journeys</h1>
        <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
          Discover the art of Ceylon tea through our carefully crafted experiences. From brief encounters to immersive stays, select the journey that resonates with your spirit.
        </p>
      </section>

      {/* Packages */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div key={i} className={`rounded overflow-hidden border flex flex-col transition-shadow hover:shadow-xl ${pkg.featured ? 'border-[#a67c00] shadow-lg scale-105' : 'border-gray-200 shadow-sm'}`}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={pkg.img} alt={pkg.title} className="w-full h-full object-cover" />
                {pkg.featured && (
                  <div className="absolute top-0 left-0 right-0 bg-[#a67c00] text-white text-center text-[10px] font-bold uppercase py-1 tracking-widest">
                    Most Popular
                  </div>
                )}
              </div>
              <div className={`p-8 flex flex-col flex-1 ${pkg.featured ? 'bg-[#1b3b22] text-white' : 'bg-white'}`}>
                <p className={`text-[10px] uppercase tracking-widest mb-1 ${pkg.featured ? 'text-[#a67c00]' : 'text-[#a67c00]'}`}>{pkg.tag}</p>
                <h3 className={`text-2xl font-serif font-bold mb-3 ${pkg.featured ? 'text-white' : 'text-[#1b3b22]'}`}>{pkg.title}</h3>
                <p className={`text-sm leading-relaxed mb-6 ${pkg.featured ? 'text-gray-300' : 'text-gray-600'}`}>{pkg.desc}</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {pkg.perks.map((perk, j) => (
                    <li key={j} className={`flex items-center gap-2 text-sm ${pkg.featured ? 'text-gray-200' : 'text-gray-700'}`}>
                      <span className="text-[#a67c00]">{pkg.featured ? '✦' : '○'}</span>
                      {perk}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-gray-200/20 pt-6">
                  <div className={`text-3xl font-serif font-bold mb-1 ${pkg.featured ? 'text-[#a67c00]' : 'text-[#1b3b22]'}`}>
                    {pkg.price} <span className={`text-sm font-normal ${pkg.featured ? 'text-gray-400' : 'text-gray-500'}`}>{pkg.unit}</span>
                  </div>
                  <button
                    onClick={() => navigate('contact')}
                    className={`w-full py-3 text-xs font-bold uppercase tracking-wider mt-3 transition ${
                      pkg.featured
                        ? 'bg-[#a67c00] text-white hover:bg-[#856300]'
                        : 'border border-[#1b3b22] text-[#1b3b22] hover:bg-[#1b3b22] hover:text-white'
                    }`}
                  >
                    {pkg.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Art of the Craft */}
      <section className="py-24 px-8 bg-[#f9f8f3]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#a67c00] mb-4">Our Philosophy</p>
            <h2 className="text-4xl font-serif font-bold text-[#1b3b22] mb-6">The Art of the Craft</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Every experience we offer is rooted in authentic artisanal methods. We do not rush the leaf. From the careful two-leaves-and-a-bud pluck to the slow withering process, you will witness heritage in motion.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Our Master Tea Makers have spent decades honing the sensory intelligence required to know exactly when a leaf is ready — when to end withering, when to stop rolling, when the oxidation has reached its peak. This knowledge cannot be automated.
            </p>
            <button
              onClick={() => navigate('about')}
              className="text-[#a67c00] text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:gap-4 transition-all"
            >
              Learn About Our Process →
            </button>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1594631252845-29fc4cc8cbf9?w=600&q=80"
              alt="Hands rolling tea"
              className="w-full rounded shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Group Bookings */}
      <section className="py-20 px-8 bg-[#1b3b22] text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[#a67c00] mb-4">Groups & Events</p>
        <h2 className="text-4xl font-serif font-bold text-white mb-4">Private & Corporate Experiences</h2>
        <p className="text-gray-300 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
          Planning a team retreat, anniversary, or special event? We offer bespoke private estate experiences for groups of 10 to 80 guests. Contact us to design your custom journey.
        </p>
        <button
          onClick={() => navigate('contact')}
          className="bg-[#a67c00] text-white px-10 py-4 text-xs font-bold uppercase tracking-wider hover:bg-[#856300] transition"
        >
          Get in Touch
        </button>
      </section>

      <Footer navigate={navigate} />
    </div>
  )
}