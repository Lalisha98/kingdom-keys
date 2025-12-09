import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  image?: string;
  yachtStandard?: string;
}

export default function ServiceCard({
  title,
  description,
  features,
  icon: Icon,
  image,
  yachtStandard,
}: ServiceCardProps) {
  return (
    <Card className="overflow-hidden group">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {yachtStandard && (
            <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
              {yachtStandard}
            </Badge>
          )}
        </div>
      )}
      <CardHeader className="flex flex-row items-start gap-4 pb-2">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-serif font-semibold text-xl text-foreground">{title}</h3>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Link href="/contact">
          <Button variant="ghost" className="p-0 h-auto text-primary" data-testid={`button-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            Learn More
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
