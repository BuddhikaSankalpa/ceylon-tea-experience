import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function ServicesPage({ navigate }) {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-[#F9F6F0]">
      <Nav navigate={navigate} currentPage="services" />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/my_images/14.jpg" 
            alt="Ceylon Tea Garden" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A3D1A]/80 to-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center px-6">
          <span className="inline-block text-[#B8960C] text-xs font-bold tracking-[0.4em] uppercase mb-9 relative drop-shadow-md">
            <span className="absolute -left-12 top-1/2 w-8 h-[1px] bg-[#B8960C]"></span>
            CURATED EXPERIENCES
            <span className="absolute -right-12 top-1/2 w-8 h-[1px] bg-[#B8960C]"></span>
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 drop-shadow-2xl">
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
        
        {/* Service 1: The Tea Library */}
        <div className="relative flex flex-col lg:flex-row items-center group">
          <div className="w-full lg:w-7/12 relative z-0 overflow-hidden rounded-sm">
            <img 
              src="https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/25.jpeg" 
              alt="The Tea Library Display" 
              className="w-full h-[400px] md:h-[500px] lg:h-[550px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-6/12 lg:-ml-24 mt-[-40px] lg:mt-0 relative z-10 px-4 lg:px-0 py-8">
            <div className="bg-white/95 backdrop-blur-sm p-8 md:p-14 shadow-xl border border-gray-100">
              <span className="text-[#B8960C] font-serif italic text-2xl mb-4 block">01.</span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#2D6A2D] font-bold mb-6">The Tea Library</h2>
              
              <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">
                The Tea Library is a dedicated display of a wide range of premium tea brands available in Sri Lanka.
              </p>
              
              <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
                Guests can explore different types of Ceylon tea, compare brands, and purchase teas based on their preference. With several different brands available in one place, guests have the advantage of finding exactly what suits their taste. It’s a convenient way to discover and take home a variety of teas all in one place.
              </p>

              {/* Pricing & Booking CTA */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <p className="text-xl font-serif text-[#2D6A2D] font-bold">Free Entry</p>
                    <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mt-1">Retail prices vary by selection</p>
                  </div>
                  <a 
                    href="https://wa.me/94702900500" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto border-2 border-[#2D6A2D] text-[#2D6A2D] px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#2D6A2D] hover:text-white transition shadow-sm rounded-sm"
                  >
                    Inquire Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service 2: E-Commerce & Delivery */}
        <div className="relative flex flex-col lg:flex-row-reverse items-center group">
          <div className="w-full lg:w-7/12 relative z-0 overflow-hidden rounded-sm">
            <img 
              src="https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/10.jpeg  " 
              alt="E-Commerce & Delivery" 
              className="w-full h-[400px] md:h-[550px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-6/12 lg:-mr-24 mt-[-40px] lg:mt-0 relative z-10 px-4 lg:px-0">
            <div className="bg-white/95 backdrop-blur-sm p-8 md:p-14 shadow-xl border border-gray-100">
              {/* Coming Soon Badge */}
              <div className="inline-block bg-[#F9F6F0] border border-[#B8960C] text-[#B8960C] px-4 py-1.5 rounded-sm text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm">
                Online Store Coming Soon
              </div>

              <span className="text-[#B8960C] font-serif italic text-2xl mb-4 block">02.</span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#2D6A2D] font-bold mb-4">E-Commerce & Delivery</h2>
              <p className="text-gray-500 font-bold mb-6">Take Ceylon Tea home with you.</p>
              <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                Guests will soon be able to reorder their personalised blends or choose from our catalog of teas through our seamless online store.
              </p>
              
              {/* Highlighted Logistics */}
              <div className="bg-[#1A3D1A] text-white p-6 rounded-lg mb-8 shadow-md">
                <h4 className="text-[#B8960C] font-bold uppercase tracking-widest text-xs mb-4">Premium Logistics Options</h4>
                <ul className="space-y-4 text-sm font-light">
                  <li className="flex items-center gap-3">
                    <span className="bg-white/10 p-2 rounded text-[#B8960C]">🏨</span>
                    <span><strong className="font-bold">Hotel Delivery:</strong> Delivered directly to your stay in Galle/South Coast.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="bg-white/10 p-2 rounded text-[#B8960C]">✈️</span>
                    <span><strong className="font-bold">Airport Pickup:</strong> Collect your packaged teas securely at the airport before departure.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="bg-white/10 p-2 rounded text-[#B8960C]">🌍</span>
                    <span><strong className="font-bold">Global Shipping:</strong> Worldwide doorstep delivery.</span>
                  </li>
                </ul>
              </div>

              {/* Pricing & Booking CTA */}
              <div className="pt-2 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-4">
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-gray-500">Shipping rates vary by destination</p>
                  </div>
                   <a 
                    href="https://wa.me/94702900500" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-block text-center whitespace-nowrap border-2 border-[#2D6A2D] text-[#2D6A2D] px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#2D6A2D] hover:text-white transition shadow-sm rounded-sm"
                  >
                    Contact For Orders
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service 3: Build Your Own Tea – BYOT */}
        <div className="relative flex flex-col lg:flex-row items-center group">
          <div className="w-full lg:w-7/12 relative z-0 overflow-hidden rounded-sm">
            {/* Note: Recommend updating with actual Tea Library photo */}
            <img 
              src="https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/11.jpeg" 
              alt="The Tea Library" 
              className="w-full h-[700px] md:h-[850px] lg:h-[800px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-6/12 lg:-ml-24 mt-[-40px] lg:mt-0 relative z-10 px-4 lg:px-0 py-8">
            <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 shadow-xl border border-gray-100">
              <span className="text-[#B8960C] font-serif italic text-2xl mb-4 block">03.</span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#2D6A2D] font-bold mb-2">Build Your Own Tea – BYOT</h2>
              <p className="text-[#B8960C] font-bold mb-6">Sri Lanka's first curated tea-blending experience</p>
              
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                Step into our Tea Library and create a tea that is truly your own. In this interactive experience, guests select from:
              </p>
              
              <ul className="space-y-3 mb-6 text-sm md:text-base text-gray-700">
                <li className="flex gap-4 items-start"><span className="text-[#B8960C] font-bold">✓</span> A curated range of black and green base teas</li>
                <li className="flex gap-4 items-start"><span className="text-[#B8960C] font-bold">✓</span> Blending with herbs, spices, florals, and natural flavours</li>
                <li className="flex gap-4 items-start"><span className="text-[#B8960C] font-bold">✓</span> Creating personalised custom labels</li>
              </ul>

              <h4 className="text-[#8c6b00] font-semibold mb-3 text-sm md:text-base">You can also:</h4>
                <ul className="space-y-3 mb-6 text-sm md:text-base text-gray-700">
                  <li className="flex gap-4 items-start"><span className="text-[#a67c00] font-bold">✓</span> Name your tea or pack it as a gift</li>
                  <li className="flex gap-4 items-start"><span className="text-[#a67c00] font-bold">✓</span> Package it as a gift</li>
                  <li className="flex gap-4 items-start"><span className="text-[#a67c00] font-bold">✓</span> Save your recipe with us and order later</li>
                  <li className="flex gap-4 items-start"><span className="text-[#a67c00] font-bold">✓</span> Reorder online after returning home anywhere in the world</li>
                </ul>

                <div className="bg-[#f9f8f4] border-l-4 border-[#a67c00] p-5 rounded-r-lg mb-6">
                  <h4 className="text-sm md:text-base text-[#2D6A2D] font-bold mb-2">Perfect For:</h4>
                  <p className="text-sm md:text-base text-gray-700">
                    Couples, honeymooners, families, gift-seekers, repeat travellers
                  </p>
                </div>

              <div className="bg-[#F9F6F0] border-l-4 border-[#B8960C] p-5 rounded-r-lg mb-8">
                <p className="text-sm md:text-base text-[#2D6A2D] font-bold mb-2">
                  Go at your own pace with our friendly team on hand to help.
                </p>
                <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                  A curated Catalog of Teas showcases the diversity of Sri Lankan terroirs giving guests the experience of travelling across the island through flavour.
                </p>
              </div>

              {/* Pricing & Booking CTA */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <p className="text-2xl font-serif text-[#2D6A2D] font-bold">From $25 USD</p>
                    <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mt-1">Per Person (15-20 Mins)</p>
                  </div>
                  <a 
                    href="https://wa.me/94702900500" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-[#2D6A2D] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#1A3D1A] transition shadow-md rounded-sm inline-block text-center"
                  >
                    Reserve Your Spot
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service 4: Hand-Made Tea & Tasting */}
        <div className="relative flex flex-col lg:flex-row-reverse items-center group">
          <div className="w-full lg:w-7/12 relative z-0 overflow-hidden rounded-sm">
            <img 
              src="https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/9.jpeg"
              alt="Hand-Made Tea Experience" 
              className="w-full h-[600px] md:h-[750px] lg:h-[700px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-6/12 lg:-mr-24 mt-[-40px] lg:mt-0 relative z-10 px-4 lg:px-0 py-8">
            <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 shadow-xl border border-gray-100">
              <span className="text-[#B8960C] font-serif italic text-2xl mb-4 block">04.</span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#2D6A2D] font-bold mb-2">Hand-Made Tea & Tasting</h2>
              <p className="text-[#B8960C] font-bold mb-6">A hands-on journey through the art of Ceylon Tea.</p>
              
              <p className="text-gray-600 mb-4 text-sm md:text-base">In this guided experience, guests are invited to step into the role of a tea maker:</p>
              
              <ul className="space-y-3 mb-8 text-sm md:text-base text-gray-700">
                <li className="flex gap-4 items-start"><span className="text-[#B8960C] font-bold">✓</span> Hand-pluck fresh tea leaves</li>
                <li className="flex gap-4 items-start"><span className="text-[#B8960C] font-bold">✓</span> Roll and craft your own green or black tea</li>
                <li className="flex gap-4 items-start"><span className="text-[#B8960C] font-bold">✓</span> Learn how leaf grade, region, and climate influence taste</li>
                <li className="flex gap-4 items-start"><span className="text-[#B8960C] font-bold">✓</span> Compare teas from different terroirs through a curated tasting</li>
                <li className="flex gap-4 items-start"><span className="text-[#B8960C] font-bold">✓</span> Take home a sample of the tea you made</li>
              </ul>

              <div className="bg-[#F9F6F0] border-l-4 border-[#B8960C] p-5 rounded-r-lg mb-8">
                <h4 className="text-[#2D6A2D] font-bold mb-3 text-sm md:text-base">This session is perfect for:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                  <ul className="space-y-2">
                    <li className="flex gap-2 items-start"><span className="text-[#2D6A2D] font-bold">•</span> Cultural travellers</li>
                    <li className="flex gap-2 items-start"><span className="text-[#2D6A2D] font-bold">•</span> Families</li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex gap-2 items-start"><span className="text-[#2D6A2D] font-bold">•</span> Tea enthusiasts</li>
                    <li className="flex gap-2 items-start"><span className="text-[#2D6A2D] font-bold">•</span> Schools and groups</li>
                  </ul>
                </div>
              </div>

              {/* Pricing & Booking CTA */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <div>
                    <p className="text-2xl font-serif text-[#2D6A2D] font-bold">From $45 USD</p>
                    <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mt-1">Per Person (60 Mins)</p>
                  </div>
                  <a 
                    href="https://wa.me/94702900500" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-[#2D6A2D] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#1A3D1A] transition shadow-md rounded-sm inline-block text-center"
                  >
                    Book This Experience
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service 5: Workshops & Groups */}
        <div className="relative flex flex-col lg:flex-row items-center group pb-10">
          <div className="w-full lg:w-7/12 relative z-0 overflow-hidden rounded-sm">
            <img 
              src="https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/images/20.webp" 
              alt="Workshops and Groups" 
              className="w-full h-[400px] md:h-[550px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-6/12 lg:-ml-24 mt-[-40px] lg:mt-0 relative z-10 px-4 lg:px-0">
            <div className="bg-white/95 backdrop-blur-sm p-8 md:p-14 shadow-xl border border-gray-100">
              <span className="text-[#B8960C] font-serif italic text-2xl mb-4 block">05.</span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#2D6A2D] font-bold mb-4">Workshops & Groups</h2>
              <p className="text-gray-500 font-bold mb-6">Tailored packages for an unforgettable collective experience.</p>
              <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                Whether you're organizing a corporate retreat or a specialized tour group, our programs are fully customisable according to duration and group size.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-[#F9F6F0] text-[#2D6A2D] text-xs font-bold uppercase tracking-wider border border-gray-200 rounded-sm">Tour Groups</span>
                <span className="px-4 py-2 bg-[#F9F6F0] text-[#2D6A2D] text-xs font-bold uppercase tracking-wider border border-gray-200 rounded-sm">Corporate Teams</span>
                <span className="px-4 py-2 bg-[#F9F6F0] text-[#2D6A2D] text-xs font-bold uppercase tracking-wider border border-gray-200 rounded-sm">Boutique Hotels</span>
                <span className="px-4 py-2 bg-[#F9F6F0] text-[#2D6A2D] text-xs font-bold uppercase tracking-wider border border-gray-200 rounded-sm">Universities</span>
              </div>

              {/* Pricing & Booking CTA */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <p className="text-xl font-serif text-[#2D6A2D] font-bold">Custom Pricing</p>
                    <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mt-1">Based on group size & needs</p>
                  </div>
                  <a 
                    href="https://wa.me/94702900500" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-[#2D6A2D] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#1A3D1A] transition shadow-md rounded-sm inline-block text-center"
                  >
                    Reserve Your Spot
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Customize Your Experience Footer Section (Updated CTA) */}
      <section className="py-24 px-8 bg-[#1A3D1A] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://ceylon-tea-experience-media.s3.us-east-1.amazonaws.com/my_images/my+10.jpg" 
            alt="Texture" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">Curate Your Perfect <br/><span className="text-[#B8960C]">Tea Day</span></h2>
          <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            Want to combine multiple experiences? Connect with our team directly to design your ideal visit. Group discounts are available for parties of 5 or more.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* WhatsApp Booking Button */}
            <a 
              href="https://wa.me/94702900500" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 bg-[#25D366] text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#1DA851] transition shadow-lg rounded-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </a>
            {/* Email Booking Button */}
            <a 
              href="mailto:reservations@theceylonteaexperience.com"
              className="inline-flex justify-center items-center bg-transparent border-2 border-[#B8960C] text-[#B8960C] px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#B8960C] hover:text-white transition shadow-lg rounded-sm"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </section>
      <div className="fixed bottom-8 right-8 z-50">
        <a 
          href="https://wa.me/94702900500" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group flex items-center gap-3 bg-[#25D366] text-white px-5 py-4 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_35px_rgba(37,211,102,0.5)] transition-all duration-300 hover:-translate-y-1 cursor-pointer"
        >
          <span className="font-bold text-sm tracking-wide hidden sm:block">Chat on WhatsApp</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
          </svg>
        </a>
      </div>

      <Footer navigate={navigate} />
    </div>
  );
}