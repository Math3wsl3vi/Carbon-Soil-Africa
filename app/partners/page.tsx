'use client'
import Footer from '@/components/home/Footer';
import PageHeader from '@/components/home/PageHeader';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Partners = () => {
  // const partners = [
  //   { id: 1, name: 'GreenTech Fund', type: 'Investor', logo: '/images/test.png' },
  //   { id: 2, name: 'Africa Climate Foundation', type: 'NGO', logo: '/images/test.png' },
  //   { id: 3, name: 'AgriInnovate', type: 'Research', logo: '/images/test.png' },
  //   { id: 4, name: 'Sustainable Future', type: 'Corporate', logo: '/images/test.png' },
  //   { id: 5, name: 'EcoVentures', type: 'Investor', logo: '/images/test.png' },
  //   { id: 6, name: 'Farmers Alliance', type: 'Community', logo: '/images/test.png' },
  // ];

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sylvia Jemutai Rotich",
      role: "CEO, Carbon & Soil Loop Africa",
      image: "/images/sylvia.jpeg",
      education: [
        "Ph.D. Environmental Planning and Management (Climate Change Adaptation)",
        "MSc. Environmental Governance",
        "BSc. Environmental Conservation & Natural Resource Management (Hons.)",
      ],
      socials: {
        email: "mailto:sylvia@carbonsoil.africa",
      }
    },
    {
      id: 2,
      name: "Jeruto Kosgey, MBA",
      role: "COO, Carbon & Soil Loop Africa",
      image: "/images/jeruto.jpeg",
      education: [
        "Executive MBA",
        "BSc (Hons) Economics",
      ],
      socials: {
        email: "mailto:jeruto@carbonsoil.africa",
        linkedin:"https://www.linkedin.com/in/jeruto-k/"
      }
    },
  ];

  return (
   <div className='font-poppins'>
    <PageHeader/>
    <div
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/hero3.jpg')", // <-- Replace with your actual image path
        }}
      >
        <div className="absolute inset-0 bg-black/50" /> {/* dark overlay */}
        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Our Leadership Team
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Empowering Corporates, Farmers, and Communities through Sustainable Carbon and Soil Solutions.
          </p>
        </div>
      </div>
     <section id="partners" className="py-16 md:py-24 bg-white">

      <div className="container mx-auto px-4 md:px-6">
        {/* Partners Section */}
        {/* <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B5E20] mb-4">
            Our Partners
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Collaborating with organizations across sectors to scale our impact
            and create lasting change.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-[#F5F5DC] p-4 rounded-lg flex flex-col items-center justify-center"
            >
              <Image
                width={150}
                height={80}
                src={partner.logo}
                alt={partner.name}
                className="h-12 mb-3 object-contain"
              />
              <h3 className="text-sm font-medium text-[#1B5E20] text-center">
                {partner.name}
              </h3>
              <p className="text-xs text-gray-600 text-center">{partner.type}</p>
            </div>
          ))}
        </div> */}

      {/* Founders Section */}
        <h3 className="text-3xl md:text-4xl font-bold text-[#1B5E20] mb-12 text-center">
          Our Leadership Team
        </h3>

        <div className="max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {testimonials.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-md overflow-hidden text-center transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="w-full h-72 relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-lg font-bold text-[#1B5E20]">{member.name}</h4>
                <p className="text-gray-600 text-sm mb-3">{member.role}</p>
                  {/* Social Icons */}
                  <div className="flex justify-center items-center gap-4 mt-2">
                    {/* Email is always shown */}
                    {member.socials.email && (
                      <Link href={member.socials.email} target="_blank">
                        <Image
                          width={100}
                          height={100}
                          src="/images/gmail.png"
                          alt="gmail"
                          className="w-7 h-7 hover:opacity-80 transition"
                        />
                      </Link>
                    )}

                    {/* Only show LinkedIn if available */}
                    {member.socials.linkedin && (
                      <Link href={member.socials.linkedin} target="_blank">
                        <Image
                          width={100}
                          height={100}
                          src="/images/linkedin.png"
                          alt="linkedin"
                          className="w-6 h-6 hover:opacity-80 transition"
                        />
                      </Link>
                    )}
                  </div>


              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-[#1B5E20] p-8 rounded-lg text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Become a Partner</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Join our growing network of partners committed to climate action,
            soil restoration, and sustainable development across Africa.
          </p>
          <Link
            href="/get-involved"
            className="inline-block bg-white text-[#1B5E20] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
    <Footer/>
   </div>
  );
};

export default Partners;
