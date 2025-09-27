import React from 'react';
import { Scissors, Flame, Sprout, ArrowRight, Factory, CreditCard } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-[#F5F5DC]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B5E20] mb-4">
            How It Works: The Loop
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our closed-loop system removes carbon from the atmosphere, improves
            soil health, and creates sustainable livelihoods.
          </p>
        </div>
        <div className="relative">
          {/* Desktop Process Flow */}
          <div className="hidden md:block">
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-[#6D4C41] transform -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-5 gap-4 relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-[#1B5E20] rounded-full flex items-center justify-center mb-4">
                  <Scissors size={36} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1B5E20] mb-2 text-center">
                  Biomass Collection
                </h3>
                <p className="text-gray-700 text-center">
                  Communities collect invasive plant species
                </p>
              </div>
              {/* Arrow 1 */}
              <div className="flex items-center justify-center">
                <ArrowRight size={36} className="text-[#6D4C41]" />
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-[#1B5E20] rounded-full flex items-center justify-center mb-4">
                  <Flame size={36} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1B5E20] mb-2 text-center">
                  Pyrolysis Process
                </h3>
                <p className="text-gray-700 text-center">
                  Biomass is converted to biochar
                </p>
              </div>
              {/* Arrow 2 */}
              <div className="flex items-center justify-center">
                <ArrowRight size={36} className="text-[#6D4C41]" />
              </div>
              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-[#1B5E20] rounded-full flex items-center justify-center mb-4">
                  <Factory size={36} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1B5E20] mb-2 text-center">
                  Biochar Production
                </h3>
                <p className="text-gray-700 text-center">
                  Stable carbon that lasts centuries
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-16">
              <div className="flex items-center w-1/3 gap-32">
               <div className='flex flex-col items-center'>
                 <div className="w-20 h-20 bg-[#1B5E20] rounded-full flex items-center justify-center mb-4">
                  <Sprout size={36} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1B5E20] mb-2 text-center">
                  Soil Application
                </h3>
                <p className="text-gray-700 text-center">
                  Farmers apply biochar to improve soil
                </p>
                </div>
                <ArrowRight size={36} className="text-[#6D4C41] transform -rotate-0 mt-4" />
              </div>
              <div className="flex flex-col items-center w-1/3">
                {/* <ArrowRight size={36} className="text-[#6D4C41] transform rotate-90 mb-4" /> */}
                <div className="w-20 h-20 bg-[#1B5E20] rounded-full flex items-center justify-center mb-4">
                  <CreditCard size={36} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1B5E20] mb-2 text-center">
                  Carbon Certificates
                </h3>
                <p className="text-gray-700 text-center">
                  Verified carbon removal credits
                </p>
              </div>
            </div>
          </div>
          {/* Mobile Process Flow */}
          <div className="md:hidden">
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex items-center">
                <div className="w-16 h-16 bg-[#1B5E20] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Scissors size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1B5E20] mb-1">
                    1. Biomass Collection
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Communities collect invasive plant species
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <ArrowRight size={24} className="text-[#6D4C41] transform rotate-90" />
              </div>
              {/* Step 2 */}
              <div className="flex items-center">
                <div className="w-16 h-16 bg-[#1B5E20] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Flame size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1B5E20] mb-1">
                    2. Pyrolysis Process
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Biomass is converted to biochar
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <ArrowRight size={24} className="text-[#6D4C41] transform rotate-90" />
              </div>
              {/* Step 3 */}
              <div className="flex items-center">
                <div className="w-16 h-16 bg-[#1B5E20] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Factory size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1B5E20] mb-1">
                    3. Biochar Production
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Stable carbon that lasts centuries
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <ArrowRight size={24} className="text-[#6D4C41] transform rotate-90" />
              </div>
              {/* Step 4 */}
              <div className="flex items-center">
                <div className="w-16 h-16 bg-[#1B5E20] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <CreditCard size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1B5E20] mb-1">
                    4. Carbon Certificates
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Verified carbon removal credits
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <ArrowRight size={24} className="text-[#6D4C41] transform rotate-90" />
              </div>
              {/* Step 5 */}
              <div className="flex items-center">
                <div className="w-16 h-16 bg-[#1B5E20] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Sprout size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1B5E20] mb-1">
                    5. Soil Application
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Farmers apply biochar to improve soil
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h3 className="text-xl md:text-2xl font-bold text-[#1B5E20] mb-4">
            Benefits of Our Approach
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold text-[#6D4C41] mb-2">Environmental</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Carbon sequestration for 1000+ years</li>
                <li>Reduction of invasive species</li>
                <li>Prevention of methane emissions</li>
                <li>Water conservation in soils</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#6D4C41] mb-2">Agricultural</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Improved soil fertility</li>
                <li>Better water retention</li>
                <li>Enhanced crop yields</li>
                <li>Reduced fertilizer needs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#6D4C41] mb-2">Social</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Income for local collectors</li>
                <li>Food security for farmers</li>
                <li>Community development</li>
                <li>Skills training and jobs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;