import { useState, useEffect, useRef } from "react"
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Travel Writer, UK",
    text: "The most transformative tea experience I've ever had. Standing in those misty highlands, watching the sunrise over endless green — it changed how I understand luxury.",
    avatar: "https://i.pinimg.com/1200x/23/c3/6b/23c36b997f4facf89386e9674692b445.jpg"
  },
  {
    name: "Kenji Tanaka",
    role: "Tea Sommelier, Japan",
    text: "As someone who has visited tea estates across Asia, Ceylon Heritage stands apart. Their commitment to single-estate authenticity is remarkable.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
  },
  {
    name: "Amara Osei",
    role: "Food & Culture Blogger",
    text: "Book the Artisan experience. Don't think about it. The factory tour, the hand-rolling session, the tasting at dusk — perfection.",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=80"
  }
]

// Hero background slideshow images
const heroBgImages = [
  "https://img.freepik.com/premium-photo/sunrise-lush-green-tea-plantation_1158030-110740.jpg?semt=ais_hybrid&w=740&q=80",
  "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=2000&auto=format&fit=crop",
  "https://cdn.shopify.com/s/files/1/0528/5173/6769/files/shutterstock_719690932_1080-X-683-pxl_A3_600x600.jpg?v=1656563342",
  "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=2000&q=80",
]

// Rotating image cards — 5 Sri Lankan tea regions
const heroCards = [
  {
    img: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?w=600&q=80",
    label: "NUWARA ELIYA",
    sub: "champagne of Ceylon teas..."
  },
  {
    img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=600",
    label: "DIMBULA",
    sub: "Western highlands, full-bodied with bright golden liquor..."
  },
  {
    img: "https://images.pexels.com/photos/5007546/pexels-photo-5007546.jpeg",
    label: "UVA",
    sub: "Eastern slopes producing aromatic, mellow single-estate teas..."
  },
  {
    img: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=600&q=80",
    label: "KANDY",
    sub: "Mid-elevation gardens — robust, well-balanced exports..."
  },
  {
    img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&q=80",
    label: "RUHUNA",
    sub: "Low-country southern estates — rich, dark, full-flavoured..."
  },
]

// Our Experience section images
const experienceImages = [
  "https://images.pexels.com/photos/34704515/pexels-photo-34704515.jpeg",
  "https://images.pexels.com/photos/5007546/pexels-photo-5007546.jpeg",
  "https://images.pexels.com/photos/322461/pexels-photo-322461.jpeg",
  "https://images.pexels.com/photos/34604766/pexels-photo-34604766.jpeg",
  "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?w=600&q=80",
  "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&q=80"
];

