import React from 'react';
import { Code2, Mail, Heart } from 'lucide-react';
import { GithubIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-dark-800 py-12 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-white">Matheus Senado</span>
              <p className="text-xs text-gray-500">Desenvolvedor Full Stack</p>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/MrRobot-creator"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-dark-900 border border-dark-700 hover:border-purple-500/50 hover:text-white transition-all"
              title="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:matheusnsenado6@gmail.com"
              className="p-2.5 rounded-xl bg-dark-900 border border-dark-700 hover:border-purple-500/50 hover:text-white transition-all"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5591984560424"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-dark-900 border border-dark-700 hover:border-emerald-500/50 hover:text-emerald-400 transition-all"
              title="WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/_mv_nobrs/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-dark-900 border border-dark-700 hover:border-pink-500/50 hover:text-pink-400 transition-all"
              title="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-dark-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Matheus Nobre. Todos os direitos reservados.</p>
          <p className="flex items-center space-x-1">
            <span>Desenvolvido com</span>
            <Heart className="w-4 h-4 text-purple-500 fill-purple-500" />
            <span>e dedicação.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
