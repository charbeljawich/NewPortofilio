import React from 'react'
import { mySocials } from '../../constants'
const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-12 px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
    
    <div>
      <h2 className="text-2xl font-bold text-white tracking-wide mb-4">
        CharbelJ<span className="text-indigo-500">.</span>
      </h2>
      <p className="text-sm leading-relaxed text-gray-400">
        Discover  <span className="text-indigo-400 font-medium">My Portofilio</span>
        .
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-white font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2">
        <li><a href="#Home" className="hover:text-indigo-400 transition">Home</a></li>
        <li><a href="#About" className="hover:text-indigo-400 transition">About</a></li>
        <li><a href="#Projects" className="hover:text-indigo-400 transition">Projects</a></li>
        <li><a href="#W&E" className="hover:text-indigo-400 transition">W&E</a></li>
        <li><a href="#Testimonials" className="hover:text-indigo-400 transition">Testimonials</a></li>
        <li><a href="#Contact" className="hover:text-indigo-400 transition">Contact</a></li>
      </ul>
    </div>

    

    {/* Social Links */}
<div>
  <h3 className="text-white font-semibold mb-4">Connect</h3>
  <div className="flex space-x-5">
    {mySocials.map((social) => (
      <a
        key={social.name}
        href={
          social.name === 'WhatsApp'
            ? `https://wa.me/${social.href.replace(/\s|\+/g, '')}`
            : social.href
        }
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform duration-200"
      >
       <img
  src={social.icon}
  alt={social.name}
  className={`w-10 h-10 p-1 rounded ${
    social.name === 'GitHub' ? 'invert' : ''
  }`}
/>


      </a>
    ))}
  </div>
 
</div>

  </div>

  {/* Bottom Section */}
  <div className="text-center text-gray-500 text-sm mt-8">
    <p>
      © {new Date().getFullYear()} CharbelJ. All rights reserved.
    </p>
    <p className="mt-2 text-gray-400">
      Crafted with ❤️ by <span className="text-indigo-400 font-medium">Charbel Jawich</span>
    </p>
  </div>
</footer>

  )
}

export default Footer