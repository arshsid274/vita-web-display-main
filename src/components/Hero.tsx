import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Users, Heart } from "lucide-react";
import hospitalHero from "@/assets/hospital-hero.jpg";
import Gallery14 from "../assets/Gallery1 (14).jpg"

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className=" mt-4 inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
              <Shield className="h-4 w-4" />
              Trusted Healthcare Since 1996
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
             Serving Humanity{" "}
              <span className="text-primary"> Spreading Hope Everywhere</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
             ″Promoting hope in life″ of every individual by serving humanity in every possible aspect of life, whether it is education, medication or social awareness. We contribute to our fullest potential and try to minimize the distress of the under privileged sector of society.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Patients Treated</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Specialist Doctors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Emergency Care</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="appointment" size="lg" className="group">
              Book Appointment
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="emergency" size="lg">
              <Clock className="h-4 w-4" />
              24/7 Emergency
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
             F.C.R.A. Reg. No.: 136530037 (July, 12th 1994)
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4" />
              Trust Reg. No.: 584/1993-94 
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl ">
            <img
              src={Gallery14}
              alt="Chaudhary Ehsan Kareem HealthCare - Modern Multi-Specialty Hospital in India"
              className="w-full h-[200px] md:h-[600px] object-contain"
            />
            <div className="absolute inset-0 " />
          </div>
          
          {/* Floating Card */}
          {/* <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6 shadow-card-medical">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Expert Care</div>
                <div className="text-sm text-muted-foreground">Board-certified physicians</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;