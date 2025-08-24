/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "motion/react"
import { fadeIn } from "./utils/motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#down-south", label: "Programs" },
    { href: "#pricing", label: "Pricing" },
    { href: "#footer", label: "Contact" },
  ];

  return (
    <motion.nav 
    variants={fadeIn('down', 0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{once: true}}
    className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm">
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="w-4 h-4 bg-yellow-200 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
          <div className="w-4 h-4 bg-green-950 -ml-2 rounded-full opacity-100 hover:opacity-75 transition-opacity"></div>
          <span className="ml-2 font-bold text-lg text-black">
            FitLife.lk
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-green-950 after:transition-all ${
                activeLink === link.href
                  ? "text-black after:w-full"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {link.label}
            </a>
          ))}

          <a
            href="https://wa.me/94758489295"
            className="bg-black text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 text-sm font-medium transition-all hover:shadow-lg hover:shadow-black"
          >
            Join Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-sm">
          <div className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`text-sm font-medium ${
                  activeLink === link.href ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://wa.me/94758489295"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium text-center"
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
