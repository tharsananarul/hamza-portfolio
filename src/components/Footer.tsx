"use client";

import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Magnetic } from "./Magnetic";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative mt-20 pt-24 pb-12 px-6 md:px-12 lg:px-24 bg-bg-secondary/40 border-t-2 border-text-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 md:gap-24 mb-20">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-10">
            <Link href="/" className="flex items-center gap-5 group">
              <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-2xl bg-accent-primary/10 border-2 border-text-primary text-text-primary transition-all duration-300 group-hover:shadow-[2px_2px_0px_var(--color-text-primary)] shadow-sm">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 md:w-7 md:h-7 text-text-primary">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M21 9H3" />
                  <path d="M21 15H3" />
                  <path d="M12 3v18" />
                  <path d="M7.5 3v18" />
                  <path d="M16.5 3v18" />
                </svg>
              </div>
              <div>
                <span className="font-display font-black text-2xl md:text-3xl text-text-primary tracking-tighter uppercase">HAMZA CISSE<span className="text-accent-secondary italic">.</span></span>
                <p className="text-[10px] uppercase tracking-[0.4em] text-accent-primary font-bold mt-1 font-condensed">Portfolio 2026</p>
              </div>
            </Link>
            <p className="text-text-secondary text-base font-medium leading-relaxed max-w-sm opacity-90">
              Passionné par le montage vidéo, l'image et la création de contenus dynamiques.
            </p>
            <div className="flex gap-5">
              {[
                { 
                  href: "https://www.tiktok.com/@kisame931", 
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                  ), 
                  label: "TikTok"
                },
                { 
                  href: "mailto:hayyz931@gmail.com", 
                  icon: <Mail size={22} />, 
                  label: "Email"
                }
              ].map((social, i) => (
                <Magnetic key={i} strength={0.2}>
                  <motion.a 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className="relative group w-14 h-14 rounded-3xl bg-white border-2 border-text-primary flex items-center justify-center text-text-primary transition-all duration-300 shadow-[3px_3px_0px_var(--color-text-primary)] hover:shadow-[4px_4px_0px_var(--color-text-primary)] active:translate-y-[1px] active:shadow-[1px_1px_0px_var(--color-text-primary)] overflow-hidden"
                  >
                    {/* Background hover color */}
                    <div className="absolute inset-0 bg-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Icon */}
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                      {social.icon}
                    </span>
                    
                    {/* Tooltip hint */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-text-primary border-2 border-text-primary text-white text-[9px] font-bold uppercase tracking-widest rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-[2px_2px_0px_var(--color-text-primary)]">
                      {social.label}
                    </div>
                  </motion.a>
                </Magnetic>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 pt-4">
            <div className="space-y-8">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-primary font-condensed">Navigation</h4>
              <ul className="space-y-5">
                {["Accueil", "À propos", "Compétences", "Projets"].map((link) => (
                  <li key={link}>
                    <Link 
                      href={link === "Accueil" ? "/" : `/${link.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} 
                      className="text-text-secondary hover:text-accent-primary transition-colors text-sm font-bold inline-flex items-center gap-2 group"
                    >
                      {link} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-1 translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-primary font-condensed">Contact</h4>
              <ul className="space-y-5">
                <li>
                  <a href="mailto:hayyz931@gmail.com" className="text-text-secondary hover:text-accent-primary transition-colors text-sm font-bold">
                    Email Officiel
                  </a>
                </li>
                <li>
                  <span className="text-text-secondary text-sm font-bold">
                    Tél : 07 84 98 50 77
                  </span>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@kisame931" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-primary transition-colors text-sm font-bold">
                    TikTok
                  </a>
                </li>
              </ul>
            </div>

            <div className="hidden md:block space-y-8">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-primary font-condensed">Localisation</h4>
              <div className="space-y-2">
                <p className="text-text-primary text-sm font-bold">Île-de-France, France</p>
                <p className="text-accent-secondary text-[10px] font-bold uppercase tracking-widest italic opacity-80">Ouvert à la mobilité</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t-2 border-text-primary/15 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <p className="text-[10px] text-text-secondary opacity-75 uppercase tracking-[0.2em] font-bold font-condensed">
              © 2026 Hamza Cisse — Tous droits réservés
            </p>
            <p className="text-[10px] text-text-secondary opacity-75 uppercase tracking-[0.2em] font-bold font-condensed">
              Réalisé par{" "}
              <a 
                href="https://www.instagram.com/tharsh.studio/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-text-primary hover:text-accent-primary transition-colors duration-300 underline underline-offset-4 decoration-accent-primary/30"
              >
                @tharsh.studio
              </a>
            </p>
          </div>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-[10px] text-accent-primary uppercase tracking-[0.4em] font-bold hover:text-text-primary transition-all duration-300 font-condensed"
          >
            Back to Top
            <div className="w-10 h-10 rounded-full border-2 border-text-primary flex items-center justify-center bg-white shadow-[2px_2px_0px_var(--color-text-primary)] group-hover:border-accent-primary group-hover:bg-accent-primary group-hover:text-white group-hover:shadow-[3px_3px_0px_var(--color-text-primary)] group-active:translate-x-0.5 group-active:translate-y-0.5 transition-all duration-300">
              <ArrowUpRight size={16} className="-rotate-45" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
