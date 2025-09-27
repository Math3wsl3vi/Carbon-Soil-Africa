import React from 'react';
import Hero from '@/components/home/Hero';
import Header from '@/components/home/Header';
import AboutUs from '@/components/home/AboutUs';
import HowItWorks from '@/components/home/HowItWorks';
import Impact from '@/components/home/Impact';
import Footer from '@/components/home/Footer';
import Solutions from '@/components/home/Solutions';
import GetInvolved from '@/components/home/GetInvolved';
import Partners from '@/components/home/Partners';

export default function HomePage() {
  return (
    <div className="font-poppins">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <HowItWorks />
        <Impact />
        <Solutions />
        <Partners />
        <GetInvolved />
      </main>
      <Footer />
    </div>
  );
}
