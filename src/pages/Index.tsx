import Navigation from "@/components/Portfolio/Navigation";
import HeroSection from "@/components/Portfolio/HeroSection";
import AboutSection from "@/components/Portfolio/AboutSection";
import SkillsSection from "@/components/Portfolio/SkillsSection";
import ProjectsSection from "@/components/Portfolio/ProjectsSection";
import ExperienceSection from "@/components/Portfolio/ExperienceSection";
import EducationSection from "@/components/Portfolio/EducationSection";
import ContactSection from "@/components/Portfolio/ContactSection";
import Footer from "@/components/Portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
