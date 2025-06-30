
const Projects = () => {
  const projects = [
    {
      title: "RISC-V Assembler",
      description: "Converts RISC-V assembly to binary, simulates pipelining with comprehensive instruction support.",
      technologies: ["RISC-V Assembly", "Binary Conversion", "Pipeline Simulation"],
      features: ["Assembly to binary conversion", "Pipeline simulation", "Instruction set support"]
    },
    {
      title: "Rover Bot (GPS)",
      description: "Autonomous rover that moves to GPS waypoints with obstacle detection using ultrasonic sensors.",
      technologies: ["Arduino", "GPS Navigation", "Ultrasonic Sensors", "C++"],
      features: ["GPS waypoint navigation", "Obstacle detection", "Autonomous movement"]
    },
    {
      title: "Version Control System",
      description: "Git-like version control system with branching, merging, and commit functionalities.",
      technologies: ["C", "File System", "Data Structures"],
      features: ["Branching system", "Merge conflicts resolution", "Commit tracking"]
    },
    {
      title: "Python Mini Games",
      description: "Collection of classic games including Tic-Tac-Toe, Hangman, and Rock-Paper-Scissors.",
      technologies: ["Python", "Game Logic"],
      features: ["Multiple game modes", "Score tracking", "Interactive gameplay"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Projects</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Here are some of my notable projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">{project.title}</h3>
              <p className="text-slate-700 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-slate-800 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Key Features:</h4>
                <ul className="list-disc list-inside text-slate-700 space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
