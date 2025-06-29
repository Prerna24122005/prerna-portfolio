
const Education = () => {
  const educationData = [
    {
      institution: "Indian Institute of Technology (IIT) Ropar",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      period: "2023 - 2027",
      grade: "CGPA: 7.51 (Till 4th Semester)",
      description: "Pursuing a comprehensive curriculum in computer science with focus on algorithms, data structures, and software development."
    },
    {
      institution: "CBSE Board",
      degree: "Class XII (Senior Secondary)",
      period: "2023",
      grade: "94%",
      description: "Completed higher secondary education with excellent academic performance."
    },
    {
      institution: "CBSE Board",
      degree: "Class X (Secondary)",
      period: "2021",
      grade: "95%",
      description: "Strong foundation in mathematics and sciences."
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Education</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My academic journey and achievements in computer science and engineering.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div key={index} className="mb-8 bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-2">{edu.institution}</h3>
                  <p className="text-lg text-blue-600 font-medium">{edu.degree}</p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <p className="text-slate-600 font-medium">{edu.period}</p>
                  <p className="text-2xl font-bold text-green-600">{edu.grade}</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
