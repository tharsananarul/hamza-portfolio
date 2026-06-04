"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageWrapper } from "@/components/PageWrapper";
import { Send, CheckCircle2, Mail, Phone } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    
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
        setStatus("success");
      } else {
        throw new Error();
      }
    } catch (error) {
      alert("Une erreur est survenue. Veuillez réessayer ou m'envoyer un mail directement.");
      setStatus("idle");
    }
  };

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-6 py-28 md:py-40">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
          
          <div className="space-y-12 md:space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <h1 
                className="font-display font-black leading-[0.9] tracking-tighter mb-8 uppercase text-text-primary"
                style={{ fontSize: "clamp(3rem, 10vw, 6rem)" }}
              >
                Disons-nous <br />
                <span className="text-accent-secondary italic-display">bonjour.</span>
              </h1>
              <div className="absolute left-1/3 -top-8 font-script text-5xl md:text-8xl text-accent-primary/20 rotate-[-4deg] select-none pointer-events-none">
                Contact
              </div>
              <p className="text-lg md:text-xl font-medium leading-relaxed max-w-md mt-8 text-text-secondary">
                Recherche d'une alternance en communication pour septembre 2026 ou d'un projet créatif ? 
                Je suis à votre écoute pour collaborer.
              </p>
            </motion.div>
            
            <div className="grid gap-6">
              {[
                { 
                  icon: <Mail size={20} />, 
                  label: "Email Officiel", 
                  value: "hayyz931@gmail.com", 
                  href: "mailto:hayyz931@gmail.com" 
                },
                { 
                  icon: <Phone size={20} />, 
                  label: "Téléphone", 
                  value: "07 84 98 50 77", 
                  href: "tel:0784985077" 
                },
                { 
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>, 
                  label: "TikTok", 
                  value: "@kisame931", 
                  href: "https://www.tiktok.com/@kisame931" 
                }
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                  className="group flex items-center gap-6 p-6 neo-card-khaki shadow-md"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white border-2 border-text-primary text-accent-primary flex items-center justify-center shadow-[2px_2px_0px_var(--color-text-primary)] group-hover:scale-105 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1 font-condensed text-text-primary">{item.label}</p>
                    <p className="text-base md:text-lg font-bold group-hover:text-accent-secondary transition-colors text-text-primary uppercase tracking-tight">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="neo-card-terracotta p-8 md:p-14"
          >
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-8 py-12">
                <div className="w-24 h-24 rounded-full bg-accent-secondary flex items-center justify-center text-white border-2 border-text-primary shadow-xl shadow-accent-secondary/20">
                  <CheckCircle2 size={48} />
                </div>
                <div className="space-y-3">
                  <h2 className="text-3xl font-display font-black text-text-primary uppercase">Message Envoyé !</h2>
                  <p className="font-medium opacity-70 text-text-primary">
                    Merci beaucoup. Je vous répondrai <br /> dans les plus brefs délais.
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-accent-primary font-bold hover:underline tracking-widest text-xs uppercase font-condensed"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
               <form 
                action="https://formsubmit.co/hayyz931@gmail.com" 
                method="POST"
                className="space-y-8"
              >
                {/* Configuration FormSubmit */}
                <input type="hidden" name="_next" value="https://tharsananarul.github.io/hamza-portfolio/contact" />
                <input type="hidden" name="_subject" value="Nouveau message depuis le Portfolio !" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] ml-6 opacity-60 font-condensed text-text-primary">Nom Complet</label>
                  <input
                    name="name"
                    required
                    type="text"
                    placeholder="Jean Dupont"
                    className="w-full bg-white border-2 border-text-primary rounded-2xl px-8 py-5 outline-none focus:bg-bg-secondary focus:shadow-[3px_3px_0px_var(--color-text-primary)] transition-all font-medium text-text-primary placeholder:opacity-30 text-sm"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] ml-6 opacity-60 font-condensed text-text-primary">Email</label>
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="jean@exemple.com"
                    className="w-full bg-white border-2 border-text-primary rounded-2xl px-8 py-5 outline-none focus:bg-bg-secondary focus:shadow-[3px_3px_0px_var(--color-text-primary)] transition-all font-medium text-text-primary placeholder:opacity-30 text-sm"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] ml-6 opacity-60 font-condensed text-text-primary">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Dites-moi tout..."
                    className="w-full bg-white border-2 border-text-primary rounded-[2.5rem] px-8 py-6 outline-none focus:bg-bg-secondary focus:shadow-[3px_3px_0px_var(--color-text-primary)] transition-all font-medium text-text-primary placeholder:opacity-30 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-neo-terracotta py-6 rounded-full font-bold text-sm flex items-center justify-center gap-3 shadow-xl transition-all font-condensed"
                >
                  Envoyer le message
                  <Send size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}
