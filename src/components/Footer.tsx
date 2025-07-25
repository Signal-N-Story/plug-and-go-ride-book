import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Car, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-card border-t border-primary/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Plug & Go</h3>
                <p className="text-xs text-muted-foreground">Premium Rentals & Chauffeur</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Oklahoma City Metro's premier luxury transportation service. Serving Moore, Norman, 
              Edmond, Yukon, Del City, Mustang, and surrounding areas with excellence in every journey.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Luxury Car Rentals OKC</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Chauffeur Services Moore</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">OU Football Game Transportation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">OKC Thunder Game Rides</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Corporate B2B Travel Contracts</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Airport Transfers OKC</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Wedding Services Norman</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+14055616021" className="hover:text-primary transition-colors">(405) 561-6021</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:info@plugngorentals.com" className="hover:text-primary transition-colors">info@plugngorentals.com</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>1305 Ridgeway Drive<br />Moore, OK 73160</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <span>24/7 Available</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">
              Subscribe to get exclusive offers and updates on our latest vehicles.
            </p>
            <div className="space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-background/50 border-primary/20"
              />
              <Button variant="luxury" size="sm" className="w-full">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Plug & Go. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;