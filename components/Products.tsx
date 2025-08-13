'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Package, Gift, Star } from 'lucide-react';
import Image from 'next/image';

export default function Products() {
  const products = [
    {
      id: 1,
      name: 'Premium Attar Collection',
      image: '/images/products/package1.jpg',
      quantity: '10 Pcs Attar',
      weight: '3ml per pc (Total 30ml)',
      price: '550',
      currency: 'TK',
      features: ['Pure Attar', 'Long Lasting', 'Premium Quality'],
      icon: Package,
    },
    {
      id: 2,
      name: 'Luxury Gift Set',
      image: '/images/products/package2.png',
      quantity: '10 Pcs Attar + Gifts',
      weight: 'Complete Gift Package',
      price: '650',
      currency: 'TK',
      features: ['Attar Collection', 'Special Gifts', 'Beautiful Packaging'],
      icon: Gift,
      popular: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-brand-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-4">
            Our Premium Collection
          </h2>
          <p className="text-lg text-brand-700 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium attars, 
            each crafted to perfection for the discerning fragrance enthusiast.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <motion.div key={product.id} variants={itemVariants}>
                <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white">
                  {product.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-brand-600 text-white">
                        <Star size={12} className="mr-1" />
                        Popular
                      </Badge>
                    </div>
                  )}
                  
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-brand-100 rounded-lg mr-3">
                        <IconComponent className="w-6 h-6 text-brand-600" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-brand-900">
                        {product.name}
                      </h3>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-brand-700 font-medium">Quantity:</span>
                        <span className="text-brand-900">{product.quantity}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-brand-700 font-medium">Details:</span>
                        <span className="text-brand-900">{product.weight}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.features.map((feature, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-brand-100 text-brand-800 hover:bg-brand-200"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-3xl font-bold text-brand-900">
                        {product.price} <span className="text-lg font-medium">{product.currency}</span>
                      </div>
                      <Button
                        className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2"
                        onClick={() => {
                          const message = `Hi! I'm interested in ${product.name} (${product.price} ${product.currency}). Can you provide more details?`;
                          window.open(`https://wa.me/8801340469790?text=${encodeURIComponent(message)}`, '_blank');
                        }}
                      >
                        Order Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-brand-700 mb-4">
            Need a custom package or have questions about our products?
          </p>
          <Button
            variant="outline"
            className="border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us for Custom Orders
          </Button>
        </motion.div>
      </div>
    </section>
  );
}