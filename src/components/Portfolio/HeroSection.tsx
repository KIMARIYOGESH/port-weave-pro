import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative">
      <div className="container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Yogesh Kimari
          </h1>
          <h2 className="text-xl md:text-2xl font-light mb-8 text-white/90">
            Software Developer & Embedded Systems Engineer
          </h2>
          <p className="text-lg md:text-xl mb-12 text-white/80 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions through clean code and cutting-edge technology.
            <br />
            Building the future, one line of code at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
              onClick={() => scrollToSection('about')}
            >
              Learn More About Me
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown 
          className="text-white/60 cursor-pointer hover:text-white/80 transition-colors" 
          size={32}
          onClick={() => scrollToSection('about')}
        />
      </div>
    </section>
  );
};

export default HeroSection;