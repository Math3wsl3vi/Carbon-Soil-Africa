"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const PageHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 bg-white/80 backdrop-blur-md shadow-md transition-all duration-300 md:mx-32 md:rounded-full">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-[#1B5E20]">
            Carbon & Soil Loop Africa
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/about" className="text-[#1B5E20] hover:text-[#6D4C41] font-medium">
            About Us
          </Link>
          <Link href="/solutions" className="text-[#1B5E20] hover:text-[#6D4C41] font-medium">
            Solutions
          </Link>
          <Link href="/partners" className="text-[#1B5E20] hover:text-[#6D4C41] font-medium">
            Partners
          </Link>
          <Link href="/get-involved" className="text-[#1B5E20] hover:text-[#6D4C41] font-medium">
            Get Involved
          </Link>
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
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link href="/solutions" onClick={() => setIsMenuOpen(false)}>Solutions</Link>
            <Link href="/partners" onClick={() => setIsMenuOpen(false)}>Partners</Link>
            <Link href="/get-involved" onClick={() => setIsMenuOpen(false)}>Get Involved</Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default PageHeader;
