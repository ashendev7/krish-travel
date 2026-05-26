"use client";

import { motion } from "framer-motion";

export default function Destinations() {
  const destinations = [
    {
      name: "Galle",
      image: "/images/galle.jpg",
    },
    {
      name: "Sigiriya",
      image: "/images/sigiriya.jpg",
    },
    {
      name: "Kandy",
      image: "/images/kandy.jpg",
    },
    {
      name: "Nuwara Eliya",
      image: "/images/nuwara-eliya.jpg",
    },
  ];

  return (
    <section id="destinations" className="py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="text-primary font-semibold tracking-wider uppercase mb-2">Explore Sri Lanka</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Popular Destinations
            </h3>
            <p className="text-lg text-muted-foreground">
              Discover the breathtaking beauty, rich history, and vibrant culture of Sri Lanka with our expertly guided tours to these iconic locations.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url("${dest.image}")` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-2xl font-bold text-white mb-2">{dest.name}</h4>
                <div className="w-0 h-1 bg-primary group-hover:w-12 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
