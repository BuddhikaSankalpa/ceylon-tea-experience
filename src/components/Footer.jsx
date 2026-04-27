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
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Refund Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white transition">Sustainability</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Contact</h4>
          <ul className="space-y-2 text-xs mb-6">
            <li>(+94) 71 123 4567</li>
            <li>info@ceylonheritage.com</li>
            <li>123, Highland Estate, Nuwara Eliya, Sri Lanka</li>
          </ul>
          <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-wider">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#a67c00] transition">Instagram</a>
            <a href="#" className="hover:text-[#a67c00] transition">Facebook</a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto text-center mt-12 pt-8 border-t border-gray-800 text-xs">
        © 2024 Ceylon Heritage. Artisanal Tea Excellence.
      </div>
    </footer>
  )
}