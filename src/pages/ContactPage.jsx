import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { FiMapPin, FiPhone, FiMail, FiGlobe, FiClock } from 'react-icons/fi';

export default function ContactPage({ navigate }) {
  const [form, setForm] = useState({ name: '', email: '', type: 'Private Tasting Event', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen font-sans text-gray-900 bg-[#fdfdfc] relative">
      <Nav navigate={navigate} currentPage="contact" />

      {/* Hero - SECTION UNCHANGED AS REQUESTED */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1582793988951-9aed5509eb97?q=80&w=2000&auto=format&fit=crop" 
            alt="Ceylon Tea Garden" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center px-6">
          <span className="inline-block text-[#c8a951] text-xs font-semibold tracking-[0.4em] uppercase mb-9 relative drop-shadow-md">
            <span className="absolute -left-12 top-1/2 w-8 h-[1px] bg-[#c8a951]"></span>
            BEGIN YOUR JOURNEY
            <span className="absolute -right-12 top-1/2 w-8 h-[1px] bg-[#c8a951]"></span>
          </span>
          
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-10 drop-shadow-lg">
            Contact Us
          </h1>
          
          <div className="max-w-3xl mx-auto text-white/90 text-lg md:text-xl leading-relaxed font-light drop-shadow-md">
            <p>
              Connect with us for bespoke bookings, immersive group experiences, 
              creative collaborations, or to begin your tea journey.
            </p>
          </div>
        </div>

      </section>

      {/* Beautiful Info Cards Section */}
      <section className="py-20 px-8 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 -mt-32">
            {[
              { icon: FiMapPin, title: 'Location', detail: '146A, Sea Street Galle, Sri Lanka' },
              { icon: FiPhone, title: 'Phone', detail: '(+94) 70 290 0500' },
              { icon: FiMail, title: 'Email', detail: 'reservations@theceylonteaexperience.com' },
              { icon: FiGlobe, title: 'Website', detail: 'www.ceylonteaexperience.com' },
              { icon: FiClock, title: 'Opening Hours', detail: 'Daily – 9.00 AM to 7.00 PM' }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="group relative backdrop-blur-xl bg-white/70 border border-white/60 rounded-[2rem] p-8 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(27,59,34,0.08)] hover:-translate-y-3 transition-all duration-500 overflow-hidden"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c8a951] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Icon Circle */}
                <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-50 rounded-full flex items-center justify-center mb-6 shadow-[inset_0_-2px_6px_rgba(0,0,0,0.03)] border border-gray-100 group-hover:border-[#c8a951]/30 group-hover:shadow-[0_0_20px_rgba(200,169,81,0.15)] group-hover:scale-110 transition-all duration-500 z-10">
                  {/* React Icon Component Rendering */}
                  <item.icon className="text-[26px] text-[#1a3020] group-hover:text-[#c8a951] transition-colors duration-300 drop-shadow-sm" />
                </div>

                {/* Text Content */}
                <h3 className="text-[#1a3020] font-serif font-bold text-xl mb-3 tracking-wide z-10">{item.title}</h3>
                
                {/* Animated Divider */}
                <div className="w-6 h-[2px] bg-[#c8a951]/40 mb-4 group-hover:w-16 transition-all duration-500 z-10"></div>
                
                <p className="text-sm text-gray-600 leading-relaxed font-light break-words w-full z-10">{item.detail}</p>

                {/* Background Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#c8a951]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-4 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden border border-gray-50">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left: Enhanced Info */}
            <div className="p-12 lg:p-20 bg-[#1b3b22] text-white">
              <h2 className="text-4xl font-serif font-bold mb-8">The Ceylon Tea Experience - Galle</h2>
              <div className="space-y-10">
                {[
                  { icon: '📍', label: 'Address', value: '146A, Sea Street, Galle 80000, Sri Lanka' },
                  { icon: '✉️', label: 'Email', value: 'reservations@theceylonteaexperience.com' },
                  { icon: '📞', label: 'Phone', value: '(+94) 70 290 0500' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start">
                    <span className="text-2xl mt-1 opacity-80">{item.icon}</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#a67c00] mb-2">{item.label}</p>
                      <p className="text-lg font-light text-gray-200">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 pt-16 border-t border-white/10">
                <p className="text-xs font-bold uppercase tracking-widest text-[#a67c00] mb-4">Tea Tasting Hours</p>
                <div className="flex justify-between items-center text-lg font-light">
                  <span>Monday – Sunday</span>
                  <span className="font-serif italic font-bold">09:00 AM – 07:00 PM</span>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-xs font-bold uppercase tracking-widest text-[#a67c00] mb-4">Follow Our Journey</p>
                <div className="flex gap-4">
                  {['📸', '📘', '🎵'].map((social, i) => (
                    <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#a67c00] hover:border-transparent transition-all duration-300">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Modern Form */}
            <div className="p-12 lg:p-20">
              <h2 className="text-4xl font-serif font-bold text-[#1b3b22] mb-3">Send an Inquiry</h2>
              <p className="text-gray-500 mb-10 leading-relaxed">Allow us to curate your perfect tea journey. Our specialists will respond within 24 hours.</p>

              {submitted ? (
                <div className="bg-[#1b3b22]/5 p-12 rounded-3xl text-center border border-[#1b3b22]/10 animate-fade-in">
                  <div className="text-5xl mb-6">🍃</div>
                  <h3 className="text-2xl font-serif font-bold text-[#1b3b22] mb-3">Thank You</h3>
                  <p className="text-gray-600">Your message has been received. Our tea specialists will reach out to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 block transition-colors group-focus-within:text-[#1b3b22]">Full Name</label>
                      <input
                        type="text"
                        placeholder="Augustina Pereira"
                        required
                        className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-[#1b3b22]/20 transition-all outline-none text-sm"
                      />
                    </div>
                    <div className="group">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 block transition-colors group-focus-within:text-[#1b3b22]">Email Address</label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        required
                        className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-[#1b3b22]/20 transition-all outline-none text-sm"
                      />
                    </div>
                  </div>
                  <div className="group">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 block transition-colors group-focus-within:text-[#1b3b22]">Inquiry Type</label>
                    <select className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-[#1b3b22]/20 transition-all outline-none text-sm appearance-none">
                      <option>Private Tasting Event</option>
                      <option>The Leaf Experience ($45)</option>
                      <option>The Artisan Experience ($120)</option>
                      <option>The Planter Stay ($450)</option>
                      <option>Corporate / Group Booking</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div className="group">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 block transition-colors group-focus-within:text-[#1b3b22]">Your Message</label>
                    <textarea
                      rows={5}
                      placeholder="How may we assist you today?"
                      required
                      className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-[#1b3b22]/20 transition-all outline-none text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#1b3b22] text-white py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-[#122917] hover:shadow-xl transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Modernized Map Section */}
      {/* Modernized Map Section */}
      <section className="py-24 bg-[#f8f9f7]">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-[#1b3b22] mb-3">Find Us Here</h2>
          <p className="text-gray-500 mb-12">Visit our flagship experience center in the historic city of Galle.</p>
          
          <div className="relative group max-w-5xl mx-auto">
            <div className="absolute -inset-4 bg-[#1b3b22]/5 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border border-white">
              
              {/* මෙතැනට අලුත් iframe එක දාන්න */}
              <iframe
                src="https://maps.google.com/maps?q=Sea%20Street,%20Galle,%20Sri%20Lanka&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Ceylon Tea Experience Location"
              ></iframe>

            </div>
            
            <a 
              href="https://goo.gl/maps/Q6q6b4zY4mX2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 font-bold text-[#1b3b22] hover:bg-[#1b3b22] hover:text-white transition-all duration-300"
            >
              📍 Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* High-End Bottom CTA */}
      <section className="py-24 px-8 bg-[#1a2318] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <img 
            src="https://i.pinimg.com/1200x/19/6c/12/196c120c0ebba026466d7ae73da3947a.jpg" 
            alt="Texture" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <p className="text-xs uppercase tracking-[0.5em] text-[#a67c00] mb-6 font-bold">Begin Your Heritage Journey</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#e8e4d9] mb-6">Experience the Unparalleled</h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-10">
           Our curators are ready to guide you through every note and aroma of Pure Ceylon Tea.
          </p>
          <button 
            onClick={() => navigate('contact')}
            className="bg-[#c8a951] text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#c8a951] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Explore the Estates
          </button>
        </div>
      </section>

      <Footer navigate={navigate} />

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="group flex items-center gap-3 bg-[#25D366] text-white px-5 py-4 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_35px_rgba(37,211,102,0.5)] transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <span className="font-bold text-sm tracking-wide hidden sm:block">Chat on WhatsApp</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
          </svg>
        </button>
      </div>

    </div>
  )
}
// import { useState } from 'react'
// import Nav from '../components/Nav'
// import Footer from '../components/Footer'

// export default function ContactPage({ navigate }) {
//   const [form, setForm] = useState({ name: '', email: '', type: 'Private Tasting Event', message: '' })
//   const [submitted, setSubmitted] = useState(false)

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setSubmitted(true)
//   }

//   return (
//     <div className="min-h-screen font-sans text-gray-900 bg-[#fdfdfc]">
//       <Nav navigate={navigate} currentPage="contact" />

//       {/* Hero - SECTION UNCHANGED AS REQUESTED */}
//       <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <img 
//             src="https://images.unsplash.com/photo-1582793988951-9aed5509eb97?q=80&w=2000&auto=format&fit=crop" 
//             alt="Ceylon Tea Garden" 
//             className="w-full h-full object-cover scale-105"
//           />
//           <div className="absolute inset-0 bg-black/40"></div>
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto text-center px-6">
//           <p className="text-xs uppercase tracking-[0.4em] text-[#a67c00] mb-4 font-bold drop-shadow-md">
//             Discover
//           </p>
//           <h1 className="text-5xl md:text-8xl font-serif text-white mb-10 drop-shadow-lg">
//             Contact Us
//           </h1>
//           <div className="max-w-3xl mx-auto text-white/90 text-lg md:text-xl leading-relaxed font-light drop-shadow-md">
//             <p>
//               For bookings, group visits, collaborations, or general inquiries, reach out to us anytime.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Modernized Info Cards Section */}
//       <section className="py-20 px-8 relative z-20">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 -mt-32">
//             {[
//               { icon: '📍', title: 'Location', detail: '146A, Sea Street Galle, Sri Lanka' },
//               { icon: '📞', title: 'Phone', detail: '(+94) 70 290 0500' },
//               { icon: '✉️', title: 'Email', detail: 'reservations@theceylonteaexperience.com' },
//               { icon: '🌐', title: 'Website', detail: 'www.ceylonteaexperience.com' },
//               { icon: '🕒', title: 'Opening Hours', detail: 'Daily – 9.00 AM to 7.00 PM' }
//             ].map((item, idx) => (
//               <div key={idx} className="bg-white/90 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500">
//                 <div className="w-14 h-14 bg-[#1b3b22]/5 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
//                   {item.icon}
//                 </div>
//                 <h3 className="text-[#1b3b22] font-serif font-bold text-lg mb-2">{item.title}</h3>
//                 <p className="text-sm text-gray-500 leading-relaxed break-words w-full">{item.detail}</p>
//               </div>
//             ))}
//           </div>

//           <div className="flex justify-center mt-12">
//             <button className="group relative bg-[#25D366] text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 transition-all hover:shadow-[0_10px_20px_rgba(37,211,102,0.3)] hover:scale-105">
//               <span className="text-xl">WhatsApp</span>
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
//                 <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
//               </svg>
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Main Contact Section */}
//       <section className="py-4 px-4">
//         <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden border border-gray-50">
//           <div className="grid grid-cols-1 lg:grid-cols-2">
            
//             {/* Left: Enhanced Info */}
//             <div className="p-12 lg:p-20 bg-[#1b3b22] text-white">
//               <h2 className="text-4xl font-serif font-bold mb-8">The Ceylon Tea Experience - Galle</h2>
//               <div className="space-y-10">
//                 {[
//                   { icon: '📍', label: 'Address', value: '146A, Sea Street, Galle 80000, Sri Lanka' },
//                   { icon: '✉️', label: 'Email', value: 'reservations@theceylonteaexperience.com' },
//                   { icon: '📞', label: 'Phone', value: '(+94) 70 290 0500' }
//                 ].map((item, idx) => (
//                   <div key={idx} className="flex gap-6 items-start">
//                     <span className="text-2xl mt-1 opacity-80">{item.icon}</span>
//                     <div>
//                       <p className="text-xs font-bold uppercase tracking-widest text-[#a67c00] mb-2">{item.label}</p>
//                       <p className="text-lg font-light text-gray-200">{item.value}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-16 pt-16 border-t border-white/10">
//                 <p className="text-xs font-bold uppercase tracking-widest text-[#a67c00] mb-4">Tea Tasting Hours</p>
//                 <div className="flex justify-between items-center text-lg font-light">
//                   <span>Monday – Sunday</span>
//                   <span className="font-serif italic font-bold">09:00 AM – 07:00 PM</span>
//                 </div>
//               </div>

//               <div className="mt-12">
//                 <p className="text-xs font-bold uppercase tracking-widest text-[#a67c00] mb-4">Follow Our Journey</p>
//                 <div className="flex gap-4">
//                   {['📸', '📘', '🎵'].map((social, i) => (
//                     <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#a67c00] hover:border-transparent transition-all duration-300">
//                       {social}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Right: Modern Form */}
//             <div className="p-12 lg:p-20">
//               <h2 className="text-4xl font-serif font-bold text-[#1b3b22] mb-3">Send an Inquiry</h2>
//               <p className="text-gray-500 mb-10 leading-relaxed">Allow us to curate your perfect tea journey. Our specialists will respond within 24 hours.</p>

//               {submitted ? (
//                 <div className="bg-[#1b3b22]/5 p-12 rounded-3xl text-center border border-[#1b3b22]/10 animate-fade-in">
//                   <div className="text-5xl mb-6">🍃</div>
//                   <h3 className="text-2xl font-serif font-bold text-[#1b3b22] mb-3">Thank You</h3>
//                   <p className="text-gray-600">Your message has been received. Our tea specialists will reach out to you shortly.</p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="group">
//                       <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 block transition-colors group-focus-within:text-[#1b3b22]">Full Name</label>
//                       <input
//                         type="text"
//                         placeholder="Augustina Pereira"
//                         required
//                         className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-[#1b3b22]/20 transition-all outline-none text-sm"
//                       />
//                     </div>
//                     <div className="group">
//                       <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 block transition-colors group-focus-within:text-[#1b3b22]">Email Address</label>
//                       <input
//                         type="email"
//                         placeholder="you@example.com"
//                         required
//                         className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-[#1b3b22]/20 transition-all outline-none text-sm"
//                       />
//                     </div>
//                   </div>
//                   <div className="group">
//                     <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 block transition-colors group-focus-within:text-[#1b3b22]">Inquiry Type</label>
//                     <select className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-[#1b3b22]/20 transition-all outline-none text-sm appearance-none">
//                       <option>Private Tasting Event</option>
//                       <option>The Leaf Experience ($45)</option>
//                       <option>The Artisan Experience ($120)</option>
//                       <option>The Planter Stay ($450)</option>
//                       <option>Corporate / Group Booking</option>
//                       <option>General Inquiry</option>
//                     </select>
//                   </div>
//                   <div className="group">
//                     <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 block transition-colors group-focus-within:text-[#1b3b22]">Your Message</label>
//                     <textarea
//                       rows={5}
//                       placeholder="How may we assist you today?"
//                       required
//                       className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-[#1b3b22]/20 transition-all outline-none text-sm resize-none"
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     className="w-full bg-[#1b3b22] text-white py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-[#122917] hover:shadow-xl transition-all duration-300"
//                   >
//                     Send Message
//                   </button>
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Modernized Map Section */}
//       <section className="py-24 bg-[#f8f9f7]">
//         <div className="max-w-7xl mx-auto px-8 text-center">
//           <h2 className="text-4xl font-serif font-bold text-[#1b3b22] mb-3">Find Us Here</h2>
//           <p className="text-gray-500 mb-12">Visit our flagship experience center in the historic city of Galle.</p>
          
//           <div className="relative group max-w-5xl mx-auto">
//             <div className="absolute -inset-4 bg-[#1b3b22]/5 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
//             <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border border-white">
//               <iframe
//                 src="https://maps.app.goo.gl/MLCaXyBaTEqSTppv9"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 title="The Ceylon Tea Experience Location"
//               ></iframe>
//             </div>
            
//             <button className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 font-bold text-[#1b3b22] hover:bg-[#1b3b22] hover:text-white transition-all duration-300">
//               📍 Open in Google Maps
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* High-End Bottom CTA */}

//       <section className="py-24 px-8 bg-[#1a2318] text-center relative overflow-hidden">
//         <div className="absolute inset-0 opacity-60">
//           <img 
//             src="https://i.pinimg.com/1200x/19/6c/12/196c120c0ebba026466d7ae73da3947a.jpg" 
//             alt="Texture" 
//             className="w-full h-full object-cover"
//           />
//         </div>
        
//         <div className="max-w-3xl mx-auto relative z-10">
//           <p className="text-xs uppercase tracking-[0.5em] text-[#a67c00] mb-6 font-bold">Begin Your Heritage Journey</p>
//           <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#e8e4d9] mb-6">Experience the Unparalleled</h2>
//           <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-10">
//            Our curators are ready to guide you through every note and aroma of Pure Ceylon Tea.
//           </p>
//           <button 
//             onClick={() => navigate('contact')}
//             className="bg-[#c8a951] text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#c8a951] transition-all duration-300 shadow-md hover:shadow-lg"
//           >
//             Explore the Estates
//           </button>
//         </div>
//       </section>

//       <Footer navigate={navigate} />
//     </div>
//   )
// }