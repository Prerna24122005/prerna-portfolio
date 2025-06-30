
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-4 animate-fade-in">
              Hi, I'm <span className="text-blue-600">Prerna</span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-slate-600 mb-6 animate-fade-in">
              Aspiring Software Engineer | CSE Undergraduate at IIT Ropar
            </h2>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed max-w-2xl animate-fade-in">
              I'm a passionate Computer Science student at IIT Ropar, driven by curiosity and innovation. 
              I love solving complex problems, building meaningful projects, and continuously learning new technologies.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <a 
                href="https://github.com/Prerna24122005" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <Github size={20} />
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/prerna2412" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a 
                href="https://leetcode.com/prernabadal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
              >
                LeetCode
              </a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-200 to-slate-200 rounded-full flex items-center justify-center animate-fade-in p-4">
              <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/my.jpg" 
                  alt="Prerna's Profile Picture"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
