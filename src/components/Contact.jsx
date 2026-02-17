import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const mailtoLink = `mailto:${personalInfo.email}?subject=Message de ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0ADe: ${formData.email}`;
    window.open(mailtoLink);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const contactItems = [
    { icon: <Mail size={22} />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <Phone size={22} />, label: 'Téléphone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: <MapPin size={22} />, label: 'Localisation', value: personalInfo.location, href: null },
  ];

  const socialItems = [
    { icon: <Github size={22} />, label: 'GitHub', href: personalInfo.github },
    { icon: <Linkedin size={22} />, label: 'LinkedIn', href: personalInfo.linkedin },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">

      {/* Fond animé */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <div className="absolute rounded-full blur-3xl animate-float" style={{ width: '500px', height: '500px', background: 'rgba(14, 165, 233, 0.08)', top: '-15%', left: '-10%' }}></div>
        <div className="absolute rounded-full blur-3xl animate-float" style={{ width: '400px', height: '400px', background: 'rgba(139, 92, 246, 0.08)', bottom: '-10%', right: '-5%', animationDelay: '1.5s' }}></div>
        <div className="absolute rounded-full blur-2xl animate-float" style={{ width: '300px', height: '300px', background: 'rgba(14, 165, 233, 0.06)', top: '50%', right: '30%', animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative" style={{ zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Contact</span>
          </h2>
          <p className="text-gray-400 text-lg">Disponible pour une alternance — parlons-en !</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* Infos de contact */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Restons en contact</h3>

            <div className="space-y-4 mb-8">
              {contactItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {item.href ? (
                    <a href={item.href}
                      className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-white/10 transition-all group border border-white/5 hover:border-primary/30"
                      style={{ textDecoration: 'none', color: 'white' }}>
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                        style={{ background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)' }}>
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                        <p className="font-semibold text-white">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 glass rounded-xl border border-white/5">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)' }}>
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                        <p className="font-semibold text-white">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Réseaux sociaux */}
            <div>
              <p className="text-gray-400 text-sm mb-4">Retrouvez-moi sur</p>
              <div className="flex gap-4">
                {socialItems.map((item, i) => (
                  <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3 glass rounded-xl hover:bg-white/10 transition-all border border-white/5 hover:border-primary/30 group"
                    style={{ color: 'white', textDecoration: 'none' }}>
                    <span className="group-hover:text-primary transition-colors">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-8 border border-white/5" style={{ backdropFilter: 'blur(20px)' }}>
              <h3 className="text-2xl font-bold text-white mb-6">Envoyer un message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Votre nom</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jean Dupont"
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 outline-none transition-all"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(14, 165, 233, 0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Votre email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="eliahoubenamous@gmail.com"
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 outline-none transition-all"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(14, 165, 233, 0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Votre message..."
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 outline-none transition-all resize-none"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(14, 165, 233, 0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  style={{ background: sent ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #0ea5e9, #8b5cf6)', boxShadow: '0 0 30px rgba(14, 165, 233, 0.3)' }}
                >
                  <Send size={20} />
                  {sent ? 'Message envoyé !' : 'Envoyer le message'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
