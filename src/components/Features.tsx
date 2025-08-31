import { CheckCircle, Zap, Shield, Globe, Smartphone, BarChart } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Easy Integration",
      description: "Seamlessly integrate with your existing workflow and tools"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance that delivers results in milliseconds"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption"
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Available worldwide with 99.9% uptime guarantee"
    },
    {
      icon: Smartphone,
      title: "Mobile Ready",
      description: "Fully responsive and optimized for all devices"
    },
    {
      icon: BarChart,
      title: "Advanced Analytics",
      description: "Deep insights and real-time reporting dashboard"
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to succeed, built with cutting-edge technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-card p-8 rounded-lg shadow-premium hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;