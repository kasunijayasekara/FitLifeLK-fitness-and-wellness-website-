/* eslint-disable no-unused-vars */
import React from 'react'

const Purpose = () => {
    const features = [
    {
      icon: "🟣", 
      title: " Personalized Workouts",
      description: "From strength training to yoga, we design fitness plans that match your goals and lifestyle."
    },
    {
      icon: "🔴", 
      title: "Community & Motivation",
      description: "Join a supportive community that keeps you inspired, accountable, and pushing forward."
    }
  ];

  
  return (
    <section className='w-full bg-gray-50 py-16 px-4 md:px-8'>
        <div className='max-w-6xl mx-auto'>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>

                {/* heading */}
                <div className=''>
                <p className='text-sm text-amber-700  font-medium mb-2 font-bold'>About Us</p>
                <h2 className='text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-900'>Why Choose FitLife LK?</h2>
                </div>

                {/* bullet points */}
                <div className='col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8'>
                    {
                        features.map((feature, index) => (
                            <div key={index} className='flex items-start space-x-4'>
                                <div className='w-12 h-12 flex items-center justify-start rounded-lg'>{feature.icon}</div>

                                <div>
                                    <h3 className='text-xl font-semibold text-gray-900 mb-2'>{feature.title}</h3>
                                    <p className='text-gray-600'>{feature.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            
            </div>

        </div>
    </section>
  )
}

export default Purpose;