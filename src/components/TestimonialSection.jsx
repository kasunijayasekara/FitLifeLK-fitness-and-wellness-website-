/* eslint-disable no-unused-vars */
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const testimonials = [
  {
    name: "Emma Johnson",
    role: "Yoga Enthusiast",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    feedback:
      "FitLife LK transformed my fitness journey. The personalized workouts and nutrition guidance helped me stay consistent and motivated."
  },
  {
    name: "Daniel Lee",
    role: "HIIT Trainer",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    feedback:
      "The HIIT programs are intense yet manageable. The trainers are supportive and really helped me push past my limits!"
  },
  {
    name: "Sophia Martinez",
    role: "Wellness Seeker",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
    feedback:
      "FitLife LK’s holistic approach to fitness and mindfulness improved my mental and physical health dramatically."
  },
  {
    name: "James Walker",
    role: "Strength Trainer",
    img: "https://randomuser.me/api/portraits/men/40.jpg",
    feedback:
      "I loved the strength training programs! They’re structured, progressive, and easy to follow for all levels."
  },
  {
    name: "Olivia Brown",
    role: "Nutrition Enthusiast",
    img: "https://randomuser.me/api/portraits/women/75.jpg",
    feedback:
      "The nutrition guidance and meal plans are practical and delicious. I’ve never felt healthier and more energized."
  }
];

const TestimonialSection = () => {
  return (
    <section className='py-16 px-4 max-w-7xl mx-auto'>
      <div className='text-center '>
        <h2 className='text-3xl font-bold md:text-4xl mb-4'>What Our Members Say</h2>
        <p className='text-gray-600'>Real stories from FitLife LK members achieving their wellness goals.</p>
      </div>

      {/* Testimonials */}
      <Swiper
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Navigation]}
        className="testimonials-swiper md:mb-10"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className='h-full md:py-12 py-4 mt-4'>
            <div className='text-center bg-white p-4 rounded-lg shadow-md h-full flex flex-col'>
              <div className='w-24 h-24 mx-auto '>
                <img src={testimonial.img} alt="" className='w-full h-full object-cover rounded-full'/>
              </div>

              <div className='flex justify-center mb-2'>
                {[...Array(5)].map((_, starIndex) => (
                  <span key={starIndex} className='text-yellow-400'>★</span>
                ))}
              </div>

              <h3 className='text-xl font-semibold mb-1'>{testimonial.name}</h3>
              <span className='text-sm text-gray-500 mb-3'>{testimonial.role}</span>
              <p className='text-gray-600'>{testimonial.feedback}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className='flex justify-center gap-4 '>
        <button className='swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-green-500 hover:text-white cursor-pointer transition-colors'>
          <BsChevronLeft className='w-6 h-6'/>
        </button>

        <button className='swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-green-500 hover:text-white cursor-pointer transition-colors'>
          <BsChevronRight className='w-6 h-6'/>
        </button>
      </div>
    </section>
  )
}

export default TestimonialSection;
