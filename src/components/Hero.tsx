"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 hover:scale-105"
          style={{ backgroundImage: 'url("/images/hero-bg.jpg")' }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/50 bg-primary/10 text-primary font-medium tracking-wide text-sm backdrop-blur-md">
            Sri Lanka Taxi Service & In-Bound Tours
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
            Ride with <span className="text-primary">Convenience</span> <br className="hidden md:block"/>
            and Comfort
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Experience the beauty of Sri Lanka with our premium transportation and tour services. Reliable, safe, and comfortable journeys tailored to your needs.
          </p>
          
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/qr/KWY3L6JYXEFRB1"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:-translate-y-1 w-full sm:w-auto"
            >
              <span>Book Your Ride</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#about"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all w-full sm:w-auto"
            >
              Explore Tours
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
