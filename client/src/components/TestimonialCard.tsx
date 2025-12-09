import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  testimonial: string;
  service: string;
  avatar?: string;
}

export default function TestimonialCard({
  name,
  location,
  rating,
  testimonial,
  service,
  avatar,
}: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? "text-yellow-500 fill-yellow-500" : "text-muted"
              }`}
            />
          ))}
        </div>
        <blockquote className="text-foreground leading-relaxed flex-1 mb-6">
          "{testimonial}"
        </blockquote>
        <div className="flex items-center gap-3 pt-4 border-t border-border">
          <Avatar>
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="bg-primary/10 text-primary font-medium">
              {name.split(" ").map((n) => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-foreground text-sm">{name}</p>
            <p className="text-muted-foreground text-xs">{location}</p>
          </div>
          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md">
            {service}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
