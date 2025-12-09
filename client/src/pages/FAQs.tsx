import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import FAQAccordion from "@/components/FAQAccordion";
import { ArrowRight, MessageCircle } from "lucide-react";

// todo: remove mock functionality
const faqCategories = [
  {
    title: "About Our Services",
    items: [
      {
        question: "What makes Kingdom Keys different from other cleaning services?",
        answer: "Our founder brings extensive yachting experience to every project. We apply the same meticulous standards used on luxury yachts—where every surface must be perfect—to your home. This means deeper cleaning, better attention to detail, and a level of precision that other services simply don't offer. We use marine-grade products, systematic approaches, and white-glove inspection standards.",
      },
      {
        question: "What areas in South Africa do you serve?",
        answer: "We serve Pretoria and Johannesburg, including areas such as Sandton, Bryanston, Fourways, Rosebank, Waterfall, Midrand, Waterkloof, Brooklyn, Menlyn, and Centurion. Contact us to confirm service availability in your specific area.",
      },
      {
        question: "What services do you offer?",
        answer: "We offer comprehensive residential deep cleaning, move-in/move-out cleaning, regular maintenance cleaning (weekly, bi-weekly, monthly), post-construction cleaning, specialized treatments for marble, upholstery, and delicate surfaces, and professional training for domestic cleaners. Each service is delivered with our signature yacht-standard approach.",
      },
      {
        question: "Do you bring your own cleaning products and equipment?",
        answer: "Yes, we bring everything needed for the job. We use premium, marine-grade cleaning products that are effective yet safe for luxury finishes. If you have specific product preferences or sensitivities, please let us know and we'll accommodate your needs.",
      },
    ],
  },
  {
    title: "Booking & Pricing",
    items: [
      {
        question: "How do you price your services?",
        answer: "We provide customized quotes based on your property size, current condition, specific requirements, and service frequency. After an initial consultation (in-person or virtual), we'll provide a detailed breakdown of costs with no hidden fees. Our pricing reflects the premium quality and yacht-standard service you'll receive.",
      },
      {
        question: "How far in advance should I book?",
        answer: "We recommend booking at least 48-72 hours in advance for regular services. For deep cleaning, move-in/out cleaning, or post-construction services, we suggest 5-7 days notice to ensure proper scheduling. For regular maintenance clients, we offer priority booking.",
      },
      {
        question: "Do you offer recurring service packages?",
        answer: "Yes, we offer flexible recurring service packages including weekly, bi-weekly, and monthly options. Regular clients enjoy priority scheduling, consistent team assignment, and preferential rates. We can customize a maintenance plan that suits your lifestyle and budget.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept EFT/bank transfer, credit cards, and Zapper. Payment terms vary by service type—please discuss this during your consultation. Regular maintenance clients can set up convenient monthly billing.",
      },
    ],
  },
  {
    title: "Service Details",
    items: [
      {
        question: "How long does a deep cleaning take?",
        answer: "Deep cleaning duration varies based on property size and condition. A typical 3-bedroom home takes 4-6 hours with our team. We focus on quality over speed—we won't leave until everything meets our yacht-standard inspection criteria.",
      },
      {
        question: "Can I be home during the cleaning?",
        answer: "Absolutely. Many clients prefer to be present, especially for first-time services. Others prefer to provide access and return to a pristine home. We're flexible and will work with whatever arrangement suits you best.",
      },
      {
        question: "Are your team members vetted and trained?",
        answer: "Every team member undergoes thorough background checks and is trained in our yacht-standard methods before working in clients' homes. We invest significantly in training to ensure consistent, exceptional service. Our team is fully insured for your peace of mind.",
      },
      {
        question: "What if I'm not satisfied with the cleaning?",
        answer: "Your satisfaction is paramount. If anything doesn't meet your expectations, contact us within 24 hours and we'll return to address any concerns at no additional cost. We stand behind our yacht-standard promise.",
      },
    ],
  },
];

export default function FAQs() {
  return (
    <main className="pt-20">
      <section className="relative py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6">FAQs</Badge>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed">
              Find answers to common questions about our yachting-standard cleaning services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          {faqCategories.map((category, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                {category.title}
              </h2>
              <FAQAccordion items={category.items} />
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We're here to help. Contact our team directly and we'll be happy to answer 
              any questions about our services.
            </p>
            <Link href="/contact">
              <Button size="lg" data-testid="button-faq-contact">
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
