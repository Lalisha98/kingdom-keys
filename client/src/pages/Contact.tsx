import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@kingdomkeys.co.za",
    href: "mailto:info@kingdomkeys.co.za",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+27 (0) 00 000 0000",
    href: "tel:+27000000000",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Cape Town & Surrounds",
  },
];

const businessHours = [
  { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

const serviceAreas = [
  "Atlantic Seaboard",
  "City Bowl",
  "Southern Suburbs",
  "Constantia",
  "Camps Bay",
  "Clifton",
  "Hout Bay",
  "Franschhoek",
  "Stellenbosch",
];

export default function Contact() {
  return (
    <main className="pt-20">
      <section className="relative py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6">Contact Us</Badge>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed">
              Ready for yachting-standard cleaning? Request a quote or reach out with any questions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="font-medium text-foreground hover:text-primary transition-colors"
                              data-testid={`link-contact-${item.label.toLowerCase()}`}
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="font-medium text-foreground">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-primary" />
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      Business Hours
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {businessHours.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-muted-foreground text-sm">{item.day}</span>
                        <span className="text-foreground font-medium text-sm">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                    Service Areas
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    We proudly serve these areas in the Western Cape:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {serviceAreas.map((area, index) => (
                      <span
                        key={index}
                        className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Have Questions First?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Check out our FAQ section for answers to common questions about our services, 
              pricing, and booking process.
            </p>
            <Link href="/faqs" className="text-primary hover:underline font-medium" data-testid="link-contact-faqs">
              View Frequently Asked Questions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
