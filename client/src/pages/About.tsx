import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Anchor, Award, Users, Clock, CheckCircle, Shield, Sparkles } from "lucide-react";
import heroImage from "@assets/generated_images/deep_cleaning_service_kitchen.png";
import founderImage from "@assets/IMG_0978_1765266689457.jpeg";

const credentials = [
  { icon: Anchor, label: "Yacht-Trained", value: "Maritime Excellence" },
  { icon: Award, label: "Experience", value: "5+ Years" },
  { icon: Shield, label: "Fully Insured", value: "Complete Coverage" },
  { icon: Clock, label: "Response Time", value: "Within 24 Hours" },
];

const values = [
  {
    title: "Precision",
    description: "Every task is approached with the same precision required on luxury vessels—where every detail matters and nothing is overlooked.",
  },
  {
    title: "Excellence",
    description: "We set the bar high and consistently exceed it. Our standards are drawn from the world's finest yachts.",
  },
  {
    title: "Integrity",
    description: "Trust is earned. We treat every home with respect, maintaining the highest ethical standards in all we do.",
  },
  {
    title: "Attention to Detail",
    description: "From hidden corners to high-touch surfaces, we notice what others miss and address it with care.",
  },
];

export default function About() {
  return (
    <main className="pt-20">
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <Badge className="mb-6 bg-white/10 text-white border-0">About Us</Badge>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              The Story Behind the Standard
            </h1>
            <p className="text-white/80 text-lg lg:text-xl leading-relaxed">
              Bringing maritime precision and excellence to luxury homes across South Africa.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <img
                src={founderImage}
                alt="Kingdom Keys Cleaning Founder"
                className="rounded-lg w-full max-w-md mx-auto"
              />
            </div>
            <div>
              <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4 font-medium">Meet the Founder</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Lalisha Kloppers, CEO & Founder
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Kingdom Keys Cleaning was born from a simple realization: the meticulous cleaning 
                standards maintained on luxury yachts could transform how we care for homes.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                After years of working aboard superyachts, where every brass fitting must gleam 
                and every surface must be immaculate, Lalisha brought those exact standards 
                to South Africa's residential cleaning industry.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Today, Kingdom Keys Cleaning serves discerning clients in Pretoria and Johannesburg 
                who understand that true cleanliness isn't just about appearance—it's about the 
                precision, technique, and care that goes into every service.
              </p>
              <Link href="/contact">
                <Button data-testid="button-about-contact">
                  Work With Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((cred, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6 pb-4 px-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <cred.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-serif text-xl font-bold text-foreground mb-1">{cred.value}</div>
                  <div className="text-muted-foreground text-sm">{cred.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4 font-medium">Our Values</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What We Stand For
            </h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide every service we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4 font-medium">The Yacht Standard</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What Makes Yacht Cleaning Different
            </h2>
            <p className="text-muted-foreground text-lg">
              The maritime industry demands perfection. Here's how we bring that to your home.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">White Glove Inspection</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Every surface is checked to the same standard used by yacht captains—if it 
                  doesn't pass the white glove test, we're not done.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Premium Products</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We use only marine-grade and luxury cleaning products—the same formulations 
                  trusted to maintain multi-million dollar vessels.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Systematic Approach</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our methods follow structured protocols developed over years of yacht 
                  maintenance—nothing is left to chance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Experience the Kingdom Keys Difference
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Ready to experience cleaning that meets the highest maritime standards?
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" data-testid="button-about-cta">
              Get Your Quote Today
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
