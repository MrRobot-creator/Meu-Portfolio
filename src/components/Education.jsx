import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react';
import { GraduationCap, Calendar } from 'lucide-react';
import { Section, IconTile, Badge, inView, reveal } from './ui';

const educations = [
  {
    degree: 'Estudante de Desenvolvimento Full Stack Python Web',
    institution: 'Instituição de Ensino Ebac',
    period: 'Em andamento / Concluído',
    description: 'Formação focada em fundamentos de algoritmos, arquitetura de sistemas, engenharia de software e desenvolvimento web avançado.'
  },
  {
    degree: 'Cursos De Analise De Dados Python e Cyberscurity',
    institution: 'Instituição de Ensino Ebac',
    period: 'Em andamento/Contínuo',
    description: 'Capacitação prática em tecnologias modernas como React, Node.js, bancos de dados relacionais e não-relacionais, e metodologias ágeis, e segurança da informação.'
  }
];

export default function Education() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  // A linha da timeline "desenha" conforme a rolagem
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 50%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <Section
      id="education"
      index="05"
      eyebrow="Formação"
      title={<>Onde <span className="text-accent">estudei</span></>}
      intro="Minha trajetória acadêmica e base de conhecimentos técnicos."
    >
      <div ref={ref} className="relative max-w-4xl">
        <div className="absolute left-[11px] top-8 bottom-8 w-px bg-line" />
        <motion.div style={reduce ? undefined : { scaleY }} className="absolute left-[11px] top-8 bottom-8 w-px bg-accent origin-top" />

        <motion.ol {...inView} className="space-y-6">
          {educations.map((edu) => (
            <motion.li key={edu.degree} variants={reveal} className="relative pl-12">
              <span className="absolute left-0 top-8 w-6 h-6 rounded-full bg-ground border border-line-strong grid place-items-center">
                <span className="w-2 h-2 rounded-full bg-accent" />
              </span>

              <div className="p-6 sm:p-8 rounded-lg bg-surface border border-line hover:border-line-strong transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <IconTile Icon={GraduationCap} />
                    <div>
                      <h3 className="font-display text-xl sm:text-title font-semibold tracking-title text-ink">{edu.degree}</h3>
                      <p className="text-muted text-sm font-medium mt-1">{edu.institution}</p>
                    </div>
                  </div>

                  <Badge className="self-start shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    {edu.period}
                  </Badge>
                </div>

                <p className="text-muted text-body sm:pl-16">{edu.description}</p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </Section>
  );
}
