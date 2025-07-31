import profileImage from "@/assets/PHOTO.jpeg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate software developer and embedded systems engineer with a strong foundation in 
                modern programming languages and technologies like Python, C++, Javascript, node.js, express.js, Generative-AI. I love solving complex problems and building 
                innovative solutions that make a real impact. I'm a regular Leetcode practitioner and active learner.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With experience spanning web development, embedded systems, and software architecture, 
                I bring a unique perspective to every project. I'm always eager to learn new technologies 
                and collaborate with talented teams to create exceptional products.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-card rounded-lg shadow-soft">
                  <div className="text-2xl font-bold text-primary mb-2">1</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg shadow-soft">
                  <div className="text-2xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-large">
                  <img 
                    src={profileImage} 
                    alt="Yogesh Kimari"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-20"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
