import { Badge } from "@/components/ui/badge";

export default function Terms() {
  return (
    <main className="pt-20">
      <section className="relative py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6">Legal</Badge>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Terms & Conditions
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 prose prose-lg dark:prose-invert max-w-none">
          <h2 className="font-serif">1. Agreement to Terms</h2>
          <p className="text-muted-foreground">
            By engaging Kingdom Keys Cleaning (Pty) Ltd ("Kingdom Keys," "we," "us," or "our") for 
            any cleaning services, you ("Client," "you," or "your") agree to be bound by these Terms 
            and Conditions. These terms govern all services provided by Kingdom Keys Cleaning.
          </p>

          <h2 className="font-serif">2. Services</h2>
          <p className="text-muted-foreground">
            Kingdom Keys Cleaning provides professional cleaning services including but not limited to:
          </p>
          <ul className="text-muted-foreground">
            <li>Deep cleaning services</li>
            <li>Move-in and move-out cleaning</li>
            <li>Regular maintenance cleaning</li>
            <li>Post-construction cleaning</li>
            <li>Commercial property cleaning</li>
            <li>Specialized surface treatments</li>
          </ul>
          <p className="text-muted-foreground">
            All services are performed according to our yachting-standard methodology and 
            quality specifications as discussed during the consultation process.
          </p>

          <h2 className="font-serif">3. Bookings and Scheduling</h2>
          <p className="text-muted-foreground">
            Bookings are confirmed upon receipt of a signed quote or written confirmation. We 
            require at least 48 hours' notice for cancellations or rescheduling. Cancellations 
            made less than 24 hours before the scheduled service may incur a cancellation fee 
            of up to 50% of the quoted amount.
          </p>

          <h2 className="font-serif">4. Pricing and Payment</h2>
          <p className="text-muted-foreground">
            Prices are quoted in South African Rand (ZAR) and are based on property size, 
            condition, and service requirements. Quotes are valid for 30 days from the date 
            of issue. Payment is due as per the agreed terms on your invoice—typically upon 
            completion for one-time services or monthly for regular maintenance clients.
          </p>

          <h2 className="font-serif">5. Access and Property</h2>
          <p className="text-muted-foreground">
            You are responsible for providing safe and reasonable access to your property at 
            the agreed time. Please ensure that valuable, fragile, or irreplaceable items are 
            secured. While we exercise utmost care, we recommend informing us of any special 
            handling requirements.
          </p>

          <h2 className="font-serif">6. Liability and Insurance</h2>
          <p className="text-muted-foreground">
            Kingdom Keys Cleaning maintains comprehensive liability insurance. Any damage must 
            be reported within 24 hours of service completion. Our liability is limited to the 
            cost of repair or replacement at current market value, subject to policy limits. 
            We are not liable for pre-existing damage, normal wear and tear, or damage resulting 
            from client negligence.
          </p>

          <h2 className="font-serif">7. Satisfaction Guarantee</h2>
          <p className="text-muted-foreground">
            We stand behind our yacht-standard quality promise. If you are not satisfied with 
            any aspect of our service, please contact us within 24 hours and we will return to 
            address your concerns at no additional charge. This guarantee does not apply to 
            unreasonable expectations or issues caused by factors outside our control.
          </p>

          <h2 className="font-serif">8. Confidentiality</h2>
          <p className="text-muted-foreground">
            We respect your privacy. Our team members are bound by confidentiality agreements 
            and will not disclose any information about your property or personal affairs to 
            third parties.
          </p>

          <h2 className="font-serif">9. Termination</h2>
          <p className="text-muted-foreground">
            Either party may terminate a regular service agreement with 14 days' written notice. 
            We reserve the right to refuse service or terminate agreements in cases of unsafe 
            working conditions, abusive behavior, or non-payment.
          </p>

          <h2 className="font-serif">10. Governing Law</h2>
          <p className="text-muted-foreground">
            These Terms and Conditions are governed by the laws of the Republic of South Africa. 
            Any disputes arising shall be subject to the jurisdiction of South African courts.
          </p>

          <h2 className="font-serif">11. Contact</h2>
          <p className="text-muted-foreground">
            For questions about these terms, please contact us at:
          </p>
          <p className="text-muted-foreground">
            Kingdom Keys Cleaning (Pty) Ltd<br />
            Email: info@kngdomkeys.co.za<br />
            Website: www.kingdomkeys.co.za
          </p>
        </div>
      </section>
    </main>
  );
}
