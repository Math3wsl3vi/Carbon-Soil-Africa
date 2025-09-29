import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
const Hero = () => {
  return <section className="relative w-full bg-[#F5F5DC] pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-20 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B5E20] mb-6">
              Healing Soils, Unleashing Potential.
            </h1>
           <p className="text-lg md:text-xl text-[#6D4C41] mb-8 max-w-xl">
            Remove, Reduce, Restore and Mitigate.
          </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#how-it-works" className="bg-[#1B5E20] text-white px-6 py-3 rounded-md font-medium hover:bg-[#154a1a] transition-colors inline-flex items-center justify-center">
                Explore Our Work
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#get-involved" className="border-2 border-[#1B5E20] text-[#1B5E20] px-6 py-3 rounded-md font-medium hover:bg-[#1B5E20] hover:text-white transition-colors inline-flex items-center justify-center">
                Get Involved
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md h-80 md:h-96 bg-[#1B5E20] rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1676404057837-5bc1009ecf69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvc29waXN8ZW58MHx8MHx8fDA%3D')] bg-cover bg-center opacity-60"></div>
              <div className="z-10 text-white text-center p-6">
                <div className="w-36 h-36 md:w-40 md:h-40 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Image src={'/images/logo6.png'} width={150} height={150} alt="Logo" className="rounded-full w-full object-cover" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold">
                  Carbon & Soil Loop Africa
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>;
};
export default Hero;