import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";
import logoImage from "@assets/Kingdom_Keys_Logo-Final_(High-Quality)_1765263821751.jpg";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/training", label: "Training" },
    { href: "/bookings", label: "Book Now" },
  ],
  resources: [
    { href: "/reviews", label: "Client Reviews" },
    { href: "/faqs", label: "FAQs" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/privacy", label: "Privacy Policy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4" data-testid="link-footer-logo">
              <img src={logoImage} alt="Kingdom Keys Cleaning" className="h-12 w-12 rounded-full object-cover" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg leading-tight">Kingdom Keys</span>
                <span className="text-xs text-muted-foreground tracking-wider uppercase">Cleaning</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mt-4">
              Bringing yachting-standard precision and excellence to luxury deep cleaning services across South Africa.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@kingdomkeys.co.za" className="hover:text-foreground transition-colors" data-testid="link-footer-email">
                  info@kingdomkeys.co.za
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+27761638193" className="hover:text-foreground transition-colors" data-testid="link-footer-phone">
                  +27 (76) 163-8193
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Pretoria & Johannesburg, South Africa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            2024 Kingdom Keys Cleaning. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            www.kingdomkeys.co.za
          </p>
        </div>
      </div>
    </footer>
  );
}
