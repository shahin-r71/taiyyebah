'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Award, Users, Sparkles } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Fragrance',
      description: 'Every attar in our collection is selected with love and dedication to bring you the finest scents.',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We source only the highest quality attars, ensuring each bottle meets our strict standards.',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We provide personalized service and support.',
    },
    {
      icon: Sparkles,
      title: 'Authentic Experience',
      description: 'Experience the true essence of traditional attars with modern convenience.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-4">
            About Taiyyebah
          </h2>
          <p className="text-lg text-brand-700 max-w-3xl mx-auto leading-relaxed">
            Taiyyebah is more than just a fragrance brand – we are curators of olfactory experiences. 
            Our journey began with a simple mission: to bring the finest traditional attars to modern 
            fragrance enthusiasts who appreciate quality, authenticity, and the art of perfumery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-brand-600" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-brand-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-brand-700 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-brand-50 to-brand-100 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-serif font-bold text-brand-900 mb-6">
            Our Promise to You
          </h3>
          <p className="text-lg text-brand-800 max-w-2xl mx-auto leading-relaxed">
            At Taiyyebah, we promise to deliver not just fragrances, but memories. Each attar is 
            carefully selected to ensure it meets our high standards of quality and authenticity. 
            We believe that the right fragrance can transform moments into lasting memories.
          </p>
        </motion.div>
      </div>
    </section>
  );
}