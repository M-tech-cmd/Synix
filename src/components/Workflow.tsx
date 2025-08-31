import { ArrowRight } from "lucide-react";

const Workflow = () => {
  const steps = [
    {
      step: "01",
      title: "Connect",
      description: "Integrate your existing tools and data sources in minutes"
    },
    {
      step: "02", 
      title: "Configure",
      description: "Set up your workflow with our intuitive drag-and-drop interface"
    },
    {
      step: "03",
      title: "Automate",
      description: "Let our AI handle repetitive tasks while you focus on what matters"
    },
    {
      step: "04",
      title: "Optimize",
      description: "Continuously improve performance with real-time insights"
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple Workflow
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes with our streamlined process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="text-primary-foreground font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full z-0">
                  <ArrowRight className="w-6 h-6 text-muted-foreground ml-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;