import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Car, Crown, Shield, Clock } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <Badge className="mb-6 bg-gradient-gold text-primary-foreground font-semibold px-4 py-2">
            Premium Car Services Since 2020
          </Badge>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Luxury on
            <span className="bg-gradient-gold bg-clip-text text-transparent"> Demand</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Oklahoma City Metro's premier luxury car rentals and chauffeur services. 
            Serving Moore, Norman, Edmond, OU Football games, OKC Thunder events, and corporate B2B travel.
          </p>
          
          {/* Service Options */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
            <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-lg p-6 max-w-sm animate-slide-up">
              <Car className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Car Rentals</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Self-drive luxury vehicles for your convenience
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Browse Fleet
              </Button>
            </div>
            
            <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-lg p-6 max-w-sm animate-slide-up">
              <Crown className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Chauffeur Service</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Professional drivers for the ultimate luxury experience
              </p>
              <Button variant="luxury" size="sm" className="w-full">
                Book Chauffeur
              </Button>
            </div>
          </div>
          
          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground mb-10">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Crown className="w-5 h-5 text-primary" />
              <span>Premium Fleet</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxury" size="lg" className="text-lg px-8">
              Book Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              View Fleet
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;