"use client";
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { MapPin, Leaf, Users, Sprout } from 'lucide-react';

const Impact = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setInView(true);
      }
    }, {
      threshold: 0.1
    });
    const section = document.getElementById('impact-metrics');
    if (section) {
      observer.observe(section);
    }
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="impact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B5E20] mb-4">
            Our Impact
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Measuring our progress in carbon removal, soil restoration, and
            community development across Africa.
          </p>
        </div>
        <div id="impact-metrics" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-[#F5F5DC] p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-[#1B5E20] rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf size={32} className="text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-2">
              {inView ? <CountUp end={120} duration={2.5} suffix=" tons" /> : '0 tons'}
            </div>
            <p className="text-gray-700">CO₂ Removed</p>
          </div>
          <div className="bg-[#F5F5DC] p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-[#1B5E20] rounded-full flex items-center justify-center mx-auto mb-4">
              <Sprout size={32} className="text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-2">
              {inView ? <CountUp end={1200} duration={2.5} suffix=" ha" /> : '0 ha'}
            </div>
            <p className="text-gray-700">Land Restored</p>
          </div>
          <div className="bg-[#F5F5DC] p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-[#1B5E20] rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={32} className="text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-2">
              {inView ? <CountUp end={500} duration={2.5} /> : '0'}
            </div>
            <p className="text-gray-700">Farmers Supported</p>
          </div>
          <div className="bg-[#F5F5DC] p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-[#1B5E20] rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin size={32} className="text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-2">
              {inView ? <CountUp end={7} duration={2.5} /> : '0'}
            </div>
            <p className="text-gray-700">Counties</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-[#1B5E20] mb-4">
              Environmental Impact
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">
                    Carbon Removal Efficiency
                  </span>
                  <span className="text-[#1B5E20] font-medium">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-[#1B5E20] h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">
                    Invasive Species Reduction
                  </span>
                  <span className="text-[#1B5E20] font-medium">72%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-[#1B5E20] h-2.5 rounded-full" style={{ width: '72%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">Water Conservation</span>
                  <span className="text-[#1B5E20] font-medium">63%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-[#1B5E20] h-2.5 rounded-full" style={{ width: '63%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-[#1B5E20] mb-4">
              Social Impact
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">Farmer Income Increase</span>
                  <span className="text-[#1B5E20] font-medium">45%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-[#1B5E20] h-2.5 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">Community Engagement</span>
                  <span className="text-[#1B5E20] font-medium">78%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-[#1B5E20] h-2.5 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">Job Creation</span>
                  <span className="text-[#1B5E20] font-medium">56%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-[#1B5E20] h-2.5 rounded-full" style={{ width: '56%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;