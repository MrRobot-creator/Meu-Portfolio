import React from 'react';
import { Code, Rocket, ShieldCheck } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Code className="w-6 h-6 text-purple-400" />,
      title: 'Desenvolvimento Web',
      description: 'Criação de aplicações web modernas, responsivas e escaláveis utilizando as melhores tecnologias do mercado.'
    },
    {
      icon: <Rocket className="w-6 h-6 text-indigo-400" />,
      title: 'Performance & UX',
      description: 'Foco total em interfaces dinâmicas, intuitivas e otimizadas para a melhor experiência do usuário.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: 'Boas Práticas & Limpeza',
      description: 'Código limpo, arquitetura robusta, testes rigorosos e padrões sólidos de engenharia de software.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-dark-950 border-t border-dark-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Quem Sou</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg leading-relaxed">
            Sou um desenvolvedor estudante de tecnologia e resolução de problemas. Busco sempre criar soluções inovadoras, buscando alta performance técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-dark-900 border border-dark-700 hover:border-purple-500/50 transition-all duration-300 group shadow-lg hover:shadow-purple-500/10 flex flex-col items-start"
            >
              <div className="w-14 h-14 rounded-xl bg-dark-800 border border-dark-600 flex items-center justify-center mb-6 group-hover:bg-purple-600/10 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
