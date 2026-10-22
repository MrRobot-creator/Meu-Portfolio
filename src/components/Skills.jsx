import React from 'react';
import { Database, Wrench, Globe, Server } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Globe className="w-5 h-5 text-purple-400" />,
      skills: ['React', 'JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS', 'HTML5 / CSS3', 'Vite']
    },
    {
      title: 'Backend',
      icon: <Server className="w-5 h-5 text-indigo-400" />,
      skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'Authentication']
    },
    {
      title: 'Banco de Dados',
      icon: <Database className="w-5 h-5 text-blue-400" />,
      skills: ['SQL', 'PostgreSQL', 'SQLite', 'MongoDB']
    },
    {
      title: 'Ferramentas & DevOps',
      icon: <Wrench className="w-5 h-5 text-emerald-400" />,
      skills: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Docker', 'npm / pnpm']
    }
  ];

  return (
    <section id="skills" className="py-24 bg-dark-900 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Habilidades Técnicas</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg">
            Tecnologias, linguagens e ferramentas que utilizo no dia a dia para construir produtos incríveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-dark-950 border border-dark-700 hover:border-purple-500/40 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 rounded-lg bg-dark-900 border border-dark-700">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg bg-dark-900 border border-dark-700 text-gray-300 text-sm font-medium hover:border-purple-500/50 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
