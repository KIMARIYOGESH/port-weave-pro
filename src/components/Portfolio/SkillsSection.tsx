import { Code, Database, Cpu, Globe, Terminal, Zap } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Globe,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML5", "CSS3"]
  },
  {
    category: "Backend",
    icon: Database,
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"]
  },
  {
    category: "Programming",
    icon: Code,
    technologies: ["JavaScript", "TypeScript", "Python", "C++", "Java", "SQL"]
  },
  {
    category: "Embedded",
    icon: Cpu,
    technologies: ["Arduino", "Raspberry Pi", "Microcontrollers", "IoT", "C/C++", "RTOS"]
  },
  {
    category: "Tools",
    icon: Terminal,
    technologies: ["Git", "Docker", "Linux", "VS Code", "Postman", "Figma"]
  },
  {
    category: "Other",
    icon: Zap,
    technologies: ["Agile", "Testing", "CI/CD", "AWS", "Problem Solving", "Team Leadership"]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div 
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-border"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {skill.category}
                    </h3>
                  </div>
                  
                  <div className="space-y-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <div 
                        key={techIndex}
                        className="inline-block bg-muted px-3 py-1 rounded-full text-sm text-muted-foreground mr-2 mb-2"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;