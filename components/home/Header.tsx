"use client";
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-md py-2 md:mx-32 md:rounded-full' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-[#1B5E20]">
            Carbon & Soil Loop Africa
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-[#1B5E20] hover:text-[#6D4C41] font-medium">
            About Us
          </a>
          <a href="#how-it-works" className="text-[#1B5E20] hover:text-[#6D4C41] font-medium">
            How It Works
          </a>
          <a href="#impact" className="text-[#1B5E20] hover:text-[#6D4C41] font-medium">
            Our Impact
          </a>
          <a href="#solutions" className="text-[#1B5E20] hover:text-[#6D4C41] font-medium">
            Solutions
          </a>
          <a href="#partners" className="text-[#1B5E20] hover:text-[#6D4C41] font-medium">
            Partners
          </a>
          <a href="#get-involved" className="text-[#1B5E20] hover:text-[#6D4C41] font-medium">
            Get Involved
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#1B5E20]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white/95 backdrop-blur-md py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a href="#about" className="text-[#1B5E20] hover:text-[#6D4C41] font-medium" onClick={() => setIsMenuOpen(false)}>
              About Us
            </a>
            <a href="#how-it-works" className="text-[#1B5E20] hover:text-[#6D4C41] font-medium" onClick={() => setIsMenuOpen(false)}>
              How It Works
            </a>
            <a href="#impact" className="text-[#1B5E20] hover:text-[#6D4C41] font-medium" onClick={() => setIsMenuOpen(false)}>
              Our Impact
            </a>
            <a href="#solutions" className="text-[#1B5E20] hover:text-[#6D4C41] font-medium" onClick={() => setIsMenuOpen(false)}>
              Solutions
            </a>
            <a href="#partners" className="text-[#1B5E20] hover:text-[#6D4C41] font-medium" onClick={() => setIsMenuOpen(false)}>
              Partners
            </a>
            <a href="#get-involved" className="text-[#1B5E20] hover:text-[#6D4C41] font-medium" onClick={() => setIsMenuOpen(false)}>
              Get Involved
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;