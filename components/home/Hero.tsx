'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  // Scroll animations
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#F5F5DC] text-[#1B5E20]">
      {/* Background video or image */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/soil.mp4" type="video/mp4" />
      </video>
      {/* Optional fallback image */}
      <div className="absolute inset-0 bg-[url('/images/soil-bg.jpg')] bg-cover bg-center opacity-60"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1B5E20]/70 via-[#1B5E20]/40 to-transparent"></div>

      {/* Left Text Content */}
      <div className="absolute top-1/3 left-6 md:left-16 z-20 space-y-4 max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Healing Soils, <br /> Unleashing Potential.
        </h1>
        <p className="text-lg md:text-xl text-white/90">
          Remove, Reduce, Restore, and Mitigate.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
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
          {/* <div className="w-36 h-36 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center mb-4 overflow-hidden shadow-md">
            <Image
              src="/images/logo6.png"
              alt="Carbon Soil Loop Africa Logo"
              width={150}
              height={150}
              className="object-cover rounded-full"
            />
          </div> */}
          <h2 className="text-white text-3xl md:text-7xl font-bold drop-shadow-lg">
            Carbon & Soil Loop Africa
          </h2>
        </div>
      </motion.div>

      {/* Bottom fade */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F5F5DC] to-transparent"></div> */}
    </section>
  );
}
