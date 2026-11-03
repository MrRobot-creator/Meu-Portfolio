import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { socials, external } from './SocialIcons';
import { ease } from './ui';

const navLinks = [
  { name: 'Quem Sou', href: '#about' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Certificados', href: '#certificates' },
  { name: 'Educação', href: '#education' },
  { name: 'Contato', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease }}
      className="fixed top-0 inset-x-0 z-50 px-4 pt-4"
    >
      <nav className="max-w-site mx-auto flex items-center justify-between gap-4 h-14 pl-5 pr-2 rounded-full border border-line bg-ground/70 backdrop-blur-xl">
        <a href="#" className="font-display text-xl font-bold tracking-tight text-ink">
          MN<span className="text-accent">.</span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative block px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === link.href ? 'text-on-accent' : 'text-muted hover:text-ink'
                }`}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-accent"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative">{link.name}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-1">
          {socials.map(({ name, href, Icon, external: ext }) => (
            <a
              key={name}
              href={href}
              {...(ext && external)}
              title={name}
              aria-label={name}
              className="p-2.5 rounded-full text-muted hover:text-ink hover:bg-surface-raised transition-colors"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          className="lg:hidden p-2.5 rounded-full text-ink hover:bg-surface-raised transition-colors"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease }}
            className="lg:hidden max-w-site mx-auto mt-2 p-2 rounded-lg border border-line bg-surface/95 backdrop-blur-xl origin-top"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * i, duration: 0.3, ease }}
                className={`block px-4 py-3 rounded-md text-base font-medium ${
                  active === link.href ? 'bg-accent text-on-accent' : 'text-ink hover:bg-surface-raised'
                }`}
              >
                {link.name}
              </motion.a>
            ))}
            <div className="flex justify-center gap-2 mt-2 pt-3 border-t border-line">
              {socials.map(({ name, href, Icon, external: ext }) => (
                <a key={name} href={href} {...(ext && external)} aria-label={name} className="p-3 rounded-full text-muted hover:text-ink">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
