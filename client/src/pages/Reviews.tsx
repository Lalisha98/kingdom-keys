import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import TestimonialCard from "@/components/TestimonialCard";
import { ArrowRight, Star } from "lucide-react";

// todo: remove mock functionality
const reviews = [
  {
    name: "Sarah Mitchell",
    location: "Sandton, Johannesburg",
    rating: 5,
    testimonial: "The attention to detail is extraordinary. Having spent time on luxury yachts, I recognize true precision cleaning when I see it. Kingdom Keys delivers exactly that standard. Every corner, every surface—immaculate.",
    service: "Deep Clean",
  },
  {
    name: "James van der Berg",
    location: "Waterkloof, Pretoria",
    rating: 4,
    testimonial: "After trying several cleaning services, Kingdom Keys stands apart. Their yacht-trained approach shows in every corner of my home. The team is professional, thorough, and treats our home with genuine care.",
    service: "Move-In Clean",
  },
  {
    name: "Amanda Nkosi",
    location: "Bryanston, Johannesburg",
    rating: 5,
    testimonial: "Professional, thorough, and trustworthy. They treat our home with the same care as a luxury vessel. We won't use anyone else. It's rare to find this level of service.",
    service: "Regular Service",
  },
  {
    name: "Michael Thompson",
    location: "Menlyn, Pretoria",
    rating: 4,
    testimonial: "We had our new build cleaned before moving in and the results were outstanding. Every window sparkled, every fixture gleamed. Kingdom Keys understood exactly what we needed.",
    service: "Post-Construction",
  },
  {
    name: "Lisa Botha",
    location: "Rosebank, Johannesburg",
    rating: 5,
    testimonial: "The regular maintenance service has transformed how our home feels. It's consistently pristine without us having to think about it. The team remembers our preferences and standards.",
    service: "Regular Service",
  },
  {
    name: "David Chen",
    location: "Brooklyn, Pretoria",
    rating: 5,
    testimonial: "As someone who owns a yacht, I can genuinely say that Kingdom Keys brings that same standard to my home. The attention to brass fittings, the streak-free windows, the pristine surfaces—it's all there.",
    service: "Deep Clean",
  },
  {
    name: "Nomsa Dlamini",
    location: "Waterfall Estate, Midrand",
    rating: 4,
    testimonial: "Moving into our new home was stressful enough. Kingdom Keys took the cleaning completely off our plate and delivered beyond expectations. Professional, efficient, and exceptional.",
    service: "Move-In Clean",
  },
  {
    name: "Richard Meyer",
    location: "Fourways, Johannesburg",
    rating: 5,
    testimonial: "I've had cleaning services for years, but none compare to Kingdom Keys. The yacht-standard approach isn't just marketing—you can see and feel the difference in every detail.",
    service: "Deep Clean",
  },
  {
    name: "Catherine Williams",
    location: "Centurion, Pretoria",
    rating: 4,
    testimonial: "Our marble floors and delicate fixtures needed special care. Kingdom Keys not only understood but exceeded our expectations. They use the right products and techniques for luxury finishes.",
    service: "Specialized Treatment",
  },
];

export default function Reviews() {
  const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  return (
    <main className="pt-20">
      <section className="relative py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6">Client Reviews</Badge>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed mb-8">
              Don't just take our word for it. Hear from South Africa's most discerning 
              homeowners about their experience with Kingdom Keys Cleaning.
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => {
                  const fillClass =
                    i + 1 <= Math.floor(averageRating)
                      ? "text-yellow-500 fill-yellow-500"
                      : i < averageRating
                      ? "text-yellow-500 fill-yellow-300"
                      : "text-muted-foreground";
                  return <Star key={i} className={`w-6 h-6 ${fillClass}`} />;
                })}
              </div>
              <span className="text-foreground font-semibold">{averageRating.toFixed(1)}</span>
              <span className="text-muted-foreground">from {reviews.length} reviews</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <TestimonialCard key={index} {...review} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Join Our Satisfied Clients
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Experience the yachting-standard difference for yourself. Request your quote today.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" data-testid="button-reviews-cta">
              Request a Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
