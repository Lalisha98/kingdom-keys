import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    propertySize: "",
    message: "",
  });

  const sendEnquiry = useMutation({
    mutationFn: async (data: typeof formData) => {
      const serviceLabels: Record<string, string> = {
        "deep-clean": "Deep Clean",
        "move-in-out": "Move In/Out Clean",
        "regular": "Regular Maintenance",
        "post-construction": "Post-Construction",
        "other": "Other",
      };
      const propertySizeLabels: Record<string, string> = {
        "apartment": "Apartment (1-2 bedrooms)",
        "house-small": "House (3-4 bedrooms)",
        "house-large": "Large House (5+ bedrooms)",
        "estate": "Estate / Mansion",
        "commercial": "Commercial Property",
      };
      
      const fullMessage = `${data.message}${data.propertySize ? `\n\nProperty Size: ${propertySizeLabels[data.propertySize] || data.propertySize}` : ''}`;
      
      return apiRequest("POST", "/api/contact", {
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: serviceLabels[data.service] || data.service,
        message: fullMessage,
      });
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Enquiry Sent",
        description: "We'll get back to you within 24 hours.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to Send",
        description: error.message || "Please try again later or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendEnquiry.mutate(formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-serif text-xl font-semibold mb-2">Thank You!</h3>
          <p className="text-muted-foreground">
            Your enquiry has been received. We'll contact you within 24 hours.
          </p>
          <Button
            variant="outline"
            className="mt-6"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                service: "",
                propertySize: "",
                message: "",
              });
            }}
            data-testid="button-submit-another"
          >
            Submit Another Enquiry
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif">Request a Quote</CardTitle>
        <CardDescription>
          Tell us about your property and cleaning needs
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
                data-testid="input-name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
                data-testid="input-email"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+27 00 000 0000"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                data-testid="input-phone"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="service">Service Required</Label>
              <Select
                value={formData.service}
                onValueChange={(value) => handleChange("service", value)}
              >
                <SelectTrigger data-testid="select-service">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="deep-clean">Deep Clean</SelectItem>
                  <SelectItem value="move-in-out">Move In/Out Clean</SelectItem>
                  <SelectItem value="regular">Regular Maintenance</SelectItem>
                  <SelectItem value="post-construction">Post-Construction</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="propertySize">Property Size</Label>
            <Select
              value={formData.propertySize}
              onValueChange={(value) => handleChange("propertySize", value)}
            >
              <SelectTrigger data-testid="select-property-size">
                <SelectValue placeholder="Select property size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apartment">Apartment (1-2 bedrooms)</SelectItem>
                <SelectItem value="house-small">House (3-4 bedrooms)</SelectItem>
                <SelectItem value="house-large">Large House (5+ bedrooms)</SelectItem>
                <SelectItem value="estate">Estate / Mansion</SelectItem>
                <SelectItem value="commercial">Commercial Property</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Details</Label>
            <Textarea
              id="message"
              placeholder="Tell us more about your cleaning requirements..."
              rows={4}
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              data-testid="input-message"
            />
          </div>

          <Button type="submit" className="w-full" disabled={sendEnquiry.isPending} data-testid="button-submit-form">
            {sendEnquiry.isPending ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Enquiry
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
