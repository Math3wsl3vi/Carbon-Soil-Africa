"use client";
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
const Footer = () => {
  return <footer className="bg-[#1B5E20] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Carbon & Soil Loop Africa</h3>
            <p className="mb-4 text-gray-200">
             Remove, Reduce, Restore and Mitigate.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-200" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-200" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-200" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-200" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Mail size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                    <a 
                      href="mailto:info@carbonsoil.africa" 
                      className="hover:underline"
                    >
                      info@carbonsoil.africa
                    </a>
                  </li>
                  <li className="flex items-start">
                    <Phone size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                    <a 
                      href="tel:+254706500333" 
                      className="hover:underline"
                    >
                      +254 (0) 706 500 333
                    </a>
                  </li>
                  <li className="flex items-start">
                    <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                    <a 
                      href="https://www.google.com/maps/place/Marigat,+Kenya" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:underline"
                    >
                      Marigat, Kenya
                    </a>
                  </li>
                </ul>
              </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:underline">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:underline">
                  Our Impact
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:underline">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:underline">
                  Partners
                </a>
              </li>
              <li>
                <a href="#get-involved" className="hover:underline">
                  Get Involved
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-green-800 text-center text-gray-300 text-sm">
          <p>
            © {new Date().getFullYear()} Carbon & Soil Loop Africa. All rights
            reserved.
          </p>
          <Link href={'https://mantlekenya.vercel.app/'} target="_blank" className="hover:underline mt-2">
            Powered by MantleKenya©
          </Link>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;