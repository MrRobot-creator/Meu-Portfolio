import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Send, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { socials, external, WhatsAppIcon } from './SocialIcons';
import { Section, Button, inView, reveal, ease } from './ui';

const fields = [
  { id: 'name', label: 'Seu nome', type: 'text', placeholder: 'Digite seu nome' },
  { id: 'email', label: 'Seu email', type: 'email', placeholder: 'seu.email@exemplo.com' },
  { id: 'message', label: 'Sua mensagem', placeholder: 'Escreva sua mensagem aqui...' }
];

const inputClass =
  'w-full px-4 py-3 rounded-sm bg-surface-raised border border-line text-ink placeholder:text-muted focus:outline-none focus:border-accent transition-colors';

const hrefOf = (name) => socials.find((s) => s.name === name).href;

const sentCopy = {
  email: 'Seu app de email abriu com a mensagem pronta. É só clicar em enviar. Se nada abriu, escreva direto para matheusnsenado6@gmail.com.',
  whatsapp: 'O WhatsApp abriu em outra aba com a mensagem pronta. É só enviar por lá.'
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // Canal usado no envio ('email' | 'whatsapp'), null enquanto o formulário está visível
  const [sentVia, setSentVia] = useState(null);

  // Sem backend: abre o email ou o WhatsApp do visitante com a mensagem já preenchida
  const handleSubmit = (e) => {
    e.preventDefault();
    const via = e.nativeEvent.submitter?.value === 'whatsapp' ? 'whatsapp' : 'email';
    const { name, email, message } = formData;

    if (via === 'whatsapp') {
      const text = `Olá, Matheus! Sou ${name} (${email}).\n\n${message}`;
      window.open(`${hrefOf('WhatsApp')}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    } else {
      const subject = `Contato pelo portfolio — ${name}`;
      const body = `${message}\n\n${name}\n${email}`;
      window.location.href = `${hrefOf('Email')}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

    setSentVia(via);
    setTimeout(() => {
      setSentVia(null);
      setFormData({ name: '', email: '', message: '' });
    }, 8000);
  };

  return (
    <Section
      id="contact"
      index="06"
      eyebrow="Contato"
      title={<>Vamos <span className="text-accent">conversar?</span></>}
      intro="Tem um projeto em mente, uma oportunidade ou quer apenas trocar uma ideia sobre tecnologia? Entre em contato comigo!"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <motion.ul {...inView} className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
          {socials.map(({ name, handle, href, Icon, external: ext }) => (
            <motion.li key={name} variants={reveal}>
              <motion.a
                href={href}
                {...(ext && external)}
                whileHover={{ x: 4 }}
                className="group flex items-center gap-4 p-5 rounded-lg bg-surface border border-line hover:border-line-strong transition-colors"
              >
                <div className="shrink-0 w-12 h-12 rounded-md bg-surface-raised border border-line text-ink grid place-items-center group-hover:bg-accent group-hover:text-on-accent group-hover:border-accent transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-eyebrow uppercase text-muted">{name}</p>
                  <p className="text-ink font-medium truncate">{handle}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-ink transition-colors" />
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
          className="lg:col-span-7 p-6 sm:p-8 rounded-lg bg-surface border border-line"
        >
          <h3 className="font-display text-title font-semibold tracking-title text-ink mb-6">Envie uma mensagem</h3>

          <AnimatePresence mode="wait" initial={false}>
            {sentVia ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease }}
                className="py-16 text-center space-y-4"
                role="status"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18, delay: 0.1 }}
                  className="w-16 h-16 rounded-full bg-accent-soft text-accent grid place-items-center mx-auto"
                >
                  <CheckCircle2 className="w-8 h-8" />
                </motion.div>
                <h4 className="font-display text-xl font-semibold text-ink">Quase lá!</h4>
                <p className="text-muted text-sm max-w-md mx-auto">{sentCopy[sentVia]}</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {fields.map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block text-sm font-medium text-muted mb-2">{label}</label>
                    {type ? (
                      <input
                        id={id}
                        type={type}
                        required
                        value={formData[id]}
                        onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
                        placeholder={placeholder}
                        className={inputClass}
                      />
                    ) : (
                      <textarea
                        id={id}
                        rows={4}
                        required
                        value={formData[id]}
                        onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
                        placeholder={placeholder}
                        className={`${inputClass} resize-none`}
                      />
                    )}
                  </div>
                ))}

                <div className="grid sm:grid-cols-2 gap-3">
                  <Button as="button" type="submit" value="email" className="w-full">
                    Enviar pelo email
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </Button>
                  <Button as="button" type="submit" value="whatsapp" variant="secondary" className="w-full">
                    <WhatsAppIcon className="w-4 h-4" />
                    Enviar pelo WhatsApp
                  </Button>
                </div>
                <p className="text-muted text-sm">Abre seu app de email ou o WhatsApp com a mensagem já preenchida.</p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </Section>
  );
}
