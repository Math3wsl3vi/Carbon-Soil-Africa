'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#F5F5DC] text-[#1B5E20]">

      {/* Top-left Logo */}
      <div className="absolute top-20 right-6 z-30">
        <img 
          src="/images/logo7.png" 
          alt="Carbon & Soil Loop Africa Logo" 
          className="w-44 h-auto md:w-24"
        />
      </div>

      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/video-poster.jpg"
      >
        <source src="/videos/hero1.mp4" type="video/mp4" />
        <source src="/videos/hero1.webm" type="video/webm" />
      </video>

      {/* Fallback image overlay */}
      <div className="absolute inset-0 bg-[url('/images/soil-bg.jpg')] bg-cover bg-center opacity-60"></div>

      {/* Main Content */}
      <div className="absolute md:top-1/3 top-[25%] left-[35%] md:left-16 -translate-x-1/2 md:translate-x-0 z-20 space-y-4 md:max-w-5xl text-left px-2">
        <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold text-white">
          Healing Soils, Restoring Ecosystems 
          <br className="hidden md:block" /> Empowering Communities and Sequestering carbon
        </h1>
        <p className="text-lg md:text-xl text-white/90">
          Remove, Reduce, Restore, and Mitigate.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a
            href="#how-it-works"
            className="bg-white text-[#1B5E20] px-6 py-3 rounded-md font-medium hover:bg-[#e9e9c9] transition-colors inline-flex items-center"
          >
            Explore Our Work
            <ArrowRight size={18} className="ml-2" />
          </a>
          <a
            href="#get-involved"
            className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-[#1B5E20] transition-colors inline-flex items-center"
          >
            Get Involved
          </a>
        </div>
      </div>

      <motion.div
        style={{ scale, opacity }}
        className="absolute bottom-0 w-full text-center z-10"
      >
        <h2 className="text-white text-3xl md:text-7xl font-bold drop-shadow-lg">
          Carbon & Soil Loop Africa
        </h2>
      </motion.div>
    </section>
  );
}
