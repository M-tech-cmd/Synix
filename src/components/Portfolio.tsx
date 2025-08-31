import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with advanced analytics and seamless payment integration.",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Financial Dashboard",
      description: "Comprehensive financial analytics platform with real-time data visualization.",
      category: "Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Healthcare App",
      description: "Patient management system with telemedicine capabilities and secure data handling.",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      title: "AI-Powered CRM",
      description: "Customer relationship management with intelligent automation and predictive analytics.",
      category: "SaaS Platform",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Learning Management",
      description: "Interactive learning platform with progress tracking and collaborative features.",
      category: "Education",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      title: "Smart Home Control",
      description: "IoT dashboard for smart home automation with voice control integration.",
      category: "IoT Platform",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing our latest projects and the innovative solutions we've delivered for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-premium transition-all duration-300 hover:-translate-y-2 bg-card border-border/50"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex space-x-3">
                  <Button variant="ghost" size="sm" className="group/btn">
                    <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                    View Live
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    Source
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;