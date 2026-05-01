import React, { useState, useRef } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const categories = ["All Collections", "Tea Making Experience", "Tea Library", "Café", "Events/Groups"];

const allPhotos = [
  // --- FEATURED PHOTOS (Slider) ---
  { id: 1, category: "Café", src: "https://res.cloudinary.com/dkdthpgux/image/upload/v1777619470/2_s0fr9u.jpg", title: "Serene Valleys", sub: "Café · Ambient Environment", featured: true },
  { id: 2, category: "Tea Making Experience", src: "https://res.cloudinary.com/dkdthpgux/image/upload/v1777619466/5_jotxlh.jpg", title: "Traditional Craft", sub: "Tea Making Experience · Hands-on", featured: true },
  { id: 3, category: "Tea Library", src: "https://res.cloudinary.com/dkdthpgux/image/upload/v1777619471/1_iltqcg.jpg", title: "Premium Harvest", sub: "Tea Library · Curated Collection", featured: true },
  { id: 4, category: "Events/Groups", src: "https://res.cloudinary.com/dkdthpgux/image/upload/v1777619472/3_uhbci5.jpg", title: "Local Devotion", sub: "Events/Groups · Together", featured: true },

  // --- GRID PHOTOS ---
  { id: 5, category: "Café", src: "https://res.cloudinary.com/dkdthpgux/image/upload/v1777619470/26_pgcj9g.jpg", title: "Highland Beauty", sub: "Café", span: "col-span-1 row-span-2" },
  { id: 6, category: "Tea Making Experience", src: "https://res.cloudinary.com/dkdthpgux/image/upload/v1777619469/25_fbec1r.jpg", title: "Natural Drying", sub: "Process", span: "col-span-1 md:col-span-2 row-span-1" },
  { id: 7, category: "Tea Library", src: "https://res.cloudinary.com/dkdthpgux/image/upload/v1777619469/24_npmmyz.webp", title: "Silver Tips", sub: "Blends", span: "col-span-1 row-span-1" },
  { id: 8, category: "Events/Groups", src: "https://res.cloudinary.com/dkdthpgux/image/upload/v1777619468/21_jqbilc.webp", title: "Morning Joy", sub: "Community", span: "col-span-1 row-span-1" },
  { id: 9, category: "Café", src: "https://res.cloudinary.com/dkdthpgux/image/upload/v1777619468/20_rozb4h.webp", title: "Endless Green", sub: "Scenic", span: "col-span-1 md:col-span-2 row-span-2" },
  { id: 10, category: "Tea Making Experience", src: "https://res.cloudinary.com/dkdthpgux/image/upload/v1777619468/22_x8l5vn.webp", title: "Quality Check", sub: "Artisan", span: "col-span-1 row-span-1" },
  { id: 11, category: "Tea Library", src: "https://res.cloudinary.com/dkdthpgux/image/upload/v1777619468/23_cqsyqo.webp", title: "Rich Black Tea", sub: "Tasting", span: "col-span-1 row-span-1" },
  { id: 12, category: "Events/Groups", src: "https://res.cloudinary.com/dkdthpgux/image/upload/v1777619467/18_g61odj.webp", title: "Community Spirit", sub: "Workshops", span: "col-span-1 md:col-span-2 row-span-1" },
  { id: 13, category: "Café", src: "https://res.cloudinary.com/dkdthpgux/image/upload/v1777619467/19_lqeh2q.webp", title: "Modern Cafe", sub: "Relax", span: "col-span-1 row-span-1" },
  { id: 14, category: "Tea Making Experience", src: "https://res.cloudinary.com/dkdthpgux/image/upload/v1777619467/15_gqorwk.webp", title: "Hand-Picking", sub: "Harvest", span: "col-span-1 row-span-1" },
  { id: 15, category: "Tea Library", src: "https://res.cloudinary.com/dkdthpgux/image/upload/v1777619467/17_c5mscm.webp", title: "Golden Brew", sub: "Collection", span: "col-span-1 row-span-1" },
  { id: 16, category: "Events/Groups", src: "https://res.cloudinary.com/dkdthpgux/image/upload/v1777619467/9_bhmh1t.jpg", title: "Group Sessions", sub: "Experience", span: "col-span-1 row-span-1" },
  { id: 17, category: "Café", src: "https://res.cloudinary.com/dkdthpgux/image/upload/v1777619467/13_yjkals.webp", title: "Warm Ambience", sub: "Cafe", span: "col-span-1 md:col-span-2 row-span-2" },
  { id: 18, category: "Tea Making Experience", src: "https://res.cloudinary.com/dkdthpgux/image/upload/v1777619466/12_y4gyv1.webp", title: "Artisanal Sorting", sub: "Process", span: "col-span-1 row-span-1" },
  { id: 19, category: "Tea Library", src: "https://res.cloudinary.com/dkdthpgux/image/upload/v1777619466/5_jotxlh.jpg", title: "Finest Selection", sub: "Library", span: "col-span-1 row-span-1" },
  { id: 20, category: "Events/Groups", src: "https://res.cloudinary.com/dkdthpgux/image/upload/v1777619466/10_qq3iek.jpg", title: "Shared Harmony", sub: "Groups", span: "col-span-1 md:col-span-2 row-span-1" },
  { id: 21, category: "Café", src: "https://res.cloudinary.com/dkdthpgux/image/upload/v1777619465/8_nwovia.jpg", title: "Cozy Corners", sub: "Dining", span: "col-span-1 row-span-1" },
  { id: 22, category: "Tea Making Experience", src: "https://res.cloudinary.com/dkdthpgux/image/upload/v1777619465/6_n5ngkj.jpg", title: "Leaf Rolling", sub: "Craft", span: "col-span-1 row-span-1" },
  { id: 23, category: "Tea Library", src: "https://res.cloudinary.com/dkdthpgux/image/upload/v1777619465/11_q2nvkh.jpg", title: "Vintage Blends", sub: "History", span: "col-span-1 row-span-1" },
  { id: 24, category: "Events/Groups", src: "https://res.cloudinary.com/dkdthpgux/image/upload/v1777619465/7_fgve2k.jpg", title: "Tour Highlights", sub: "Memories", span: "col-span-1 row-span-1" },
];

