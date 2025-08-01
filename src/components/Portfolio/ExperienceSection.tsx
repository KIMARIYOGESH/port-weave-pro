import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Software Development and Testing Engineer Intern",
    company: "Nokia Networks",
    location: "Chennai, India",
    period: "Aug 2024 - May 2025",
    description: "Developing Python and Bazel-based APIs for SDN migration while automating XML/XSLT management pipelines. Working with Docker environments and Robot Framework for comprehensive testing and validation.",
    achievements: [
      "Developed Python and bazel based APIs for SDN migration, improving file management by 70%",
      "Automated XML/XSLT management pipelines, reducing file duplication from 7,000+ to 2,000+ entries",
      "Deployed and maintained applications in Docker sandbox environments",
      "Developed and validated Robot Framework test cases over hosts and targets using QEMU which gave me an experience of debugging, reading logs and fixing bugs",
      "Learning involved working with python, bazel, linux CLI, RobotFramework, Automation Testing, Teamwork"
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