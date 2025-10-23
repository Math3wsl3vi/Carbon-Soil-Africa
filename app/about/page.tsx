import Footer from '@/components/home/Footer';
import Header from '@/components/home/Header';
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className='font-poppins'>
    <Header/>
    <div
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/windmill1.jpg')", // <-- Replace with your actual image path
        }}
      >
        <div className="absolute inset-0 bg-black/50" /> {/* dark overlay */}
        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Building a Greener Future Together
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Empowering Corporates, Farmers, and Communities through Sustainable Carbon and Soil Solutions.
          </p>
        </div>
      </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-5 md:mt-20">
      {/* Story Section */}

      
      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        <div className="md:w-1/2 space-y-6">
          <div className="inline-block">
            <h3 className="text-3xl md:text-4xl font-bold text-[#1B5E20] mb-2">
              Our Story
            </h3>
            <div className="h-1 w-20 bg-gradient-to-r from-[#1B5E20] to-[#4CAF50] rounded-full"></div>
          </div>
          
          <p className="text-gray-700 leading-relaxed text-lg">
            Carbon and Soil Loop Africa was founded by two youth leaders driven by the vision of turning {"today's"} environmental challenges into {"tomorrow's"} opportunities. By transforming invasive species into resources, we improve agricultural yields, restore degraded ecosystems, and contribute to climate change mitigation through carbon sequestration.
          </p>
          
          <p className="text-gray-700 leading-relaxed text-lg">
            We developed an innovative solution that transforms these invasive plants into biochar through pyrolysis, a process that locks carbon into a stable form while creating a valuable soil amendment.
          </p>
          
          <p className="text-gray-700 leading-relaxed text-lg">
            Today, we work with communities across Africa to collect invasive biomass, produce high-quality biochar, and distribute it to farmers while generating carbon removal certificates for climate-conscious organizations.
          </p>
        </div>
        
        <div className="md:w-1/2">
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-105 duration-300">
            <Image
              src="https://images.unsplash.com/photo-1600367051858-9cc795d50a52?w=1200&auto=format&fit=crop&q=90"
              alt="African farmers working in a field"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* CEO Message Section */}
      <div className="relative bg-gradient-to-br from-[#F5F5DC] to-[#E8E8D0] p-8 md:p-12 rounded-2xl shadow-xl overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#1B5E20] opacity-5 rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#4CAF50] opacity-5 rounded-full -ml-16 -mb-16"></div>
        
        <div className="relative z-10">
          {/* Quote icon */}
          <div className="flex justify-center mb-6">
            <svg className="w-12 h-12 text-[#1B5E20] opacity-30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-[#1B5E20] mb-3 text-center">
            Message from the CEO
          </h3>
          <p className="text-center text-[#4CAF50] font-semibold text-lg mb-8">
            Dr. Sylvia Jemutai Rotich
          </p>
          
          <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed text-lg">
            <p className="italic">
            &quot;I come from an agricultural community. Growing up, I witnessed farmers—my father included—struggle with the rising cost of fertilizers, erratic rainfall, and declining yields. These challenges, worsened by climate change, planted in me the seed of finding a sustainable solution.
            </p>
            
            <p>
              As an environmental scientist working in ASAL counties during my research, I was struck by the alarming spread of invasive species such as Prosopis. Instead of seeing them only as a problem, I asked myself: what if this challenge could hold the solution?
            </p>
            
            <p>
              I reached out to my COO, and together we envisioned a model where invasive species could be transformed into biochar—restoring degraded soils, improving water retention, and sequestering carbon. More importantly, we saw this as a way to co-create solutions with farmers, partners, and communities.
            </p>
            
            <p className="italic">
              Our greatest inspiration has been women farmers, many of whom struggle daily to feed their families from degraded land. Through innovation, collaboration, and resilience, we are committed to offering them a lasting solution that restores hope, dignity, and productivity to their soils and lives.&quot;
            </p>
          </div>
        </div>
      </div>
       {/* Climate Change Challenge Section */}
       <div className="bg-[#E8F5E9] p-8 rounded-lg mb-16 mt-20">
          <h3 className="text-2xl font-bold text-[#1B5E20] mb-4 text-center">
            The Climate Change Challenge
          </h3>
          <p className="text-gray-700 max-w-4xl mx-auto">
            Africa is among the most vulnerable regions to climate change, facing 
            rising temperatures, unpredictable rainfall, and declining agricultural 
            productivity. Greenhouse gas emissions continue to drive global warming, 
            but solutions that both remove carbon and restore ecosystems remain scarce.  
            <br /><br />
            Our approach—transforming invasive plants into biochar—offers a 
            nature-based solution that not only locks away carbon for centuries but 
            also improves soil fertility, enhances water retention, and boosts food 
            security for local farmers.
          </p>
        </div>
    </div>
    <Footer/>
    </div>

  );
};

export default About;