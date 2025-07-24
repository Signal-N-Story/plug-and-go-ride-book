import VehicleCard from "@/components/VehicleCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car, Crown } from "lucide-react";

// Import vehicle images
import rentalSedan from "@/assets/rental-luxury-sedan.jpg";
import rentalSuv from "@/assets/rental-luxury-suv.jpg";
import rentalSports from "@/assets/rental-sports-car.jpg";
import rentalElectric from "@/assets/rental-electric-sedan.jpg";
import chauffeurRolls from "@/assets/chauffeur-rolls-royce.jpg";
import chauffeurBentley from "@/assets/chauffeur-bentley-suv.jpg";
import chauffeurMaybach from "@/assets/chauffeur-maybach.jpg";

const FleetSection = () => {
  const rentalVehicles = [
    {
      id: "rental-1",
      name: "BMW 7 Series",
      category: "Luxury Sedan",
      image: rentalSedan,
      price: "$299",
      features: ["Leather Interior", "Premium Sound", "Navigation", "Climate Control"],
      passengers: 5,
      luggage: 3,
      rating: 4.9,
      type: "rental" as const
    },
    {
      id: "rental-2",
      name: "Mercedes GLS 580",
      category: "Luxury SUV",
      image: rentalSuv,
      price: "$399",
      features: ["7 Seats", "Panoramic Roof", "Premium Audio", "All-Wheel Drive"],
      passengers: 7,
      luggage: 5,
      rating: 4.8,
      type: "rental" as const
    },
    {
      id: "rental-3",
      name: "Audi R8 Spyder",
      category: "Sports Car",
      image: rentalSports,
      price: "$899",
      features: ["V10 Engine", "Convertible", "Sport Seats", "Carbon Fiber"],
      passengers: 2,
      luggage: 1,
      rating: 5.0,
      type: "rental" as const
    },
    {
      id: "rental-4",
      name: "Tesla Model S Plaid",
      category: "Electric Luxury",
      image: rentalElectric,
      price: "$449",
      features: ["Autopilot", "Supercharging", "Premium Interior", "0-60 in 2.1s"],
      passengers: 5,
      luggage: 2,
      isElectric: true,
      rating: 4.9,
      type: "rental" as const
    }
  ];

  const chauffeurVehicles = [
    {
      id: "chauffeur-1",
      name: "Rolls-Royce Phantom",
      category: "Ultra Luxury",
      image: chauffeurRolls,
      price: "$299",
      features: ["Starlight Headliner", "Champagne Bar", "Privacy Glass", "Massage Seats"],
      passengers: 4,
      luggage: 3,
      rating: 5.0,
      type: "chauffeur" as const
    },
    {
      id: "chauffeur-2",
      name: "Bentley Bentayga",
      category: "Luxury SUV",
      image: chauffeurBentley,
      price: "$249",
      features: ["Premium Leather", "Rear Entertainment", "Panoramic Roof", "Fine Wood Trim"],
      passengers: 4,
      luggage: 4,
      rating: 4.9,
      type: "chauffeur" as const
    },
    {
      id: "chauffeur-3",
      name: "Mercedes-Maybach S680",
      category: "Executive Sedan",
      image: chauffeurMaybach,
      price: "$199",
      features: ["Executive Rear Seats", "Burmester Audio", "Ambient Lighting", "Refrigerator"],
      passengers: 4,
      luggage: 2,
      rating: 4.8,
      type: "chauffeur" as const
    }
  ];

  return (
    <section id="fleet" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Premium Fleet
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully curated collection of luxury vehicles, 
            each maintained to the highest standards of excellence.
          </p>
        </div>

        <Tabs defaultValue="rentals" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-card border border-primary/20">
            <TabsTrigger value="rentals" className="flex items-center gap-2">
              <Car className="w-4 h-4" />
              Car Rentals
            </TabsTrigger>
            <TabsTrigger value="chauffeur" className="flex items-center gap-2">
              <Crown className="w-4 h-4" />
              Chauffeur Service
            </TabsTrigger>
          </TabsList>

          <TabsContent value="rentals" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-foreground mb-2">Self-Drive Luxury</h3>
              <p className="text-muted-foreground">Experience the freedom of driving our premium vehicles</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {rentalVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} {...vehicle} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="chauffeur" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-foreground mb-2">Professional Chauffeur Service</h3>
              <p className="text-muted-foreground">Sit back and enjoy the ultimate luxury experience</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {chauffeurVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} {...vehicle} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Don't see what you're looking for? We have more vehicles available.
          </p>
          <Button variant="outline" size="lg">
            View Complete Fleet
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;