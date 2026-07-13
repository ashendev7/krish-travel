import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";
import Destinations from "@/components/Destinations";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Travique | Sri Lanka Premium Taxi Service & Tours",
  description: "Experience the beauty of Sri Lanka with our premium transportation and tour services. Reliable, safe, and comfortable journeys tailored to your needs.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans selection:bg-primary/30">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Fleet />
      <Destinations />
      <Footer />
    </main>
  );
}
