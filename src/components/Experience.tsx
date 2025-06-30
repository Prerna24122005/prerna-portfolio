
const Experience = () => {
  const experiences = [
    {
      title: "Tata Data Visualization",
      organization: "Forage Virtual Experience",
      period: "2024",
      description: "Built interactive dashboards and data visualizations for executive decision-making processes.",
      achievements: [
        "Created comprehensive data dashboards",
        "Developed visualizations for executive reporting",
        "Analyzed business metrics and trends",
        "Improved decision-making through clear data presentation"
      ]
    },
    {
      title: "AWS Solutions Architect",
      organization: "Forage Virtual Experience",
      period: "2025",
      description: "Designed scalable cloud architecture solutions using AWS Elastic Beanstalk and related services.",
      achievements: [
        "Designed scalable system architecture",
        "Implemented AWS Elastic Beanstalk solutions",
        "Optimized cloud resource utilization",
        "Created cost-effective deployment strategies"
      ]
    }
  ];

  const leadership = [
    {
      role: "ISMP Mentor",
      organization: "IIT Ropar",
      period: "2024-25",
      description: "Mentoring junior students in academic and personal development."
    },
    {
      role: "Co-Head, Decoration Team",
      organization: "Zeitgeist Fest, IIT Ropar",
      period: "2024",
      description: "Led decoration team for the annual college festival."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Experience & Leadership</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My professional experiences and leadership roles that have shaped my skills and perspective.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h3 className="text-3xl font-semibold text-slate-800 mb-8 text-center">Virtual Experience</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-slate-800">{exp.title}</h4>
                      <p className="text-blue-600 font-medium">{exp.organization}</p>
                    </div>
                    <span className="text-slate-600 font-medium">{exp.period}</span>
                  </div>
                  <p className="text-slate-700 mb-4">{exp.description}</p>
                  <ul className="list-disc list-inside text-slate-700 space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-semibold text-slate-800 mb-8 text-center">Leadership & Roles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leadership.map((role, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-slate-800">{role.role}</h4>
                      <p className="text-blue-600 font-medium">{role.organization}</p>
                    </div>
                    <span className="text-slate-600 font-medium">{role.period}</span>
                  </div>
                  <p className="text-slate-700">{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
