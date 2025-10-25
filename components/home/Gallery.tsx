'use client'
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { XIcon } from 'lucide-react';
import Image from 'next/image';
export function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&auto=format&fit=crop&q=80',
      category: 'biomass',
      title: 'Invasive Species Collection',
      description: 'Community members collecting Prosopis and other invasive plants'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop&q=80',
      category: 'production',
      title: 'Pyrolysis Process',
      description: 'Converting biomass into biochar through controlled heating'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&auto=format&fit=crop&q=80',
      category: 'biochar',
      title: 'Quality Biochar',
      description: 'High-quality biochar ready for soil application'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop&q=80',
      category: 'farming',
      title: 'Soil Application',
      description: 'Farmers applying biochar to improve soil health'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&auto=format&fit=crop&q=80',
      category: 'community',
      title: 'Community Training',
      description: 'Training sessions on biochar application and benefits'
    },
    {
      id: 6,
      src: '/images/gallery1.jpeg',
      category: 'farming',
      title: 'Improved Yields',
      description: 'Enhanced crop growth with biochar-enriched soil'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&auto=format&fit=crop&q=80',
      category: 'biomass',
      title: 'Invasive Plant Species',
      description: 'Prosopis and other invasive plants before processing'
    },
    {
      id: 8,
      src: '/images/gallery2.jpeg',
      category: 'production',
      title: 'Production Facility',
      description: 'Our biochar production facility in operation'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop&q=80',
      category: 'biochar',
      title: 'Biochar Analysis',
      description: 'Quality testing and carbon content analysis'
    },
    {
      id: 10,
      src: '/images/gallery3.jpeg',
      category: 'community',
      title: 'Women Farmers',
      description: 'Empowering women farmers with sustainable solutions'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&auto=format&fit=crop&q=80',
      category: 'farming',
      title: 'Field Results',
      description: 'Visible improvements in crop health and soil quality'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop&q=80',
      category: 'community',
      title: 'Community Impact',
      description: 'Creating sustainable livelihoods across communities'
    }
  ];
  
  return <section id="gallery" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B5E20] mb-6">Gallery</h2>
          <div className="w-20 h-1 bg-amber mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          We transform invasive species into sustainable solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image, index) => <div key={index} className={`overflow-hidden rounded-lg cursor-pointer transition-all duration-700 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{
          transitionDelay: `${index * 100}ms`
        }} onClick={() => setSelectedImage(image.src)}>
              <Image width={500} height={500} src={image.src} alt={image.title} className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105" />
            </div>)}
        </div>
      </div>
      {/* Lightbox */}
      {selectedImage && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-4 right-4 text-white hover:text-amber" onClick={() => setSelectedImage(null)}>
            <XIcon size={32} />
          </button>
          <Image width={500} height={500} src={selectedImage} alt="Enlarged view" className="max-w-full max-h-[90vh] object-contain" onClick={e => e.stopPropagation()} />
        </div>}
    </section>;
}