import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Pricing />
      <Gallery />
      <Booking />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;
