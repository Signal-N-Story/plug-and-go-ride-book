import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Luggage, Zap, Star } from "lucide-react";

interface VehicleCardProps {
  id: string;
  name: string;
  category: string;
  image: string;
  price: string;
  features: string[];
  passengers: number;
  luggage: number;
  isElectric?: boolean;
  rating: number;
  type: "rental" | "chauffeur";
}

const VehicleCard = ({
  name,
  category,
  image,
  price,
  features,
  passengers,
  luggage,
  isElectric,
  rating,
  type
}: VehicleCardProps) => {
  return (
    <Card className="group hover:shadow-luxury transition-all duration-500 bg-gradient-card border-primary/10 overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4 flex gap-2">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
              <Star className="w-3 h-3 mr-1 fill-primary text-primary" />
              {rating}
            </Badge>
            {isElectric && (
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                <Zap className="w-3 h-3 mr-1" />
                Electric
              </Badge>
            )}
          </div>
          <div className="absolute top-4 left-4">
            <Badge className="bg-gradient-gold text-primary-foreground font-semibold">
              {category}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <CardTitle className="text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
          {name}
        </CardTitle>
        
        <div className="flex items-center gap-4 mb-4 text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span className="text-sm">{passengers}</span>
          </div>
          <div className="flex items-center gap-1">
            <Luggage className="w-4 h-4" />
            <span className="text-sm">{luggage}</span>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
              {feature}
            </div>
          ))}
        </div>

        <div className="text-2xl font-bold text-primary mb-4">
          {price}
          <span className="text-sm text-muted-foreground font-normal ml-1">
            {type === "rental" ? "/day" : "/hour"}
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button 
          variant="luxury" 
          size="lg" 
          className="w-full group-hover:shadow-gold"
        >
          {type === "rental" ? "Rent Now" : "Book Chauffeur"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VehicleCard;