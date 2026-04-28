import React, { useState, useRef } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

// Using the images you provided + new Cloudinary images
const allPhotos = [
  // --- Original Featured Images (Slider) ---
  { id: 1, category: "Estates", src: "https://images.pexels.com/photos/34704515/pexels-photo-34704515.jpeg", title: "Misty Highland Sunrise", sub: "Estates · 2 min read", featured: true },
  { id: 2, category: "Process", src: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80", title: "Hand-Picking Leaves", sub: "Process · 5 minutes", featured: true },
  { id: 3, category: "Tea Varieties", src: "https://i.pinimg.com/1200x/d7/47/53/d74753cca27863e2d01b423f83e1f4a0.jpg", title: "The Tea Library", sub: "Experience · 4 minutes", featured: true },
  { id: 4, category: "People", src: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800", title: "Artisanal Sorting", sub: "People · 2 min read", featured: true },
  
  // --- New Featured Images (Slider) ---
  { id: 9, category: "Estates", src: "https://res.cloudinary.com/dtixstl4n/image/upload/v1777398099/2_oywqul.jpg", title: "Serene Valleys", sub: "Estates · 3 min read", featured: true },
  { id: 10, category: "Process", src: "https://res.cloudinary.com/dtixstl4n/image/upload/v1777398098/5_pjbz6b.jpg", title: "Traditional Craft", sub: "Process · 4 min read", featured: true },
  { id: 11, category: "Tea Varieties", src: "https://res.cloudinary.com/dtixstl4n/image/upload/v1777398098/1_ocdbvq.jpg", title: "Premium Harvest", sub: "Tea Varieties · 2 min read", featured: true },
  { id: 12, category: "People", src: "https://res.cloudinary.com/dtixstl4n/image/upload/v1777398098/3_wzl4t1.jpg", title: "Local Devotion", sub: "People · 5 min read", featured: true },

  // --- Original Grid Images ---
  { id: 5, category: "Process", src: "https://images.pexels.com/photos/5007546/pexels-photo-5007546.jpeg", title: "Modern Cafe Experience", sub: "Process · 6 minutes", span: "col-span-1 md:col-span-2 row-span-2" },
  { id: 6, category: "Estates", src: "https://i.pinimg.com/1200x/a1/99/91/a199917610b2ff6fcec525d67f64817d.jpg", title: "Group Workshops", sub: "Estates · 3 minutes", span: "col-span-1 row-span-1" },
  { id: 7, category: "Tea Varieties", src: "https://i.pinimg.com/736x/be/20/78/be2078891ef4a7d983f29d08c1f3b393.jpg", title: "Golden Brew", sub: "Tea Varieties · 5 min read", span: "col-span-1 row-span-1" },
  { id: 8, category: "People", src: "https://i.pinimg.com/1200x/f3/51/4a/f3514ae3469ad66b41a8f9e2cda9be4b.jpg", title: "Collective Harmony", sub: "People · 4 min read", span: "col-span-1 md:col-span-2 row-span-1" },

  // --- New Grid Images ---
  { id: 13, category: "Estates", src: "https://res.cloudinary.com/dtixstl4n/image/upload/v1777398095/12_fzagne.jpg", title: "Highland Beauty", sub: "Estates · 4 mins", span: "col-span-1 row-span-2" },
  { id: 14, category: "Process", src: "https://res.cloudinary.com/dtixstl4n/image/upload/v1777398097/4_loztyr.jpg", title: "Natural Drying", sub: "Process · 3 mins", span: "col-span-1 md:col-span-2 row-span-1" },
  { id: 15, category: "Tea Varieties", src: "https://res.cloudinary.com/dtixstl4n/image/upload/v1777398098/6_jtja4g.jpg", title: "Silver Tips", sub: "Tea Varieties · 5 mins", span: "col-span-1 row-span-1" },
  { id: 16, category: "People", src: "https://res.cloudinary.com/dtixstl4n/image/upload/v1777398093/7_ocmjts.jpg", title: "Morning Joy", sub: "People · 2 mins", span: "col-span-1 row-span-1" },
  { id: 17, category: "Estates", src: "https://res.cloudinary.com/dtixstl4n/image/upload/v1777398093/9_e9ctlq.jpg", title: "Endless Green", sub: "Estates · 4 mins", span: "col-span-1 md:col-span-2 row-span-2" },
  { id: 18, category: "Process", src: "https://res.cloudinary.com/dtixstl4n/image/upload/v1777398093/10_xqvuts.jpg", title: "Quality Check", sub: "Process · 3 mins", span: "col-span-1 row-span-1" },
  { id: 19, category: "Tea Varieties", src: "https://res.cloudinary.com/dtixstl4n/image/upload/v1777398092/8_osuco7.jpg", title: "Rich Black Tea", sub: "Tea Varieties · 5 mins", span: "col-span-1 row-span-1" },
  { id: 20, category: "People", src: "https://res.cloudinary.com/dtixstl4n/image/upload/v1777398090/11_qtyv0o.jpg", title: "Community Spirit", sub: "People · 2 mins", span: "col-span-1 md:col-span-2 row-span-1" },
];

const categories = ["All Collections", "Estates", "Process", "Tea Varieties", "People"];

export default function GalleryPage({ navigate }) {
  const [activeCategory, setActiveCategory] = useState("All Collections");
  const [lightbox, setLightbox] = useState(null);
  const sliderRef = useRef(null);

  const filtered = activeCategory === "All Collections"
    ? allPhotos.filter(p => !p.featured) // Show only grid items if "All" to avoid duplicates, or change as needed
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
        <img 
          src="https://i.pinimg.com/1200x/dd/aa/a2/ddaaa28914b6f167550b608d13717c58.jpg" 
          alt="Gallery Hero Background" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <span className="text-[#c8a951] text-xs font-semibold tracking-[0.4em] uppercase mb-6 relative drop-shadow-md">
          <span className="absolute -left-12 top-1/2 w-8 h-[1px] bg-[#c8a951]"></span>
          Visual Narrative
          <span className="absolute -right-12 top-1/2 w-8 h-[1px] bg-[#c8a951]"></span>
        </span>

        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-tight leading-tight drop-shadow-lg">
          Capturing the Essence <br className="hidden md:block"/> of the Highlands
        </h1>
        
        <p className="text-white/90 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light drop-shadow-md">
          A sensory journey through the misty peaks, artisanal craftsmanship, and the golden soul of Sri Lanka's finest export.
        </p>
      </div>
    </section>

      {/* Featured Image Slider (Modern Carousel) */}
      <section className="py-10 relative">
        <div className="px-8 flex justify-between items-end max-w-[1400px] mx-auto mb-6">
          <h2 className="text-2xl font-serif italic text-[#1b3b22]">Featured Moments</h2>
          <div className="flex gap-3">
            <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-[#c8a951] text-[#c8a951] flex items-center justify-center hover:bg-[#c8a951] hover:text-white transition-all duration-300">
              ←
            </button>
            <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-[#c8a951] text-[#c8a951] flex items-center justify-center hover:bg-[#c8a951] hover:text-white transition-all duration-300">
              →
            </button>
          </div>
        </div>

        {/* Scrollable Container (Hidden Scrollbar via Tailwind classes) */}
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
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b3b22]/90 via-[#1b3b22]/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80"></div>
              
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                <p className="text-[#c8a951] text-xs font-bold tracking-widest uppercase mb-2">{photo.category}</p>
                <h3 className="text-white text-3xl font-serif mb-1">{photo.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Filters - Elegant Pills */}
      <section className="px-8 pb-10 pt-10 sticky top-0 z-40 bg-[#f9f8f3]/90 backdrop-blur-md">
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
      <section className="pb-24 px-4 md:px-8 max-w-[1400px] mx-auto min-h-[50vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          {filtered.length > 0 ? filtered.map((photo, index) => (
            <div
              key={photo.id}
              className={`group relative overflow-hidden rounded-lg cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 ${photo.span || 'col-span-1 row-span-1'}`}
              onClick={() => setLightbox(photo)}
              style={{ animationDelay: `${index * 100}ms` }} // Staggered entrance effect could be added here
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-in-out group-hover:scale-110"
              />
              
              {/* Glassmorphism Hover Reveal */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/10 backdrop-blur-md border-t border-white/20 transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
                <p className="text-white font-serif text-xl font-bold drop-shadow-md">{photo.title}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-1.5 h-1.5 bg-[#c8a951] rounded-full"></span>
                  <p className="text-gray-200 text-xs tracking-wider uppercase drop-shadow-sm">{photo.category}</p>
                </div>
              </div>
            </div>
          )) : (
            <div className="col-span-full flex items-center justify-center h-full text-gray-400 font-serif italic text-xl">
              No images found in this category.
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
              className="absolute -top-12 right-0 md:-right-12 text-white/50 text-4xl hover:text-white transition-colors"
            >
              ×
            </button>
            
            <img 
              src={lightbox.src} 
              alt={lightbox.title} 
              className="w-full max-h-[75vh] object-contain shadow-2xl rounded-sm" 
            />
            
            <div className="mt-8 text-center max-w-2xl">
              <span className="text-[#c8a951] text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                {lightbox.category}
              </span>
              <h3 className="text-white font-serif text-3xl font-bold mb-3">{lightbox.title}</h3>
              <p className="text-gray-400 text-sm italic">{lightbox.sub}</p>
            </div>

            {/* Prev/Next Navigation for Lightbox */}
            <div className="absolute top-[40%] -translate-y-1/2 left-0 right-0 flex justify-between px-2 md:-mx-16 pointer-events-none">
              <button
                className="pointer-events-auto bg-white/5 hover:bg-white/20 border border-white/10 text-white w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
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
                className="pointer-events-auto bg-white/5 hover:bg-white/20 border border-white/10 text-white w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
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

      {/* CTA Banner - Unchanged structurally, but colors synced */}
      <section className="py-24 px-8 bg-[#1a2318] text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-30">
          <img 
            src="https://i.pinimg.com/736x/08/1f/ea/081feaaab035bb66a686688d829611f8.jpg" 
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
// import React, { useState, useRef } from 'react';
// import Nav from '../components/Nav';
// import Footer from '../components/Footer';

// // Using the images you provided
// const allPhotos = [
//   { id: 1, category: "Estates", src: "https://images.pexels.com/photos/34704515/pexels-photo-34704515.jpeg", title: "Misty Highland Sunrise", sub: "Estates · 2 min read", featured: true },
//   { id: 2, category: "Process", src: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80", title: "Hand-Picking Leaves", sub: "Process · 5 minutes", featured: true },
//   { id: 3, category: "Tea Varieties", src: "https://i.pinimg.com/1200x/d7/47/53/d74753cca27863e2d01b423f83e1f4a0.jpg", title: "The Tea Library", sub: "Experience · 4 minutes", featured: true },
//   { id: 4, category: "People", src: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800", title: "Artisanal Sorting", sub: "People · 2 min read", featured: true },
  
//   // Grid images
//   { id: 5, category: "Process", src: "https://images.pexels.com/photos/5007546/pexels-photo-5007546.jpeg", title: "Modern Cafe Experience", sub: "Process · 6 minutes", span: "col-span-1 md:col-span-2 row-span-2" },
//   { id: 6, category: "Estates", src: "https://i.pinimg.com/1200x/a1/99/91/a199917610b2ff6fcec525d67f64817d.jpg", title: "Group Workshops", sub: "Estates · 3 minutes", span: "col-span-1 row-span-1" },
//   { id: 7, category: "Tea Varieties", src: "https://i.pinimg.com/736x/be/20/78/be2078891ef4a7d983f29d08c1f3b393.jpg", title: "Golden Brew", sub: "Tea Varieties · 5 min read", span: "col-span-1 row-span-1" },
//   { id: 8, category: "People", src: "https://i.pinimg.com/1200x/f3/51/4a/f3514ae3469ad66b41a8f9e2cda9be4b.jpg", title: "Collective Harmony", sub: "People · 4 min read", span: "col-span-1 md:col-span-2 row-span-1" },
// ];

// const categories = ["All Collections", "Estates", "Process", "Tea Varieties", "People"];

// export default function GalleryPage({ navigate }) {
//   const [activeCategory, setActiveCategory] = useState("All Collections");
//   const [lightbox, setLightbox] = useState(null);
//   const sliderRef = useRef(null);

//   const filtered = activeCategory === "All Collections"
//     ? allPhotos.filter(p => !p.featured) // Show only grid items if "All" to avoid duplicates, or change as needed
//     : allPhotos.filter(p => p.category === activeCategory);

//   const featuredPhotos = allPhotos.filter(p => p.featured);

//   // Slider controls
//   const scroll = (direction) => {
//     if (sliderRef.current) {
//       const { scrollLeft, clientWidth } = sliderRef.current;
//       const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
//       sliderRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="min-h-screen font-sans text-gray-800 bg-[#f9f8f3]">
//       <Nav navigate={navigate} currentPage="gallery" />

//       {/* Modern Hero with Fading Gradient */}
//       <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-16 px-8 text-center overflow-hidden">
//       <div className="absolute inset-0 z-0">
//         <img 
//           src="https://i.pinimg.com/1200x/dd/aa/a2/ddaaa28914b6f167550b608d13717c58.jpg" 
//           alt="Gallery Hero Background" 
//           className="w-full h-full object-cover scale-105"
//         />
//         <div className="absolute inset-0 bg-black/50"></div>
//       </div>

//       <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
//         <span className="text-[#c8a951] text-xs font-semibold tracking-[0.4em] uppercase mb-6 relative drop-shadow-md">
//           <span className="absolute -left-12 top-1/2 w-8 h-[1px] bg-[#c8a951]"></span>
//           Visual Narrative
//           <span className="absolute -right-12 top-1/2 w-8 h-[1px] bg-[#c8a951]"></span>
//         </span>

//         <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-tight leading-tight drop-shadow-lg">
//           Capturing the Essence <br className="hidden md:block"/> of the Highlands
//         </h1>
        
//         <p className="text-white/90 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light drop-shadow-md">
//           A sensory journey through the misty peaks, artisanal craftsmanship, and the golden soul of Sri Lanka's finest export.
//         </p>
//       </div>
//     </section>

//       {/* Featured Image Slider (Modern Carousel) */}
//       <section className="py-10 relative">
//         <div className="px-8 flex justify-between items-end max-w-[1400px] mx-auto mb-6">
//           <h2 className="text-2xl font-serif italic text-[#1b3b22]">Featured Moments</h2>
//           <div className="flex gap-3">
//             <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-[#c8a951] text-[#c8a951] flex items-center justify-center hover:bg-[#c8a951] hover:text-white transition-all duration-300">
//               ←
//             </button>
//             <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-[#c8a951] text-[#c8a951] flex items-center justify-center hover:bg-[#c8a951] hover:text-white transition-all duration-300">
//               →
//             </button>
//           </div>
//         </div>

//         {/* Scrollable Container (Hidden Scrollbar via Tailwind classes) */}
//         <div 
//           ref={sliderRef}
//           className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-8 pb-10 max-w-[1400px] mx-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
//         >
//           {featuredPhotos.map(photo => (
//             <div 
//               key={`featured-${photo.id}`} 
//               className="relative min-w-[85vw] md:min-w-[60vw] lg:min-w-[40vw] h-[50vh] md:h-[60vh] snap-center rounded-xl overflow-hidden group cursor-pointer shadow-lg"
//               onClick={() => setLightbox(photo)}
//             >
//               <img 
//                 src={photo.src} 
//                 alt={photo.title} 
//                 className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#1b3b22]/90 via-[#1b3b22]/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80"></div>
              
//               <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
//                 <p className="text-[#c8a951] text-xs font-bold tracking-widest uppercase mb-2">{photo.category}</p>
//                 <h3 className="text-white text-3xl font-serif mb-1">{photo.title}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Category Filters - Elegant Pills */}
//       <section className="px-8 pb-10 pt-10 sticky top-0 z-40 bg-[#f9f8f3]/90 backdrop-blur-md">
//         <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
//           {categories.map(cat => (
//             <button
//               key={cat}
//               onClick={() => setActiveCategory(cat)}
//               className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-full ${
//                 activeCategory === cat
//                   ? 'bg-[#1b3b22] text-white shadow-md transform scale-105'
//                   : 'text-gray-500 bg-white border border-gray-200 hover:border-[#c8a951] hover:text-[#c8a951]'
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* Modern Bento Grid Gallery */}
//       <section className="pb-24 px-4 md:px-8 max-w-[1400px] mx-auto min-h-[50vh]">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]">
//           {filtered.length > 0 ? filtered.map((photo, index) => (
//             <div
//               key={photo.id}
//               className={`group relative overflow-hidden rounded-lg cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 ${photo.span || 'col-span-1 row-span-1'}`}
//               onClick={() => setLightbox(photo)}
//               style={{ animationDelay: `${index * 100}ms` }} // Staggered entrance effect could be added here
//             >
//               <img
//                 src={photo.src}
//                 alt={photo.title}
//                 className="w-full h-full object-cover transition-transform duration-[1.2s] ease-in-out group-hover:scale-110"
//               />
              
//               {/* Glassmorphism Hover Reveal */}
//               <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
//               <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/10 backdrop-blur-md border-t border-white/20 transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
//                 <p className="text-white font-serif text-xl font-bold drop-shadow-md">{photo.title}</p>
//                 <div className="flex items-center gap-2 mt-2">
//                   <span className="w-1.5 h-1.5 bg-[#c8a951] rounded-full"></span>
//                   <p className="text-gray-200 text-xs tracking-wider uppercase drop-shadow-sm">{photo.category}</p>
//                 </div>
//               </div>
//             </div>
//           )) : (
//             <div className="col-span-full flex items-center justify-center h-full text-gray-400 font-serif italic text-xl">
//               No images found in this category.
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Enhanced Fullscreen Lightbox */}
//       {lightbox && (
//         <div
//           className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 transition-opacity duration-300"
//           onClick={() => setLightbox(null)}
//         >
//           <div className="relative max-w-6xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
//             <button
//               onClick={() => setLightbox(null)}
//               className="absolute -top-12 right-0 md:-right-12 text-white/50 text-4xl hover:text-white transition-colors"
//             >
//               ×
//             </button>
            
//             <img 
//               src={lightbox.src} 
//               alt={lightbox.title} 
//               className="w-full max-h-[75vh] object-contain shadow-2xl rounded-sm" 
//             />
            
//             <div className="mt-8 text-center max-w-2xl">
//               <span className="text-[#c8a951] text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
//                 {lightbox.category}
//               </span>
//               <h3 className="text-white font-serif text-3xl font-bold mb-3">{lightbox.title}</h3>
//               <p className="text-gray-400 text-sm italic">{lightbox.sub}</p>
//             </div>

//             {/* Prev/Next Navigation for Lightbox */}
//             <div className="absolute top-[40%] -translate-y-1/2 left-0 right-0 flex justify-between px-2 md:-mx-16 pointer-events-none">
//               <button
//                 className="pointer-events-auto bg-white/5 hover:bg-white/20 border border-white/10 text-white w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
//                 onClick={e => {
//                   e.stopPropagation();
//                   const currentList = activeCategory === "All Collections" ? allPhotos : filtered;
//                   const idx = currentList.findIndex(p => p.id === lightbox.id);
//                   setLightbox(currentList[(idx - 1 + currentList.length) % currentList.length]);
//                 }}
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
//               </button>
//               <button
//                 className="pointer-events-auto bg-white/5 hover:bg-white/20 border border-white/10 text-white w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
//                 onClick={e => {
//                   e.stopPropagation();
//                   const currentList = activeCategory === "All Collections" ? allPhotos : filtered;
//                   const idx = currentList.findIndex(p => p.id === lightbox.id);
//                   setLightbox(currentList[(idx + 1) % currentList.length]);
//                 }}
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* CTA Banner - Unchanged structurally, but colors synced */}
//       <section className="py-24 px-8 bg-[#1a2318] text-center relative overflow-hidden">
//          <div className="absolute inset-0 opacity-30">
//           <img 
//             src="https://i.pinimg.com/736x/08/1f/ea/081feaaab035bb66a686688d829611f8.jpg" 
//             alt="Texture" 
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="relative z-10">
//           <h2 className="text-4xl font-serif font-bold text-[#e8e4d9] mb-6">Witness the Journey in Person</h2>
//           <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
//             Book a private tour of our historic estates and participate in an artisanal tea-making session guided by our masters.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <button
//               onClick={() => navigate('contact')}
//               className="bg-[#c8a951] text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#c8a951] transition-all duration-300 shadow-md"
//             >
//               Reserve Your Experience
//             </button>
//             <button
//               onClick={() => navigate('services')}
//               className="border border-[#e8e4d9]/30 text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all duration-300"
//             >
//               View Services
//             </button>
//           </div>
//         </div>
//       </section>

//       <Footer navigate={navigate} />
//     </div>
//   );
// }