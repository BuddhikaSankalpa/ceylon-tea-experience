import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function AboutPage({ navigate }) {
  return (
    <div className="min-h-screen bg-[#fcfbf8] font-sans text-gray-800 selection:bg-[#1b3b22] selection:text-white">
      <Nav navigate={navigate} currentPage="about" />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.pinimg.com/1200x/a1/99/91/a199917610b2ff6fcec525d67f64817d.jpg" 
            alt="Ceylon Tea Garden" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-[#a67c00] mb-4 font-bold drop-shadow-md">
            Discover
          </p>
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-10 drop-shadow-lg">
            About TCTE
          </h1>
          <div className="max-w-3xl mx-auto text-white/90 text-lg md:text-xl leading-relaxed font-light drop-shadow-md">
            <p>
              The Ceylon Tea Experience (TCTE) is a flagship experiential cafe concept designed to showcase the heritage, craftsmanship, and diversity of Sri Lanka's tea culture.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center text-[#4a5d4e] text-base md:text-lg leading-relaxed space-y-6 mb-16">
            <p>
              Located in Galle - one of the country's most visited tourist cities - TCTE brings together interactive learning, artisanal tea-making, and modern cafe hospitality in one beautifully curated space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-5xl mx-auto ">
            <div className="mt-0 md:mt-12">
              <img
                src="https://images.pexels.com/photos/5007546/pexels-photo-5007546.jpeg"
                alt="Tea Estate"
                className="w-full h-[400px] object-cover rounded-sm shadow-lg hover:scale-[1.02] transition-transform duration-500 "
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=600"
                alt="Tea Making"
                className="w-full h-[400px] object-cover rounded-sm shadow-lg hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-20 p-10 md:p-16 bg-white border border-[#eae0d5] shadow-sm relative text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#fcfbf8] px-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[#a67c00] font-semibold">Our Purpose Is Simple</p>
            </div>
            <p className="font-serif text-[#1b3b22] text-2xl md:text-4xl leading-tight italic">
              "To give every traveler the chance to truly experience Ceylon Tea - not just taste it."
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Updated with Glassmorphism & New Image */}
      <section className="relative py-28 px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.pinimg.com/1200x/d7/47/53/d74753cca27863e2d01b423f83e1f4a0.jpg" 
            alt="Tea Leaves Philosophy" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1b3b22]/85 backdrop-blur-[1px]"></div> 
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Title Column */}
            <div className="lg:sticky lg:top-32">
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
                The TCTE<br/>
                <span className="text-[#a67c00]">Philosophy</span>
              </h2>
              <div className="w-20 h-[2px] bg-[#a67c00] mb-6"></div>
              <p className="text-xs text-gray-300 tracking-[0.3em] uppercase font-bold">
                Guiding Our Journey
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Vision Card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-2xl hover:bg-white/10 transition-all duration-500 group shadow-2xl">
                <div className="w-16 h-16 rounded-full bg-[#a67c00]/20 border border-[#a67c00] flex items-center justify-center text-[#a67c00] text-3xl mb-8 group-hover:scale-110 transition-transform">
                  👁️
                </div>
                <h3 className="text-3xl font-serif text-white mb-6">Our Vision</h3>
                <p className="text-gray-200 text-lg leading-relaxed font-light">
                  To become Sri Lanka's most <span className="text-[#a67c00] font-medium underline underline-offset-4 decoration-1">iconic tea experience brand</span>  connecting global travelers to the story, soul, and flavours of Ceylon Tea.
                </p>
              </div>

              {/* Mission Card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-2xl hover:bg-white/10 transition-all duration-500 group shadow-2xl">
                <div className="w-16 h-16 rounded-full bg-[#a67c00]/20 border border-[#a67c00] flex items-center justify-center text-[#a67c00] text-3xl mb-8 group-hover:scale-110 transition-transform">
                  🎯
                </div>
                <h3 className="text-3xl font-serif text-white mb-6">Our Mission</h3>
                <ul className="space-y-6 text-gray-200 font-light">
                  <li className="flex items-start gap-4">
                    <span className="text-[#a67c00] text-xl mt-1">🌿</span> 
                    <span className="text-lg">Redefine tea tourism through <span className="text-white font-medium">immersive, hands-on</span> experiences.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#a67c00] text-xl mt-1">📍</span> 
                    <span className="text-lg">Showcase regional diversity in one <span className="text-white font-medium">accessible destination</span>.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#a67c00] text-xl mt-1">☕</span> 
                    <span className="text-lg">Elevate global perception through <span className="text-white font-medium">storytelling</span>.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 relative">
            <img
              src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&q=80"
              alt="Tea Artisan"
              className="w-full h-[500px] object-cover rounded-sm"
            />
            <div className="hidden md:block absolute -bottom-10 -right-10 bg-[#fcfbf8] p-8 shadow-xl border border-[#eae0d5] max-w-sm">
              <p className="text-xs uppercase tracking-wider text-[#a67c00] mb-3">Our Core Belief</p>
              <p className="text-xl font-serif italic text-[#1b3b22]">
                "Don't just drink Ceylon Tea — experience it."
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <p className="text-xs uppercase tracking-[0.3em] text-[#a67c00] mb-4 font-semibold">The Team</p>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1b3b22] mb-8">Who We Are</h2>
            <p className="text-[#4a5d4e] text-lg leading-relaxed mb-8">
              A team of tea experts, storytellers, artisans, and hospitality professionals dedicated to preserving and celebrating Sri Lanka's tea legacy.
            </p>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#fcfbf8] border-t border-[#eae0d5]">
        <div className="max-w-7xl mx-auto text-center mb-16">
           <p className="text-xs uppercase tracking-[0.3em] text-[#a67c00] mb-4 font-semibold">Visit Us</p>
           <h2 className="text-4xl md:text-5xl font-serif text-[#1b3b22] mb-6">Our Location</h2>
        </div>

        <div className="max-w-5xl mx-auto relative h-[450px]">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-8 py-4 shadow-md border border-[#eae0d5] z-10 flex items-center gap-4">
            <span className="text-[#a67c00] text-2xl">📍</span>
            <div>
              <p className="font-serif text-[#1b3b22] text-xl">Galle, Southern Sri Lanka</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mt-1">Heart of the Southern Coast</p>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126932.123456789!2d80.21!3d6.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173bb6932f3fd%3A0x7f1515bf361092c!2sGalle!5e0!3m2!1sen!2slk!4v1620000000000!5m2!1sen!2slk" 
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="TCTE Location Map"
            className="grayscale contrast-125 opacity-90 rounded-sm shadow-inner"
          ></iframe>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 text-center bg-[#1b3b22] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.pexels.com/photos/34704515/pexels-photo-34704515.jpeg" 
            alt="Texture" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-[#a67c00] mb-4 font-semibold">Come See For Yourself</p>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-10 text-center">Experience the Heritage</h2>
          <button
            onClick={() => navigate('services')}
            className="bg-[#a67c00] text-white px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] hover:bg-[#856300] transition-colors duration-300 rounded-sm"
          >
            Explore Our Experiences
          </button>
        </div>
      </section>

      <Footer navigate={navigate} />
    </div>
  )
}