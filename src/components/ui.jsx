import React from 'react';
import { motion } from 'motion/react';

export const ease = [0.16, 1, 0.3, 1];

export const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

// Spread on a motion element: its `reveal` children animate in once it scrolls into view
export const inView = { variants: stagger, initial: 'hidden', whileInView: 'show', viewport: { once: true, amount: 0.15 } };

export const lift = { y: -4, transition: { duration: 0.2 } };

export function Section({ id, index, eyebrow, title, intro, children }) {
  return (
    <section id={id} className="border-t border-line py-16 sm:py-24">
      <div className="max-w-site mx-auto px-4 sm:px-6">
        <motion.div {...inView} className="grid lg:grid-cols-12 gap-6 mb-12">
          <div className="lg:col-span-7">
            <motion.p variants={reveal} className="font-mono text-eyebrow uppercase text-muted mb-4">
              <span className="text-accent">{index}</span> — {eyebrow}
            </motion.p>
            <motion.h2 variants={reveal} className="font-display text-4xl sm:text-display font-bold leading-none tracking-display text-ink">
              {title}
            </motion.h2>
          </div>
          {intro && (
            <motion.p variants={reveal} className="lg:col-span-5 lg:self-end text-muted text-body-lg">
              {intro}
            </motion.p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

const buttonVariants = {
  primary: 'bg-accent text-on-accent hover:shadow-glow',
  secondary: 'bg-surface border border-line-strong text-ink hover:bg-surface-raised',
};

export function Button({ as = 'a', variant = 'primary', className = '', children, ...props }) {
  const Comp = as === 'button' ? motion.button : motion.a;
  return (
    <Comp
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md font-medium transition-[box-shadow,background-color] ${buttonVariants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}

// Reveals with its parent's `inView` and lifts on hover
export function Card({ className = '', children }) {
  return (
    <motion.article
      variants={reveal}
      whileHover={lift}
      className={`rounded-lg bg-surface border border-line hover:border-line-strong hover:shadow-lift transition-[border-color,box-shadow] duration-200 ${className}`}
    >
      {children}
    </motion.article>
  );
}

export function IconTile({ Icon, className = 'w-12 h-12' }) {
  return (
    <div className={`shrink-0 rounded-md bg-accent-soft text-accent grid place-items-center ${className}`}>
      <Icon className="w-5 h-5" />
    </div>
  );
}

export function Badge({ className = '', children }) {
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-raised border border-line font-mono text-eyebrow uppercase text-muted ${className}`}>
      {children}
    </span>
  );
}

export function Tag({ children }) {
  return (
    <span className="inline-block px-2.5 py-1 rounded-sm bg-surface-raised border border-line font-mono text-eyebrow uppercase text-muted">
      {children}
    </span>
  );
}

export function BrowserFrame({ icon, label, action, children }) {
  return (
    <div className="relative h-60 flex flex-col overflow-hidden border-b border-line bg-ground">
      <div className="flex items-center gap-3 px-3 py-2 border-b border-line bg-surface">
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => <span key={i} className="w-2.5 h-2.5 rounded-full bg-line-strong" />)}
        </div>
        <div className="flex-1 min-w-0 flex items-center gap-2 px-3 py-1 rounded-sm bg-ground border border-line text-muted">
          {icon}
          <span className="truncate font-mono text-[11px]">{label}</span>
        </div>
        {action}
      </div>
      <div className="relative flex-1 overflow-hidden">{children}</div>
    </div>
  );
}
