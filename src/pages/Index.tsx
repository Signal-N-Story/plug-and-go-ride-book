import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FleetSection from "@/components/FleetSection";
import EventTransportSection from "@/components/EventTransportSection";
import BookingSection from "@/components/BookingSection";
import A2PSignupForm from "@/components/A2PSignupForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FleetSection />
        <EventTransportSection />
        <BookingSection />
        <A2PSignupForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
