import React, { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';
import { socials, external } from './SocialIcons';
import { Button, Badge, ease } from './ui';
import auraImg from '../assets/eu farmando aura.jpeg';

const intro = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } };
const rise = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } };
const word = { hidden: { y: '110%' }, show: { y: 0, transition: { duration: 0.9, ease } } };

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef(null);

  // Parallax: o conteúdo desce e some enquanto o hero sai da tela
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Tilt 3D da foto seguindo o mouse
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 20 });

  const onMove = (e) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="dot-grid absolute inset-0 pointer-events-none" />

      <motion.div
        style={reduce ? undefined : { y, opacity }}
        variants={intro}
        initial="hidden"
        animate="show"
        className="relative max-w-site mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        <div className="lg:col-span-7 space-y-8">
          <motion.div variants={rise}>
            <Badge>
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-signal opacity-75 motion-safe:animate-ping" />
                <span className="relative w-2 h-2 rounded-full bg-signal" />
              </span>
              Desenvolvedor Full Stack
            </Badge>
          </motion.div>

          <h1 className="font-display font-bold text-ink tracking-hero leading-hero">
            <motion.span variants={rise} className="block text-xl sm:text-2xl font-medium tracking-tight text-muted mb-3">
              Olá, eu sou
            </motion.span>
            {['Matheus', 'Nobre'].map((w, i) => (
              <span key={w} className="block overflow-hidden pb-[0.08em] text-[clamp(3.5rem,11vw,5.5rem)]">
                <motion.span variants={word} className="inline-block">
                  {w}
                  {i === 1 && <span className="text-accent">.</span>}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p variants={rise} className="text-muted text-body-lg max-w-xl">
            Transformando ideias em aplicações web modernas, robustas e de alto desempenho. Buscando sempre a inovação e a
            plena utilização da tecnologia.
          </motion.p>

          <motion.div variants={rise} className="flex flex-wrap items-center gap-3">
            <Button href="#projects">
              Ver projetos
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href="#contact" variant="secondary">
              <Mail className="w-4 h-4" />
              Contato direto
            </Button>
          </motion.div>

          <motion.div variants={rise} className="flex flex-wrap items-center gap-x-6 gap-y-3 text-muted">
            <span className="font-mono text-eyebrow uppercase">Redes</span>
            {socials
              .filter((s) => s.name !== 'Email')
              .map(({ name, href, Icon }) => (
                <a key={name} href={href} {...external} className="inline-flex items-center gap-1.5 text-sm hover:text-ink transition-colors">
                  <Icon className="w-4 h-4" />
                  {name}
                </a>
              ))}
          </motion.div>
        </div>

        <motion.div variants={rise} className="lg:col-span-5 flex justify-center [perspective:1000px]">
          <motion.div
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{ rotateX, rotateY }}
            className="relative w-72 sm:w-96 aspect-[4/5] rounded-lg overflow-hidden border border-line bg-surface"
          >
            <img src={auraImg} alt="Foto de Matheus Nobre" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ground/90 via-transparent to-transparent" />
            <div className="absolute left-5 right-5 bottom-5 flex items-center justify-between font-mono text-eyebrow uppercase">
              <span className="text-ink">Matheus Nobre</span>
              <span className="text-accent">Full Stack</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
