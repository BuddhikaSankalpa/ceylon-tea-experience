import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const allPhotos = [
  { id: 1, category: "Estates", src: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?w=800&q=80", title: "Nuwara Eliya Mornings", sub: "Estate · 3 min read", wide: true },
  { id: 2, category: "Process", src: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&q=80", title: "Golden Flow", sub: "Process · 5 minutes" },
  { id: 3, category: "Tea Varieties", src: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80", title: "Two Leaves and a Bud", sub: "Tea Varieties · 4 minutes" },
  { id: 4, category: "People", src: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cbf9?w=800&q=80", title: "The Art of Wither", sub: "People · 2 min read" },
  { id: 5, category: "Process", src: "https://images.unsplash.com/photo-1582046830501-4439f0db8a00?w=800&q=80", title: "Generations of Wisdom", sub: "Process · 6 minutes" },
  { id: 6, category: "Estates", src: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80", title: "Echoes of Industry", sub: "Estates · 3 minutes" },
  { id: 7, category: "Tea Varieties", src: "https://images.unsplash.com/photo-1525081905268-fc0b46e9d786?w=800&q=80", title: "White Tea Reserve", sub: "Tea Varieties · 5 min read" },
  { id: 8, category: "People", src: "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?w=800&q=80", title: "Master Blender at Work", sub: "People · 4 min read", wide: true },
  { id: 9, category: "Estates", src: "https://images.unsplash.com/photo-1577401239170-897942555fb3?w=800&q=80", title: "Misty Highland Sunrise", sub: "Estates · 2 min read" },
  { id: 10, category: "Tea Varieties", src: "https://images.unsplash.com/photo-1615554851416-ab8c0e21a221?w=800&q=80", title: "The Perfect Cup", sub: "Tea Varieties · 3 min" },
  { id: 11, category: "Process", src: "https://images.unsplash.com/photo-1576092762791-dd9e2220cad1?w=800&q=80", title: "Afternoon Tasting", sub: "Process · 4 min" },
  { id: 12, category: "People", src: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800&q=80", title: "The Women of the Estate", sub: "People · 5 min read" },
]

const categories = ["All Collections", "Estates", "Process", "Tea Varieties", "People"]

export default function GalleryPage({ navigate }) {
  const [activeCategory, setActiveCategory] = useState("All Collections")
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeCategory === "All Collections"
    ? allPhotos
    : allPhotos.filter(p => p.category === activeCategory)

  return (
    <div className="min-h-screen font-sans text-gray-800">
      <Nav navigate={navigate} currentPage="gallery" />

      {/* Hero */}
      <section className="py-20 px-8 bg-[#fdfaf5] text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[#a67c00] mb-4">Visual Narrative</p>
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#1b3b22] mb-6">
          Capturing the Essence<br />of the Highlands
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
          A sensory journey through the misty peaks, artisanal craftsmanship, and the golden soul of Sri Lanka's finest export.
        </p>
      </section>

      {/* Category Filters */}
      <section className="px-8 pb-8 bg-[#fdfaf5]">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-widest transition rounded-sm ${
                activeCategory === cat
                  ? 'bg-[#1b3b22] text-white'
                  : 'text-gray-500 border border-gray-300 hover:border-[#1b3b22] hover:text-[#1b3b22]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-8 px-8 bg-white">
        <div className="max-w-6xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map(photo => (
            <div
              key={photo.id}
              className="break-inside-avoid group relative overflow-hidden rounded cursor-pointer"
              onClick={() => setLightbox(photo)}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white font-serif text-lg font-bold">{photo.title}</p>
                <p className="text-gray-300 text-xs">{photo.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-[#a67c00] transition"
            >
              ✕
            </button>
            <img src={lightbox.src} alt={lightbox.title} className="w-full rounded shadow-2xl" />
            <div className="mt-4 text-center">
              <p className="text-white font-serif text-xl font-bold">{lightbox.title}</p>
              <p className="text-gray-400 text-xs mt-1">{lightbox.category} · {lightbox.sub}</p>
            </div>
            {/* Prev/Next */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
              <button
                className="pointer-events-auto bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center transition"
                onClick={e => {
                  e.stopPropagation()
                  const idx = filtered.findIndex(p => p.id === lightbox.id)
                  setLightbox(filtered[(idx - 1 + filtered.length) % filtered.length])
                }}
              >‹</button>
              <button
                className="pointer-events-auto bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center transition"
                onClick={e => {
                  e.stopPropagation()
                  const idx = filtered.findIndex(p => p.id === lightbox.id)
                  setLightbox(filtered[(idx + 1) % filtered.length])
                }}
              >›</button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Banner */}
      <section className="py-24 px-8 bg-[#1b3b22] text-center">
        <h2 className="text-4xl font-serif font-bold text-white mb-4">Witness the Journey in Person</h2>
        <p className="text-gray-300 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
          Book a private tour of our historic estates and participate in an artisanal tea-making session guided by our masters.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigate('contact')}
            className="bg-[#a67c00] text-white px-8 py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#856300] transition"
          >
            Reserve Your Experience
          </button>
          <button
            onClick={() => navigate('services')}
            className="border border-white text-white px-8 py-3 text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition"
          >
            View Estate Maps
          </button>
        </div>
      </section>

      <Footer navigate={navigate} />
    </div>
  )
}