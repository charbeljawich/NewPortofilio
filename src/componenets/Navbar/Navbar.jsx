import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { motion } from 'framer-motion'

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li"><a href="#Home" className="nav-link">Home</a></li>
      <li className="nav-li"><a href="#About" className="nav-link">About</a></li>
      <li className="nav-li"><a href="#Projects" className="nav-link">Projects</a></li>
      <li className="nav-li"><a href="#W&E" className="nav-link">W&E</a></li>
      <li className="nav-li"><a href="#Testimonials" className="nav-link">Testimonials</a></li>
      <li className="nav-li"><a href="#Contact" className="nav-link">Contact</a></li>
    </ul>
  )
}

const Navbar = () => {
  useGSAP(() => {
    gsap.fromTo('#name',
      { x: 100 },
      { opacity: 1, x: 0, duration: 2, ease: 'sine.out' }
    )
  }, [])

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a href="/" id="name" className="text-xl font-bold text-neutral-400 transition-colors hover:text-white opacity-0">Charbel J</a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 transition-colors hover:text-white focus:outline-none sm:hidden"
          >
            <img src={isOpen ? '/assets/close.svg' : '/assets/menu.svg'} className="w-6 h-6" alt="toggle" />
          </button>

          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{ maxHeight: '100vh' }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  )
}

export default Navbar