export default function GalleryPage({ navigate }) {
  const [activeCategory, setActiveCategory] = useState("All Collections");
  const [lightbox, setLightbox] = useState(null);
  const sliderRef = useRef(null);

  // Filter logic
  const filtered = activeCategory === "All Collections"
    ? allPhotos.filter(p => !p.featured)
    : allPhotos.filter(p => p.category === activeCategory);

  const featuredPhotos = allPhotos.filter(p => p.featured);

  // Slider controls
  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      sliderRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-[#f9f8f3]">
      <Nav navigate={navigate} currentPage="gallery" />

      {/* Modern Hero with Fading Gradient */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-16 px-8 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Hero Image updated with one of your new links */}
          <img 
            src="https://res.cloudinary.com/dkdthpgux/image/upload/v1777619470/2_s0fr9u.jpg" 
            alt="Gallery Hero Background" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A3D1A]/80 to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-[#c8a951] text-xs font-semibold tracking-[0.4em] uppercase mb-6 relative drop-shadow-md">
            <span className="absolute -left-12 top-1/2 w-8 h-[1px] bg-[#c8a951]"></span>
            Authentic Visuals
            <span className="absolute -right-12 top-1/2 w-8 h-[1px] bg-[#c8a951]"></span>
          </span>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight leading-tight drop-shadow-lg">
            Capturing the Essence <br className="hidden md:block"/> of Ceylon Tea
          </h1>
          
          <p className="text-white/90 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light drop-shadow-md">
            A sensory journey through artisanal craftsmanship, immersive experiences, and the golden soul of Sri Lanka's finest export.
          </p>
        </div>
      </section>

      {/* Featured Image Slider (Modern Carousel) */}
      <section className="py-12 relative">
        <div className="px-8 flex justify-between items-end max-w-[1400px] mx-auto mb-6">
          <h2 className="text-3xl font-serif font-bold text-[#1b3b22]">Featured Moments</h2>
          <div className="flex gap-3">
            <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border-2 border-[#c8a951] text-[#c8a951] flex items-center justify-center hover:bg-[#c8a951] hover:text-white transition-all duration-300">
              ←
            </button>
            <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border-2 border-[#c8a951] text-[#c8a951] flex items-center justify-center hover:bg-[#c8a951] hover:text-white transition-all duration-300">
              →
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={sliderRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-8 pb-10 max-w-[1400px] mx-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {featuredPhotos.map(photo => (
            <div 
              key={`featured-${photo.id}`} 
              className="relative min-w-[85vw] md:min-w-[60vw] lg:min-w-[40vw] h-[50vh] md:h-[60vh] snap-center rounded-xl overflow-hidden group cursor-pointer shadow-lg"
              onClick={() => setLightbox(photo)}
            >
              <img 
                src={photo.src} 
                alt={photo.title} 
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b3b22]/90 via-[#1b3b22]/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                <p className="bg-[#c8a951] inline-block px-3 py-1 rounded-sm text-white text-[10px] font-bold tracking-widest uppercase mb-3">{photo.category}</p>
                <h3 className="text-white text-3xl font-serif font-bold mb-1">{photo.title}</h3>
                <p className="text-gray-300 text-sm font-light mt-2">{photo.sub.split('·')[1]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEW: Experience Video Section */}
      <section className="py-16 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer border border-[#e8e4d9]">
          {/* Video Placeholder Image updated */}
          <img 
            src="https://res.cloudinary.com/dkdthpgux/image/upload/v1777619471/1_iltqcg.jpg" 
            alt="The TCTE Experience Video" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-[#1A3D1A]/40 group-hover:bg-[#1A3D1A]/30 transition-colors duration-500"></div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-[#c8a951]/90 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(200,169,81,0.4)] mb-6 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white drop-shadow-lg mb-4">Watch The Experience</h3>
            <p className="text-white/90 text-sm md:text-base font-light tracking-wide max-w-lg drop-shadow-md">Step into our world. A 60-second glimpse into artisanal tea making at the Southern Coast.</p>
          </div>
        </div>
      </section>

      {/* Category Filters - Elegant Pills */}
      <section className="px-8 pb-10 pt-10 sticky top-[72px] z-40 bg-[#f9f8f3]/95 backdrop-blur-md border-b border-[#e8e4d9]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-full ${
                activeCategory === cat
                  ? 'bg-[#1b3b22] text-white shadow-md transform scale-105'
                  : 'text-gray-500 bg-white border border-gray-200 hover:border-[#c8a951] hover:text-[#c8a951]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Modern Bento Grid Gallery */}
      <section className="py-16 px-4 md:px-8 max-w-[1400px] mx-auto min-h-[50vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          {filtered.length > 0 ? filtered.map((photo, index) => (
            <div
              key={photo.id}
              className={`group relative overflow-hidden rounded-lg cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 ${photo.span || 'col-span-1 row-span-1'}`}
              onClick={() => setLightbox(photo)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-in-out group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-[#1A3D1A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent transform translate-y-4 transition-transform duration-500 ease-out group-hover:translate-y-0">
                <p className="text-white font-serif text-xl font-bold drop-shadow-md">{photo.title}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-1.5 h-1.5 bg-[#c8a951] rounded-full"></span>
                  <p className="text-[#c8a951] font-bold text-[10px] tracking-wider uppercase drop-shadow-sm">{photo.category}</p>
                </div>
              </div>
            </div>
          )) : (
            <div className="col-span-full flex items-center justify-center h-[300px] text-gray-400 font-serif italic text-xl">
              No images currently available in this category.
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Fullscreen Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 transition-opacity duration-300"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-6xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-12 right-0 md:-right-12 text-white/50 text-4xl hover:text-[#c8a951] transition-colors"
            >
              ×
            </button>
            
            <img 
              src={lightbox.src} 
              alt={lightbox.title} 
              className="w-full max-h-[75vh] object-contain shadow-2xl rounded-sm" 
            />
            
            <div className="mt-8 text-center max-w-2xl">
              <span className="bg-[#c8a951] inline-block px-3 py-1 rounded-sm text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
                {lightbox.category}
              </span>
              <h3 className="text-white font-serif text-3xl font-bold mb-3">{lightbox.title}</h3>
              <p className="text-gray-400 text-sm italic">{lightbox.sub}</p>
            </div>

            {/* Prev/Next Navigation for Lightbox */}
            <div className="absolute top-[40%] -translate-y-1/2 left-0 right-0 flex justify-between px-2 md:-mx-16 pointer-events-none">
              <button
                className="pointer-events-auto bg-white/5 hover:bg-[#c8a951] border border-white/10 text-white w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
                onClick={e => {
                  e.stopPropagation();
                  const currentList = activeCategory === "All Collections" ? allPhotos : filtered;
                  const idx = currentList.findIndex(p => p.id === lightbox.id);
                  setLightbox(currentList[(idx - 1 + currentList.length) % currentList.length]);
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                className="pointer-events-auto bg-white/5 hover:bg-[#c8a951] border border-white/10 text-white w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
                onClick={e => {
                  e.stopPropagation();
                  const currentList = activeCategory === "All Collections" ? allPhotos : filtered;
                  const idx = currentList.findIndex(p => p.id === lightbox.id);
                  setLightbox(currentList[(idx + 1) % currentList.length]);
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Banner */}
      <section className="py-24 px-8 bg-[#1a2318] text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-30">
          <img 
            src="https://res.cloudinary.com/dkdthpgux/image/upload/v1777626750/my_12_ukpvsl.jpg" 
            alt="Texture" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10">
          <h2 className="text-4xl font-serif font-bold text-[#e8e4d9] mb-6">Witness the Journey in Person</h2>
          <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Book a private tour of our historic estates and participate in an artisanal tea-making session guided by our masters.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate('contact')}
              className="bg-[#c8a951] text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#c8a951] transition-all duration-300 shadow-md"
            >
              Reserve Your Experience
            </button>
            <button
              onClick={() => navigate('services')}
              className="border border-[#e8e4d9]/30 text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all duration-300"
            >
              View Services
            </button>
          </div>
        </div>
      </section>

      <Footer navigate={navigate} />
    </div>
  );
}