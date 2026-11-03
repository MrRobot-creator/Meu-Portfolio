import React from 'react';
import { motion } from 'motion/react';
import { Database, Wrench, Globe, Server } from 'lucide-react';
import { Section, Card, IconTile, Tag, inView, stagger } from './ui';

const skillCategories = [
  { title: 'Frontend', Icon: Globe, skills: ['React', 'JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS', 'HTML5 / CSS3', 'Vite'] },
  { title: 'Backend', Icon: Server, skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'Authentication'] },
  { title: 'Banco de Dados', Icon: Database, skills: ['SQL', 'PostgreSQL', 'SQLite', 'MongoDB'] },
  { title: 'Ferramentas & DevOps', Icon: Wrench, skills: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Docker', 'npm / pnpm'] }
];

const chip = { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } };

export default function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      eyebrow="Stack"
      title={<>Habilidades <span className="text-accent">técnicas</span></>}
      intro="Tecnologias, linguagens e ferramentas que utilizo no dia a dia para construir produtos incríveis."
    >
      <motion.div {...inView} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map(({ title, Icon, skills }) => (
          <Card key={title} className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <IconTile Icon={Icon} className="w-10 h-10" />
              <h3 className="font-display text-xl font-semibold tracking-title text-ink">{title}</h3>
            </div>

            <motion.ul variants={stagger} className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <motion.li key={skill} variants={chip}>
                  <Tag>{skill}</Tag>
                </motion.li>
              ))}
            </motion.ul>
          </Card>
        ))}
      </motion.div>
    </Section>
  );
}
