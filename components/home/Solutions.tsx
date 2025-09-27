import React from 'react';
import { Building, Tractor, Users, ArrowRight } from 'lucide-react';
const Solutions = () => {
  return <section id="solutions" className="py-16 md:py-24 bg-[#F5F5DC]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B5E20] mb-4">
            Our Solutions
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Tailored offerings for corporations, farmers, and communities to
            participate in the carbon and soil restoration loop.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* For Corporates */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-transform hover:transform hover:scale-105">
            <div className="h-48 bg-[#1B5E20] flex items-center justify-center">
              <Building size={64} className="text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#1B5E20] mb-2">
                For Corporates
              </h3>
              <p className="text-gray-700 mb-4">
                Offset your carbon footprint with verifiable, high-quality
                carbon removal credits that make a real difference.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#1B5E20] mr-2">✓</span>
                  <span className="text-gray-700">
                    Verified carbon removal certificates
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B5E20] mr-2">✓</span>
                  <span className="text-gray-700">
                    Transparent impact reporting
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B5E20] mr-2">✓</span>
                  <span className="text-gray-700">ESG compliance support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B5E20] mr-2">✓</span>
                  <span className="text-gray-700">
                    Marketing & storytelling assets
                  </span>
                </li>
              </ul>
              <a href="#get-involved" className="inline-flex items-center text-[#1B5E20] font-medium hover:underline">
                Learn More
                <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
          {/* For Farmers */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-transform hover:transform hover:scale-105">
            <div className="h-48 bg-[#1B5E20] flex items-center justify-center">
              <Tractor size={64} className="text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#1B5E20] mb-2">
                For Farmers
              </h3>
              <p className="text-gray-700 mb-4">
                Access affordable biochar to improve your soil health, increase
                yields, and build climate resilience.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#1B5E20] mr-2">✓</span>
                  <span className="text-gray-700">
                    Premium biochar at subsidized rates
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B5E20] mr-2">✓</span>
                  <span className="text-gray-700">
                    Training on application techniques
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B5E20] mr-2">✓</span>
                  <span className="text-gray-700">Soil health monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B5E20] mr-2">✓</span>
                  <span className="text-gray-700">
                    Access to regenerative farming network
                  </span>
                </li>
              </ul>
              <a href="#get-involved" className="inline-flex items-center text-[#1B5E20] font-medium hover:underline">
                Learn More
                <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
          {/* For Communities */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-transform hover:transform hover:scale-105">
            <div className="h-48 bg-[#1B5E20] flex items-center justify-center">
              <Users size={64} className="text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#1B5E20] mb-2">
                For Communities
              </h3>
              <p className="text-gray-700 mb-4">
                Generate income by collecting invasive plant species and
                participate in local biochar production.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#1B5E20] mr-2">✓</span>
                  <span className="text-gray-700">
                    Fair compensation for biomass collection
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B5E20] mr-2">✓</span>
                  <span className="text-gray-700">
                    Skills development opportunities
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B5E20] mr-2">✓</span>
                  <span className="text-gray-700">
                    Employment in processing centers
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B5E20] mr-2">✓</span>
                  <span className="text-gray-700">
                    Community development projects
                  </span>
                </li>
              </ul>
              <a href="#get-involved" className="inline-flex items-center text-[#1B5E20] font-medium hover:underline">
                Learn More
                <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold text-[#1B5E20] mb-6 text-center">
            Our Carbon Removal Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-[#6D4C41] mb-4">
                Verification & Certification
              </h4>
              <p className="text-gray-700 mb-4">
                Our carbon removal process follows rigorous verification
                standards to ensure the highest quality carbon credits:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#1B5E20] font-bold mr-2">1.</span>
                  <span className="text-gray-700">
                    Scientific measurement of carbon content in biochar
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B5E20] font-bold mr-2">2.</span>
                  <span className="text-gray-700">
                    Third-party verification of production methods
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B5E20] font-bold mr-2">3.</span>
                  <span className="text-gray-700">
                    Tracking of biochar application to soil
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B5E20] font-bold mr-2">4.</span>
                  <span className="text-gray-700">
                    Issuance of carbon removal certificates
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B5E20] font-bold mr-2">5.</span>
                  <span className="text-gray-700">
                    Ongoing monitoring and reporting
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#6D4C41] mb-4">
                Why Our Approach Matters
              </h4>
              <p className="text-gray-700 mb-4">
                Carbon & Soil Loop Africa offers a unique solution that
                addresses multiple challenges simultaneously:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#1B5E20] font-bold mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>Permanence:</strong> Carbon remains sequestered for
                    1,000+ years
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B5E20] font-bold mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>Co-benefits:</strong> Improves soil health and
                    agricultural productivity
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B5E20] font-bold mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>Scalability:</strong> Can be implemented across
                    diverse regions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B5E20] font-bold mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>Community impact:</strong> Creates jobs and improves
                    livelihoods
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B5E20] font-bold mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>Transparency:</strong> Fully traceable from biomass
                    to soil application
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Solutions;