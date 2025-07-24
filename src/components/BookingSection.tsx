import BookingForm from "@/components/BookingForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car, Crown, Shield, Clock, Star, Users } from "lucide-react";

const BookingSection = () => {
  return (
    <section id="booking" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Book Your Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose between our premium car rental service or luxury chauffeur experience. 
            Both options guarantee excellence and comfort.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Booking Forms */}
          <div className="lg:w-1/2">
            <Tabs defaultValue="rental" className="w-full max-w-lg mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-card border border-primary/20">
                <TabsTrigger value="rental" className="flex items-center gap-2">
                  <Car className="w-4 h-4" />
                  Car Rental
                </TabsTrigger>
                <TabsTrigger value="chauffeur" className="flex items-center gap-2">
                  <Crown className="w-4 h-4" />
                  Chauffeur
                </TabsTrigger>
              </TabsList>

              <TabsContent value="rental">
                <BookingForm type="rental" />
              </TabsContent>

              <TabsContent value="chauffeur">
                <BookingForm type="chauffeur" />
              </TabsContent>
            </Tabs>
          </div>

          {/* Benefits Section */}
          <div className="lg:w-1/2 space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Why Choose Plug & Go?
              </h3>
              <p className="text-muted-foreground mb-8">
                We deliver premium experiences through attention to detail, 
                professional service, and an unwavering commitment to luxury.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Fully Insured</h4>
                <p className="text-sm text-muted-foreground">
                  Comprehensive coverage for complete peace of mind during your journey.
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6">
                <Clock className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-semibold text-foreground mb-2">24/7 Support</h4>
                <p className="text-sm text-muted-foreground">
                  Round-the-clock assistance whenever you need help or have questions.
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6">
                <Star className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Premium Quality</h4>
                <p className="text-sm text-muted-foreground">
                  Meticulously maintained vehicles that meet the highest luxury standards.
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6">
                <Users className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Professional Team</h4>
                <p className="text-sm text-muted-foreground">
                  Experienced chauffeurs and staff dedicated to exceptional service.
                </p>
              </div>
            </div>

            <div className="bg-gradient-card border border-primary/20 rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-3">Quick Booking Process</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                  <div>Fill out the booking form with your preferences and requirements</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                  <div>Receive instant confirmation and pricing details</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                  <div>Enjoy your premium luxury experience with Plug & Go</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;