import React from 'react';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { GithubIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons';
import auraImg from '../assets/eu farmando aura.jpeg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden bg-dark-900">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-dark-800 border border-dark-600 text-purple-400 text-sm font-medium shadow-inner">
              <Sparkles className="w-4 h-4" />
              <span>Desenvolvedor Full Stack</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Olá, eu sou <br />
              <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-white bg-clip-text text-transparent">
                Matheus Nobre
              </span>
            </h1>

            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Transformando ideias em aplicações web modernas, robustas e de alto desempenho. buscando sempre a inovação e plena utilização da tecnologia.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium transition-all shadow-lg shadow-purple-600/30 hover:scale-[1.02]"
              >
                <span>Ver Projetos</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-dark-800 hover:bg-dark-700 text-white font-medium border border-dark-600 transition-all hover:scale-[1.02]"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contato Direto</span>
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4 text-gray-400">
              <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Redes:</span>
              <a href="https://github.com/MrRobot-creator" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center space-x-1.5">
                <GithubIcon className="w-4 h-4 text-purple-400" />
                <span className="text-sm">GitHub</span>
              </a>
              <a href="https://www.instagram.com/_mv_nobrs/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center space-x-1.5">
                <InstagramIcon className="w-4 h-4 text-pink-400" />
                <span className="text-sm">Instagram</span>
              </a>
              <a href="https://wa.me/5591984560424" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center space-x-1.5">
                <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                <span className="text-sm">WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-600 to-indigo-600 transform rotate-6 opacity-30 blur-lg" />
              <div className="absolute inset-0 rounded-3xl bg-dark-800 border border-dark-600 overflow-hidden shadow-2xl flex flex-col items-center justify-between p-4 text-center relative group">
                <div className="absolute top-3 left-3 flex space-x-1.5 z-10">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                
                <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden mt-6 shadow-xl relative">
                  <img
                    src={auraImg}
                    alt="Matheus Farmando Aura"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-60" />
                </div>

                <div className="py-2">
                  <h3 className="text-lg font-bold text-white mb-0.5">Matheus Nobre</h3>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
