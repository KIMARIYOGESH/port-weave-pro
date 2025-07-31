import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Yogesh Kimari</h3>
              <p className="text-white/70">
                Building innovative solutions through code
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="mailto:john.developer@email.com"
                className="group flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="group-hover:scale-110 transition-transform" size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/johndeveloper"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="group-hover:scale-110 transition-transform" size={20} />
              </a>
              <a 
                href="https://github.com/johndeveloper"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="group-hover:scale-110 transition-transform" size={20} />
              </a>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/70 flex items-center justify-center">
              © {currentYear} Yogesh Kimari. Made with 
              <Heart className="mx-2 text-red-400" size={16} /> 
              using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;