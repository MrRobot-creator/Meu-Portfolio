import React, { useState } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { GithubIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Quem Sou', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Certificados', href: '#certificates' },
    { name: 'Educação', href: '#education' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-950/80 backdrop-blur-md border-b border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Matheus Nobre
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://github.com/MrRobot-creator"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white hover:bg-dark-700 rounded-lg transition-all"
              title="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:matheusnsenado6@gmail.com"
              className="p-2 text-gray-400 hover:text-white hover:bg-dark-700 rounded-lg transition-all"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5591984560424"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-emerald-400 hover:bg-dark-700 rounded-lg transition-all"
              title="WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/_mv_nobrs/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-pink-400 hover:bg-dark-700 rounded-lg transition-all"
              title="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-dark-900 border-b border-dark-700 px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-dark-700 rounded-md text-base font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="flex space-x-4 pt-4 border-t border-dark-700 justify-center">
            <a
              href="https://github.com/MrRobot-creator"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:matheusnsenado6@gmail.com"
              className="p-2 text-gray-400 hover:text-white"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5591984560424"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-emerald-400"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/_mv_nobrs/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-pink-400"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
