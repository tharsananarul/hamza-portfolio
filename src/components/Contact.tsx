"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Phone } from "lucide-react";

export function Contact() {
  const [formState, setFormState] = useState<{
    submitting: boolean;
    submitted: boolean;
    error: string | null;
  }>({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ ...formState, submitting: true });
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/hayyz931@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setFormState({ submitting: false, submitted: true, error: null });
        // Reset after 3s
        setTimeout(() => setFormState(prev => ({ ...prev, submitted: false })), 3000);
      } else {
        throw new Error();
      }
    } catch (error) {
      alert("Une erreur est survenue. Veuillez réessayer.");
      setFormState({ submitting: false, submitted: false, error: "Erreur" });
    }
  };

  return (
    <section id="contact" className="py-12 md:py-24 px-6 bg-transparent relative z-10 text-text-primary">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent-primary font-bold mb-4 block font-condensed">
            Contact
          </span>
          <h3 className="text-4xl md:text-6xl font-display font-black mb-8 text-text-primary uppercase tracking-tighter leading-tight">
            Travaillons <br />
            <span className="text-accent-secondary italic-display">ensemble.</span>
          </h3>
          <p className="text-text-secondary text-lg mb-12 max-w-md font-medium leading-relaxed">
            Vous avez un projet de communication ou vous souhaitez simplement échanger ? 
            N'hésitez pas à m'envoyer un message.
          </p>

          <div className="space-y-8">
            {/* Email */}
            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-white border-2 border-text-primary rounded-2xl text-accent-primary shadow-[3px_3px_0px_var(--color-text-primary)] group-hover:translate-y-[-2px] group-hover:shadow-[4px_4px_0px_var(--color-text-primary)] transition-all duration-300">
                <Mail size={24} />
              </div>
              <div>
                <span className="block text-[10px] text-text-secondary/50 uppercase tracking-widest font-condensed font-bold mb-1">Email Officiel</span>
                <a href="mailto:hayyz931@gmail.com" className="text-xl md:text-2xl font-display font-bold hover:text-accent-primary transition-colors text-text-primary">
                  hayyz931@gmail.com
                </a>
              </div>
            </div>
            {/* Téléphone */}
            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-white border-2 border-text-primary rounded-2xl text-accent-primary shadow-[3px_3px_0px_var(--color-text-primary)] group-hover:translate-y-[-2px] group-hover:shadow-[4px_4px_0px_var(--color-text-primary)] transition-all duration-300">
                <Phone size={24} />
              </div>
              <div>
                <span className="block text-[10px] text-text-secondary/50 uppercase tracking-widest font-condensed font-bold mb-1">Téléphone</span>
                <a href="tel:0784985077" className="text-xl md:text-2xl font-display font-bold hover:text-accent-primary transition-colors text-text-primary">
                  07 84 98 50 77
                </a>
              </div>
            </div>
          </div>

          {/* Social Links - TikTok */}
          <div className="flex gap-4 mt-16">
            <a 
              href="https://www.tiktok.com/@kisame931" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 px-6 py-4 bg-white neo-border rounded-2xl hover:bg-accent-primary text-text-primary hover:text-white transition-all shadow-[4px_4px_0px_var(--color-text-primary)] group"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-primary group-hover:text-white transition-colors">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
              <span className="font-display font-bold text-text-primary group-hover:text-white transition-colors text-sm">TikTok</span>
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="neo-card-terracotta p-5 sm:p-8 md:p-12"
        >
          {formState.submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="w-16 h-16 bg-accent-secondary rounded-full flex items-center justify-center text-white mb-4 border-2 border-text-primary shadow-[3px_3px_0px_var(--color-text-primary)]">
                <Send size={24} />
              </div>
              <h3 className="text-2xl font-bold font-display text-text-primary">Message envoyé !</h3>
              <p className="text-text-secondary text-sm">Merci, Hamza vous répondra dans les plus brefs délais.</p>
            </div>
          ) : (
            <form 
              action="https://formsubmit.co/hayyz931@gmail.com" 
              method="POST"
              className="space-y-6 relative z-10"
            >
              {/* Configuration FormSubmit */}
              <input type="hidden" name="_next" value="https://tharsananarul.github.io/hamza-portfolio/" />
              <input type="hidden" name="_subject" value="Nouveau message depuis la page d'accueil !" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest opacity-80 ml-4 font-condensed">Nom complet</label>
                  <input
                    name="name"
                    required
                    type="text"
                    className="w-full bg-white border-2 border-text-primary rounded-xl px-4 py-3 sm:px-5 sm:py-4 focus:outline-none focus:bg-bg-secondary focus:shadow-[3px_3px_0px_var(--color-text-primary)] transition-all text-text-primary placeholder:opacity-30 text-sm"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest opacity-80 ml-4 font-condensed">Email</label>
                  <input
                    name="email"
                    required
                    type="email"
                    className="w-full bg-white border-2 border-text-primary rounded-xl px-4 py-3 sm:px-5 sm:py-4 focus:outline-none focus:bg-bg-secondary focus:shadow-[3px_3px_0px_var(--color-text-primary)] transition-all text-text-primary placeholder:opacity-30 text-sm"
                    placeholder="jean@exemple.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest opacity-80 ml-4 font-condensed">Objet</label>
                <input
                  name="subject"
                  required
                  type="text"
                  className="w-full bg-white border-2 border-text-primary rounded-xl px-4 py-3 sm:px-5 sm:py-4 focus:outline-none focus:bg-bg-secondary focus:shadow-[3px_3px_0px_var(--color-text-primary)] transition-all text-text-primary placeholder:opacity-30 text-sm"
                  placeholder="Collaboration..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest opacity-80 ml-4 font-condensed">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-white border-2 border-text-primary rounded-2xl px-4 py-3 sm:px-5 sm:py-4 focus:outline-none focus:bg-bg-secondary focus:shadow-[3px_3px_0px_var(--color-text-primary)] transition-all text-text-primary placeholder:opacity-30 text-sm resize-none"
                  placeholder="Dites-moi tout !"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-3 sm:py-4 btn-neo-terracotta font-bold flex items-center justify-center gap-2"
              >
                Envoyer <Send size={16} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
