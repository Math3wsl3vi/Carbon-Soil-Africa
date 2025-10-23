import React from 'react';
import { Leaf, TrendingUp, Users } from 'lucide-react';

const Benefits = () => {
  // helper to format numbers in Kenyan Shillings (KES)
  const fmtKES = (value:number) =>
    new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      maximumFractionDigits: 0,
    }).format(value);

  // realistic monthly income range per collector (example)
  const minIncomeKES = 6000; // KSh 6,000
  const maxIncomeKES = 12000; // KSh 12,000

  return (
    <section id="benefits" className="py-16 md:py-24 bg-gradient-to-br from-[#F5F5DC] to-[#E8E8D0]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B5E20] mb-4">
            Our Impact: Benefits with Measurable Results
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Transforming challenges into quantifiable environmental, agricultural, and social benefits across Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Environmental Benefits */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#1B5E20] to-[#4CAF50] rounded-full mb-6 mx-auto">
              <Leaf size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#1B5E20] mb-6 text-center">Environmental</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-[#4CAF50] pl-4">
                <div className="text-3xl font-bold text-[#1B5E20] mb-1">1000+</div>
                <p className="text-gray-700 font-medium">Years of Carbon Sequestration</p>
                <p className="text-sm text-gray-600 mt-1">Long-term climate impact</p>
              </div>
              <div className="border-l-4 border-[#4CAF50] pl-4">
                <div className="text-3xl font-bold text-[#1B5E20] mb-1">75%</div>
                <p className="text-gray-700 font-medium">Reduction in Invasive Species</p>
                <p className="text-sm text-gray-600 mt-1">Ecosystem restoration</p>
              </div>
              <div className="border-l-4 border-[#4CAF50] pl-4">
                <div className="text-3xl font-bold text-[#1B5E20] mb-1">90%</div>
                <p className="text-gray-700 font-medium">Methane Emission Prevention</p>
                <p className="text-sm text-gray-600 mt-1">vs. natural decomposition</p>
              </div>
              <div className="border-l-4 border-[#4CAF50] pl-4">
                <div className="text-3xl font-bold text-[#1B5E20] mb-1">40%</div>
                <p className="text-gray-700 font-medium">Water Conservation</p>
                <p className="text-sm text-gray-600 mt-1">Improved soil water retention</p>
              </div>
            </div>
          </div>

          {/* Agricultural Benefits */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#6D4C41] to-[#8D6E63] rounded-full mb-6 mx-auto">
              <TrendingUp size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#1B5E20] mb-6 text-center">Agricultural</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-[#8D6E63] pl-4">
                <div className="text-3xl font-bold text-[#1B5E20] mb-1">30-50%</div>
                <p className="text-gray-700 font-medium">Improved Soil Fertility</p>
                <p className="text-sm text-gray-600 mt-1">Enhanced nutrient availability</p>
              </div>
              <div className="border-l-4 border-[#8D6E63] pl-4">
                <div className="text-3xl font-bold text-[#1B5E20] mb-1">60%</div>
                <p className="text-gray-700 font-medium">Better Water Retention</p>
                <p className="text-sm text-gray-600 mt-1">Drought resilience</p>
              </div>
              <div className="border-l-4 border-[#8D6E63] pl-4">
                <div className="text-3xl font-bold text-[#1B5E20] mb-1">25-40%</div>
                <p className="text-gray-700 font-medium">Enhanced Crop Yields</p>
                <p className="text-sm text-gray-600 mt-1">Increased productivity</p>
              </div>
              <div className="border-l-4 border-[#8D6E63] pl-4">
                <div className="text-3xl font-bold text-[#1B5E20] mb-1">35%</div>
                <p className="text-gray-700 font-medium">Reduced Fertilizer Needs</p>
                <p className="text-sm text-gray-600 mt-1">Lower input costs</p>
              </div>
            </div>
          </div>

          {/* Social Benefits */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#F7931E] rounded-full mb-6 mx-auto">
              <Users size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#1B5E20] mb-6 text-center">Social</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-[#FF6B35] pl-4">
                <div className="text-3xl font-bold text-[#1B5E20] mb-1">
                  {fmtKES(minIncomeKES)}–{fmtKES(maxIncomeKES)}
                </div>
                <p className="text-gray-700 font-medium">Monthly Income per Collector</p>
                <p className="text-sm text-gray-600 mt-1">Sustainable livelihoods</p>
              </div>
              <div className="border-l-4 border-[#FF6B35] pl-4">
                <div className="text-3xl font-bold text-[#1B5E20] mb-1">500+</div>
                <p className="text-gray-700 font-medium">Families Supported</p>
                <p className="text-sm text-gray-600 mt-1">Enhanced food security</p>
              </div>
              <div className="border-l-4 border-[#FF6B35] pl-4">
                <div className="text-3xl font-bold text-[#1B5E20] mb-1">20+</div>
                <p className="text-gray-700 font-medium">Communities Engaged</p>
                <p className="text-sm text-gray-600 mt-1">Widespread impact</p>
              </div>
              <div className="border-l-4 border-[#FF6B35] pl-4">
                <div className="text-3xl font-bold text-[#1B5E20] mb-1">200+</div>
                <p className="text-gray-700 font-medium">Jobs Created</p>
                <p className="text-sm text-gray-600 mt-1">Skills training included</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
