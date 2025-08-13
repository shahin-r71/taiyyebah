'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '01340469790',
      link: 'tel:01340469790',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'taiyyebah786@gmail.com',
      link: 'mailto:taiyyebah786@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '13/2, City club road, B-block, Mirpur 12, Dhaka',
      link: 'https://maps.google.com/?q=13/2,+City+club+road,+B-block,+Mirpur+12,+Dhaka',
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: 'Facebook',
      url: 'https://www.facebook.com/taiyyebah',
      color: 'hover:text-blue-600',
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://www.instagram.com/taiyyebah_official',
      color: 'hover:text-pink-600',
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      url: 'https://wa.me/8801340469790',
      color: 'hover:text-green-600',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/8801340469790?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-brand-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-brand-700 max-w-2xl mx-auto">
            Have questions about our products or need a custom fragrance solution? 
            We'd love to hear from you and help you find your perfect scent.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold text-brand-900 mb-6">
                  Send us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-brand-200 focus:border-brand-500"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-brand-200 focus:border-brand-500"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="border-brand-200 focus:border-brand-500"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-brand-600 hover:bg-brand-700 text-white py-3"
                  >
                    Send Message via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-serif font-bold text-brand-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-brand-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-900 mb-1">
                          {info.title}
                        </h4>
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-700 hover:text-brand-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-brand-900 mb-6">
                Follow Us
              </h3>
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
                      className={`w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600 ${social.color} transition-colors`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <Card className="border-0 shadow-lg bg-gradient-to-r from-brand-600 to-brand-700 text-white">
              <CardContent className="p-6">
                <h4 className="font-serif font-bold text-xl mb-2">
                  Quick Order
                </h4>
                <p className="mb-4 text-brand-100">
                  Ready to order? Contact us directly via WhatsApp for instant assistance.
                </p>
                <Button
                  variant="secondary"
                  className="bg-white text-brand-700 hover:bg-brand-50"
                  onClick={() => window.open('https://wa.me/8801340469790', '_blank')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Now
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}