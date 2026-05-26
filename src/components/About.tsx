"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Clock, Users } from "lucide-react";

export default function About() {
  const stats = [
    { icon: <Clock className="w-6 h-6 text-primary" />, label: "Years Experience", value: "20+" },
    { icon: <Users className="w-6 h-6 text-primary" />, label: "Happy Clients", value: "10k+" },
    { icon: <Award className="w-6 h-6 text-primary" />, label: "Awards Won", value: "15+" },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-black/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url("/images/about-us.jpg")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            {/* Experience Badge */}
            <div className="absolute bottom-8 left-8 bg-white/90 dark:bg-black/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20">
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-4 rounded-full">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-4xl font-bold text-foreground">20+</p>
                  <p className="text-muted-foreground font-medium">Years of Trust</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-primary font-semibold tracking-wider uppercase mb-2">About Us</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Driving Trust and <span className="text-primary">Excellence</span>
              </h3>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 20 years of experience, Krish Travel & Transportation has built a strong reputation for reliability, professionalism, and exceptional service in the travel industry. 
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              For more than two decades, we have been proudly guiding travelers with trusted expertise, personalized solutions, and a deep understanding of customer needs. Our journey has been shaped by thousands of satisfied clients and unforgettable travel experiences.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Seamless Planning</h4>
                  <p className="text-sm text-muted-foreground mt-1">From start to finish, we handle all the details.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Dedicated Support</h4>
                  <p className="text-sm text-muted-foreground mt-1">24/7 assistance for a smooth journey.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Expert Guides</h4>
                  <p className="text-sm text-muted-foreground mt-1">Local knowledge for an authentic experience.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Safe Travels</h4>
                  <p className="text-sm text-muted-foreground mt-1">Your safety is our top priority.</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
