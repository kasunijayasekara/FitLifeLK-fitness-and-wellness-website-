import React from 'react'
import trip from '../assets/trip.png'
import vacations from '../assets/vacations.png'
import game from '../assets/adventure-game.png'
import stay from '../assets/favorite.png'

const ServiceSection = () => {
  const services = [
    {
      img: game,
      title: "Strength & Cardio",
      description: "Build muscle, burn calories, and improve endurance with guided workouts tailored to your fitness level.",
      link: "#learn-more"
    },
    {
      img: vacations,
      title: "Yoga & Mindfulness", 
      description: "Enhance flexibility, reduce stress, and find balance with daily yoga sessions and mindfulness practices.",
      link: "#learn-more"
    },
    {
      img: trip,
      title: "Nutrition & Meal Plans",
      description: "Fuel your body with healthy, customized meal plans and nutrition guidance from certified experts.",
      link: "#learn-more"
    },
    {
      img: stay,
      title: "Personal Coaching",
      description: "Get one-on-one support from experienced trainers to achieve your fitness goals faster and safely.",
      link: "#learn-more"
    }
  ]

  return (
    <section id='services' className='py-20 container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col md:flex-row items-center gap-12 lg:gap-24'>
        
        {/* header */}
        <div className='md:w-1/3 w-full ml-15'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6 md:w-4/5'>
            Achieve Your Goals <br /> with Our Exclusive Fitness Services
          </h2>
          <p className='text-gray-600 text-lg mb-4 md:w-4/5'>
            Discover personalized programs designed to help you stay healthy, strong, and motivated. From high-intensity workouts to mindful wellness routines, our services ensure a holistic fitness experience.
          </p>
          <div className='space-y-3'>
            <div className='flex items-center gap-2'>
              <div className='w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center'>
                <div className='w-2.5 h-2.5 rounded-full bg-amber-600'></div>
              </div>
              <span>Personalized workout plans for every goal.</span>
            </div>

            <div className='flex items-center gap-2'>
              <div className='w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center'>
                <div className='w-2.5 h-2.5 rounded-full bg-amber-600'></div>
              </div>
              <span>Expert guidance to maximize results.</span>
            </div>
          </div>
          <button className='bg-black text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 text-sm font-medium transition-all hover:shadow-lg hover:shadow-black mt-5'>
            Book your Trip
          </button>
        </div>

        {/* service Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 ml-40'>
          {services.map((service, index) => (
            <div 
              key={index} 
              className='bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:scale-105 transition-all duration-300 text-center'
            >
              <img src={service.img} alt={service.title} className="mx-auto h-16 w-16 mb-4" />
              <h3 className='text-xl font-bold mb-2'>{service.title}</h3>
              <p className='text-gray-600 mb-4'>{service.description}</p>
              <a href={service.link} className='text-amber-700 font-medium hover:underline'>
                Learn more →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ServiceSection
