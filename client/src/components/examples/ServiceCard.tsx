import ServiceCard from "../ServiceCard";
import { Sparkles } from "lucide-react";
import bathroomImage from "@assets/generated_images/luxury_bathroom_cleaning.png";

export default function ServiceCardExample() {
  return (
    <div className="max-w-md">
      <ServiceCard
        title="Deep Bathroom Cleaning"
        description="Meticulous attention to every tile, fixture, and surface. We bring yacht-level precision to your bathroom spaces."
        features={[
          "Grout and tile restoration",
          "Chrome polishing to mirror finish",
          "Mold and mildew treatment",
        ]}
        icon={Sparkles}
        image={bathroomImage}
        yachtStandard="Yacht Standard"
      />
    </div>
  );
}
