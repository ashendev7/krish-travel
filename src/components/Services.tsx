"use client";

import { motion } from "framer-motion";
import { Car, Map, Hotel, HeadphonesIcon } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Car className="w-10 h-10 text-primary" />,
      title: "Reliable Transport",
      description: "Punctual tour transport services with a modern fleet ensuring your comfort and safety.",
    },
    {
      icon: <Map className="w-10 h-10 text-primary" />,
      title: "Diverse Travel Services",
      description: "From custom tour packages and airport transfers to city tours and exciting day trips.",
    },
    {
      icon: <Hotel className="w-10 h-10 text-primary" />,
      title: "Hassle-Free Hotels",
      description: "Smooth hotel booking process with highly competitive rates for a perfect stay.",
    },
    {
      icon: <HeadphonesIcon className="w-10 h-10 text-primary" />,
      title: "24/7 Support",
      description: "Professional customer support available around the clock to assist you anytime.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-semibold tracking-wider uppercase mb-2">Our Services</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What We Offer
            </h3>
            <p className="text-lg text-muted-foreground">
              We provide comprehensive travel solutions to make your Sri Lankan adventure memorable, comfortable, and completely stress-free.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-black p-8 rounded-3xl shadow-lg border border-border hover:shadow-xl transition-shadow group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <div className="mb-6 bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-foreground mb-4">{service.title}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
