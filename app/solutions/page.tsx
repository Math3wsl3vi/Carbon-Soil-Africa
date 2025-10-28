import React from "react";
import { Building, Tractor, Users, ArrowRight } from "lucide-react";
import Footer from "@/components/home/Footer";
import PageHeader from "@/components/home/PageHeader";

const Solutions = () => {
  return (
    <div className="font-poppins">
      <PageHeader/>
      <section id="solutions" className="bg-[#F5F5DC]">
      {/* 🌾 Banner Section */}
      <div
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/hero7.jpg')", // <-- Replace with your actual image path
        }}
      >
        <div className="absolute inset-0 bg-black/50" /> {/* dark overlay */}
        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Our Solutions
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Empowering Corporates, Farmers, and Communities through Sustainable Carbon and Soil Solutions.
          </p>
        </div>
      </div>

      {/* 🌱 Solutions Section */}
      <div className="py-16 md:py-24 container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B5E20] mb-4">
            Our Solutions
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Tailored offerings for corporations, farmers, and communities to
            participate in the carbon and soil restoration loop.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* For Corporates */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-transform hover:scale-105">
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
                  <span>Verified carbon removal certificates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B5E20] mr-2">✓</span>
                  <span>Transparent impact reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B5E20] mr-2">✓</span>
                  <span>ESG compliance support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B5E20] mr-2">✓</span>
                  <span>Marketing & storytelling assets</span>
                </li>
              </ul>
              <a
                href="#get-involved"
                className="inline-flex items-center text-[#1B5E20] font-medium hover:underline"
              >
                Learn More <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>

          {/* For Farmers */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-transform hover:scale-105">
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
                  <span>Premium biochar at subsidized rates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B5E20] mr-2">✓</span>
                  <span>Training on application techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B5E20] mr-2">✓</span>
                  <span>Soil health monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B5E20] mr-2">✓</span>
                  <span>Access to regenerative farming network</span>
                </li>
              </ul>
              <a
                href="#get-involved"
                className="inline-flex items-center text-[#1B5E20] font-medium hover:underline"
              >
                Learn More <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>

          {/* For Communities */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-transform hover:scale-105">
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
                  <span>Fair compensation for biomass collection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B5E20] mr-2">✓</span>
                  <span>Skills development opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B5E20] mr-2">✓</span>
                  <span>Employment in processing centers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1B5E20] mr-2">✓</span>
                  <span>Community development projects</span>
                </li>
              </ul>
              <a
                href="#get-involved"
                className="inline-flex items-center text-[#1B5E20] font-medium hover:underline"
              >
                Learn More <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default Solutions;
