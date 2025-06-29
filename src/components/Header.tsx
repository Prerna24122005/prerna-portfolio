
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-slate-800">Prerna</div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('education')} 
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('experience')} 
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/Prerna24122005" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-800 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/prerna2412" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-800 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:prernabadal24@gmail.com"
              className="text-slate-600 hover:text-slate-800 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
