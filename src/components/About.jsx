import React from 'react';
import { motion } from 'motion/react';
import { Code, Rocket, ShieldCheck } from 'lucide-react';
import { Section, Card, IconTile, inView } from './ui';

const highlights = [
  {
    Icon: Code,
    title: 'Desenvolvimento Web',
    description: 'Criação de aplicações web modernas, responsivas e escaláveis utilizando as melhores tecnologias do mercado.'
  },
  {
    Icon: Rocket,
    title: 'Performance & UX',
    description: 'Foco total em interfaces dinâmicas, intuitivas e otimizadas para a melhor experiência do usuário.'
  },
  {
    Icon: ShieldCheck,
    title: 'Boas Práticas & Limpeza',
    description: 'Código limpo, arquitetura robusta, testes rigorosos e padrões sólidos de engenharia de software.'
  }
];

export default function About() {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="Sobre"
      title={<>Quem <span className="text-accent">sou</span></>}
      intro="Sou um desenvolvedor estudante de tecnologia e resolução de problemas. Busco sempre criar soluções inovadoras, buscando alta performance técnica."
    >
      <motion.div {...inView} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlights.map(({ Icon, title, description }, i) => (
          <Card key={title} className="p-8">
            <div className="flex items-center justify-between mb-10">
              <IconTile Icon={Icon} />
              <span className="font-mono text-xs text-subtle">0{i + 1}</span>
            </div>
            <h3 className="font-display text-title font-semibold tracking-title text-ink mb-3">{title}</h3>
            <p className="text-muted text-body">{description}</p>
          </Card>
        ))}
      </motion.div>
    </Section>
  );
}
