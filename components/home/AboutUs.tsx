import React from 'react';
import { Leaf, Heart, Users } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B5E20] mb-4">
            About Us
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {"We're"} on a mission to Remove invasive weeds, Reduce wastes, Restore degraded land, and Mitigate climate change through carbon sequestration enabled by sustainable biochar production and value additions.
          </p>
        </div>

        {/* Mission / Vision / Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#F5F5DC] p-8 rounded-lg text-center">
            <div className="w-16 h-16 bg-[#1B5E20] rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#1B5E20] mb-2">Our Mission</h3>
            <p className="text-gray-700">
            To remove Invasive weeds,  restore ecosystems, reduce wastes, and mitigate climate change
             </p>
          </div>
          <div className="bg-[#F5F5DC] p-8 rounded-lg text-center">
            <div className="w-16 h-16 bg-[#1B5E20] rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#1B5E20] mb-2">Our Vision</h3>
            <p className="text-gray-700">
              A climate-resilient Africa with restored ecosystems and thriving communities.
            </p>
          </div>
          <div className="bg-[#F5F5DC] p-8 rounded-lg text-center">
            <div className="w-16 h-16 bg-[#1B5E20] rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#1B5E20] mb-2">Our Values</h3>
            <p className="text-gray-700">
              Community-centered, environmentally sustainable, scientifically rigorous, and committed to creating lasting positive impact — guided by sustainability, innovation, integrity, equity, collaboration, and resilience to empower people, restore balance with nature, and build thriving ecosystems
            </p>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default AboutUs;
