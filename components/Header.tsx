'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="relative w-12 h-12 rounded-md overflow-hidden border-2 border-white/20">
              <Image
                src="/images/Logo(Black).jpg"
                alt="Taiyyebah Logo"
                fill
                className=""
              />
            </div>
            <span className={`text-2xl font-serif font-bold transition-colors duration-300 ${
              isScrolled ? 'text-brand-900' : 'text-white'
            }`}>
              Taiyyebah
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className={`font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-brand-800 hover:text-brand-600' 
                    : 'text-white hover:text-white/80'
                }`}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className={`flex items-center space-x-2 transition-colors duration-300 ${
              isScrolled ? 'text-brand-700' : 'text-white/90'
            }`}>
              <Phone size={16} />
              <span className="text-sm">01340469790</span>
            </div>
            <div className={`flex items-center space-x-2 transition-colors duration-300 ${
              isScrolled ? 'text-brand-700' : 'text-white/90'
            }`}>
              <Mail size={16} />
              <span className="text-sm">taiyyebah786@gmail.com</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className={`md:hidden transition-colors duration-300 ${
              isScrolled 
                ? 'text-brand-900 hover:bg-brand-100' 
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-brand-200"
          >
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-brand-800 hover:text-brand-600 hover:bg-brand-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 py-2 space-y-2 border-t border-brand-200">
                <div className="flex items-center space-x-2 text-brand-700">
                  <Phone size={16} />
                  <span className="text-sm">01340469790</span>
                </div>
                <div className="flex items-center space-x-2 text-brand-700">
                  <Mail size={16} />
                  <span className="text-sm">taiyyebah786@gmail.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}