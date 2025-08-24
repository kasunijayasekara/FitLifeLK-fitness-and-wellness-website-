/* eslint-disable no-unused-vars */
import Hero from "react"; 
import heroImage from "../assets/hero.png"
import { motion } from "framer-motion";
import { textVariant } from "./utils/motion";


function App() {
  return (
    <section id="home" className='container mx-auto flex flex-col justify-between items-center md:flex-row pt-34 pb-6 px-4 sm:px-6 lg:px-8 text-black bg-white'>
      
      {/* left col */}
      <div className="w-full md:w-1/2 space-y-8">
        {/* Background brush image */}
          <img
            src="/src/assets/hero.png"
            alt="Brush Stroke"
            className="absolute -top-6 -left-6 w-48 opacity-80 -z-10"
          />
   
        {/* heading */}
        <motion.h1 
        variants={textVariant(0.3)}
        initial="hidden"
        whileInView="show"
        className="text-5xl md:text-5xl lg:text-8xl font-bold leading-tight mt-6">Fit for Life, <br /> 
        <span className="text-amber-700 relative inline-block">Fit for You 💪</span></motion.h1>
        <motion.p 
        variants={textVariant(0.3)}
        initial="hidden"
        whileInView="show"
        className="text-gray-600 text-lg md:text-xl max-w-xl ">Personalized workout plans, nutrition guidance, and expert trainers.</motion.p>
         {/* button */}        
         <motion.button 
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className='bg-black text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 text-sm font-medium transition-all hover:shadow-lg hover:shadow-black mt-10'><a href="https://wa.me/94758489295">Get Started</a></motion.button>
      

      

      </div>

      {/* right col */}
      <motion.div 
      variants={textVariant(0.3)}
      initial="hidden"
      whileInView="show"
      className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12 ">
        <div className="relative ">
          <img src={heroImage} alt="hero image" className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300" />
        </div>
      </motion.div>

    </section>
  );
}

export default App;

