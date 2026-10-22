import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { GithubIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const contactCards = [
    {
      icon: <Mail className="w-6 h-6 text-purple-400" />,
      title: 'Email',
      value: 'matheusnsenado6@gmail.com',
      href: 'mailto:matheusnsenado6@gmail.com',
      color: 'hover:border-purple-500/50'
    },
    {
      icon: <WhatsAppIcon className="w-6 h-6 text-emerald-400" />,
      title: 'WhatsApp',
      value: '(91) 98456-0424',
      href: 'https://wa.me/5591984560424',
      color: 'hover:border-emerald-500/50'
    },
    {
      icon: <GithubIcon className="w-6 h-6 text-gray-200" />,
      title: 'GitHub',
      value: 'MrRobot-creator',
      href: 'https://github.com/MrRobot-creator',
      color: 'hover:border-gray-500/50'
    },
    {
      icon: <InstagramIcon className="w-6 h-6 text-pink-400" />,
      title: 'Instagram',
      value: '@_mv_nobrs',
      href: 'https://www.instagram.com/_mv_nobrs/',
      color: 'hover:border-pink-500/50'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-dark-900 border-t border-dark-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Vamos Conversar?</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg">
            Tem um projeto em mente, uma oportunidade ou quer apenas trocar uma ideia sobre tecnologia? Entre em contato comigo!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-white mb-2">Informações de Contato</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Escolha o canal de sua preferência para conversarmos rapidamente. Respondo o mais breve possível.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactCards.map((card, index) => (
                <a
                  key={index}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-5 rounded-2xl bg-dark-950 border border-dark-700 ${card.color} transition-all duration-300 flex items-center space-x-4 shadow-lg group hover:scale-[1.01]`}
                >
                  <div className="p-3 rounded-xl bg-dark-900 border border-dark-700 group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{card.title}</h4>
                    <p className="text-white font-medium text-sm sm:text-base">{card.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-dark-950 p-8 rounded-3xl border border-dark-700 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 blur-3xl pointer-events-none" />

            <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
              <MessageSquare className="w-6 h-6 text-purple-400" />
              <span>Envie uma Mensagem</span>
            </h3>

            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">Mensagem Enviada!</h4>
                <p className="text-gray-400 text-sm max-w-md mx-auto">
                  Obrigado pelo contato! Sua mensagem foi simulada com sucesso. Você também pode me chamar diretamente no WhatsApp ou email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Seu Nome</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Digite seu nome"
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-dark-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Seu Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu.email@exemplo.com"
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-dark-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Sua Mensagem</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Escreva sua mensagem aqui..."
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-dark-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-all shadow-lg shadow-purple-600/30 flex items-center justify-center space-x-2 hover:scale-[1.01]"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
