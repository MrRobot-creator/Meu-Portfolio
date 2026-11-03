import React from 'react';
import { socials, external } from './SocialIcons';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-site mx-auto px-4 sm:px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <a href="#" className="font-display text-2xl font-bold tracking-tight text-ink">
            Matheus Nobre<span className="text-accent">.</span>
          </a>
          <p className="text-sm text-muted mt-1">Desenvolvedor Full Stack</p>
        </div>

        <div className="flex items-center gap-2">
          {socials.map(({ name, href, Icon, external: ext }) => (
            <a
              key={name}
              href={href}
              {...(ext && external)}
              title={name}
              aria-label={name}
              className="p-3 rounded-full border border-line text-muted hover:text-on-accent hover:bg-accent hover:border-accent transition-colors"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <p className="text-sm text-muted">© {new Date().getFullYear()} Matheus Nobre. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
