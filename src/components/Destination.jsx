import React from 'react'
import img1 from "../assets/image 1.jpg";
import img2 from "../assets/image 2.png";
import img3 from "../assets/image 3.png";



const Destination = () => {
    const spots = [
  {
    title: "Morning Yoga at the Beach",
    desc:
      "A serene yoga session to energize your body and calm your mind, perfect for all fitness levels.",
    img: img1, 
    alt: "Sunrise Yoga"
  },
  {
    title: "HIIT Training at the Gym",
    desc:
      "Burn calories, build strength, and boost endurance with guided HIIT routines designed for maximum results.",
    img: img2, 
    alt: "High-Intensity Workouts"
  },
  {
    title: "Healthy Meal Prep & Nutrition",
    desc:
      "Learn how to prepare nutritious meals that fuel your workouts and support a healthy lifestyle.",
    img: img3, 
    alt: "Balanced Nutrition"
  }
];

  return (
    <section
      id="down-south"
      aria-labelledby="down-south-title"
      className="py-16 sm:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2
          id="down-south-title"
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center"
        >
          Reach Your Fitness Goals with FitLife LK
        </h2>
        <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
          Discover personalized workouts, nutrition tips, and wellness activities to help you stay healthy and strong.
        </p>

        {/* Cards */}
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {spots.map((s) => (
            <article key={s.title} className="group text-center">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-sm ring-1 ring-gray-200/60">
                <img
                  src={s.img}
                  alt={s.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <h3 className="mt-6 text-2xl font-extrabold">{s.title}</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                {s.desc}
              </p>
            </article>
          ))}
        </div>

        {/* button */}
        <div className='text-center mt-12'>
            <button className='bg-black text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 text-sm font-medium transition-all hover:shadow-lg hover:shadow-black'><a href="https://wa.me/94758489295">Join the FitLife Community</a></button>
        </div>
       
      </div>
    </section>
  );
}

export default Destination;