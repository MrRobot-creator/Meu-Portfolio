import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ShoppingBag, Utensils, Film, Gamepad2 } from 'lucide-react';
import { Section, BrowserFrame, Card, Tag, inView } from './ui';
import { external } from './SocialIcons';

const projects = [
  {
    title: 'Bella Chic Boutique',
    description: 'E-commerce moderno e elegante de moda feminina, apresentando coleções, carrinho de compras interativo e layout totalmente responsivo.',
    tags: ['React', 'Tailwind CSS', 'E-commerce', 'JavaScript'],
    live: 'https://bella-chic-boutique.vercel.app/',
    screenshot: 'https://api.microlink.io/?url=https%3A%2F%2Fbella-chic-boutique.vercel.app&screenshot=true&meta=false&embed=screenshot.url',
    Icon: ShoppingBag
  },
  {
    title: 'Restaurante Sabor Executivo',
    description: 'Site institucional interativo para restaurante com cardápio digital, apresentação de pratos, sistema de reservas e contato integrado.',
    tags: ['React', 'CSS', 'UI/UX', 'Responsive'],
    live: 'https://restaurante-sabor-executivo.vercel.app/',
    screenshot: 'https://api.microlink.io/?url=https%3A%2F%2Frestaurante-sabor-executivo.vercel.app&screenshot=true&meta=false&embed=screenshot.url',
    Icon: Utensils
  },
  {
    title: 'Projeto Disney+',
    description: 'Clone da interface do Disney+ com carrosséis de filmes e séries, navegação dinâmica e design fiel à plataforma de streaming.',
    tags: ['React', 'Styled Components', 'API Integration', 'JavaScript'],
    live: 'https://projeto-disney-nktp.vercel.app/',
    screenshot: 'https://api.microlink.io/?url=https%3A%2F%2Fprojeto-disney-nktp.vercel.app&screenshot=true&meta=false&embed=screenshot.url',
    Icon: Film
  },
  {
    title: 'E-play',
    description: 'Plataforma de e-commerce de jogos digitais completa com vitrine de games, categorias, carrinho e integração com checkout.',
    tags: ['React', 'Redux', 'TypeScript', 'Styled Components'],
    live: 'https://eplay-seven-phi.vercel.app/',
    screenshot: 'https://api.microlink.io/?url=https%3A%2F%2Feplay-seven-phi.vercel.app&screenshot=true&meta=false&embed=screenshot.url',
    Icon: Gamepad2
  }
];

export default function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Trabalhos"
      title={<>Projetos em <span className="text-accent">destaque</span></>}
      intro="Prévia visual da interface real dos projetos desenvolvidos."
    >
      <motion.div {...inView} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(({ title, description, tags, live, screenshot, Icon }, i) => (
          <Card key={title} className="group flex flex-col overflow-hidden">
            <BrowserFrame
              icon={<Icon className="w-3.5 h-3.5 shrink-0" />}
              label={live.replace('https://', '')}
            >
              <a href={live} {...external} aria-label={`Abrir ${title}`} className="block h-full">
                <img
                  src={screenshot}
                  alt={`Preview de ${title}`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
                />
              </a>
            </BrowserFrame>

            <div className="flex flex-col flex-1 p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-display text-title font-semibold tracking-title text-ink">{title}</h3>
                <a
                  href={live}
                  {...external}
                  aria-label={`Abrir ${title} em nova aba`}
                  className="shrink-0 w-10 h-10 rounded-full border border-line-strong grid place-items-center text-ink group-hover:bg-accent group-hover:text-on-accent group-hover:border-accent transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                </a>
              </div>
              <p className="text-muted text-body mb-6">{description}</p>
              <div className="mt-auto flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs text-subtle mr-2">0{i + 1}</span>
                {tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
              </div>
            </div>
          </Card>
        ))}
      </motion.div>
    </Section>
  );
}
