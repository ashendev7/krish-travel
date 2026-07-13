"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <Logo scrolled={true} forceWhite={true} className="p-0" />
            <p className="text-zinc-400 leading-relaxed">
              Experience the beauty of Sri Lanka with our premium transportation and tour services. Over 20 years of excellence.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/1CA5j65JKj/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" /></svg>
              </a>
              <a href="https://www.instagram.com/travique" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#home" className="text-zinc-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-zinc-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#services" className="text-zinc-400 hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#fleet" className="text-zinc-400 hover:text-primary transition-colors">Our Fleet</Link></li>
              <li><Link href="#destinations" className="text-zinc-400 hover:text-primary transition-colors">Destinations</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li className="text-zinc-400">Airport Transfers</li>
              <li className="text-zinc-400">City Tours</li>
              <li className="text-zinc-400">Custom Tour Packages</li>
              <li className="text-zinc-400">Hotel Booking</li>
              <li className="text-zinc-400">Day Trips</li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-400">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="https://wa.me/qr/KWY3L6JYXEFRB1" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                  Book via WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>hello@travique.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center md:flex md:justify-between md:items-center text-zinc-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Travique. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
