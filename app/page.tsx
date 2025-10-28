import React from 'react';
import Hero from '@/components/home/Hero';
import Header from '@/components/home/Header';
import AboutUs from '@/components/home/AboutUs';
import Impact from '@/components/home/Impact';
import Footer from '@/components/home/Footer';
import { Gallery } from '@/components/home/Gallery';
import Newsletter from '@/components/home/Newsletter';

export default function HomePage() {
  return (
    <div className="font-merriweather">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Gallery/>
        <Impact />
        <Newsletter/>
      </main>
      <Footer />
    </div>
  );
}
