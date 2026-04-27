import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function ServicesPage({ navigate }) {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-[#f9f8f3]">
      <Nav navigate={navigate} currentPage="services" />

      {/* Hero Section - UNTOUCHED */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.pinimg.com/1200x/c9/38/53/c938532328e06237cedfe0d3c0ad1613.jpg" 
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
            Our Services
          </h1>
          <div className="max-w-3xl mx-auto text-white/90 text-lg md:text-xl leading-relaxed font-light drop-shadow-md">
            <p>
              Immerse yourself in the world of Ceylon Tea. From hands-on crafting and personalised 
            blending at The Tea Library, to elegant café experiences and global delivery services.
            </p>
          </div>
        </div>
      </section>

      {/* Modern Editorial Services Container */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto space-y-32">
        
        {/* Service 1 */}
        <div className="relative flex flex-col lg:flex-row items-center group">
          <div className="w-full lg:w-7/12 relative z-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80" 
              alt="Hand-Made Tea Experience" 
              className="w-full h-[400px] md:h-[550px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-6/12 lg:-ml-24 mt-[-40px] lg:mt-0 relative z-10 px-4 lg:px-0">
            <div className="bg-white/95 backdrop-blur-sm p-8 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-[#e8e4d9]">
              <span className="text-[#c8a951] font-serif italic text-2xl mb-4 block">01.</span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#1b3b22] mb-4">Hand-Made Tea & Tasting</h2>
              <p className="text-gray-500 italic mb-6">A hands-on journey through the art of Ceylon Tea.</p>
              
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li className="flex gap-4 items-start"><span className="text-[#a67c00] mt-1">—</span> Hand-pluck fresh tea leaves</li>
                <li className="flex gap-4 items-start"><span className="text-[#a67c00] mt-1">—</span> Roll and craft your own green or black tea</li>
                <li className="flex gap-4 items-start"><span className="text-[#a67c00] mt-1">—</span> Learn how leaf grade, region, and climate influence taste</li>
                <li className="flex gap-4 items-start"><span className="text-[#a67c00] mt-1">—</span> Compare teas from different terrains through a curated tasting</li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-6 sm:items-center text-xs font-semibold tracking-widest uppercase text-gray-500 border-t border-gray-200 pt-6 mt-6">
                <p><span className="text-[#a67c00]">Duration:</span> 120-150 Mins</p>
                <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
                <p><span className="text-[#a67c00]">Output:</span> Custom Tea & Tasting</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service 2 */}
        <div className="relative flex flex-col lg:flex-row-reverse items-center group">
          <div className="w-full lg:w-7/12 relative z-0 overflow-hidden">
            <img 
              src="https://i.pinimg.com/1200x/d7/47/53/d74753cca27863e2d01b423f83e1f4a0.jpg" 
              alt="The Tea Library" 
              className="w-full h-[400px] md:h-[550px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-6/12 lg:-mr-24 mt-[-40px] lg:mt-0 relative z-10 px-4 lg:px-0">
            <div className="bg-white/95 backdrop-blur-sm p-8 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-[#e8e4d9]">
              <span className="text-[#c8a951] font-serif italic text-2xl mb-4 block">02.</span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#1b3b22] mb-4">The Tea Library</h2>
              <p className="text-gray-500 italic mb-6">Sri Lanka's first curated tea-blending bar.</p>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Step into the heart of TCTE. Become the blender and craft your signature tea from a selection of regional bases, herbs, flowers, and spices.
              </p>
              
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li className="flex gap-4 items-center"><span className="w-1.5 h-1.5 bg-[#a67c00] rounded-full"></span> Name your tea & create custom labels</li>
                <li className="flex gap-4 items-center"><span className="w-1.5 h-1.5 bg-[#a67c00] rounded-full"></span> Package it as the perfect gift</li>
                <li className="flex gap-4 items-center"><span className="w-1.5 h-1.5 bg-[#a67c00] rounded-full"></span> Save your recipe for future re-ordering</li>
              </ul>

              <div className="bg-[#f9f8f3] p-5 border-l-2 border-[#c8a951] text-sm text-gray-600 italic">
                A curated Catalog of Teas giving guests the experience of traveling across the island through flavour.
              </div>

              <div className="flex flex-col sm:flex-row gap-6 sm:items-center text-xs font-semibold tracking-widest uppercase text-gray-500 border-t border-gray-200 pt-6 mt-6">
                <p><span className="text-[#a67c00]">Duration:</span> 15-20 Mins</p>
                <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
                <p><span className="text-[#a67c00]">Format:</span> Self-Guided Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="relative flex flex-col lg:flex-row items-center group">
          <div className="w-full lg:w-7/12 relative z-0 overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/5007546/pexels-photo-5007546.jpeg" 
              alt="Tea Cafe" 
              className="w-full h-[400px] md:h-[550px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-6/12 lg:-ml-24 mt-[-40px] lg:mt-0 relative z-10 px-4 lg:px-0">
            <div className="bg-white/95 backdrop-blur-sm p-8 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-[#e8e4d9]">
              <span className="text-[#c8a951] font-serif italic text-2xl mb-4 block">03.</span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#1b3b22] mb-4">The Tea Café</h2>
              <p className="text-gray-500 italic mb-6">A calm, elegant space blending modern aesthetics with Sri Lankan warmth.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm text-gray-600 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-[#c8a951] text-lg leading-none">✦</span>
                  <span>Premium single-origin teas</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#c8a951] text-lg leading-none">✦</span>
                  <span>Artisan coffees</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#c8a951] text-lg leading-none">✦</span>
                  <span>Signature tea cocktails</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#c8a951] text-lg leading-none">✦</span>
                  <span>Tea-infused desserts</span>
                </div>
                <div className="flex items-start gap-3 sm:col-span-2">
                  <span className="text-[#c8a951] text-lg leading-none">✦</span>
                  <span>Ceylon-style traditional pairings (Tea + Jaggery, Tea + Roti)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service 4 */}
        <div className="relative flex flex-col lg:flex-row-reverse items-center group">
          <div className="w-full lg:w-7/12 relative z-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800" 
              alt="E-Commerce & Delivery" 
              className="w-full h-[400px] md:h-[550px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-6/12 lg:-mr-24 mt-[-40px] lg:mt-0 relative z-10 px-4 lg:px-0">
            <div className="bg-white/95 backdrop-blur-sm p-8 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-[#e8e4d9]">
              <span className="text-[#c8a951] font-serif italic text-2xl mb-4 block">04.</span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#1b3b22] mb-4">Global Delivery</h2>
              <p className="text-gray-500 italic mb-6">Take Ceylon Tea home with you.</p>
              <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                Guests can reorder their personalised blends or choose from our catalog of teas through our seamless online store.
              </p>
              
              <ul className="space-y-4 text-sm text-gray-600 border-t border-gray-100 pt-6">
                <li className="flex justify-between items-center">
                  <span className="uppercase tracking-wider font-semibold text-xs">Hotel Delivery</span>
                  <span className="text-[#c8a951]">Available</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="uppercase tracking-wider font-semibold text-xs">Airport Pickup</span>
                  <span className="text-[#c8a951]">Available</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="uppercase tracking-wider font-semibold text-xs">Global Shipping</span>
                  <span className="text-[#c8a951]">Worldwide</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service 5 */}
        <div className="relative flex flex-col lg:flex-row items-center group pb-10">
          <div className="w-full lg:w-7/12 relative z-0 overflow-hidden">
            <img 
              src="https://i.pinimg.com/1200x/f3/51/4a/f3514ae3469ad66b41a8f9e2cda9be4b.jpg" 
              alt="Workshops and Groups" 
              className="w-full h-[400px] md:h-[550px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-6/12 lg:-ml-24 mt-[-40px] lg:mt-0 relative z-10 px-4 lg:px-0">
            <div className="bg-white/95 backdrop-blur-sm p-8 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-[#e8e4d9]">
              <span className="text-[#c8a951] font-serif italic text-2xl mb-4 block">05.</span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#1b3b22] mb-4">Workshops & Groups</h2>
              <p className="text-gray-500 italic mb-6">Tailored packages for an unforgettable collective experience.</p>
              <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                Whether you're organizing a corporate retreat or a specialized tour group, our programs are fully customisable according to duration and group size.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#f9f8f3] text-[#1b3b22] text-xs uppercase tracking-wider border border-[#e8e4d9]">Tour Groups</span>
                <span className="px-4 py-2 bg-[#f9f8f3] text-[#1b3b22] text-xs uppercase tracking-wider border border-[#e8e4d9]">Corporate Teams</span>
                <span className="px-4 py-2 bg-[#f9f8f3] text-[#1b3b22] text-xs uppercase tracking-wider border border-[#e8e4d9]">Boutique Hotels</span>
                <span className="px-4 py-2 bg-[#f9f8f3] text-[#1b3b22] text-xs uppercase tracking-wider border border-[#e8e4d9]">Universities</span>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Customize Your Experience Footer Section */}
      <section className="py-24 px-8 bg-[#1a2318] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <img 
            src="https://i.pinimg.com/736x/be/20/78/be2078891ef4a7d983f29d08c1f3b393.jpg" 
            alt="Texture" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#e8e4d9] mb-6">Customize Your Experience</h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-10">
            Want to combine multiple experiences? Our booking system allows you to select multiple 
            programs and create your perfect tea day. Group discounts available for parties of 5 or more.
          </p>
          <button 
            onClick={() => navigate('contact')}
            className="bg-[#c8a951] text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#c8a951] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Book Your Journey
          </button>
        </div>
      </section>

      <Footer navigate={navigate} />
    </div>
  );
}