import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ArrowRight, GraduationCap, Award, CheckCircle, Clock, Users, Sparkles } from "lucide-react";

const trainingFormSchema = z.object({
  employerName: z.string().min(2, "Name must be at least 2 characters"),
  employerEmail: z.string().email("Please enter a valid email"),
  employerPhone: z.string().min(10, "Please enter a valid phone number"),
  cleanerName: z.string().min(2, "Cleaner name must be at least 2 characters"),
  trainingProgram: z.string().min(1, "Please select a training program"),
  message: z.string().optional(),
});

type TrainingFormData = z.infer<typeof trainingFormSchema>;

const trainingPrograms = [
  {
    title: "Foundation Training",
    duration: "1 Day",
    description: "Essential cleaning techniques, product knowledge, and professional conduct for domestic cleaners.",
    features: [
      "Proper cleaning product usage",
      "Surface-specific techniques",
      "Time management skills",
      "Professional etiquette",
    ],
    icon: GraduationCap,
  },
  {
    title: "Advanced Deep Clean",
    duration: "2 Days",
    description: "In-depth yacht-standard methods for thorough deep cleaning of luxury residences.",
    features: [
      "White glove inspection standards",
      "Hidden area cleaning techniques",
      "Specialized equipment training",
      "Quality control protocols",
    ],
    icon: Sparkles,
  },
  {
    title: "Specialist Certification",
    duration: "3 Days",
    description: "Comprehensive training covering specialized treatments for marble, delicate fabrics, and high-end fixtures.",
    features: [
      "Marble and stone care",
      "Upholstery cleaning methods",
      "High-end fixture handling",
      "Certificate upon completion",
    ],
    icon: Award,
  },
];

const benefits = [
  {
    icon: CheckCircle,
    title: "Professional Certificate",
    description: "Graduates receive a Kingdom Keys training certificate",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Training sessions available on weekdays and weekends",
  },
  {
    icon: Users,
    title: "Small Class Sizes",
    description: "Individual attention with maximum 6 trainees per session",
  },
];

export default function Training() {
  const { toast } = useToast();
  const form = useForm<TrainingFormData>({
    resolver: zodResolver(trainingFormSchema),
    defaultValues: {
      employerName: "",
      employerEmail: "",
      employerPhone: "",
      cleanerName: "",
      trainingProgram: "",
      message: "",
    },
  });

  const onSubmit = (data: TrainingFormData) => {
    console.log("Training inquiry submitted:", data);
    toast({
      title: "Training Inquiry Received",
      description: "We'll contact you shortly with available training dates.",
    });
    form.reset();
  };

  return (
    <main className="pt-20">
      <section className="relative py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6">Professional Training</Badge>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Train Your Domestic Cleaner
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed">
              Send your domestic cleaner to us for professional yacht-standard training. 
              Elevate their skills with our maritime-inspired cleaning techniques.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4 font-medium">Training Programs</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Choose Your Training Level
            </h2>
            <p className="text-muted-foreground text-lg">
              From foundational skills to specialist certification, we offer comprehensive training programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <program.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="font-serif text-xl">{program.title}</CardTitle>
                  </div>
                  <Badge variant="secondary">{program.duration}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4 font-medium">Enroll Today</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Training Inquiry Form
            </h2>
            <p className="text-muted-foreground text-lg">
              Complete the form below and we'll contact you with available training dates and pricing.
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="employerName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} data-testid="input-employer-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="cleanerName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cleaner's Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Domestic cleaner's name" {...field} data-testid="input-cleaner-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="employerEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@email.com" {...field} data-testid="input-employer-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="employerPhone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+27 XX XXX XXXX" {...field} data-testid="input-employer-phone" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="trainingProgram"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Training Program</FormLabel>
                        <FormControl>
                          <select
                            {...field}
                            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                            data-testid="select-training-program"
                          >
                            <option value="">Select a program</option>
                            <option value="foundation">Foundation Training (1 Day)</option>
                            <option value="advanced">Advanced Deep Clean (2 Days)</option>
                            <option value="specialist">Specialist Certification (3 Days)</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Information (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Any specific areas of focus or questions..."
                            className="resize-none"
                            rows={4}
                            {...field}
                            data-testid="textarea-training-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" data-testid="button-submit-training">
                    Submit Training Inquiry
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
