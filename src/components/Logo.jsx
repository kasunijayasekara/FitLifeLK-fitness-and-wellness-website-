/* eslint-disable no-unused-vars */
import React from 'react'
import facebook from '../assets/facebook.png'
import whatsapp from '../assets/whatsapp.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import gmail from '../assets/gmail.png'

const logo = () => {
    const logos = [facebook, whatsapp, instagram, twitter, gmail]
  return (
    <div id='contact' className='w-full overflow-hidden container mx-auto py-20 gap-8 sm:px-6 flex sm:flex-row flex-col sm:items-center items-start'>
        <div className='w-[300px] px-8 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-bold text-left'>Connect with us</div>

        <div className='flex animate-marquee whitespace-nowrap'>
            {logos.map((logo, index) => (
                <img key={index} src={logo} alt="company logo" className='mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all'/>
            ))}

            {/* duplicate logo */}
              {logos.map((logo, index) => (
                <img key={'duplicate-${index}'} src={logo} alt="company logo" className='mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all'/>
            ))}
        </div>
    </div>
  )
}

export default logo