
const Skills = () => {
  const technicalSkills = {
    "Programming Languages": ["C", "C++", "Python", "RISC-V Assembly"],
    "Web Development": ["HTML", "CSS", "JavaScript"],
    "Tools & Platforms": ["GitHub", "VS Code", "Venus Simulator", "Arduino IDE", "Overleaf"],
    "Technologies": ["Git", "Linux", "AWS", "Data Visualization"]
  };

  const coursework = [
    "Algorithms & Data Structures",
    "Digital Logic Design", 
    "Discrete Mathematics",
    "Programming Paradigms",
    "Linear Algebra",
    "Probability & Statistics"
  ];

  const softSkills = [
    "Strong problem-solving and analytical thinking",
    "Quick learner with adaptability in diverse environments",
    "Team collaboration and leadership",
    "Communication and mentoring (ISMP Mentor experience)",
    "Time management and multitasking",
    "Presentation and documentation (experience with Overleaf, Forage)",
    "Initiative-driven and goal-oriented mindset"
  ];

  const achievements = [
    "Cleared JEE Advanced (2023)",
    "Cleared NDA Written (2022, 2023)",
    "Solved 100+ problems on LeetCode",
    "ISMP Mentor at IIT Ropar",
    "Co-Head, Decoration Team – Zeitgeist Fest"
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Achievements</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise, coursework, and personal achievements.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Technical Skills</h3>
            {Object.entries(technicalSkills).map(([category, skills]) => (
              <div key={category} className="mb-6">
                <h4 className="font-semibold text-slate-700 mb-3">{category}:</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Coursework */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Relevant Coursework</h3>
            <div className="grid grid-cols-1 gap-3">
              {coursework.map((course, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-slate-700">{course}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Soft Skills</h3>
            <div className="space-y-3">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Key Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-yellow-800 text-sm">★</span>
                  </div>
                  <span className="text-slate-700 font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
