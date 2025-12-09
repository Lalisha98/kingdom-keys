import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Award, Shield } from "lucide-react";
import heroImage from "@assets/generated_images/luxury_yacht_interior_hero.png";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/80 text-sm uppercase tracking-[0.3em] mb-6 font-medium">
            Yachting-Standard Excellence
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
            Precision Deep Cleaning
            <span className="block mt-2 text-white/90">For Luxury Homes</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Experience the meticulous standards of yacht maintenance brought to your home. 
            Every detail perfected, every surface pristine.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/contact">
              <Button size="lg" className="backdrop-blur-md bg-white text-black hover:bg-white/90 border-0 px-8" data-testid="button-hero-quote">
                Request a Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="backdrop-blur-md bg-white/10 text-white border-white/30 hover:bg-white/20" data-testid="button-hero-services">
                Explore Services
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Yacht-Trained Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Premium Products</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Trusted by Discerning Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
