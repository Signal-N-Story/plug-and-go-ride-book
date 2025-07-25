import { Button } from "@/components/ui/button";
import { Car, Phone, User, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
              <Car className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Plug & Go</h1>
              <p className="text-xs text-muted-foreground">Premium Rentals & Chauffeur</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#rentals" className="text-foreground hover:text-primary transition-colors">
              Car Rentals
            </a>
            <a href="#chauffeur" className="text-foreground hover:text-primary transition-colors">
              Chauffeur Service
            </a>
            <a href="#fleet" className="text-foreground hover:text-primary transition-colors">
              Our Fleet
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="tel:+14055616021">
                <Phone className="w-4 h-4 mr-2" />
                (405) 561-6021
              </a>
            </Button>
            <Button variant="outline" size="sm">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <Button variant="luxury" size="sm">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border animate-slide-up">
            <nav className="flex flex-col space-y-4">
              <a href="#rentals" className="text-foreground hover:text-primary transition-colors py-2">
                Car Rentals
              </a>
              <a href="#chauffeur" className="text-foreground hover:text-primary transition-colors py-2">
                Chauffeur Service
              </a>
              <a href="#fleet" className="text-foreground hover:text-primary transition-colors py-2">
                Our Fleet
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors py-2">
                Contact
              </a>
              <div className="flex flex-col space-y-3 pt-4">
                <Button variant="outline" size="sm">
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
                <Button variant="luxury" size="sm">
                  Book Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;