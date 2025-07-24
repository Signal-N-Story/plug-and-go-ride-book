import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

interface BookingFormProps {
  type: "rental" | "chauffeur";
}

const BookingForm = ({ type }: BookingFormProps) => {
  const title = type === "rental" ? "Rent a Vehicle" : "Book Chauffeur Service";
  const description = type === "rental" 
    ? "Select your preferred vehicle and rental period"
    : "Professional chauffeur service for your luxury experience";

  return (
    <Card className="w-full max-w-md bg-gradient-card border-primary/20 shadow-luxury">
      <CardHeader className="text-center">
        <CardTitle className="text-xl text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="pickup-location" className="text-foreground">
            <MapPin className="w-4 h-4 inline mr-2" />
            Pickup Location
          </Label>
          <Input 
            id="pickup-location" 
            placeholder="Enter pickup address" 
            className="bg-background/50 border-primary/20"
          />
        </div>

        {type === "rental" && (
          <div className="space-y-2">
            <Label htmlFor="dropoff-location" className="text-foreground">
              <MapPin className="w-4 h-4 inline mr-2" />
              Drop-off Location
            </Label>
            <Input 
              id="dropoff-location" 
              placeholder="Enter drop-off address" 
              className="bg-background/50 border-primary/20"
            />
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="pickup-date" className="text-foreground">
              <Calendar className="w-4 h-4 inline mr-2" />
              {type === "rental" ? "Pickup Date" : "Service Date"}
            </Label>
            <Input 
              id="pickup-date" 
              type="date" 
              className="bg-background/50 border-primary/20"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="pickup-time" className="text-foreground">
              <Clock className="w-4 h-4 inline mr-2" />
              Time
            </Label>
            <Input 
              id="pickup-time" 
              type="time" 
              className="bg-background/50 border-primary/20"
            />
          </div>
        </div>

        {type === "rental" && (
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="return-date" className="text-foreground">Return Date</Label>
              <Input 
                id="return-date" 
                type="date" 
                className="bg-background/50 border-primary/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="return-time" className="text-foreground">Return Time</Label>
              <Input 
                id="return-time" 
                type="time" 
                className="bg-background/50 border-primary/20"
              />
            </div>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="passengers" className="text-foreground">
            <Users className="w-4 h-4 inline mr-2" />
            Passengers
          </Label>
          <Select>
            <SelectTrigger className="bg-background/50 border-primary/20">
              <SelectValue placeholder="Number of passengers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Passenger</SelectItem>
              <SelectItem value="2">2 Passengers</SelectItem>
              <SelectItem value="3">3 Passengers</SelectItem>
              <SelectItem value="4">4 Passengers</SelectItem>
              <SelectItem value="5">5+ Passengers</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="vehicle-type" className="text-foreground">Vehicle Preference</Label>
          <Select>
            <SelectTrigger className="bg-background/50 border-primary/20">
              <SelectValue placeholder="Select vehicle type" />
            </SelectTrigger>
            <SelectContent>
              {type === "rental" ? (
                <>
                  <SelectItem value="luxury-sedan">Luxury Sedan</SelectItem>
                  <SelectItem value="luxury-suv">Luxury SUV</SelectItem>
                  <SelectItem value="sports-car">Sports Car</SelectItem>
                  <SelectItem value="electric">Electric Vehicle</SelectItem>
                </>
              ) : (
                <>
                  <SelectItem value="rolls-royce">Rolls-Royce</SelectItem>
                  <SelectItem value="bentley">Bentley</SelectItem>
                  <SelectItem value="maybach">Mercedes-Maybach</SelectItem>
                </>
              )}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="special-requests" className="text-foreground">Special Requests</Label>
          <Textarea 
            id="special-requests"
            placeholder="Any special requirements or preferences..."
            className="bg-background/50 border-primary/20 min-h-[80px]"
          />
        </div>

        <Button variant="luxury" size="lg" className="w-full">
          {type === "rental" ? "Check Availability" : "Request Chauffeur"}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          * All bookings are subject to availability and terms of service
        </p>
      </CardContent>
    </Card>
  );
};

export default BookingForm;