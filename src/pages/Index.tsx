import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FleetSection from "@/components/FleetSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FleetSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
