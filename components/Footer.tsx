'use client';

import { motion } from 'framer-motion';
import { Heart, MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const socialLinks = [
    {
      icon: Facebook,
      url: 'https://www.facebook.com/taiyyebah',
      name: 'Facebook',
    },
    {
      icon: Instagram,
      url: 'https://www.instagram.com/taiyyebah_official',
      name: 'Instagram',
    },
    {
      icon: MessageCircle,
      url: 'https://wa.me/8801340469790',
      name: 'WhatsApp',
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-brand-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/images/Logo(Black).jpg"
                  alt="Taiyyebah Logo"
                  fill
                  className=""
                />
              </div>
              <span className="text-3xl font-serif font-bold">Taiyyebah</span>
            </div>
            <p className="text-brand-200 mb-6 leading-relaxed max-w-md">
              Experience the essence of luxury with our premium attar collection. 
              Each fragrance tells a story of tradition, elegance, and timeless beauty.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-brand-800 rounded-lg flex items-center justify-center text-brand-200 hover:text-white hover:bg-brand-700 transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-serif font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-brand-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-serif font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-brand-400 mt-1 flex-shrink-0" />
                <a
                  href="tel:01340469790"
                  className="text-brand-200 hover:text-white transition-colors"
                >
                  01340469790
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-brand-400 mt-1 flex-shrink-0" />
                <a
                  href="mailto:taiyyebah786@gmail.com"
                  className="text-brand-200 hover:text-white transition-colors"
                >
                  taiyyebah786@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-400 mt-1 flex-shrink-0" />
                <span className="text-brand-200">
                  13/2, City club road, B-block, Mirpur 12, Dhaka
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-brand-800 mt-12 pt-8 text-center"
        >
          <p className="text-brand-300 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-2 text-red-400" /> for fragrance lovers
          </p>
          <p className="text-brand-400 text-sm mt-2">
            © 2025 Taiyyebah. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}