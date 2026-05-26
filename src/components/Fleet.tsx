"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, Car as CarIcon } from "lucide-react";

export default function Fleet() {
  const fleet = [
    {
      name: "PRIUS",
      image: "/images/prius.jpg",
      pax: 3,
      luggage: 2,
    },
    {
      name: "WAGON R",
      image: "/images/wagon-r.jpg",
      pax: 3,
      luggage: 2,
    },
    {
      name: "HIGHROOF KDH",
      image: "/images/highroof-kdh.jpg",
      pax: 9,
      luggage: 8,
    },
    {
      name: "BUS",
      image: "/images/bus.jpg",
      pax: 29,
      luggage: 20,
    },
  ];

  return (
    <section id="fleet" className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-semibold tracking-wider uppercase mb-2">Our Fleet</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Reliable, Safe & Comfortable Taxi
            </h3>
            <p className="text-lg text-muted-foreground">
              Choose from our wide range of well-maintained vehicles to suit your travel needs, whether you're traveling solo or in a large group.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {fleet.map((vehicle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-50 dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url("${vehicle.image}")` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <h4 className="absolute bottom-4 left-4 text-xl font-bold text-white uppercase tracking-wider">
                  {vehicle.name}
                </h4>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span>{vehicle.pax} Pax</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <span>{vehicle.luggage} Luggages</span>
                  </div>
                </div>
                <a 
                  href="https://wa.me/qr/KWY3L6JYXEFRB1"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <CarIcon className="w-4 h-4" />
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
