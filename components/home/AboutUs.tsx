import React from 'react';
import { Leaf, Heart, Users } from 'lucide-react';
import Image from 'next/image';
const AboutUs = () => {
  return <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B5E20] mb-4">
            About Us
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {"We're"} on a mission to restore soil health and remove carbon from the
            atmosphere through sustainable biochar production and regenerative
            agriculture practices.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#F5F5DC] p-8 rounded-lg text-center">
            <div className="w-16 h-16 bg-[#1B5E20] rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#1B5E20] mb-2">
              Our Mission
            </h3>
            <p className="text-gray-700">
              To combat climate change by removing carbon dioxide from the
              atmosphere while improving soil health and supporting local
              communities.
            </p>
          </div>
          <div className="bg-[#F5F5DC] p-8 rounded-lg text-center">
            <div className="w-16 h-16 bg-[#1B5E20] rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#1B5E20] mb-2">
              Our Vision
            </h3>
            <p className="text-gray-700">
              A regenerative agricultural system across Africa that closes the
              carbon loop, restores degraded lands, and creates sustainable
              livelihoods.
            </p>
          </div>
          <div className="bg-[#F5F5DC] p-8 rounded-lg text-center">
            <div className="w-16 h-16 bg-[#1B5E20] rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#1B5E20] mb-2">
              Our Values
            </h3>
            <p className="text-gray-700">
              Community-centered, environmentally sustainable, scientifically
              rigorous, and committed to creating lasting positive impact.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h3 className="text-2xl font-bold text-[#1B5E20] mb-4">
              Our Story
            </h3>
            <p className="text-gray-700 mb-4">
              Carbon & Soil Loop Africa was founded in response to two critical
              challenges: the spread of invasive plant species across African
              landscapes and declining soil health affecting smallholder
              farmers.
            </p>
            <p className="text-gray-700 mb-4">
              We developed an innovative solution that transforms these invasive
              plants into biochar through pyrolysis, a process that locks carbon
              into a stable form while creating a valuable soil amendment.
            </p>
            <p className="text-gray-700">
              Today, we work with communities across Africa to collect invasive
              biomass, produce high-quality biochar, and distribute it to
              farmers while generating carbon removal certificates for
              climate-conscious organizations.
            </p>
          </div>
          <div className="md:w-1/2">
           <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600367051858-9cc795d50a52?w=1200&auto=format&fit=crop&q=90&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFpemUlMjBmYXJtfGVufDB8fDB8fHww" 
                width={1200}
                height={720}
                alt="African farmers working in a field" 
                className="w-full h-full object-cover"
                priority={true} // Adds loading priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutUs;