import React from 'react'
import activity1 from "../assets/image 4.jpg"
import activity2 from "../assets/image 5.jpg"
import { IoIosArrowRoundForward } from "react-icons/io";

const Activity = () => {
  return (
   <section id='activities' className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
    <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>
        {/* left */}
        <div className='md:w-1/2 w-full'>
            <img src={activity1} alt="activity1" className='w-full h-auto' />
        </div>

        {/* right */}
        <div className='md:w-1/2 w-full'>
            <p className='text-amber-700 font-semibold'>FitLife Newsletter</p>
            <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6'>Stay Updated on <br /> Fitness & Wellness <br /> </h2>
            <p className='text-gray-600 mb-8'>Get the latest workout routines, nutrition tips, and wellness trends delivered straight to your inbox. Our newsletter helps you stay motivated, healthy, and informed every week.</p>

            <a href="#" className='text-amber-700 font-semibold flex items-center gap-2 hover:gap-4 transition-all'>Join Workouts & Challenges <IoIosArrowRoundForward className='size-8'/></a>
        </div>     
    </div>

     <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 mt-50 '>
       
            {/* right */}
            <div className='md:w-1/2 w-full'>
                <p className='text-amber-700 font-semibold'>Healthy Lifestyle Updates</p>
                <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6'>Stay Ahead with Health Insights</h2>
                <p className='text-gray-600 mb-8'>Receive curated advice on fitness, diet, and mental wellness. From expert tips to new trends, our updates help you make smarter choices and maintain a balanced lifestyle.</p>
                

                <a href="#" className='text-amber-700 font-semibold flex items-center gap-2 hover:gap-4 transition-all'>Explore Programs & Guides<IoIosArrowRoundForward className='size-8' /> </a>
            </div> 

             {/* left */}
            <div className='md:w-1/2 w-full'>
                <img src={activity2} alt="activity2" className='w-full h-auto' />
            </div>
         
    </div>
   </section>
  )
}

export default Activity