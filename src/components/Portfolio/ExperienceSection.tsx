import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Senior Software Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Lead development of scalable web applications using React and Node.js. Mentor junior developers and collaborate with cross-functional teams to deliver high-quality software solutions.",
    achievements: [
      "Improved application performance by 40% through code optimization",
      "Led a team of 5 developers on a major product redesign",
      "Implemented CI/CD pipeline reducing deployment time by 60%"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    location: "New York, NY",
    period: "2020 - 2022",
    description: "Developed and maintained full-stack applications using modern technologies. Worked closely with clients to understand requirements and deliver custom software solutions.",
    achievements: [
      "Built 12+ client applications with 99.9% uptime",
      "Reduced development cycle time by 30% through automation",
      "Mentored 3 junior developers and conducted code reviews"
    ]
  },
  {
    title: "Embedded Systems Engineer",
    company: "IoT Dynamics Corp.",
    location: "Austin, TX",
    period: "2018 - 2020",
    description: "Designed and developed embedded systems for IoT devices. Created firmware for microcontrollers and integrated hardware with cloud-based software platforms.",
    achievements: [
      "Developed firmware for 8 different IoT products",
      "Reduced power consumption by 35% through optimization",
      "Collaborated with hardware team on 15+ product launches"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Professional Experience
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative md:ml-16">
                  {/* Timeline dot */}
                  <div className="absolute -left-20 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-soft hidden md:block"></div>
                  
                  <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-border">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg text-primary font-medium mb-2">
                          {exp.company}
                        </h4>
                      </div>
                      
                      <div className="flex flex-col md:text-right space-y-1">
                        <div className="flex items-center text-muted-foreground">
                          <Calendar size={16} className="mr-2" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin size={16} className="mr-2" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h5 className="font-medium text-foreground">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-muted-foreground text-sm flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;