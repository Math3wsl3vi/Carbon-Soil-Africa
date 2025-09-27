"use client";
import React, { useState } from 'react';
import { Building, Tractor, Users, Check } from 'lucide-react';
const GetInvolved = () => {
  const [activeTab, setActiveTab] = useState('corporate');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
    type: 'corporate'
  });
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setFormData({
      ...formData,
      type: tab
    });
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real implementation, this would send the data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        organization: '',
        message: '',
        type: activeTab
      });
    }, 3000);
  };
  return <section id="get-involved" className="py-16 md:py-24 bg-[#F5F5DC]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B5E20] mb-4">
            Get Involved
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Join our mission to restore soil health and remove carbon from the
            atmosphere. There are many ways to participate.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-16">
          <div className="flex flex-wrap border-b">
            <button className={`px-6 py-4 font-medium focus:outline-none ${activeTab === 'corporate' ? 'text-[#1B5E20] border-b-2 border-[#1B5E20]' : 'text-gray-600 hover:text-[#1B5E20]'}`} onClick={() => handleTabChange('corporate')}>
              <Building size={18} className="inline mr-2" />
              For Corporates
            </button>
            <button className={`px-6 py-4 font-medium focus:outline-none ${activeTab === 'farmer' ? 'text-[#1B5E20] border-b-2 border-[#1B5E20]' : 'text-gray-600 hover:text-[#1B5E20]'}`} onClick={() => handleTabChange('farmer')}>
              <Tractor size={18} className="inline mr-2" />
              For Farmers
            </button>
            <button className={`px-6 py-4 font-medium focus:outline-none ${activeTab === 'community' ? 'text-[#1B5E20] border-b-2 border-[#1B5E20]' : 'text-gray-600 hover:text-[#1B5E20]'}`} onClick={() => handleTabChange('community')}>
              <Users size={18} className="inline mr-2" />
              For Communities
            </button>
          </div>
          <div className="p-6 md:p-8">
            {activeTab === 'corporate' && <div>
                <h3 className="text-xl font-bold text-[#1B5E20] mb-4">
                  Corporate Partnerships
                </h3>
                <p className="text-gray-700 mb-6">
                  Partner with us to offset your carbon footprint with
                  high-quality, verifiable carbon removal certificates while
                  supporting sustainable development in Africa.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-[#6D4C41] mb-2">
                      Partnership Options
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check size={18} className="text-[#1B5E20] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Carbon removal certificate purchases</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-[#1B5E20] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Long-term offtake agreements</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-[#1B5E20] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Impact investment opportunities</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-[#1B5E20] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Strategic partnerships</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#6D4C41] mb-2">Benefits</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check size={18} className="text-[#1B5E20] mr-2 mt-0.5 flex-shrink-0" />
                        <span>
                          High-quality carbon removal with co-benefits
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-[#1B5E20] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Detailed impact reporting</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-[#1B5E20] mr-2 mt-0.5 flex-shrink-0" />
                        <span>
                          Brand association with regenerative agriculture
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-[#1B5E20] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Employee engagement opportunities</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>}
            {activeTab === 'farmer' && <div>
                <h3 className="text-xl font-bold text-[#1B5E20] mb-4">
                  Farmer Participation
                </h3>
                <p className="text-gray-700 mb-6">
                  Join our network of farmers using biochar to improve soil
                  health, increase yields, and build resilience to climate
                  change.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-[#6D4C41] mb-2">
                      How to Participate
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check size={18} className="text-[#1B5E20] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Apply for biochar trials on your farm</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-[#1B5E20] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Join our regenerative agriculture training</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-[#1B5E20] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Participate in soil health monitoring</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-[#1B5E20] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Become a demonstration site</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#6D4C41] mb-2">Benefits</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check size={18} className="text-[#1B5E20] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Subsidized biochar for soil improvement</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-[#1B5E20] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Training on regenerative practices</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-[#1B5E20] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Access to farmer support network</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-[#1B5E20] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Potential yield and income increases</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>}
            {activeTab === 'community' && <div>
                <h3 className="text-xl font-bold text-[#1B5E20] mb-4">
                  Community Engagement
                </h3>
                <p className="text-gray-700 mb-6">
                  Create income opportunities in your community through invasive
                  plant collection and biochar production.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-[#6D4C41] mb-2">
                      Opportunities
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check size={18} className="text-[#1B5E20] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Organize biomass collection groups</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-[#1B5E20] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Host a biochar production site</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-[#1B5E20] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Participate in training programs</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-[#1B5E20] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Create local distribution networks</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#6D4C41] mb-2">Benefits</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check size={18} className="text-[#1B5E20] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Income from invasive species collection</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-[#1B5E20] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Employment in biochar production</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-[#1B5E20] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Skills development and training</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-[#1B5E20] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Environmental improvement in local area</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>}
            {formSubmitted ? <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mt-6">
                <div className="flex">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  <p>Thank you for your interest! {"We'll"} be in touch soon.</p>
                </div>
              </div> : <form onSubmit={handleSubmit} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Name
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1B5E20] focus:border-[#1B5E20] outline-none" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1B5E20] focus:border-[#1B5E20] outline-none" required />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="organization" className="block text-gray-700 font-medium mb-2">
                    Organization (if applicable)
                  </label>
                  <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1B5E20] focus:border-[#1B5E20] outline-none" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    How would you like to get involved?
                  </label>
                  <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1B5E20] focus:border-[#1B5E20] outline-none" required></textarea>
                </div>
                <div>
                  <button type="submit" className="bg-[#1B5E20] text-white px-6 py-3 rounded-md font-medium hover:bg-[#154a1a] transition-colors">
                    Submit
                  </button>
                </div>
              </form>}
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
          <h3 className="text-2xl font-bold text-[#1B5E20] mb-4">
            Download Resources
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Learn more about our work, biochar benefits, and how you can get
            involved with these downloadable resources.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <a href="#" className="bg-[#F5F5DC] p-4 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-[#1B5E20] font-medium">
                Corporate Partnership Guide
              </div>
              <div className="text-sm text-gray-600">PDF (2.4 MB)</div>
            </a>
            <a href="#" className="bg-[#F5F5DC] p-4 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-[#1B5E20] font-medium">
                {"Farmer's"} Biochar Manual
              </div>
              <div className="text-sm text-gray-600">PDF (3.1 MB)</div>
            </a>
            <a href="#" className="bg-[#F5F5DC] p-4 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-[#1B5E20] font-medium">
                Impact Report 2023
              </div>
              <div className="text-sm text-gray-600">PDF (5.7 MB)</div>
            </a>
            <a href="#" className="bg-[#F5F5DC] p-4 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-[#1B5E20] font-medium">
                Community Collector Guide
              </div>
              <div className="text-sm text-gray-600">PDF (1.8 MB)</div>
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default GetInvolved;