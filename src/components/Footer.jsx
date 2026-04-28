import React from 'react';

export default function Footer({ navigate }) {
  return (
    <footer className="bg-[#0a180e] text-gray-400 py-16 px-8 text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-xl font-serif text-[#a67c00] font-bold mb-4">CEYLON<br />HERITAGE</h3>
          <p className="mb-4 text-xs leading-relaxed">Artisanal Tea Excellence.<br />Rooted in the highlands of Sri Lanka.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-xs">
            {['home','about','services','gallery','contact'].map(p => (
              <li key={p}>
                <button onClick={() => navigate(p)} className="hover:text-white transition capitalize">{p === 'home' ? 'Home' : p.charAt(0).toUpperCase() + p.slice(1)}</button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Policies</h4>
          <ul className="space-y-2 text-xs">
            {[
              { path: 'privacy', label: 'Privacy Policy' },
              { path: 'refund', label: 'Refund Policy' },
              { path: 'terms', label: 'Terms & Conditions' }
            ].map((policy) => (
              <li key={policy.path}>
                <button 
                  onClick={() => navigate(policy.path)} 
                  className="hover:text-white transition cursor-pointer text-left"
                >
                  {policy.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Contact</h4>
          <ul className="space-y-2 text-xs mb-6">
            <li>(+94) 70 290 0500</li>
            <li>
              <a href="mailto:info@ceylonteaexperience.com" className="hover:text-[#8d8b4e] transition-colors">
                info@ceylonteaexperience.com
              </a>
            </li>
            <li>
              <a href="mailto:reservations@theceylonteaexperience.com" className="hover:text-[#8d8b4e] transition-colors">
                reservations@theceylonteaexperience.com
              </a>
            </li>
            <li>
              <a 
                href="https://www.theceylonteaexperience.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#8d8b4e] transition-colors"
              >
                www.theceylonteaexperience.com
              </a>
            </li>
          </ul>
          <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-wider">Follow Us</h4>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/theceylonteaexperience?igsh=dDhtdXIwbzM0OGRh" target="_blank" rel="noreferrer" className="hover:text-[#a67c00] transition">Instagram</a>
            <a href="https://www.facebook.com/theceylonteaexperience?rdid=CssqTtbequqvomYQ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1C8jGDQwgq%2F#" target="_blank" rel="noreferrer" className="hover:text-[#a67c00] transition">Facebook</a>
            <a href="https://www.tiktok.com/@theceylonteaexper?_r=1&_t=ZS-92jKpR4JwXa" target="_blank" rel="noreferrer" className="hover:text-[#a67c00] transition">Tiktok</a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto text-center mt-12 pt-8 border-t border-gray-800 text-xs">
        © 2026 THE CEYLON TEA. All rights reserved
      </div>
    </footer>
  )
}