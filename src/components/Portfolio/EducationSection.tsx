import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Electronics and Communcation Engineering",
    school: "SRM Institute of Science and Technology",
    location: "Kattankulathur, Tamil Nadu, India",
    period: "2021 - 2025",
    gpa: "9.2/10",
    achievements: [
      "First class with Distinction graduate"
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Engineering Mathematics",
      "Operating Systems",
      "Embedded Systems",
      "Python and Scientific Python",
      "Signals and Systems",
      "Computer Networks",
      "Analog and Digital Communications",
      "Wireless Communications"
    ]
  },
  {
    degree: "Senior Secondary School",
    school: "Gurukul International School",
    location: "Haldwani, Uttarakhand, India",
    period: "2018-2020",
    gpa: "94/100",
    coursework: [
      "Physics",
      "Chemistry",
      "Maths",
      "English",
      "Physical Education"
    ]
  }
];

const certifications = [
  {
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    date: "06/09/2023",
    link: "https://drive.google.com/file/d/1d_uWBFB_7p5eJh6nHSO92vdqnitYPGZf/view?usp=sharing"
  },
  {
    title: "AWS Academy Graduate - AWS Academy Machine Learning Foundations",
    issuer: "AWS Academy",
    date: "2023",
    link: "https://drive.google.com/file/d/1d_uWBFB_7p5eJh6nHSO92vdqnitYPGZf/view?usp=sharing"
  },
  {
    title: "Crash Course on Python",
    issuer: "an online non-credit course authorized by Google and offered through Coursera",
    date: "2023",
    link: "https://drive.google.com/file/d/1z7mmEB6qL82A-aK7ysbJikKC2WKDHueH/view?usp=sharing"
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Education & Certifications
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Education */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-semibold mb-8 text-foreground flex items-center">
                <GraduationCap className="mr-3 text-primary" size={28} />
                Education
              </h3>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="bg-card rounded-xl p-6 shadow-soft border border-border">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-foreground mb-2">
                          {edu.degree}
                        </h4>
                        <h5 className="text-lg text-primary font-medium mb-1">
                          {edu.school}
                        </h5>
                        <p className="text-muted-foreground text-sm mb-2">
                          {edu.location}
                        </p>
                      </div>
                      
                      <div className="md:text-right">
                        <div className="flex items-center text-muted-foreground mb-2">
                          <Calendar size={16} className="mr-2" />
                          <span className="text-sm">{edu.period}</span>
                        </div>
                        <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {edu.degree.includes("Senior Secondary") ? "Percentage" : "GPA"}: {edu.gpa}
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                      {edu.achievements && edu.achievements.length > 0 && (
                        <div>
                          <h6 className="font-medium text-foreground mb-3">Achievements</h6>
                          <ul className="space-y-1">
                            {edu.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="text-muted-foreground text-sm flex items-start">
                                <Award size={14} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div>
                        <h6 className="font-medium text-foreground mb-3">Relevant Coursework</h6>
                        <div className="flex flex-wrap gap-1">
                          {edu.coursework.slice(0, 4).map((course, courseIndex) => (
                            <span 
                              key={courseIndex}
                              className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                            >
                              {course}
                            </span>
                          ))}
                          {edu.coursework.length > 4 && (
                            <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">
                              +{edu.coursework.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-foreground flex items-center">
                <Award className="mr-3 text-primary" size={28} />
                Certifications
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                <div key={index} className="bg-card rounded-lg p-4 shadow-soft border border-border">
                    <h4 className="font-semibold text-foreground mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-primary font-medium text-sm mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-muted-foreground text-xs mb-3">
                      Issued: {cert.date}
                    </p>
                    {cert.link && (
                      <a 
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1 bg-primary text-primary-foreground rounded text-xs hover:bg-primary/90 transition-colors"
                      >
                        View Certificate
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
