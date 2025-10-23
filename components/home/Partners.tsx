import React, { useState } from 'react';
import Image from 'next/image';

const GetInvolved = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const leadershipTeam = [
    {
      id: 1,
      name: 'Sellah Bogonko, HSC',
      role: 'Co-Founder & CEO',
      image: '/images/team-member-1.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      id: 2,
      name: 'Bilha Ndirangu',
      role: 'Co-Founder',
      image: '/images/team-member-2.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      id: 3,
      name: 'Marceline Obuya',
      role: 'Co-Founder',
      image: '/images/team-member-3.jpg',
      linkedin: '#'
    },
    {
      id: 4,
      name: 'Karen Chelangat',
      role: 'Chief Innovation Officer',
      image: '/images/team-member-4.jpg',
      linkedin: '#'
    },
    {
      id: 5,
      name: 'Samuel N. Kuria',
      role: 'Chief Finance & Admin Officer',
      image: '/images/team-member-5.jpg',
      linkedin: '#'
    },
    {
      id: 6,
      name: 'Mandarina Khabetsa',
      role: 'Chief Communications & Advocacy Officer',
      image: '/images/team-member-6.jpg',
      linkedin: '#',
      twitter: '#'
    }
  ];

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
          <div className="bg-yellow-600 p-12 flex flex-col justify-center">
            <div className="inline-block bg-white h-1 w-12 mb-4"></div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wide mb-6">
              THE TEAM
            </h3>
            <p className="text-white text-lg leading-relaxed mb-8">
              We are a diverse team of individuals combining deep professionalism with passion and purpose to drive transformative change in {"Africa's"} Green Economy.
            </p>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-yellow-600 transition-colors uppercase text-sm w-fit">
              Meet the Team
            </button>
          </div>

        {/* Leadership Team Section */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="inline-block bg-green-600 h-1 w-12 mb-2"></div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              OUR LEADERSHIP TEAM
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member) => (
              <div key={member.id} className="group">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-80 object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h4>
                <p className="text-gray-600 mb-3">{member.role}</p>
                <a href="#" className="text-green-600 hover:text-green-700 font-medium text-sm inline-flex items-center mb-3">
                  View profile →
                </a>
                <div className="flex gap-2">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white hover:bg-yellow-600 transition-colors"
                      aria-label="LinkedIn"
                    >
                      in
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white hover:bg-yellow-600 transition-colors"
                      aria-label="Twitter"
                    >
                      𝕏
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
          <div className="min-h-[400px] overflow-hidden">
            <Image
            width={500} 
            height={500}
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
                  className="px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors uppercase text-sm whitespace-nowrap"
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