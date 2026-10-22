import React from 'react';
import { ExternalLink, ShoppingBag, Utensils, Film, Gamepad2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function Projects() {
  const projects = [
    {
      title: 'Bella Chic Boutique',
      description: 'E-commerce moderno e elegante de moda feminina, apresentando coleções, carrinho de compras interativo e layout totalmente responsivo.',
      tags: ['React', 'Tailwind CSS', 'E-commerce', 'JavaScript'],
      github: 'https://github.com/MrRobot-creator',
      live: 'https://bella-chic-boutique.vercel.app/',
      screenshot: 'https://api.microlink.io/?url=https%3A%2F%2Fbella-chic-boutique.vercel.app&screenshot=true&meta=false&embed=screenshot.url',
      icon: <ShoppingBag className="w-4 h-4 text-rose-400" />
    },
    {
      title: 'Restaurante Sabor Executivo',
      description: 'Site institucional interativo para restaurante com cardápio digital, apresentação de pratos, sistema de reservas e contato integrado.',
      tags: ['React', 'CSS', 'UI/UX', 'Responsive'],
      github: 'https://github.com/MrRobot-creator',
      live: 'https://restaurante-sabor-executivo.vercel.app/',
      screenshot: 'https://api.microlink.io/?url=https%3A%2F%2Frestaurante-sabor-executivo.vercel.app&screenshot=true&meta=false&embed=screenshot.url',
      icon: <Utensils className="w-4 h-4 text-amber-400" />
    },
    {
      title: 'Projeto Disney+',
      description: 'Clone da interface do Disney+ com carrosséis de filmes e séries, navegação dinâmica e design fiel à plataforma de streaming.',
      tags: ['React', 'Styled Components', 'API Integration', 'JavaScript'],
      github: 'https://github.com/MrRobot-creator',
      live: 'https://projeto-disney-nktp.vercel.app/',
      screenshot: 'https://api.microlink.io/?url=https%3A%2F%2Fprojeto-disney-nktp.vercel.app&screenshot=true&meta=false&embed=screenshot.url',
      icon: <Film className="w-4 h-4 text-blue-400" />
    },
    {
      title: 'E-play',
      description: 'Plataforma de e-commerce de jogos digitais completa com vitrine de games, categorias, carrinho e integração com checkout.',
      tags: ['React', 'Redux', 'TypeScript', 'Styled Components'],
      github: 'https://github.com/MrRobot-creator',
      live: 'https://eplay-seven-phi.vercel.app/',
      screenshot: 'https://api.microlink.io/?url=https%3A%2F%2Feplay-seven-phi.vercel.app&screenshot=true&meta=false&embed=screenshot.url',
      icon: <Gamepad2 className="w-4 h-4 text-purple-400" />
    }
  ];

  return (
    <section id="projects" className="py-24 bg-dark-950 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Projetos em Destaque</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gray-500 to-gray-300 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg">
            Prévia visual da interface real dos projetos desenvolvidos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl bg-dark-900 border border-dark-700 hover:border-gray-500 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xl group"
            >
              {/* Browser Mockup Window with Live Screenshot Preview */}
              <div className="relative h-64 bg-dark-950 border-b border-dark-700 flex flex-col overflow-hidden">
                {/* Browser Top Bar */}
                <div className="flex items-center justify-between bg-dark-900 px-3 py-2 border-b border-dark-700 z-10">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
                  </div>
                  <div className="flex items-center space-x-2 bg-dark-950 px-3 py-1 rounded-md border border-dark-700 text-xs text-gray-400 max-w-[240px] truncate">
                    {project.icon}
                    <span className="truncate font-mono text-[11px]">{project.live.replace('https://', '')}</span>
                  </div>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors p-1"
                    title="Abrir em nova aba"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Screenshot Preview Image container clickable */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex-1 bg-dark-900 overflow-hidden cursor-pointer"
                  title="Clique para abrir o projeto"
                >
                  <img
                    src={project.screenshot}
                    alt={`Preview de ${project.title}`}
                    className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                </a>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-gray-200 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-dark-800">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-dark-800 border border-dark-700 text-xs font-medium text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
