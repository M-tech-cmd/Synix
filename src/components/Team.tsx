import { Linkedin, Twitter, Github } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Angie Ngozu",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1697551458746-b86ccf5049d4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwYWklMjBodW1hbnxlbnwwfHwwfHx8MA%3D%3D",
      bio: "Serial entrepreneur with 15+ years in tech. Previously led product at major SaaS companies.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Former engineering lead at unicorn startups. Expert in scalable architecture and AI systems.",
      social: {
        linkedin: "#",
        twitter: "#", 
        github: "#"
      }
    },
    {
      name: "Emily Johnson",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Award-winning designer who's crafted experiences for millions of users at top design agencies.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "David Kim",
      role: "VP of Product",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Product visionary with a track record of bringing innovative solutions from concept to market.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate experts dedicated to building the future of technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6 mx-auto w-48 h-48 overflow-hidden rounded-2xl">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
              <p className="text-primary font-medium mb-4">{member.role}</p>
              <p className="text-muted-foreground text-sm mb-6 max-w-xs mx-auto">{member.bio}</p>
              
              <div className="flex justify-center gap-4">
                <a 
                  href={member.social.linkedin}
                  className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href={member.social.twitter}
                  className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href={member.social.github}
                  className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;