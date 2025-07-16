import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Clock, Ambulance } from "lucide-react";

const Emergency = () => {
  return (
    <section className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Ambulance className="h-4 w-4" />
            Emergency Services
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            24/7 Emergency Care
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            When you need immediate medical attention, our emergency department is 
            ready to provide expert care around the clock.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-accent text-accent-foreground">
            <CardContent className="p-6 text-center">
              <Phone className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Emergency Helpline</h3>
              <p className="text-3xl font-bold mb-2">+91 9335596042</p>
              <p className="text-sm opacity-90">Available 24x7</p>
            </CardContent>
          </Card>

          <Card className="bg-card hover:shadow-card-medical transition-all duration-300">
            <CardContent className="p-6 text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-xl mb-2 text-primary ">
                Noida,Kanpur,Lucknow
               
              </p>
              <Button variant="outline" size="sm">
                Get Directions
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card hover:shadow-card-medical transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Response Time</h3>
              <p className="text-2xl font-bold text-primary mb-2">5 minutes</p>
              <p className="text-sm text-muted-foreground">Average response time</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-trust rounded-2xl p-8 text-center text-primary-foreground">
          <h3 className="text-2xl font-bold mb-4">Medical Emergency?</h3>
          <p className="mb-6 opacity-90">
            Don't wait. Our emergency team is standing by to provide immediate care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Phone className="h-4 w-4" />
              Call Emergency
            </Button>
            {/* <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <Ambulance className="h-4 w-4" />
              Request Ambulance
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Emergency;