import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const CoreFeatures = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Core Features That Drive Results
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our platform combines innovative technology with user-friendly design to deliver exceptional performance and reliability.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Advanced Automation</h3>
                  <p className="text-muted-foreground">Streamline your workflow with intelligent automation that saves time and reduces errors.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Real-time Collaboration</h3>
                  <p className="text-muted-foreground">Work together seamlessly with your team in real-time, from anywhere in the world.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Smart Analytics</h3>
                  <p className="text-muted-foreground">Get actionable insights with our advanced analytics and reporting tools.</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button className="group">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="group">
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-accent rounded-2xl p-8 shadow-glow">
              <div className="bg-card rounded-lg p-6 mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-muted rounded w-full"></div>
                  <div className="h-3 bg-muted rounded w-3/4"></div>
                  <div className="h-3 bg-primary rounded w-1/2"></div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-card-foreground">Performance</span>
                  <span className="text-sm text-muted-foreground">98%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-[98%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;