export default function HomePage({ navigate }) {
  const [bgIndex, setBgIndex] = useState(0)
  const [prevBgIndex, setPrevBgIndex] = useState(null)
  const [activeCardIndex, setActiveCardIndex] = useState(0)

  // Hero background auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setPrevBgIndex(bgIndex)
      setBgIndex(prev => (prev + 1) % heroBgImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [bgIndex])

  // Watermark text cycles through destination labels
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCardIndex(prev => (prev + 1) % heroCards.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen font-sans text-gray-800">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes watermarkSwap {
          0% { opacity: 0; transform: translateX(40px); }
          15% { opacity: 1; transform: translateX(0); }
          85% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(-40px); }
        }
        .hero-bg-slide {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: opacity 1.5s ease-in-out;
        }
        .cards-track {
          display: flex;
          gap: 1rem;
          will-change: transform;
        }
        .rotate-card {
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .rotate-card:hover {
          transform: translateY(-8px) scale(1.04);
          z-index: 10;
        }
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .dot-btn {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
        }
        .cta-bg {
          background-image: url('https://img.freepik.com/premium-photo/sunrise-lush-green-tea-plantation_1158030-110740.jpg?semt=ais_hybrid&w=740&q=80');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        .hero-watermark {
          position: absolute;
          top: 14%;
          right: -2%;
          font-family: 'Georgia', serif;
          font-weight: 900;
          font-size: clamp(120px, 18vw, 260px);
          line-height: 0.9;
          letter-spacing: 0.02em;
          color: rgba(255, 255, 255, 0.07);
          white-space: nowrap;
          pointer-events: none;
          z-index: 11;
          user-select: none;
          text-transform: uppercase;
          animation: watermarkSwap 3.5s ease-in-out infinite;
        }
      `}</style>

      <Nav navigate={navigate} currentPage="home" />

      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center px-8 py-20 overflow-hidden">

        {/* Slideshow backgrounds */}
        {heroBgImages.map((img, i) => (
          <div
            key={i}
            className="hero-bg-slide"
            style={{
              backgroundImage: `url('${img}')`,
              opacity: i === bgIndex ? 1 : 0,
              zIndex: 0,
            }}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f11]/92 to-[#0a1f11]/30 z-10"></div>

        {/* Big destination watermark */}
        <div key={activeCardIndex} className="hero-watermark">
          {heroCards[activeCardIndex].label}
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroBgImages.map((_, i) => (
            <button
              key={i}
              className="dot-btn"
              style={{
                background: i === bgIndex ? '#a67c00' : 'rgba(255,255,255,0.4)',
                width: i === bgIndex ? '24px' : '8px',
                borderRadius: i === bgIndex ? '4px' : '50%',
              }}
              onClick={() => { setPrevBgIndex(bgIndex); setBgIndex(i) }}
            />
          ))}
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="md:w-1/2 text-white">
            <p className="text-xs uppercase tracking-[0.3em] text-[#a67c00] mb-4">Est. 1887 · Nuwara Eliya</p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
              "DISCOVER<br />THE SOUL OF<br />PURE CEYLON<br />TEA"
            </h1>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md text-gray-300">
              From misty highland estates to your cup — a journey through Sri Lanka's most revered tea traditions. 100% single-estate, hand-plucked, artisanal.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => navigate('services')}
                className="bg-[#a67c00] text-white px-8 py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#856300] transition rounded-sm"
              >
                Explore Experiences
              </button>
              <button
                onClick={() => navigate('about')}
                className="border border-white/60 text-white px-8 py-3 text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition rounded-sm"
              >
                Our Story
              </button>
            </div>
          </div>

          {/* Rotating / scrolling image cards */}
          <div className="md:w-1/2 overflow-hidden relative mt-12 md:mt-55" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
            <RotatingCards cards={heroCards} />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#1b3b22] py-6 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {[
            { num: "136+", label: "Years of Heritage" },
            { num: "11", label: "Estate Varieties" },
            { num: "100%", label: "Organic Certified" },
            { num: "50K+", label: "Happy Visitors" },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-2xl font-serif font-bold text-[#a67c00]">{s.num}</div>
              <div className="text-xs uppercase tracking-wider text-gray-300 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-24 px-8 overflow-hidden bg-[#f8f6f1]">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(166,124,0,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 opacity-[0.05] bg-[repeating-linear-gradient(135deg,#1b3b22_0px,#1b3b22_1px,transparent_1px,transparent_40px)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#eae6dc]/70"></div>

        <div className="relative z-10">

          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-serif text-[#1b3b22] font-bold mb-4">Why Choose Us</h2>
            <h3 className="text-[#1b3b22] text-lg font-bold mb-2">Discover Sri Lanka's Tea Story - in the Heart of Galle</h3>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The Ceylon Tea Experience (TCTE) brings the magic of the tea highlands to the Southern Coast. More than a cafe, we are an interactive tea journey where you learn, create, and taste.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: "https://images.pexels.com/photos/34256656/pexels-photo-34256656.jpeg",
                tag: "LOCATION",
                title: "Interactive Experience",
                desc: "The only interactive tea experience in Southern Sri Lanka."
              },
              {
                img: "https://images.pexels.com/photos/17189951/pexels-photo-17189951.jpeg",
                tag: "HANDS-ON",
                title: "Tasting Sessions",
                desc: "Hands-on tea making & tasting sessions."
              },
              {
                img: "https://images.pexels.com/photos/5007546/pexels-photo-5007546.jpeg",
                tag: "CUSTOM",
                title: "Tea Library",
                desc: "Build-Your-Own Tea Library — personalised blends."
              },
              {
                img: "https://img.freepik.com/free-photo/oolong-green-tea-teapot-bowl_1150-23596.jpg?semt=ais_hybrid&w=740&q=80",
                tag: "PREMIUM",
                title: "Tea Café",
                desc: "Premium tea café serving curated Ceylon teas."
              },
              {
                img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600",
                tag: "FOR ALL",
                title: "Welcoming Environment",
                desc: "Perfect for families, couples, and cultural travellers."
              },
              {
                img: "https://cdn.shopify.com/s/files/1/0528/5173/6769/files/shutterstock_719690932_1080-X-683-pxl_A3_600x600.jpg?v=1656563342",
                tag: "CONVENIENCE",
                title: "Quick & Curated",
                desc: "Quick, curated, high-value experience — no full-day travel required."
              },
            ].map((item, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-md bg-white group cursor-pointer transition-transform hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 bg-white">
                  <p className="text-[10px] uppercase tracking-widest text-[#a67c00] mb-1">{item.tag}</p>
                  <h3 className="text-xl font-serif font-bold text-[#1b3b22] mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Our Experience Section — NEW Side-by-side Layout */}
      <section className="relative py-24 px-8 overflow-hidden" style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #fafaf6 100%)'
      }}>

        {/* Soft background accents */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20" style={{
          background: 'radial-gradient(circle, rgba(166,124,0,0.3) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }}></div>
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-15" style={{
          background: 'radial-gradient(circle, rgba(27,59,34,0.25) 0%, transparent 70%)',
          filter: 'blur(70px)'
        }}></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* LEFT — Image Carousel */}
            <div className="relative order-2 lg:order-1">
              <ExperienceImageCarousel images={experienceImages} />

              {/* Decorative gold corner accents */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#a67c00]/40 rounded-tl-lg pointer-events-none"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-[#a67c00]/40 rounded-br-lg pointer-events-none"></div>
            </div>

            {/* RIGHT — Text Content */}
            <div className="order-1 lg:order-2 lg:pl-8">
              <p className="text-xs uppercase tracking-[0.3em] text-[#a67c00] mb-4">The Journey</p>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1b3b22] font-bold leading-tight mb-6">
                Our <em className="text-[#856300] not-italic">Experience</em>
              </h2>

              {/* Gold accent line */}
              <div className="flex items-center gap-2 mb-8">
                <div className="w-12 h-px bg-[#a67c00]"></div>
                <div className="w-2 h-2 rounded-full bg-[#a67c00]"></div>
              </div>

              <div className="space-y-5 text-sm md:text-base text-gray-600 leading-relaxed mb-8">
                <p>At TCTE, every visitor becomes part of the tea-making process.</p>
                <p>From plucking leaves and rolling your own tea, to crafting a personalised blend with herbs and flavours, the experience is designed to be immersive, educational, and unforgettable.</p>
                <p>Whether you have 30 minutes or two hours, you walk away with a deeper appreciation of the craftsmanship behind Ceylon Tea — and a blend you can call your own.</p>
              </div>

              <button
                onClick={() => navigate('services')}
                className="inline-block border-2 border-[#a67c00] text-[#856300] px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#a67c00] hover:text-white transition-all rounded-sm"
              >
                Explore Experiences
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="py-24 px-8 bg-[#fdfaf5]">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[#a67c00] mb-3">Curated For You</p>
          <h2 className="text-4xl font-serif text-[#1b3b22] font-bold mb-4">Featured Experiences</h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            From a two-hour estate walk to an overnight stay in a heritage planter's bungalow — every encounter is crafted to reveal the soul of Ceylon tea.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&q=80",
              tag: "INTRODUCTION",
              title: "The Leaf",
              desc: "A guided estate walk through lush elevations. Learn the art of two-leaves-and-a-bud plucking.",
              price: "$45",
              unit: "/ person"
            },
            {
              img: "https://images.pexels.com/photos/814264/pexels-photo-814264.jpeg",
              tag: "IMMERSIVE",
              title: "The Artisan",
              desc: "A half-day deep dive into withering, rolling, and factory craftsmanship. Conclude with a masterclass tasting.",
              price: "$120",
              unit: "/ person",
              featured: true
            },
            {
              img: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?w=600&q=80",
              tag: "RESIDENCY",
              title: "The Planter",
              desc: "Overnight in a historic bungalow with a private sunrise tasting and custom blend creation.",
              price: "$450",
              unit: "/ couple"
            },
          ].map((exp, i) => (
            <div key={i} className={`rounded-xl overflow-hidden shadow-md bg-white group cursor-pointer transition-transform hover:-translate-y-1 ${exp.featured ? 'ring-2 ring-[#a67c00]' : ''}`}
              onClick={() => navigate('services')}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={exp.img} alt={exp.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                {exp.featured && (
                  <div className="absolute top-3 right-3 bg-[#a67c00] text-white text-[10px] font-bold uppercase px-2 py-1 tracking-wider">Most Popular</div>
                )}
              </div>
              <div className="p-6 bg-white">
                <p className="text-[10px] uppercase tracking-widest text-[#a67c00] mb-1">{exp.tag}</p>
                <h3 className="text-xl font-serif font-bold text-[#1b3b22] mb-2">{exp.title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{exp.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-serif font-bold text-[#1b3b22]">{exp.price} <span className="text-sm font-normal text-gray-500">{exp.unit}</span></span>
                  <button className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm ${exp.featured ? 'bg-[#a67c00] text-white' : 'border border-[#1b3b22] text-[#1b3b22]'}`}>
                    {exp.featured ? 'Reserve Spot' : 'Inquire Now'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-8 bg-[#1b3b22]">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[#a67c00] mb-3">Voices from the Estate</p>
          <h2 className="text-4xl font-serif text-white font-bold">What Our Guests Say</h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#122917] rounded-xl p-8 border border-white/10">
              <div className="text-[#a67c00] text-3xl mb-4">"</div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">{t.text}</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="text-white text-sm font-bold">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative cta-bg">
        <div className="absolute inset-0 bg-[#1b3b22]/75"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#a67c00] mb-4">Begin Your Journey</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Ready to Discover<br />Ceylon Tea?
          </h2>
          <p className="text-gray-200 mb-6 text-sm">
            CONNECT · TASTE · EXPLORE<br />
            Your journey into Sri Lanka's most iconic heritage begins here.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button onClick={() => navigate('services')} className="bg-[#a67c00] text-white px-8 py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#856300] transition rounded-md">
              Explore Experiences
            </button>
            <button onClick={() => navigate('contact')} className="border border-white text-white px-8 py-3 text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition rounded-md">
              Contact Us
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-white/70 text-xs uppercase tracking-wider">
            <span className="flex items-center gap-2">⭐ 5-Star Rated</span>
            <span className="flex items-center gap-2">👥 1000+ Happy Guests</span>
            <span className="flex items-center gap-2">🌿 100% Organic</span>
          </div>
        </div>
      </section>

      <Footer navigate={navigate} />
    </div>
  )
}

// -------------------------------------------------------------
// Side-by-side Image Carousel for "Our Experience" section
// Tall rectangular image with auto-rotating slides + indicator dots
// -------------------------------------------------------------
function ExperienceImageCarousel({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full">
      {/* Main image container — tall rectangle (Ceylon Tea Trails reference style) */}
      <div className="relative w-full aspect-[4/5] md:aspect-[5/6] overflow-hidden rounded-2xl shadow-2xl">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={img}
              className="w-full h-full object-cover"
              alt={`Experience Slide ${i + 1}`}
            />
            {/* Subtle gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>
        ))}

        {/* Indicator dots — bottom center */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`transition-all duration-300 rounded-full ${
                i === activeIndex
                  ? "w-8 h-2 bg-[#a67c00]"
                  : "w-2 h-2 bg-white/70 hover:bg-white"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Slide counter — top right */}
        <div className="absolute top-6 right-6 z-20 bg-black/40 backdrop-blur-sm text-white text-xs font-bold tracking-wider px-3 py-1 rounded-full">
          {String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Rotating Cards — Coverflow 3D Carousel
// Updates: Active card scales up, inactive cards are pushed back and rotated
// -------------------------------------------------------------
function RotatingCards({ cards }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const CARD_W = 180
  const CARD_H = 280

  // Auto-play interval
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [cards.length, isHovered]);

  return (
    <div 
      style={{
        width: '100%',
        height: `${CARD_H + 80}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '1000px', // Creates the 3D space effect
        position: 'relative',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {cards.map((card, i) => {
        // Calculate relative offset for infinite wrap-around
        let offset = (i - activeIndex + cards.length) % cards.length;
        if (offset > Math.floor(cards.length / 2)) {
          offset -= cards.length;
        }

        const absOffset = Math.abs(offset);
        const isActive = offset === 0;

        // Coverflow Mathematics
        const translateX = offset * 110; 
        const translateZ = absOffset * -150;
        const rotateY = isActive ? 0 : offset < 0 ? 45 : -45;
        const scale = isActive ? 1.1 : 0.85;
        const zIndex = 10 - absOffset;
        const opacity = isActive ? 1 : 1 - (absOffset * 0.3);

        return (
          <div
            key={i}
            onClick={() => setActiveIndex(i)}
            style={{
              position: 'absolute',
              width: `${CARD_W}px`,
              height: `${CARD_H}px`,
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.18)',
              boxShadow: isActive ? '0 25px 50px rgba(0,0,0,0.6)' : '0 10px 30px rgba(0,0,0,0.4)',
              transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
              zIndex: zIndex,
              opacity: opacity,
              cursor: 'pointer',
              transition: 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)', // Smooth premium snapping
            }}
          >
            <img
              src={card.img}
              alt={card.label}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />

            {/* Gradient overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.35) 50%, transparent 100%)',
            }} />

            {/* Text at bottom */}
            <div style={{
              position: 'absolute', bottom: '18px', left: '18px', right: '18px',
            }}>
              <div style={{
                color: 'white',
                fontSize: '20px',
                fontWeight: '800',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                lineHeight: 1.1,
                marginBottom: '6px',
                fontFamily: 'Georgia, serif',
                textShadow: '0 2px 8px rgba(0,0,0,0.5)',
              }}>
                {card.label}
              </div>
              <div style={{
                color: 'rgba(255,255,255,0.75)',
                fontSize: '11px',
                letterSpacing: '0.01em',
                lineHeight: 1.4,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}>
                {card.sub}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}






// import { useState, useEffect, useRef } from "react"
// import Nav from '../components/Nav'
// import Footer from '../components/Footer'

// const testimonials = [
//   {
//     name: "Sarah Mitchell",
//     role: "Travel Writer, UK",
//     text: "The most transformative tea experience I've ever had. Standing in those misty highlands, watching the sunrise over endless green — it changed how I understand luxury.",
//     avatar: "https://i.pinimg.com/1200x/23/c3/6b/23c36b997f4facf89386e9674692b445.jpg"
//   },
//   {
//     name: "Kenji Tanaka",
//     role: "Tea Sommelier, Japan",
//     text: "As someone who has visited tea estates across Asia, Ceylon Heritage stands apart. Their commitment to single-estate authenticity is remarkable.",
//     avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
//   },
//   {
//     name: "Amara Osei",
//     role: "Food & Culture Blogger",
//     text: "Book the Artisan experience. Don't think about it. The factory tour, the hand-rolling session, the tasting at dusk — perfection.",
//     avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=80"
//   }
// ]

// // Hero background slideshow images
// const heroBgImages = [
//   "https://img.freepik.com/premium-photo/sunrise-lush-green-tea-plantation_1158030-110740.jpg?semt=ais_hybrid&w=740&q=80",
//   "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=2000&auto=format&fit=crop",
//   "https://cdn.shopify.com/s/files/1/0528/5173/6769/files/shutterstock_719690932_1080-X-683-pxl_A3_600x600.jpg?v=1656563342",
//   "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=2000&q=80",
// ]

// // Rotating image cards — 5 Sri Lankan tea regions
// const heroCards = [
//   {
//     img: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?w=600&q=80",
//     label: "NUWARA ELIYA",
//     sub: "champagne of Ceylon teas..."
//   },
//   {
//     img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=600",
//     label: "DIMBULA",
//     sub: "Western highlands, full-bodied with bright golden liquor..."
//   },
//   {
//     img: "https://images.pexels.com/photos/5007546/pexels-photo-5007546.jpeg",
//     label: "UVA",
//     sub: "Eastern slopes producing aromatic, mellow single-estate teas..."
//   },
//   {
//     img: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=600&q=80",
//     label: "KANDY",
//     sub: "Mid-elevation gardens — robust, well-balanced exports..."
//   },
//   {
//     img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&q=80",
//     label: "RUHUNA",
//     sub: "Low-country southern estates — rich, dark, full-flavoured..."
//   },
// ]

// // Our Experience section images
// const experienceImages = [
//   "https://images.pexels.com/photos/34704515/pexels-photo-34704515.jpeg",
//   "https://images.pexels.com/photos/5007546/pexels-photo-5007546.jpeg",
//   "https://images.pexels.com/photos/322461/pexels-photo-322461.jpeg",
//   "https://images.pexels.com/photos/34604766/pexels-photo-34604766.jpeg",
//   "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?w=600&q=80",
//   "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&q=80"
// ];

// export default function HomePage({ navigate }) {
//   const [bgIndex, setBgIndex] = useState(0)
//   const [prevBgIndex, setPrevBgIndex] = useState(null)
//   const [activeCardIndex, setActiveCardIndex] = useState(0)

//   // Hero background auto-slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPrevBgIndex(bgIndex)
//       setBgIndex(prev => (prev + 1) % heroBgImages.length)
//     }, 5000)
//     return () => clearInterval(interval)
//   }, [bgIndex])

//   // Watermark text cycles through destination labels
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveCardIndex(prev => (prev + 1) % heroCards.length)
//     }, 3500)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="min-h-screen font-sans text-gray-800">
//       <style>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes watermarkSwap {
//           0% { opacity: 0; transform: translateX(40px); }
//           15% { opacity: 1; transform: translateX(0); }
//           85% { opacity: 1; transform: translateX(0); }
//           100% { opacity: 0; transform: translateX(-40px); }
//         }
//         .hero-bg-slide {
//           position: absolute;
//           inset: 0;
//           background-size: cover;
//           background-position: center;
//           transition: opacity 1.5s ease-in-out;
//         }
//         .cards-track {
//           display: flex;
//           gap: 1rem;
//           will-change: transform;
//         }
//         .rotate-card {
//           flex-shrink: 0;
//           transition: transform 0.3s ease;
//         }
//         .rotate-card:hover {
//           transform: translateY(-8px) scale(1.04);
//           z-index: 10;
//         }
//         @keyframes cardFloat {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-6px); }
//         }
//         .dot-btn {
//           width: 8px;
//           height: 8px;
//           border-radius: 50%;
//           border: none;
//           cursor: pointer;
//           transition: all 0.3s;
//         }
//         .cta-bg {
//           background-image: url('https://img.freepik.com/premium-photo/sunrise-lush-green-tea-plantation_1158030-110740.jpg?semt=ais_hybrid&w=740&q=80');
//           background-size: cover;
//           background-position: center;
//           background-attachment: fixed;
//         }
//         .hero-watermark {
//           position: absolute;
//           top: 14%;
//           right: -2%;
//           font-family: 'Georgia', serif;
//           font-weight: 900;
//           font-size: clamp(120px, 18vw, 260px);
//           line-height: 0.9;
//           letter-spacing: 0.02em;
//           color: rgba(255, 255, 255, 0.07);
//           white-space: nowrap;
//           pointer-events: none;
//           z-index: 11;
//           user-select: none;
//           text-transform: uppercase;
//           animation: watermarkSwap 3.5s ease-in-out infinite;
//         }
//       `}</style>

//       <Nav navigate={navigate} currentPage="home" />

//       {/* Hero */}
//       <section className="relative min-h-[92vh] flex items-center px-8 py-20 overflow-hidden">

//         {/* Slideshow backgrounds */}
//         {heroBgImages.map((img, i) => (
//           <div
//             key={i}
//             className="hero-bg-slide"
//             style={{
//               backgroundImage: `url('${img}')`,
//               opacity: i === bgIndex ? 1 : 0,
//               zIndex: 0,
//             }}
//           />
//         ))}

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f11]/92 to-[#0a1f11]/30 z-10"></div>

//         {/* Big destination watermark */}
//         <div key={activeCardIndex} className="hero-watermark">
//           {heroCards[activeCardIndex].label}
//         </div>

//         {/* Slide dots */}
//         <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//           {heroBgImages.map((_, i) => (
//             <button
//               key={i}
//               className="dot-btn"
//               style={{
//                 background: i === bgIndex ? '#a67c00' : 'rgba(255,255,255,0.4)',
//                 width: i === bgIndex ? '24px' : '8px',
//                 borderRadius: i === bgIndex ? '4px' : '50%',
//               }}
//               onClick={() => { setPrevBgIndex(bgIndex); setBgIndex(i) }}
//             />
//           ))}
//         </div>

//         <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
//           <div className="md:w-1/2 text-white">
//             <p className="text-xs uppercase tracking-[0.3em] text-[#a67c00] mb-4">Est. 1887 · Nuwara Eliya</p>
//             <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
//               "DISCOVER<br />THE SOUL OF<br />PURE CEYLON<br />TEA"
//             </h1>
//             <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md text-gray-300">
//               From misty highland estates to your cup — a journey through Sri Lanka's most revered tea traditions. 100% single-estate, hand-plucked, artisanal.
//             </p>
//             <div className="flex gap-4 flex-wrap">
//               <button
//                 onClick={() => navigate('services')}
//                 className="bg-[#a67c00] text-white px-8 py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#856300] transition rounded-sm"
//               >
//                 Explore Experiences
//               </button>
//               <button
//                 onClick={() => navigate('about')}
//                 className="border border-white/60 text-white px-8 py-3 text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition rounded-sm"
//               >
//                 Our Story
//               </button>
//             </div>
//           </div>

//           {/* Rotating / scrolling image cards */}
//           <div className="md:w-1/2 overflow-hidden relative mt-12 md:mt-55" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
//             <RotatingCards cards={heroCards} />
//           </div>
//         </div>
//       </section>

//       {/* Stats Bar */}
//       <section className="bg-[#1b3b22] py-6 px-8">
//         <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
//           {[
//             { num: "136+", label: "Years of Heritage" },
//             { num: "11", label: "Estate Varieties" },
//             { num: "100%", label: "Organic Certified" },
//             { num: "50K+", label: "Happy Visitors" },
//           ].map((s, i) => (
//             <div key={i}>
//               <div className="text-2xl font-serif font-bold text-[#a67c00]">{s.num}</div>
//               <div className="text-xs uppercase tracking-wider text-gray-300 mt-1">{s.label}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="relative py-24 px-8 overflow-hidden bg-[#f8f6f1]">

//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(166,124,0,0.15),transparent_60%)]"></div>
//         <div className="absolute inset-0 opacity-[0.05] bg-[repeating-linear-gradient(135deg,#1b3b22_0px,#1b3b22_1px,transparent_1px,transparent_40px)]"></div>
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#eae6dc]/70"></div>

//         <div className="relative z-10">

//           <div className="max-w-6xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-serif text-[#1b3b22] font-bold mb-4">Why Choose Us</h2>
//             <h3 className="text-[#1b3b22] text-lg font-bold mb-2">Discover Sri Lanka's Tea Story - in the Heart of Galle</h3>
//             <p className="text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               The Ceylon Tea Experience (TCTE) brings the magic of the tea highlands to the Southern Coast. More than a cafe, we are an interactive tea journey where you learn, create, and taste.
//             </p>
//           </div>

//           <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 img: "https://images.pexels.com/photos/34256656/pexels-photo-34256656.jpeg",
//                 tag: "LOCATION",
//                 title: "Interactive Experience",
//                 desc: "The only interactive tea experience in Southern Sri Lanka."
//               },
//               {
//                 img: "https://images.pexels.com/photos/17189951/pexels-photo-17189951.jpeg",
//                 tag: "HANDS-ON",
//                 title: "Tasting Sessions",
//                 desc: "Hands-on tea making & tasting sessions."
//               },
//               {
//                 img: "https://images.pexels.com/photos/5007546/pexels-photo-5007546.jpeg",
//                 tag: "CUSTOM",
//                 title: "Tea Library",
//                 desc: "Build-Your-Own Tea Library — personalised blends."
//               },
//               {
//                 img: "https://img.freepik.com/free-photo/oolong-green-tea-teapot-bowl_1150-23596.jpg?semt=ais_hybrid&w=740&q=80",
//                 tag: "PREMIUM",
//                 title: "Tea Café",
//                 desc: "Premium tea café serving curated Ceylon teas."
//               },
//               {
//                 img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600",
//                 tag: "FOR ALL",
//                 title: "Welcoming Environment",
//                 desc: "Perfect for families, couples, and cultural travellers."
//               },
//               {
//                 img: "https://cdn.shopify.com/s/files/1/0528/5173/6769/files/shutterstock_719690932_1080-X-683-pxl_A3_600x600.jpg?v=1656563342",
//                 tag: "CONVENIENCE",
//                 title: "Quick & Curated",
//                 desc: "Quick, curated, high-value experience — no full-day travel required."
//               },
//             ].map((item, i) => (
//               <div key={i} className="rounded-xl overflow-hidden shadow-md bg-white group cursor-pointer transition-transform hover:-translate-y-1">
//                 <div className="relative aspect-[4/3] overflow-hidden">
//                   <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
//                 </div>
//                 <div className="p-6 bg-white">
//                   <p className="text-[10px] uppercase tracking-widest text-[#a67c00] mb-1">{item.tag}</p>
//                   <h3 className="text-xl font-serif font-bold text-[#1b3b22] mb-3">{item.title}</h3>
//                   <p className="text-sm text-gray-600 leading-relaxed mb-2">{item.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </section>

//       {/* Our Experience Section — NEW Side-by-side Layout */}
//       <section className="relative py-24 px-8 overflow-hidden" style={{
//         background: 'linear-gradient(180deg, #ffffff 0%, #fafaf6 100%)'
//       }}>

//         {/* Soft background accents */}
//         <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20" style={{
//           background: 'radial-gradient(circle, rgba(166,124,0,0.3) 0%, transparent 70%)',
//           filter: 'blur(60px)'
//         }}></div>
//         <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-15" style={{
//           background: 'radial-gradient(circle, rgba(27,59,34,0.25) 0%, transparent 70%)',
//           filter: 'blur(70px)'
//         }}></div>

//         <div className="relative z-10 max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

//             {/* LEFT — Image Carousel */}
//             <div className="relative order-2 lg:order-1">
//               <ExperienceImageCarousel images={experienceImages} />

//               {/* Decorative gold corner accents */}
//               <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#a67c00]/40 rounded-tl-lg pointer-events-none"></div>
//               <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-[#a67c00]/40 rounded-br-lg pointer-events-none"></div>
//             </div>

//             {/* RIGHT — Text Content */}
//             <div className="order-1 lg:order-2 lg:pl-8">
//               <p className="text-xs uppercase tracking-[0.3em] text-[#a67c00] mb-4">The Journey</p>

//               <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1b3b22] font-bold leading-tight mb-6">
//                 Our <em className="text-[#856300] not-italic">Experience</em>
//               </h2>

//               {/* Gold accent line */}
//               <div className="flex items-center gap-2 mb-8">
//                 <div className="w-12 h-px bg-[#a67c00]"></div>
//                 <div className="w-2 h-2 rounded-full bg-[#a67c00]"></div>
//               </div>

//               <div className="space-y-5 text-sm md:text-base text-gray-600 leading-relaxed mb-8">
//                 <p>At TCTE, every visitor becomes part of the tea-making process.</p>
//                 <p>From plucking leaves and rolling your own tea, to crafting a personalised blend with herbs and flavours, the experience is designed to be immersive, educational, and unforgettable.</p>
//                 <p>Whether you have 30 minutes or two hours, you walk away with a deeper appreciation of the craftsmanship behind Ceylon Tea — and a blend you can call your own.</p>
//               </div>

//               <button
//                 onClick={() => navigate('services')}
//                 className="inline-block border-2 border-[#a67c00] text-[#856300] px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#a67c00] hover:text-white transition-all rounded-sm"
//               >
//                 Explore Experiences
//               </button>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* Featured Experiences */}
//       <section className="py-24 px-8 bg-[#fdfaf5]">
//         <div className="max-w-6xl mx-auto text-center mb-16">
//           <p className="text-xs uppercase tracking-[0.3em] text-[#a67c00] mb-3">Curated For You</p>
//           <h2 className="text-4xl font-serif text-[#1b3b22] font-bold mb-4">Featured Experiences</h2>
//           <p className="text-sm text-gray-600 max-w-2xl mx-auto">
//             From a two-hour estate walk to an overnight stay in a heritage planter's bungalow — every encounter is crafted to reveal the soul of Ceylon tea.
//           </p>
//         </div>
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[
//             {
//               img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&q=80",
//               tag: "INTRODUCTION",
//               title: "The Leaf",
//               desc: "A guided estate walk through lush elevations. Learn the art of two-leaves-and-a-bud plucking.",
//               price: "$45",
//               unit: "/ person"
//             },
//             {
//               img: "https://images.pexels.com/photos/814264/pexels-photo-814264.jpeg",
//               tag: "IMMERSIVE",
//               title: "The Artisan",
//               desc: "A half-day deep dive into withering, rolling, and factory craftsmanship. Conclude with a masterclass tasting.",
//               price: "$120",
//               unit: "/ person",
//               featured: true
//             },
//             {
//               img: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?w=600&q=80",
//               tag: "RESIDENCY",
//               title: "The Planter",
//               desc: "Overnight in a historic bungalow with a private sunrise tasting and custom blend creation.",
//               price: "$450",
//               unit: "/ couple"
//             },
//           ].map((exp, i) => (
//             <div key={i} className={`rounded-xl overflow-hidden shadow-md bg-white group cursor-pointer transition-transform hover:-translate-y-1 ${exp.featured ? 'ring-2 ring-[#a67c00]' : ''}`}
//               onClick={() => navigate('services')}
//             >
//               <div className="relative aspect-[4/3] overflow-hidden">
//                 <img src={exp.img} alt={exp.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
//                 {exp.featured && (
//                   <div className="absolute top-3 right-3 bg-[#a67c00] text-white text-[10px] font-bold uppercase px-2 py-1 tracking-wider">Most Popular</div>
//                 )}
//               </div>
//               <div className="p-6 bg-white">
//                 <p className="text-[10px] uppercase tracking-widest text-[#a67c00] mb-1">{exp.tag}</p>
//                 <h3 className="text-xl font-serif font-bold text-[#1b3b22] mb-2">{exp.title}</h3>
//                 <p className="text-sm text-gray-600 mb-4 leading-relaxed">{exp.desc}</p>
//                 <div className="flex justify-between items-center">
//                   <span className="text-2xl font-serif font-bold text-[#1b3b22]">{exp.price} <span className="text-sm font-normal text-gray-500">{exp.unit}</span></span>
//                   <button className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm ${exp.featured ? 'bg-[#a67c00] text-white' : 'border border-[#1b3b22] text-[#1b3b22]'}`}>
//                     {exp.featured ? 'Reserve Spot' : 'Inquire Now'}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-24 px-8 bg-[#1b3b22]">
//         <div className="max-w-6xl mx-auto text-center mb-16">
//           <p className="text-xs uppercase tracking-[0.3em] text-[#a67c00] mb-3">Voices from the Estate</p>
//           <h2 className="text-4xl font-serif text-white font-bold">What Our Guests Say</h2>
//         </div>
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//           {testimonials.map((t, i) => (
//             <div key={i} className="bg-[#122917] rounded-xl p-8 border border-white/10">
//               <div className="text-[#a67c00] text-3xl mb-4">"</div>
//               <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">{t.text}</p>
//               <div className="flex items-center gap-3">
//                 <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
//                 <div>
//                   <div className="text-white text-sm font-bold">{t.name}</div>
//                   <div className="text-gray-500 text-xs">{t.role}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-32 relative cta-bg">
//         <div className="absolute inset-0 bg-[#1b3b22]/75"></div>
//         <div className="relative z-10 max-w-4xl mx-auto text-center px-8">
//           <p className="text-xs uppercase tracking-[0.3em] text-[#a67c00] mb-4">Begin Your Journey</p>
//           <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
//             Ready to Discover<br />Ceylon Tea?
//           </h2>
//           <p className="text-gray-200 mb-6 text-sm">
//             CONNECT · TASTE · EXPLORE<br />
//             Your journey into Sri Lanka's most iconic heritage begins here.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4 mb-8">
//             <button onClick={() => navigate('services')} className="bg-[#a67c00] text-white px-8 py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#856300] transition rounded-md">
//               Explore Experiences
//             </button>
//             <button onClick={() => navigate('contact')} className="border border-white text-white px-8 py-3 text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition rounded-md">
//               Contact Us
//             </button>
//           </div>
//           <div className="flex flex-wrap justify-center gap-6 text-white/70 text-xs uppercase tracking-wider">
//             <span className="flex items-center gap-2">⭐ 5-Star Rated</span>
//             <span className="flex items-center gap-2">👥 1000+ Happy Guests</span>
//             <span className="flex items-center gap-2">🌿 100% Organic</span>
//           </div>
//         </div>
//       </section>

//       <Footer navigate={navigate} />
//     </div>
//   )
// }

// // -------------------------------------------------------------
// // Side-by-side Image Carousel for "Our Experience" section
// // Tall rectangular image with auto-rotating slides + indicator dots
// // -------------------------------------------------------------
// function ExperienceImageCarousel({ images }) {
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Auto-play every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex(prev => (prev + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="relative w-full">
//       {/* Main image container — tall rectangle (Ceylon Tea Trails reference style) */}
//       <div className="relative w-full aspect-[4/5] md:aspect-[5/6] overflow-hidden rounded-2xl shadow-2xl">
//         {images.map((img, i) => (
//           <div
//             key={i}
//             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//               i === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
//             }`}
//           >
//             <img
//               src={img}
//               className="w-full h-full object-cover"
//               alt={`Experience Slide ${i + 1}`}
//             />
//             {/* Subtle gradient overlay for depth */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
//           </div>
//         ))}

//         {/* Indicator dots — bottom center */}
//         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//           {images.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setActiveIndex(i)}
//               className={`transition-all duration-300 rounded-full ${
//                 i === activeIndex
//                   ? "w-8 h-2 bg-[#a67c00]"
//                   : "w-2 h-2 bg-white/70 hover:bg-white"
//               }`}
//               aria-label={`Slide ${i + 1}`}
//             />
//           ))}
//         </div>

//         {/* Slide counter — top right */}
//         <div className="absolute top-6 right-6 z-20 bg-black/40 backdrop-blur-sm text-white text-xs font-bold tracking-wider px-3 py-1 rounded-full">
//           {String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
//         </div>
//       </div>
//     </div>
//   );
// }

// // -------------------------------------------------------------
// // Rotating Cards — bigger portrait cards (matches reference image)
// // Landscape uploads automatically crop to portrait via object-fit: cover
// // -------------------------------------------------------------
// function RotatingCards({ cards }) {
//   const [offset, setOffset] = useState(0)
//   const [mounted, setMounted] = useState(false)
//   const rafRef = useRef(null)
//   const speedRef = useRef(0.55)

//   const CARD_W = 180
//   const CARD_H = 280
//   const GAP = 18
//   const totalWidth = cards.length * (CARD_W + GAP)

//   useEffect(() => {
//     const t = setTimeout(() => setMounted(true), 100)
//     return () => clearTimeout(t)
//   }, [])

//   useEffect(() => {
//     const animate = () => {
//       setOffset(prev => {
//         let next = prev - speedRef.current
//         if (Math.abs(next) >= totalWidth) next = next + totalWidth
//         return next
//       })
//       rafRef.current = requestAnimationFrame(animate)
//     }
//     rafRef.current = requestAnimationFrame(animate)
//     return () => cancelAnimationFrame(rafRef.current)
//   }, [totalWidth])

//   const tripled = [...cards, ...cards, ...cards]

//   return (
//     <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}>
//       <div
//         style={{
//           display: 'flex',
//           gap: `${GAP}px`,
//           transform: `translateX(${offset}px)`,
//           willChange: 'transform',
//           alignItems: 'flex-end',
//           padding: '20px 0',
//         }}
//       >
//         {tripled.map((card, i) => {
//           const cardIndex = i % cards.length
//           return (
//             <div
//               key={i}
//               style={{
//                 minWidth: `${CARD_W}px`,
//                 width: `${CARD_W}px`,
//                 height: `${CARD_H}px`,
//                 marginBottom: '0px',
//                 borderRadius: '20px',
//                 overflow: 'hidden',
//                 position: 'relative',
//                 border: '1px solid rgba(255,255,255,0.18)',
//                 flexShrink: 0,
//                 cursor: 'pointer',
//                 transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease',
//                 opacity: mounted ? 1 : 0,
//                 transform: mounted ? 'translateY(0px)' : 'translateY(40px)',
//                 transitionDelay: mounted ? '0ms' : `${(cardIndex * 80)}ms`,
//                 boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
//               }}
//               onMouseEnter={e => {
//                 e.currentTarget.style.transform = 'translateY(-14px) scale(1.06)'
//                 e.currentTarget.style.boxShadow = '0 28px 56px rgba(0,0,0,0.65)'
//                 speedRef.current = 0
//               }}
//               onMouseLeave={e => {
//                 e.currentTarget.style.transform = 'translateY(0px)'
//                 e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.5)'
//                 speedRef.current = 0.55
//               }}
//             >
//               <img
//                 src={card.img}
//                 alt={card.label}
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   objectFit: 'cover',
//                   objectPosition: 'center',
//                   display: 'block',
//                   transition: 'transform 0.5s ease',
//                 }}
//               />

//               {/* Gradient overlay */}
//               <div style={{
//                 position: 'absolute', inset: 0,
//                 background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.35) 50%, transparent 100%)',
//               }} />

//               {/* Text at bottom */}
//               <div style={{
//                 position: 'absolute', bottom: '18px', left: '18px', right: '18px',
//               }}>
//                 <div style={{
//                   color: 'white',
//                   fontSize: '20px',
//                   fontWeight: '800',
//                   letterSpacing: '0.06em',
//                   textTransform: 'uppercase',
//                   lineHeight: 1.1,
//                   marginBottom: '6px',
//                   fontFamily: 'Georgia, serif',
//                   textShadow: '0 2px 8px rgba(0,0,0,0.5)',
//                 }}>
//                   {card.label}
//                 </div>
//                 <div style={{
//                   color: 'rgba(255,255,255,0.75)',
//                   fontSize: '11px',
//                   letterSpacing: '0.01em',
//                   lineHeight: 1.4,
//                   display: '-webkit-box',
//                   WebkitLineClamp: 2,
//                   WebkitBoxOrient: 'vertical',
//                   overflow: 'hidden',
//                 }}>
//                   {card.sub}
//                 </div>
//               </div>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }