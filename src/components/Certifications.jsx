import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';

export default function Certifications() {
  const certificates = [
    {
      title: 'Desenvolvimento Web Full Stack Avançado',
      issuer: 'Plataforma de Cursos Especializados',
      date: '2025',
      description: 'Formação completa em arquitetura frontend e backend, APIs REST, bancos de dados relacionais e não-relacionais.'
    },
    {
      title: 'Engenharia de Software & Boas Práticas',
      issuer: 'Certificação Profissional',
      date: '2024',
      description: 'Estudo aprofundado sobre padrões de projeto, código limpo, testes automatizados e controle de versão avançado.'
    },
    {
      title: 'JavaScript & TypeScript Moderno',
      issuer: 'Bootcamp Intensivo',
      date: '2024',
      description: 'Domínio de programação assíncrona, tipagem estática avançada, manipulação de DOM e ecossistema moderno Node/React.'
    }
  ];

  return (
    <section id="certificates" className="py-24 bg-dark-900 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Certificados & Conquistas</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg">
            Reconhecimentos, formações e especializações que comprovam minha dedicação ao aprendizado contínuo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-dark-950 border border-dark-700 hover:border-purple-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-dark-900 border border-dark-700 flex items-center justify-center text-purple-400 group-hover:bg-purple-600/10 transition-colors">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-dark-900 border border-dark-700 text-xs font-mono text-purple-300">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-purple-400 text-sm font-medium mb-4">{cert.issuer}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{cert.description}</p>
              </div>

              <div className="flex items-center space-x-2 text-xs text-gray-500 pt-4 border-t border-dark-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Certificado Verificado</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
