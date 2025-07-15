import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Heart, Shield, ArrowRight } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "NABH Accreditation",
      description: "National quality standards"
    },
    {
      icon: Users,
      title: "100+ Specialists",
      description: "Board-certified doctors"
    },
    {
      icon: Heart,
      title: "50,000+ Lives",
      description: "Patients treated annually"
    },
    {
      icon: Shield,
      title: "ISO 9001 Certified",
      description: "Quality management system"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Heart className="h-4 w-4" />
                About Apollo HealthCare
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Leading Healthcare Excellence in India
              </h2>
              <p className="text-lg text-muted-foreground">
                For over 25 years, Apollo HealthCare has been at the forefront of medical innovation 
                in India. We combine international standards of care with Indian values of 
                compassion, delivering world-class healthcare that's accessible to all.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
              <p className="text-muted-foreground">
                To make quality healthcare accessible to every Indian, while advancing 
                medical excellence through innovation, research, and continuous learning, 
                ensuring every patient receives world-class care with Indian warmth.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Our Values</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Compassionate patient-centered care
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Excellence in medical practices
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Integrity and ethical standards
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Innovation in healthcare solutions
                </li>
              </ul>
            </div>

            <Button variant="medical" size="lg">
              Learn More About Us
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="group hover:shadow-card-medical transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-gradient-medical rounded-xl w-fit mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                    <achievement.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;