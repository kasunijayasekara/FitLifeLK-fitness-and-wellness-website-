/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import { FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram } from 'react-icons/fa'

const footerLinks = {
  company: [
    { name: 'About Us', href: 'home' },
    { name: 'Terms of Use', href: 'home' },
    { name: 'Privacy Policy', href: 'home' },
    { name: 'How It Works', href: 'home' },
    { name: 'Contact Us', href: 'https://wa.me/94758489295' },
  ],
  getHelp: [
    { name: 'Support Center', href: 'footer' },
    { name: '24/7 Assistance', href: 'footer' },
    { name: 'Live Chat', href: 'https://wa.me/94758489295' },
  ],
  programs: [
    { name: 'Workout Plans', href: 'services' },
    { name: 'Nutrition Guides', href: 'services' },
    { name: 'Wellness Tips', href: 'services' },
  ],
  contact: [
    { name: 'WhatsApp', href: 'https://wa.me/94758489295' },
    { name: 'Email Support', href: '#' },
  ],
}

const Footer = () => {
  return (
    <footer id='footer' className='bg-gray-50'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12'>
          {/* Brand Column */}
          <div className='lg:col-span-4'>
            <div className='flex gap-1 items-center mb-6'>
              <div className="flex items-center gap-1 cursor-pointer">
                <div className="w-4 h-4 bg-green-500 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
                <div className="w-4 h-4 bg-yellow-500 -ml-2 rounded-full opacity-100 hover:opacity-75 transition-opacity"></div>
              </div>
              <span className='text-xl font-medium ml-1'>FitLife LK</span>
            </div>
            <div>
              <p className='text-gray-600 mb-6 md:w-3/4'>
                We are passionate about helping you achieve your fitness and wellness goals. 
                From personalized workouts to nutrition guidance, FitLife LK supports you on every step of your healthy lifestyle journey.
              </p>

              <div className='flex gap-4'>
                <a href="#" className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200'><FaFacebookF /></a>
                <a href="#" className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-400 hover:text-white transition-all duration-200'><FaTwitter /></a>
                <a href="#" className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-green-500 hover:text-white transition-all duration-200'><FaWhatsapp /></a>
                <a href="#" className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-pink-500 hover:text-white transition-all duration-200'><FaInstagram /></a>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className='lg:col-span-8'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
              {Object.entries(footerLinks).map(([category, links], idx) => (
                <div key={idx}>
                  <h3 className='text-lg font-medium mb-4 uppercase'>{category}</h3>
                  <ul className='space-y-3'>
                    {links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <a href={link.href} className='text-gray-600 hover:text-gray-900'>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='border-t border-gray-200 mt-12 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-600 text-sm'>Copyright © {new Date().getFullYear()} FitLife LK</p>
            <p className='text-gray-600 text-sm'>Created by Kasuni Koshila</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
