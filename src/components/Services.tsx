import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Brain, 
  Bone, 
  Eye, 
  Stethoscope, 
  Activity,
  ArrowRight,
  Clock
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Cardiology & CTVS",
      description: "Comprehensive heart care with advanced cardiac surgery and interventional procedures.",
      features: ["Cardiac Surgery", "Angioplasty", "Pacemaker Implantation"],
      availability: "24/7 Emergency",
    },
    {
      icon: Brain,
      title: "Neurosciences",
      description: "Advanced neurological care with cutting-edge technology and expert specialists.",
      features: ["Neurosurgery", "Stroke Unit", "Epilepsy Management"],
      availability: "24/7 Emergency",
    },
    {
      icon: Bone,
      title: "Orthopedics & Joint Replacement",
      description: "Complete bone and joint care with minimally invasive surgical techniques.",
      features: ["Knee/Hip Replacement", "Arthroscopy", "Trauma Care"],
      availability: "24/7 Emergency",
    },
    {
      icon: Eye,
      title: "Gastroenterology",
      description: "Advanced digestive care with endoscopic procedures and liver treatments.",
      features: ["Endoscopy", "Liver Transplant", "IBD Treatment"],
      availability: "Mon-Sat 9AM-6PM",
    },
    {
      icon: Stethoscope,
      title: "Oncology",
      description: "Comprehensive cancer care with latest treatment protocols and support.",
      features: ["Chemotherapy", "Radiation Therapy", "Surgical Oncology"],
      availability: "Mon-Sat 8AM-6PM",
    },
    {
      icon: Activity,
      title: "Emergency Medicine",
      description: "Round-the-clock emergency care with advanced trauma capabilities.",
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