import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, CheckCircle, Phone, ArrowRight } from "lucide-react";
import { format, addDays, startOfWeek, addWeeks, isSameDay, isWeekend, isBefore, startOfDay } from "date-fns";

const timeSlots = [
  { time: "08:00", label: "8:00 AM" },
  { time: "10:00", label: "10:00 AM" },
  { time: "12:00", label: "12:00 PM" },
  { time: "14:00", label: "2:00 PM" },
];

const generateAvailability = () => {
  const availability: { [key: string]: string[] } = {};
  const today = startOfDay(new Date());
  
  for (let i = 1; i <= 21; i++) {
    const date = addDays(today, i);
    if (!isWeekend(date)) {
      const dateKey = format(date, "yyyy-MM-dd");
      const dayOfWeek = date.getDay();
      if (dayOfWeek === 1 || dayOfWeek === 3) {
        availability[dateKey] = ["08:00", "10:00", "14:00"];
      } else if (dayOfWeek === 2 || dayOfWeek === 4) {
        availability[dateKey] = ["10:00", "12:00", "14:00"];
      } else if (dayOfWeek === 5) {
        availability[dateKey] = ["08:00", "10:00"];
      }
    }
  }
  return availability;
};

export default function Bookings() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentWeekStart, setCurrentWeekStart] = useState(startOfWeek(new Date(), { weekStartsOn: 1 }));
  const [availability] = useState(generateAvailability);

  const today = startOfDay(new Date());
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(currentWeekStart, i));
  
  const getAvailableSlotsForDate = (date: Date): string[] => {
    const dateKey = format(date, "yyyy-MM-dd");
    return availability[dateKey] || [];
  };

  const isDateAvailable = (date: Date): boolean => {
    if (isBefore(date, today) || isWeekend(date)) return false;
    return getAvailableSlotsForDate(date).length > 0;
  };

  const handlePrevWeek = () => {
    const newStart = addWeeks(currentWeekStart, -1);
    if (!isBefore(addDays(newStart, 6), today)) {
      setCurrentWeekStart(newStart);
    }
  };

  const handleNextWeek = () => {
    const maxWeeks = 3;
    const maxDate = addWeeks(today, maxWeeks);
    if (isBefore(currentWeekStart, maxDate)) {
      setCurrentWeekStart(addWeeks(currentWeekStart, 1));
    }
  };

  return (
    <main className="pt-20">
      <section className="relative py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6">Book Online</Badge>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Check Our Availability
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed">
              View available appointment slots and request your preferred date and time 
              for yachting-standard cleaning services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <CardTitle className="font-serif text-2xl flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-primary" />
                  Availability Calendar
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={handlePrevWeek} data-testid="button-prev-week">
                    Previous
                  </Button>
                  <span className="text-sm text-muted-foreground px-2">
                    {format(currentWeekStart, "MMM d")} - {format(addDays(currentWeekStart, 6), "MMM d, yyyy")}
                  </span>
                  <Button variant="outline" size="sm" onClick={handleNextWeek} data-testid="button-next-week">
                    Next
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2 mb-8">
                {weekDays.map((day, index) => {
                  const available = isDateAvailable(day);
                  const isPast = isBefore(day, today);
                  const isSelected = selectedDate && isSameDay(day, selectedDate);
                  const slots = getAvailableSlotsForDate(day);
                  
                  return (
                    <button
                      key={index}
                      onClick={() => available && setSelectedDate(day)}
                      disabled={!available}
                      className={`p-3 rounded-md text-center transition-colors ${
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : available
                          ? "bg-card border border-border hover-elevate cursor-pointer"
                          : isPast || isWeekend(day)
                          ? "bg-muted/30 text-muted-foreground/50 cursor-not-allowed"
                          : "bg-muted/50 text-muted-foreground cursor-not-allowed"
                      }`}
                      data-testid={`button-date-${format(day, "yyyy-MM-dd")}`}
                    >
                      <div className="text-xs font-medium mb-1">{format(day, "EEE")}</div>
                      <div className="text-lg font-bold">{format(day, "d")}</div>
                      {available && (
                        <div className="text-xs mt-1">
                          {slots.length} slot{slots.length !== 1 ? "s" : ""}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {selectedDate && (
                <div className="border-t border-border pt-6">
                  <h3 className="font-serif text-lg font-semibold mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Available Times for {format(selectedDate, "EEEE, MMMM d")}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    {getAvailableSlotsForDate(selectedDate).map((slot) => {
                      const slotInfo = timeSlots.find(s => s.time === slot);
                      return (
                        <div
                          key={slot}
                          className="p-3 rounded-md border border-border bg-card text-center"
                        >
                          <div className="flex items-center justify-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary" />
                            <span className="font-medium">{slotInfo?.label}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="bg-card border border-border rounded-md p-4">
                    <p className="text-muted-foreground text-sm mb-4">
                      To book this time slot, please contact us with your preferred date and time. 
                      We'll confirm your appointment within 24 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link href="/contact">
                        <Button data-testid="button-request-booking">
                          Request This Appointment
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                      <Button variant="outline" asChild>
                        <a href="tel:+27761638193" data-testid="button-call-booking">
                          <Phone className="w-4 h-4 mr-2" />
                          Call to Book
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {!selectedDate && (
                <div className="text-center py-8 text-muted-foreground">
                  <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Select a date to view available time slots</p>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold mb-2">Confirmation</h3>
                <p className="text-muted-foreground text-sm">
                  We confirm all bookings within 24 hours
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold mb-2">Flexible Scheduling</h3>
                <p className="text-muted-foreground text-sm">
                  Reschedule up to 48 hours before
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold mb-2">Prefer to Call?</h3>
                <p className="text-muted-foreground text-sm">
                  +27 (76) 163-8193
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
