import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Hero from "@/components/Hero";
import TestimonialCard from "@/components/TestimonialCard";
import { ArrowRight, Anchor, Sparkles, Shield, Clock, Award, CheckCircle } from "lucide-react";
import kitchenImage from "@assets/generated_images/deep_cleaning_service_kitchen.png";
import livingRoomImage from "@assets/generated_images/luxury_living_room_clean.png";

// todo: remove mock functionality
const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Sandton, Johannesburg",
    rating: 5,
    testimonial: "The attention to detail is extraordinary. Having spent time on luxury yachts, I recognize true precision cleaning when I see it. Kingdom Keys delivers exactly that standard.",
    service: "Deep Clean",
  },
  {
    name: "James van der Berg",
    location: "Waterkloof, Pretoria",
    rating: 5,
    testimonial: "After trying several cleaning services, Kingdom Keys stands apart. Their yacht-trained approach shows in every corner of my home. Absolutely impeccable.",
    service: "Move-In Clean",
  },
  {
    name: "Amanda Nkosi",
    location: "Bryanston, Johannesburg",
    rating: 5,
    testimonial: "Professional, thorough, and trustworthy. They treat our home with the same care as a luxury vessel. We won't use anyone else.",
    service: "Regular Service",
  },
];

const features = [
  {
    icon: Anchor,
    title: "Yachting Excellence",
    description: "Standards developed from years of maintaining pristine luxury vessels",
  },
  {
    icon: Sparkles,
    title: "Precision Detail",
    description: "Every surface, corner, and fixture receives meticulous attention",
  },
  {
    icon: Shield,
    title: "Trusted Service",
    description: "Fully vetted team members you can trust in your home",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4 font-medium">Why Choose Us</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              The Yacht Standard Difference
            </h2>
            <p className="text-muted-foreground text-lg">
              We bring the exacting standards of maritime excellence to every home we service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4 font-medium">Our Services</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Luxury Deep Cleaning
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                From comprehensive deep cleans to regular maintenance, we offer a full range of services 
                tailored to the needs of luxury properties. Every service is delivered with the precision 
                and care of yacht maintenance.
              </p>
              <ul className="space-y-4 mb-8">
                {["Deep Cleaning", "Move In/Out Cleans", "Regular Maintenance", "Post-Construction Cleaning"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/services">
                <Button data-testid="button-view-services">
                  View All Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src={kitchenImage}
                alt="Pristine luxury kitchen after deep cleaning"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={livingRoomImage}
                alt="Immaculate luxury living room"
                className="rounded-lg w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4 font-medium">Our Story</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                From Yachts to Your Home
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                With years of experience maintaining luxury yachts to the highest standards, 
                we understood that homes deserve the same level of care and precision.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Kingdom Keys Cleaning was founded on the principle that every space—whether a 
                superyacht or a family home—deserves meticulous, detail-oriented cleaning that 
                leaves nothing to chance.
              </p>
              <Link href="/about">
                <Button variant="outline" data-testid="button-learn-more">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4 font-medium">Testimonials</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground text-lg">
              Trusted by South Africa's most discerning homeowners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/reviews">
              <Button variant="outline" data-testid="button-all-reviews">
                Read All Reviews
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Ready for Yachting-Standard Cleaning?
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                Experience the difference that precision and attention to detail can make. 
                Request your personalized quote today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90" data-testid="button-cta-quote">
                    Request a Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/faqs">
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" data-testid="button-cta-faqs">
                    View FAQs
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">5+</div>
                <div className="text-primary-foreground/70 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">100%</div>
                <div className="text-primary-foreground/70 text-sm">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">24h</div>
                <div className="text-primary-foreground/70 text-sm">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
