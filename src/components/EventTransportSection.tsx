import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, Car, Users, MapPin, Calendar, Trophy } from "lucide-react";

const EventTransportSection = () => {
  return (
    <section id="events" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Oklahoma's Premier Event Transportation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience game day luxury with our exclusive transportation services for OU Football games, 
            OKC Thunder games, and special events throughout the Oklahoma City metro area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* OU Football Transportation */}
          <Card className="bg-card/80 backdrop-blur-sm border-primary/20 hover:shadow-luxury transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl text-foreground">OU Football Games</CardTitle>
              <CardDescription>
                Premium transportation to Gaylord Family Oklahoma Memorial Stadium in Norman
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Direct service from Oklahoma City Metro to Norman campus</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Pre-game and post-game scheduling available</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Crown className="w-4 h-4 text-primary" />
                <span>VIP tailgating packages available</span>
              </div>
              <Button variant="luxury" className="w-full mt-6">
                Book OU Game Transport
              </Button>
            </CardContent>
          </Card>

          {/* OKC Thunder Transportation */}
          <Card className="bg-card/80 backdrop-blur-sm border-primary/20 hover:shadow-luxury transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl text-foreground">OKC Thunder Games</CardTitle>
              <CardDescription>
                Luxury rides to Paycom Center for NBA Thunder basketball games
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Downtown OKC Paycom Center direct service</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Game day pickup and drop-off coordination</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Crown className="w-4 h-4 text-primary" />
                <span>Thunder Alley and pre-game dining stops</span>
              </div>
              <Button variant="luxury" className="w-full mt-6">
                Book Thunder Transport
              </Button>
            </CardContent>
          </Card>

          {/* Corporate B2B Services */}
          <Card className="bg-card/80 backdrop-blur-sm border-primary/20 hover:shadow-luxury transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl text-foreground">Corporate B2B Travel</CardTitle>
              <CardDescription>
                Exclusive contracts for corporate transportation throughout Oklahoma
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Crown className="w-4 h-4 text-primary" />
                <span>Executive transportation solutions</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Car className="w-4 h-4 text-primary" />
                <span>Fleet management for corporate events</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Users className="w-4 h-4 text-primary" />
                <span>Group transportation and airport transfers</span>
              </div>
              <Button variant="luxury" className="w-full mt-6">
                Request Corporate Quote
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Serving All Oklahoma City Metro Areas
            </h3>
            <p className="text-muted-foreground mb-6">
              Moore • Norman • Edmond • Yukon • Del City • Mustang • Midwest City • Bethany • Warr Acres • The Village • Nichols Hills
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury" size="lg">
                Get Quote for Your Event
              </Button>
              <Button variant="outline" size="lg">
                View Service Areas
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventTransportSection;