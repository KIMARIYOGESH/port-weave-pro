import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import project1Image from "@/assets/project1-placeholder.jpg";
import project2Image from "@/assets/project2-placeholder.jpg";

const projects = [
  {
    title: "Python Based Reverse Engineering and Material Characterization of Optoelectronic Devices",
    description: "Advanced ML-driven material discovery platform that revolutionizes optoelectronic device development. Engineered custom Random Forest and Gradient Boosting models to intelligently predict optimal photosensor materials based on performance requirements. Built proprietary dataset from scratch and achieved exceptional 92% prediction accuracy, significantly accelerating R&D cycles.",
    image: project1Image,
    technologies: ["Python", "Scikit-learn", "Random Forest", "Gradient Boosting", "Pandas", "NumPy"],
    githubUrl: "https://github.com/KIMARIYOGESH/ML-project",
  },
  {
    title: "HID - Rubber Ducky Using Raspberry Pi Pico",
    description: "Advanced cybersecurity research tool engineered with Raspberry Pi Pico for penetration testing and security assessment. Developed sophisticated HID spoofing capabilities using CircuitPython and Adafruit libraries to simulate authentic keyboard inputs. Features automated payload execution, credential harvesting simulation, and system vulnerability assessment - demonstrating critical security awareness in modern computing environments.",
    image: project2Image,
    technologies: ["CircuitPython", "Raspberry Pi Pico", "Adafruit HID", "Hardware Security", "Penetration Testing", "Embedded Systems"],
    githubUrl: "https://github.com/KIMARIYOGESH/EmbeddedProject",
  },
  
  {
    title: "Port-Weave-Pro - Personal Portfolio Website",
    description: "Modern, responsive portfolio website built with React and TypeScript, featuring smooth animations, dark/light theme support, and optimized performance. Showcases professional experience, technical projects, and skills through an intuitive single-page application with seamless navigation and mobile-first design.",
    image: project1Image,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "shadcn/ui", "lovable.dev"],
    githubUrl: "https://github.com/KIMARIYOGESH/port-weave-pro",
    liveUrl: ""
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