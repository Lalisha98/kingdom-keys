import { Badge } from "@/components/ui/badge";

export default function Privacy() {
  return (
    <main className="pt-20">
      <section className="relative py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6">Legal</Badge>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 prose prose-lg dark:prose-invert max-w-none">
          <h2 className="font-serif">1. Introduction</h2>
          <p className="text-muted-foreground">
            Kingdom Keys Cleaning (Pty) Ltd ("Kingdom Keys," "we," "us," or "our") is committed 
            to protecting your privacy and personal information. This Privacy Policy explains 
            how we collect, use, disclose, and safeguard your information when you use our 
            services or visit our website at www.kingdomkeys.co.za.
          </p>
          <p className="text-muted-foreground">
            We comply with the Protection of Personal Information Act (POPIA) and other 
            applicable South African data protection regulations.
          </p>

          <h2 className="font-serif">2. Information We Collect</h2>
          <p className="text-muted-foreground">
            We may collect the following types of personal information:
          </p>
          <ul className="text-muted-foreground">
            <li><strong>Contact Information:</strong> Name, email address, phone number, physical address</li>
            <li><strong>Property Information:</strong> Property size, type, and specific cleaning requirements</li>
            <li><strong>Payment Information:</strong> Banking details for payment processing</li>
            <li><strong>Communication Records:</strong> Correspondence between you and Kingdom Keys</li>
            <li><strong>Website Usage Data:</strong> IP address, browser type, pages visited (via cookies)</li>
          </ul>

          <h2 className="font-serif">3. How We Use Your Information</h2>
          <p className="text-muted-foreground">
            We use your personal information for the following purposes:
          </p>
          <ul className="text-muted-foreground">
            <li>To provide, maintain, and improve our cleaning services</li>
            <li>To process bookings, quotes, and payments</li>
            <li>To communicate with you about appointments, updates, and promotions</li>
            <li>To respond to inquiries and provide customer support</li>
            <li>To comply with legal obligations</li>
            <li>To improve our website and user experience</li>
          </ul>

          <h2 className="font-serif">4. Information Sharing</h2>
          <p className="text-muted-foreground">
            We do not sell, trade, or rent your personal information to third parties. We may 
            share your information only in the following circumstances:
          </p>
          <ul className="text-muted-foreground">
            <li><strong>Service Providers:</strong> With trusted third parties who assist in our operations (e.g., payment processors)</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            <li><strong>Business Transfers:</strong> In connection with any merger, acquisition, or sale of assets</li>
          </ul>

          <h2 className="font-serif">5. Data Security</h2>
          <p className="text-muted-foreground">
            We implement appropriate technical and organizational measures to protect your 
            personal information against unauthorized access, alteration, disclosure, or 
            destruction. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="font-serif">6. Data Retention</h2>
          <p className="text-muted-foreground">
            We retain your personal information only for as long as necessary to fulfill the 
            purposes for which it was collected, including to satisfy legal, accounting, or 
            reporting requirements. Financial records are retained for seven years as required 
            by South African law.
          </p>

          <h2 className="font-serif">7. Your Rights</h2>
          <p className="text-muted-foreground">
            Under POPIA, you have the right to:
          </p>
          <ul className="text-muted-foreground">
            <li>Access your personal information held by us</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information (subject to legal retention requirements)</li>
            <li>Object to the processing of your information</li>
            <li>Withdraw consent for marketing communications</li>
            <li>Lodge a complaint with the Information Regulator</li>
          </ul>

          <h2 className="font-serif">8. Cookies</h2>
          <p className="text-muted-foreground">
            Our website may use cookies to enhance your browsing experience. You can choose 
            to disable cookies through your browser settings, though this may affect certain 
            website functionality.
          </p>

          <h2 className="font-serif">9. Children's Privacy</h2>
          <p className="text-muted-foreground">
            Our services are not directed to individuals under 18. We do not knowingly collect 
            personal information from children.
          </p>

          <h2 className="font-serif">10. Changes to This Policy</h2>
          <p className="text-muted-foreground">
            We may update this Privacy Policy from time to time. Any changes will be posted 
            on this page with an updated revision date.
          </p>

          <h2 className="font-serif">11. Contact Us</h2>
          <p className="text-muted-foreground">
            For privacy-related inquiries or to exercise your rights, please contact:
          </p>
          <p className="text-muted-foreground">
            Kingdom Keys Cleaning (Pty) Ltd<br />
            Information Officer<br />
            Email: info@kngdomkeys.co.za<br />
            Website: www.kingdomkeys.co.za
          </p>
        </div>
      </section>
    </main>
  );
}
