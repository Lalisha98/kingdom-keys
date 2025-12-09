import TestimonialCard from "../TestimonialCard";

export default function TestimonialCardExample() {
  return (
    <div className="max-w-md">
      <TestimonialCard
        name="Sarah Mitchell"
        location="Sandton, Johannesburg"
        rating={5}
        testimonial="The attention to detail is extraordinary. Having spent time on luxury yachts, I recognize true precision cleaning when I see it. Kingdom Keys delivers exactly that standard."
        service="Deep Clean"
      />
    </div>
  );
}
