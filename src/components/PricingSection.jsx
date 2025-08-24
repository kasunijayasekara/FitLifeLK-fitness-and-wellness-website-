/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const PricingSection = () => {
    const[hourCount, setHourCount] = useState(1);

    //calculate price based on Hour
    const starterPrice = Math.round(19 + (hourCount /2))
    const premiumPrice = Math.round(49 + (hourCount/1))


  return (
    <section id='pricing' className='py-20 px-4'>
        <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-16'>Pricing</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
                {/* starter plan */}
                <div className='bg-white p-8 rounded-lg shadow-lg'>
                    <h1 className='text-xl text-gray-600 mb-4'>Starter</h1>
                    <p className='text-3xl font-bold mb-6'>${starterPrice}/Month</p>
                </div>

                {/* Premium plan */}
                <div className='bg-white p-8 rounded-lg shadow-lg'>
                    <h1 className='text-xl text-gray-600 mb-4'>Pro</h1>
                    <p className='text-3xl font-bold mb-6'>${premiumPrice}/Month</p>
                </div>
            </div>

            <div className='max-w-xl mx-auto'>
                <p className='text-center text-gray-600 mb-4'>{hourCount}Months</p>

                <div className='relative px-4'>
                    <div className='flex items-center gap-2'>
                        <span className='text-xs sm:text-sm text-gray-600'>1</span>
                        <input className='flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer' type="range" min="1" max="12" value={hourCount} onChange={(e)=> setHourCount(parseInt(e.target.value))} />
                        <span className='text-xs sm:text-sm text-gray-600'>12</span>
                    </div>
                </div>
            </div>

            <div className='text-center mt-12'>
                <p className='text-xl text-gray-600 mb-4'>Ready to Transform Your Life?</p>
                <button className='bg-black text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 text-sm font-medium transition-all hover:shadow-lg hover:shadow-black'><a href="https://wa.me/94758489295">Plan Your Wellness Path</a></button>
                
            </div>
        </div>
    </section>
  )
}

export default PricingSection
