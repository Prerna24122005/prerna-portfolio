
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-slate-700 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                Whether you're looking for a passionate developer, have a project in mind, or just want to chat about 
                technology and innovation, I'd love to hear from you.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:prernabadal24@gmail.com"
                  className="flex items-center gap-4 text-blue-100 hover:text-white transition-colors group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-blue-200">prernabadal24@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="https://github.com/Prerna24122005" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-blue-100 hover:text-white transition-colors group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Github size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <p className="text-blue-200">github.com/Prerna24122005</p>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com/in/prerna2412" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-blue-100 hover:text-white transition-colors group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-blue-200">linkedin.com/in/prerna2412</p>
                  </div>
                </a>

                <a 
                  href="https://leetcode.com/prernabadal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-blue-100 hover:text-white transition-colors group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <div>
                    <p className="font-semibold">LeetCode</p>
                    <p className="text-blue-200">leetcode.com/prernabadal</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h4 className="text-xl font-semibold mb-4">Current Status</h4>
                <p className="text-blue-100 mb-6">
                  B.Tech Student at IIT Ropar<br />
                  Computer Science & Engineering<br />
                  Class of 2027
                </p>
                <div className="text-3xl mb-4">🚀</div>
                <p className="text-blue-200 text-sm">
                  Open to internships, collaborations, and new opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
