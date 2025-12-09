import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ServiceCard from "@/components/ServiceCard";
import { ArrowRight, Sparkles, Home, Hammer, Calendar, RefreshCw } from "lucide-react";
import kitchenImage from "@assets/generated_images/deep_cleaning_service_kitchen.png";
import bathroomImage from "@assets/generated_images/luxury_bathroom_cleaning.png";
import livingRoomImage from "@assets/generated_images/luxury_living_room_clean.png";

// todo: remove mock functionality
const services = [
  {
    title: "Deep Cleaning",
    description: "Our signature service applies yacht-level precision to every room in your home. We reach where others don't, using marine-grade products and systematic techniques.",
    features: [
      "Comprehensive room-by-room cleaning",
      "Detailed fixture and surface treatment",
      "Hidden area attention (behind appliances, inside cabinets)",
      "White glove inspection standard",
    ],
    icon: Sparkles,
    image: kitchenImage,
    yachtStandard: "Flagship Service",
  },
  {
    title: "Move In/Out Cleaning",
    description: "Prepare your property for its next chapter. Our move-in/out service ensures every corner is pristine, whether you're welcoming new occupants or saying goodbye.",
    features: [
      "Empty property deep clean",
      "Appliance interior cleaning",
      "Window and frame detailing",
      "Wall spot treatment",
    ],
    icon: Home,
    image: livingRoomImage,
    yachtStandard: "Full Coverage",
  },
  {
    title: "Regular Maintenance",
    description: "Maintain the yacht standard year-round with scheduled maintenance cleaning. Flexible frequency to suit your lifestyle and property needs.",
    features: [
      "Weekly, bi-weekly, or monthly options",
      "Consistent team assignment",
      "Customized cleaning checklist",
      "Priority scheduling",
    ],
    icon: Calendar,
    yachtStandard: "Ongoing Care",
  },
  {
    title: "Post-Construction Cleaning",
    description: "New builds and renovations deserve a perfect reveal. Our post-construction service removes all traces of building work, leaving only pristine results.",
    features: [
      "Construction dust removal",
      "Surface protection residue cleaning",
      "Window and glass polishing",
      "Hardware and fixture detailing",
    ],
    icon: Hammer,
    image: bathroomImage,
    yachtStandard: "Reveal Ready",
  },
  {
    title: "Specialized Treatments",
    description: "From marble restoration to high-end fabric care, our specialized treatments address specific needs with expert techniques and premium products.",
    features: [
      "Stone and marble polishing",
      "Upholstery deep cleaning",
      "High-end fixture care",
      "Custom requests welcome",
    ],
    icon: RefreshCw,
  },
];

export default function Services() {
  return (
    <main className="pt-20">
      <section className="relative py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6">Our Services</Badge>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Yachting-Standard Cleaning Services
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed">
              From comprehensive deep cleans to specialized treatments, every service is delivered 
              with the precision and care of maritime excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4 font-medium">Custom Requirements</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Every Property is Unique
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We understand that luxury properties have specific needs. Our team will work with 
              you to create a customized cleaning plan that addresses your exact requirements, 
              from antique furniture care to specific product preferences.
            </p>
            <Link href="/contact">
              <Button size="lg" data-testid="button-custom-quote">
                Request a Custom Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Contact us today for a personalized consultation and quote tailored to your property.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" data-testid="button-services-cta">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
