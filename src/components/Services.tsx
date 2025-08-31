import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Rocket, Shield, Zap, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with cutting-edge technologies for optimal performance and scalability."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Stunning, user-centric designs that enhance engagement and drive conversions."
    },
    {
      icon: Rocket,
      title: "Digital Strategy",
      description: "Comprehensive digital transformation strategies tailored to your business objectives."
    },
    {
      icon: Shield,
      title: "Security Solutions",
      description: "Enterprise-grade security implementations to protect your digital assets and user data."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast applications with industry-leading performance optimization techniques."
    },
    {
      icon: Users,
      title: "Consulting Services",
      description: "Expert guidance and strategic consulting to navigate complex technical challenges."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions designed to elevate your business and deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-accent transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border/50"
            >
              <CardHeader>
                <div className="mb-4 p-3 bg-gradient-accent rounded-lg w-fit">
                  <service.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;