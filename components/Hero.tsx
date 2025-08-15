'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
// import Image from 'next/image';
import Video from 'next-video';
import startupVideo from '/videos/Taiyyebah spray Final.mp4';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* <Image
          src="/images/banners/Taiyyebah Bannner.png"
          alt="Taiyyebah Banner"
          fill
          className="object-cover"
          priority
        /> */}
        <Video src={startupVideo} muted loop autoPlay controls = {false} className="" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Taiyyebah
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the essence of luxury with our premium attar collection. 
            Each fragrance tells a story of tradition, elegance, and timeless beauty.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3 text-lg font-medium"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Collection
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-black hover:bg-white/70 hover:border-white/70 hover:text-brand-900 px-8 py-3 text-lg font-medium transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute left-1/2 mt-20 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/90 cursor-pointer"
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-sm mb-2 font-medium">Scroll Down</span>
            <ArrowDown size={24} className="drop-shadow-lg" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}