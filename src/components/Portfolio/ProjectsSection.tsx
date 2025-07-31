import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import project1Image from "@/assets/project1-placeholder.jpg";
import project2Image from "@/assets/project2-placeholder.jpg";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, order management, and an admin dashboard.",
    image: project1Image,
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://your-ecommerce-demo.com"
  },
  {
    title: "IoT Home Automation System",
    description: "Smart home control system using Arduino, Raspberry Pi, and React. Controls lighting, temperature, and security systems with real-time monitoring and mobile app integration.",
    image: project2Image,
    technologies: ["Arduino", "Raspberry Pi", "React", "Python", "MQTT", "WebSocket"],
    githubUrl: "https://github.com/yourusername/iot-home-system",
    liveUrl: "https://your-iot-demo.com"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and comprehensive project tracking.",
    image: project1Image,
    technologies: ["React", "TypeScript", "Firebase", "Material-UI", "WebSocket"],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://your-taskmanager-demo.com"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-large transition-all duration-300 border-0 shadow-soft overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-primary/10 text-primary px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="flex-1"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;