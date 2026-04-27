import { useState } from 'react'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import './App.css'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const navigate = (page) => setCurrentPage(page)

  const pages = {
    home: <HomePage navigate={navigate} />,
    about: <AboutPage navigate={navigate} />,
    services: <ServicesPage navigate={navigate} />,
    gallery: <GalleryPage navigate={navigate} />,
    contact: <ContactPage navigate={navigate} />,
  }

  return pages[currentPage] || pages.home
}