import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Phone, Mail, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const A2PSignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    smsConsent: false,
    termsConsent: false,
    privacyConsent: false
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.smsConsent || !formData.termsConsent || !formData.privacyConsent) {
      toast({
        title: "Consent Required",
        description: "Please agree to all required terms and consents.",
        variant: "destructive"
      });
      return;
    }

    // Handle form submission
    toast({
      title: "Registration Successful",
      description: "You've been added to our VIP notifications list!",
    });
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      smsConsent: false,
      termsConsent: false,
      privacyConsent: false
    });
  };

  return (
    <section id="signup" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-luxury">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-3xl text-foreground">VIP Notifications</CardTitle>
              <CardDescription className="text-lg">
                Get exclusive updates on luxury vehicle availability, special events, and premium offers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      required
                      className="bg-background/50 border-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      required
                      className="bg-background/50 border-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Mobile Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="(405) 555-0123"
                    required
                    className="bg-background/50 border-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your.email@example.com"
                    required
                    className="bg-background/50 border-primary/20"
                  />
                </div>

                {/* A2P Compliance Consents */}
                <div className="space-y-4 p-6 bg-muted/20 rounded-lg border border-primary/10">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-primary mt-0.5" />
                    <div className="text-sm text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">A2P 10DLC Compliance Notice:</strong> By providing your mobile number, 
                      you agree to receive text messages from Plug & Go regarding booking confirmations, service updates, 
                      and promotional offers. Message and data rates may apply.
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="smsConsent"
                        checked={formData.smsConsent}
                        onCheckedChange={(checked) => 
                          setFormData({...formData, smsConsent: checked as boolean})
                        }
                        className="mt-0.5"
                      />
                      <Label htmlFor="smsConsent" className="text-sm leading-relaxed">
                        I consent to receive SMS text messages from Plug & Go at the mobile number provided. 
                        I understand that consent is not required to purchase services and I can opt-out at any time 
                        by replying STOP. Msg frequency varies. Msg & data rates may apply.
                      </Label>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="termsConsent"
                        checked={formData.termsConsent}
                        onCheckedChange={(checked) => 
                          setFormData({...formData, termsConsent: checked as boolean})
                        }
                        className="mt-0.5"
                      />
                      <Label htmlFor="termsConsent" className="text-sm leading-relaxed">
                        I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and 
                        understand that Plug & Go will use my information to provide transportation services and 
                        related communications.
                      </Label>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="privacyConsent"
                        checked={formData.privacyConsent}
                        onCheckedChange={(checked) => 
                          setFormData({...formData, privacyConsent: checked as boolean})
                        }
                        className="mt-0.5"
                      />
                      <Label htmlFor="privacyConsent" className="text-sm leading-relaxed">
                        I acknowledge that I have read and accept the <a href="#" className="text-primary hover:underline">Privacy Policy</a> and 
                        consent to the collection and use of my personal information as described.
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <Button type="submit" variant="luxury" size="lg" className="w-full">
                    Join VIP Notifications
                  </Button>
                  <p className="text-xs text-muted-foreground mt-3">
                    Reply STOP to opt-out at any time. For help, reply HELP or call (405) 561-6021.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default A2PSignupForm;