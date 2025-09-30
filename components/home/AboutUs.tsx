import React from 'react';
import { Leaf, Heart, Users } from 'lucide-react';
import Image from 'next/image';

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
              To restore grasslands, soils, and water systems while empowering communities—especially women and youth—through sustainable, climate-smart solutions, turning invasive species and waste into biochar innovations that heal soils, store carbon, and sustain livelihoods
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

        {/* Climate Change Challenge Section */}
        <div className="bg-[#E8F5E9] p-8 rounded-lg mb-16">
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

        {/* Story Section */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h3 className="text-2xl font-bold text-[#1B5E20] mb-4">Our Story</h3>
            <p className="text-gray-700 mb-4">
              Carbon and Soil Loop Africa was founded by two youth leaders driven by the vision of turning today’s environmental challenges into tomorrow’s opportunities. By transforming invasive species into resources, we improve agricultural yields, restore degraded ecosystems, and contribute to climate change mitigation through carbon sequestration.
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
                priority={true}
              />
            </div>
          </div>
        </div>

        {/* CEO Message Section */}
        <div className="bg-[#F5F5DC] p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-[#1B5E20] mb-6 text-center">
            Message from the CEO – Dr. Sylvia Jemutai Rotich
          </h3>
          <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
            “I come from an agricultural community. Growing up, I witnessed farmers—my father included—struggle with the rising cost of fertilizers, erratic rainfall, and declining yields. These challenges, worsened by climate change, planted in me the seed of finding a sustainable solution.
            <br /><br />
            As an environmental scientist working in ASAL counties during my research, I was struck by the alarming spread of invasive species such as Prosopis. Instead of seeing them only as a problem, I asked myself: what if this challenge could hold the solution?
            <br /><br />
            I reached out to my COO, and together we envisioned a model where invasive species could be transformed into biochar—restoring degraded soils, improving water retention, and sequestering carbon. More importantly, we saw this as a way to co-create solutions with farmers, partners, and communities.
            <br /><br />
            Our greatest inspiration has been women farmers, many of whom struggle daily to feed their families from degraded land. Through innovation, collaboration, and resilience, we are committed to offering them a lasting solution that restores hope, dignity, and productivity to their soils and lives.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
