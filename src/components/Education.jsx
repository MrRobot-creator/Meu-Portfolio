import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

export default function Education() {
  const educations = [
    {
      degree: 'Estudante de Desenvolvimento Full Stack Python Web',
      institution: 'Instituição de Ensino Ebac',
      period: 'Em andamento / Concluído',
      description: 'Formação focada em fundamentos de algoritmos, arquitetura de sistemas, engenharia de software e desenvolvimento web avançado.'
    },
    {
      degree: 'Cursos De Analise De Dados Python e Cyberscurity',
      institution: 'Instituição de Ensino Ebac',
      period: 'Em andamento/Contínuo',
      description: 'Capacitação prática em tecnologias modernas como React, Node.js, bancos de dados relacionais e não-relacionais, e metodologias ágeis, e segurança da informação.'
    }
  ];

  return (
    <section id="education" className="py-24 bg-dark-950 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Onde Estudei</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg">
            Minha trajetória acadêmica e base de conhecimentos técnicos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educations.map((edu, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-dark-900 border border-dark-700 hover:border-purple-500/50 transition-all duration-300 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 blur-3xl pointer-events-none" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-xl bg-dark-800 border border-dark-600 text-purple-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    <p className="text-purple-400 text-sm font-medium">{edu.institution}</p>
                  </div>
                </div>

                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-dark-800 border border-dark-600 text-gray-300 text-xs font-mono self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  <span>{edu.period}</span>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed pl-0 sm:pl-14">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
