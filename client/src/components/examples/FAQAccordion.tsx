import FAQAccordion from "../FAQAccordion";

// todo: remove mock functionality
const mockFAQs = [
  {
    question: "What makes Kingdom Keys different from other cleaning services?",
    answer: "Our founder brings extensive yachting experience to every project. We apply the same meticulous standards used on luxury yachts—where every surface must be perfect—to your home. This means deeper cleaning, better attention to detail, and a level of precision that other services simply don't offer.",
  },
  {
    question: "How do you price your services?",
    answer: "We provide customized quotes based on your property size, condition, and specific requirements. After an initial consultation, we'll provide a detailed breakdown of costs with no hidden fees.",
  },
  {
    question: "What areas in South Africa do you serve?",
    answer: "We currently serve the greater Cape Town area, including the Atlantic Seaboard, Southern Suburbs, and surrounding regions. Contact us to confirm service availability in your area.",
  },
];

export default function FAQAccordionExample() {
  return (
    <div className="max-w-2xl">
      <FAQAccordion items={mockFAQs} />
    </div>
  );
}
