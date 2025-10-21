'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  // Scroll animations
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#F5F5DC] text-[#1B5E20]">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/soil.mp4" type="video/mp4" />
      </video>

      {/* Fallback image overlay */}
      <div className="absolute inset-0 bg-[url('/images/soil-bg.jpg')] bg-cover bg-center opacity-60"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1B5E20]/70 via-[#1B5E20]/40 to-transparent"></div>

      {/* Left Text Content (Centers on mobile) */}
      <div className="absolute top-1/3 left-1/2 md:left-16 -translate-x-1/2 md:translate-x-0 z-20 space-y-4 max-w-xl text-center md:text-left px-6 sm:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Healing Soils, <br className="hidden md:block" /> Unleashing Potential.
        </h1>
        <p className="text-lg md:text-xl text-white/90">
          Remove, Reduce, Restore, and Mitigate.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
          <a
            href="#how-it-works"
            className="bg-white text-[#1B5E20] px-6 py-3 rounded-md font-medium hover:bg-[#e9e9c9] transition-colors inline-flex items-center justify-center"
          >
            Explore Our Work
            <ArrowRight size={18} className="ml-2" />
          </a>
          <a
            href="#get-involved"
            className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-[#1B5E20] transition-colors inline-flex items-center justify-center"
          >
            Get Involved
          </a>
        </div>
      </div>

      {/* Center Logo + Scaling Animation */}
      <motion.div
        style={{ scale, opacity }}
        className="absolute bottom-0 w-full text-center z-10"
      >
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-white text-3xl md:text-7xl font-bold drop-shadow-lg">
            Carbon & Soil Loop Africa
          </h2>
        </div>
      </motion.div>
    </section>
  );
}
