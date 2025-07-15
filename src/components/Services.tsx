import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Hospital, 
  Eye , 
  TestTubes ,  
  Stethoscope, 
  Bone,
  Tablets,
  ArrowRight,
  Clock,
  HeartPulse
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Hospital,
      title: " Hospital Camp",
     description: "Community-focused healthcare camps providing vaccinations, general checkups, and health awareness sessions for underserved populations.",
      features: ["Vaccine Camp", "In House Camp", "Awareness Camp"],
      availability: "24/7 Emergency",
    },
    {
      icon: Eye,
      title: "Eye Care",
     description: "Comprehensive eye care services including cataract surgery, glaucoma treatment, and advanced retina diagnostics and procedures.",
     features: ["Cataract Surgery", "Glaucoma Treatment", "Retina Services"],
      availability: "24/7 Emergency",
    },
    {
      icon: TestTubes,
      title: "Lab",
     description: "Comprehensive diagnostic services including pathology, biochemistry, and imaging for accurate and timely results.",
      features: ["Pathology Testing", "Biochemistry Analysis", "Radiology & Imaging"],
      availability: "24/7 Emergency",
    },
    {
      icon: Tablets,
      title: "Medical Store",
     description: "Well-stocked pharmacy offering prescription medicines, OTC drugs, and health supplements to support complete patient care.",
     features: ["Prescription Medicines", "Over-the-Counter Drugs", "Health Supplements"],
      availability: "Mon-Sat 9AM-6PM",
    },
    {
      icon: Bone,
      title: "Ortho",
      description: "Specialized orthopedic care offering advanced treatments for joint replacement, sports injuries, and trauma management.",
      features: ["Knee/Hip Replacement", "Arthroscopy", "Trauma Care"],
      availability: "Mon-Sat 8AM-6PM",
    },
    {
      icon:HeartPulse ,
     description: "Encouraging life-saving blood donations through organized camps, safe collection practices, and community awareness programs.",
features: ["Voluntary Donation Camps", "Blood Group Testing", "Safe Storage & Handling"],
      features: ["Trauma Center", "Critical Care", "Emergency Surgery"],
      availability: "24/7 Available",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Stethoscope className="h-4 w-4" />
            Our Medical Services
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Comprehensive Healthcare Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From routine check-ups to complex procedures, our expert medical team provides 
            personalized care across all specialties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card-medical transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-gradient-medical rounded-lg group-hover:shadow-glow transition-all duration-300">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex items-center gap-1 text-xs text-accent font-medium">
                    <Clock className="h-3 w-3" />
                    {service.availability}
                  </div>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group">
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="medical" size="lg">
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;