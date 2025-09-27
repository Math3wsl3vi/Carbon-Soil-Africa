import Image from 'next/image';
import React from 'react';
const Partners = () => {
  const partners = [{
    id: 1,
    name: 'GreenTech Fund',
    type: 'Investor',
    logo: '/images/test.png'
  }, {
    id: 2,
    name: 'Africa Climate Foundation',
    type: 'NGO',
    logo: '/images/test.png'
  }, {
    id: 3,
    name: 'AgriInnovate',
    type: 'Research',
    logo: '/images/test.png'
  }, {
    id: 4,
    name: 'Sustainable Future',
    type: 'Corporate',
    logo: '/images/test.png'
  }, {
    id: 5,
    name: 'EcoVentures',
    type: 'Investor',
    logo: '/images/test.png'
  }, {
    id: 6,
    name: 'Farmers Alliance',
    type: 'Community',
    logo: '/images/test.png'
  }];
  const testimonials = [{
    id: 1,
    quote: "Since using biochar from Carbon & Soil Loop, my maize yields have increased by 30%. The soil retains water better during dry spells, and I've been able to reduce my fertilizer use.",
    name: 'John Kangogo',
    role: 'Founder',
    image: '/images/user.png'
  }, {
    id: 2,
    quote: 'Working with Carbon & Soil Loop has allowed our company to offset our carbon footprint with high-quality, verifiable credits while supporting African communities. Their transparent approach gives us confidence in the impact of our investment.',
    name: 'Michael Chen',
    role: 'Co-Founder',
    image: '/images/user.png'
  }, {
    id: 3,
    quote: "The community biochar collection program has created jobs for youth in our village. We're removing invasive plants that were a fire hazard while earning income and helping the environment.",
    name: 'Samuel Osei',
    role: 'Co-Founder',
    image: '/images/user.png'
  }];
  return <section id="partners" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B5E20] mb-4">
            Our Partners
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Collaborating with organizations across sectors to scale our impact
            and create lasting change.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {partners.map(partner => <div key={partner.id} className="bg-[#F5F5DC] p-4 rounded-lg flex flex-col items-center justify-center">
              <Image width={150} height={80} src={partner.logo} alt={partner.name} className="h-12 mb-3 object-contain" />
              <h3 className="text-sm font-medium text-[#1B5E20] text-center">
                {partner.name}
              </h3>
              <p className="text-xs text-gray-600 text-center">
                {partner.type}
              </p>
            </div>)}
        </div>
        <h3 className="text-2xl font-bold text-[#1B5E20] mb-8 text-center">
          Founders and the Team
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => <div key={testimonial.id} className="bg-[#F5F5DC] p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                  width={48}
                    height={48}
                  src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1B5E20]">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">&quot;{testimonial.quote}&quot;</p>
            </div>)}
        </div>
        <div className="mt-16 bg-[#1B5E20] p-8 rounded-lg text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Become a Partner</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Join our growing network of partners committed to climate action,
            soil restoration, and sustainable development across Africa.
          </p>
          <a href="#get-involved" className="inline-block bg-white text-[#1B5E20] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
            Partner With Us
          </a>
        </div>
      </div>
    </section>;
};
export default Partners;