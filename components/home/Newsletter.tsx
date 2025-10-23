'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const GetInvolved = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const router = useRouter()

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubmitted(true);
      // Add your newsletter subscription logic here
    }
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Team Section */}
        <div className="grid md:grid-cols-2 gap-0 mb-16">
          <div className="bg-[#F5F5DC] p-12 flex flex-col justify-center">
            <div className="inline-block bg-[#1B5E20] h-1 w-12 mb-4"></div>
            <h3 className=" text-sm font-semibold uppercase tracking-wide mb-6">
              THE TEAM
            </h3>
            <p className=" text-lg leading-relaxed mb-8">
              We are a diverse team of individuals combining deep professionalism with passion and purpose to drive transformative change in {"Africa's"} Green Economy.
            </p>
            <button 
            onClick={()=>router.push('/partners')}
            className="border-2 border-[#1B5E20]  px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#1B5E20] transition-colors uppercase text-sm w-fit">
              Meet the Team
            </button>
          </div>
          <div className="bg-gray-200 min-h-[400px] flex items-center justify-center">
          <Image
          width={400} 
          height={400}
              src="/images/team.jpg" 
              alt="Carbon Soil Africa Team" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="mb-4">
          <div className="inline-block bg-green-600 h-1 w-12 mb-2"></div>
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            OUR NEWSLETTER
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 lg:w-1/3">
            Stay Informed
          </h2>

          <div className="flex-1 w-full">
            {submitted ? (
              <div className="bg-green-50 rounded-lg p-6 text-center">
                <p className="text-green-700 font-semibold text-lg">
                  Thank you for subscribing!
                </p>
                <p className="text-gray-600 mt-2">
                  Check your inbox for confirmation
                </p>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ENTER YOUR EMAIL ADDRESS"
                  className="flex-1 w-full px-6 py-4 border border-gray-300 rounded-full focus:border-green-600 focus:outline-none text-sm placeholder-gray-400"
                />
                <button
                  onClick={handleSubmit}
                  className="px-8 py-4 bg-green-600  font-semibold rounded-full hover:bg-green-700 transition-colors uppercase text-sm whitespace-nowrap"
                >
                  Subscribe →
                </button>
              </div>
            )}

            <p className="text-sm text-gray-600 mt-4">
              You can unsubscribe anytime by clicking the unsubscribe link on the footer of our e-newsletters.
              <br />
              Read more about our privacy handling in our{' '}
              <a href="#" className="text-green-600 hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;