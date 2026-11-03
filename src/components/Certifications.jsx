import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, BarChart3, Code, ExternalLink } from 'lucide-react';
import { Section, BrowserFrame, Card, Tag, inView } from './ui';
import { external } from './SocialIcons';
import certificadoEbac from '../assets/certificado ebac.pdf';
import cyberSecurityEbac from '../assets/cyber security ebac.pdf';
import analiseDadosPython from '../assets/analise de dados python.pdf';

const certificates = [
  {
    title: 'Desenvolvimento Full Stack Web',
    issuer: 'EBAC (Escola Britânica de Artes Criativas e Tecnologia)',
    date: '2025',
    description: 'Formação profissional completa em desenvolvimento full stack web, abrangendo tecnologias frontend e backend modernas.',
    pdfUrl: certificadoEbac,
    Icon: Code,
    tags: ['Full Stack', 'React', 'Node.js', 'TypeScript']
  },
  {
    title: 'Cyber Security & Ethical Hacking',
    issuer: 'EBAC (Escola Britânica de Artes Criativas e Tecnologia)',
    date: '2025',
    description: 'Capacitação em segurança ofensiva e defensiva, análise de vulnerabilidades, testes de penetração e proteção de redes.',
    pdfUrl: cyberSecurityEbac,
    Icon: ShieldCheck,
    tags: ['Cyber Security', 'Ethical Hacking', 'Pentest', 'Segurança']
  },
  {
    title: 'Análise de Dados com Python',
    issuer: 'EBAC (Escola Britânica de Artes Criativas e Tecnologia)',
    date: '2024',
    description: 'Processamento, limpeza e visualização de dados utilizando Pandas, NumPy, Matplotlib e bibliotecas estatísticas.',
    pdfUrl: analiseDadosPython,
    Icon: BarChart3,
    tags: ['Python', 'Pandas', 'NumPy', 'Data Analysis']
  }
];

export default function Certifications() {
  return (
    <Section
      id="certificates"
      index="04"
      eyebrow="Certificações"
      title={<>Certificados & <span className="text-accent">conquistas</span></>}
      intro="Reconhecimentos, formações e especializações oficiais da EBAC que comprovam minha qualificação profissional."
    >
      <motion.div {...inView} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map(({ title, issuer, date, description, pdfUrl, Icon, tags }) => (
          <Card key={title} className="group flex flex-col overflow-hidden">
            <BrowserFrame
              icon={<Icon className="w-3.5 h-3.5 shrink-0" />}
              label={`${title}.pdf`}
              action={
                <a href={pdfUrl} {...external} aria-label={`Abrir certificado ${title}`} className="p-1 text-muted hover:text-ink transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </a>
              }
            >
              <iframe
                src={`${pdfUrl}#view=FitH`}
                title={title}
                tabIndex={-1}
                className="w-full h-full pointer-events-none select-none transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
              />
            </BrowserFrame>

            <div className="flex flex-col flex-1 p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4 mb-1">
                <h3 className="font-display text-title font-semibold tracking-title text-ink">{title}</h3>
                <span className="font-mono text-xs text-muted pt-2">{date}</span>
              </div>
              <p className="text-ink/80 text-sm font-medium mb-3">{issuer}</p>
              <p className="text-muted text-body mb-6">{description}</p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-5">
                  {tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                </div>
                <div className="flex items-center gap-2 pt-4 border-t border-line text-xs text-muted">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Certificado verificado EBAC
                </div>
              </div>
            </div>
          </Card>
        ))}
      </motion.div>
    </Section>
  );
}
