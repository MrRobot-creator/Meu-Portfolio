import React, { useState } from 'react';
import { Award, CheckCircle2, ExternalLink, X, ShieldCheck, BarChart3, Code, FileText } from 'lucide-react';
import certificadoEbac from '../assets/certificado ebac.pdf';
import cyberSecurityEbac from '../assets/cyber security ebac.pdf';
import analiseDadosPython from '../assets/analise de dados python.pdf';

export default function Certifications() {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState('');

  const certificates = [
    {
      title: 'Desenvolvimento Full Stack Web',
      issuer: 'EBAC (Escola Britânica de Artes Criativas e Tecnologia)',
      date: '2025',
      description: 'Formação profissional completa em desenvolvimento full stack web, abrangendo tecnologias frontend e backend modernas.',
      pdfUrl: certificadoEbac,
      icon: <Code className="w-6 h-6 text-gray-300" />,
      badgeText: 'Certificado Oficial EBAC',
      tags: ['Full Stack', 'React', 'Node.js', 'TypeScript'],
      gradient: 'from-gray-900 via-dark-900 to-dark-950'
    },
    {
      title: 'Cyber Security & Ethical Hacking',
      issuer: 'EBAC (Escola Britânica de Artes Criativas e Tecnologia)',
      date: '2025',
      description: 'Capacitação em segurança ofensiva e defensiva, análise de vulnerabilidades, testes de penetração e proteção de redes.',
      pdfUrl: cyberSecurityEbac,
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      badgeText: 'Certificado Oficial EBAC',
      tags: ['Cyber Security', 'Ethical Hacking', 'Pentest', 'Segurança'],
      gradient: 'from-emerald-950/40 via-dark-900 to-dark-950'
    },
    {
      title: 'Análise de Dados com Python',
      issuer: 'EBAC (Escola Britânica de Artes Criativas e Tecnologia)',
      date: '2024',
      description: 'Processamento, limpeza e visualização de dados utilizando Pandas, NumPy, Matplotlib e bibliotecas estatísticas.',
      pdfUrl: analiseDadosPython,
      icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
      badgeText: 'Certificado Oficial EBAC',
      tags: ['Python', 'Pandas', 'NumPy', 'Data Analysis'],
      gradient: 'from-blue-950/40 via-dark-900 to-dark-950'
    }
  ];

  const handleOpenPdf = (url, title) => {
    setSelectedPdf(url);
    setSelectedTitle(title);
  };

  return (
    <section id="certificates" className="py-24 bg-dark-900 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Certificados & Conquistas</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gray-500 to-gray-300 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg">
            Reconhecimentos, formações e especializações oficiais da EBAC que comprovam minha qualificação profissional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="rounded-2xl bg-dark-950 border border-dark-700 hover:border-gray-500 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xl group"
            >
              {/* Visual Certificate Preview Mockup with Live PDF iframe */}
              <div 
                onClick={() => handleOpenPdf(cert.pdfUrl, cert.title)}
                className="relative h-64 bg-dark-950 border-b border-dark-700 flex flex-col overflow-hidden cursor-pointer group"
              >
                {/* Browser/Document Top Bar */}
                <div className="flex items-center justify-between bg-dark-900 px-3 py-2 border-b border-dark-700 z-10">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
                  </div>
                  <div className="flex items-center space-x-2 bg-dark-950 px-3 py-1 rounded-md border border-dark-700 text-xs text-gray-400 max-w-[240px] truncate">
                    {cert.icon}
                    <span className="truncate font-mono text-[11px]">{cert.title}.pdf</span>
                  </div>
                  <div className="text-gray-400 hover:text-white transition-colors p-1" title="Ampliar Certificado">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

                {/* PDF Preview Container */}
                <div className="relative flex-1 bg-dark-900 overflow-hidden pointer-events-none">
                  <iframe
                    src={`${cert.pdfUrl}#view=FitH`}
                    title={cert.title}
                    className="w-full h-full opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 select-none"
                    tabIndex={-1}
                  />
                  <div className="absolute inset-0 bg-dark-950/20 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Hover Click Hint Overlay */}
                <div className="absolute inset-0 bg-dark-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                  <span className="px-5 py-2.5 bg-white text-dark-950 font-semibold rounded-xl shadow-lg text-sm flex items-center space-x-2">
                    <span>Clique para Visualizar Certificado em Tela Cheia</span>
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-gray-200 transition-colors mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-gray-300 text-sm font-medium">{cert.issuer}</p>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>

                <div>
                  <div className="mb-4">
                    <button
                      onClick={() => handleOpenPdf(cert.pdfUrl, cert.title)}
                      className="w-full py-2.5 px-4 bg-dark-900 border border-dark-700 hover:border-gray-500 text-white rounded-xl text-sm font-semibold transition-all flex items-center justify-center space-x-2 group/btn"
                    >
                      <span>Visualizar Documento</span>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover/btn:text-white transition-colors" />
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-dark-900 border border-dark-800 text-xs font-medium text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-2 text-xs text-gray-500 pt-4 border-t border-dark-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Certificado Verificado EBAC</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PDF Viewer Modal */}
      {selectedPdf && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
          <div className="relative w-full max-w-4xl h-[85vh] bg-dark-900 border border-dark-700 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-dark-700 bg-dark-950">
              <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                <Award className="w-5 h-5 text-gray-300" />
                <span>Certificado - {selectedTitle}</span>
              </h3>
              <button
                onClick={() => setSelectedPdf(null)}
                className="p-2 text-gray-400 hover:text-white hover:bg-dark-800 rounded-lg transition-colors"
                title="Fechar"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 bg-dark-950 p-2">
              <iframe
                src={selectedPdf}
                title={selectedTitle}
                className="w-full h-full rounded-xl border border-dark-800"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
