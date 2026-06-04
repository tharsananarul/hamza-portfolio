"use client";

import { motion } from "framer-motion";
import { Layers, Target, Zap, BarChart3 } from "lucide-react";

interface SoftwareSkill {
  name: string;
  code: string;
  icons8Slug?: string;
  directUrl?: string;
  level: number;
  desc: string;
}

const softwareSkills: SoftwareSkill[] = [
  { name: "Photoshop", code: "Ps", icons8Slug: "adobe-photoshop", level: 85, desc: "Retouche & Création" },
  { name: "Illustrator", code: "Ai", icons8Slug: "adobe-illustrator", level: 75, desc: "Vectoriel" },
  { name: "Premiere Pro", code: "Pr", icons8Slug: "adobe-premiere-pro", level: 80, desc: "Montage Vidéo" },
  { name: "Figma", code: "Fg", icons8Slug: "figma", level: 70, desc: "UI/UX Design" },
  { name: "Canva", code: "Cv", icons8Slug: "canva", level: 95, desc: "Design Rapide" },
  { name: "CapCut", code: "Cc", directUrl: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/capcut-icon.svg", level: 90, desc: "Contenu Social" },
  { name: "Google", code: "Gw", icons8Slug: "google-logo", level: 95, desc: "Workspace" },
  { name: "Microsoft", code: "M3", icons8Slug: "microsoft-office-2019", level: 85, desc: "Office 365" },
  { name: "Notion", code: "Nt", icons8Slug: "notion", level: 85, desc: "Gestion Projet" },
];

const mainExpertise = [
  {
    title: "Créations de contenus",
    desc: "Conceptions de supports digitaux et print, incluant des flyers, visuels et montage vidéo pour campagnes publicitaires.",
    icon: <Layers className="w-6 h-6" />,
  },
  {
    title: "Stratégie marketing",
    desc: "Élaboration de plans de communication multicanaux, storytelling de marque et analyse de performance.",
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    title: "Ingénierie événementielle",
    desc: "Conception de dispositifs immersifs, scénographie et design d’expériences.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Pilotage de projet",
    desc: "Coordination opérationnelle des prestataires, gestion budgétaire et management d’équipes.",
    icon: <Target className="w-6 h-6" />,
  },
];

const languages = [
  { name: "Français", flag: "https://flagcdn.com/w80/fr.png", level: "Maternelle / Études", progress: 100 },
  { name: "Anglais", flag: "https://flagcdn.com/w80/gb.png", level: "B2 — Intermédiaire-Avancé", progress: 80 },
  { name: "Bambara", flag: "https://flagcdn.com/w80/ml.png", level: "A2 — Élémentaire", progress: 45 },
  { name: "Soninke", flag: "https://flagcdn.com/w80/ml.png", level: "A1 — Débutant", progress: 25 },
];

export function Skills() {
  return (
    <section id="skills" className="py-12 md:py-32 px-6 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] font-condensed font-bold mb-4 text-accent-primary block">
            Savoir-Faire
          </span>
          <div className="relative">
            <h3 
              className="font-display font-black leading-[1.05] tracking-tighter uppercase text-text-primary"
              style={{ fontSize: "clamp(2rem, 8vw, 5rem)" }}
            >
              Expertise & <br /> <span className="text-accent-primary italic-display">Vision Stratégique.</span>
            </h3>
            <div className="absolute left-1/3 -top-8 font-script text-5xl md:text-7xl text-accent-primary/20 rotate-[-6deg] select-none pointer-events-none">
              Compétences
            </div>
          </div>
        </div>

        {/* 4 Detailed Blocks */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-16 md:mb-32">
          {mainExpertise.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 sm:p-10 neo-card-khaki group shadow-lg"
            >
              <div className="w-14 h-14 bg-accent-primary text-white border-2 border-text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-md">
                {exp.icon}
              </div>
              <h4 className="text-xl font-display font-black mb-4 text-text-primary group-hover:text-accent-primary transition-colors uppercase tracking-tight">
                {exp.title}
              </h4>
              <p className="text-sm font-medium leading-relaxed text-text-secondary">
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-12 md:gap-24">
          
          {/* Software Column */}
          <div className="lg:col-span-2 space-y-12">
            <h4 className="text-xl md:text-2xl font-display font-black flex items-center gap-4 text-text-primary uppercase tracking-tight">
              <span className="w-12 h-1 bg-accent-primary rounded-full" /> Logiciels Maîtrisés
            </h4>
            {/* Software Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-8">
              {softwareSkills.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: i * 0.05,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="neo-card-terracotta p-4 md:p-8 group flex flex-col h-full"
                >
                  <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 md:gap-8 mb-4 md:mb-8">
                    <motion.div 
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      className="w-12 h-12 md:w-20 md:h-20 rounded-2xl md:rounded-[2rem] flex items-center justify-center bg-white border-2 border-text-primary transition-all duration-300 flex-shrink-0 p-2 md:p-5 group-hover:shadow-[3px_3px_0px_var(--color-text-primary)]"
                    >
                      <div className="relative w-full h-full flex items-center justify-center">
                        <img 
                          src={s.directUrl || `https://img.icons8.com/color/96/${s.icons8Slug}.png`} 
                          alt={s.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </motion.div>
                    <div className="min-w-0 w-full">
                      <p className="font-display font-black text-sm sm:text-lg md:text-2xl group-hover:text-accent-secondary transition-colors leading-tight mb-1 md:mb-3 truncate text-text-primary uppercase tracking-tight">{s.name}</p>
                      <p className="text-[9px] sm:text-xs uppercase tracking-[0.2em] text-text-secondary opacity-80 font-bold leading-tight font-condensed">{s.desc}</p>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-2 md:pt-8">
                    <div className="h-2 w-full bg-bg-secondary rounded-full overflow-hidden border border-text-primary/20">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.3 + i * 0.05 }}
                        className="h-full rounded-full bg-accent-primary border-r-2 border-text-primary"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Languages Column */}
          <div className="space-y-16">
            {/* Spoken Languages */}
            <div className="space-y-10">
              <h4 className="text-xl md:text-2xl font-display font-black flex items-center gap-4 text-text-primary uppercase tracking-tight">
                <span className="w-12 h-1 bg-accent-primary rounded-full" /> Langues
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6">
                {languages.map((l, i) => (
                  <motion.div
                    key={l.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="neo-card-khaki p-3 md:p-6 flex flex-col md:flex-row items-center md:items-center gap-3 md:gap-6 group"
                  >
                    <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-text-primary flex-shrink-0 shadow-inner">
                      <img 
                        src={l.flag} 
                        alt={l.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="flex-1 w-full space-y-2 md:space-y-3">
                      <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-1">
                        <span className="font-display font-black text-xs md:text-lg group-hover:text-accent-primary transition-colors text-center md:text-left text-text-primary uppercase tracking-tight">{l.name}</span>
                        <span className="text-[7px] md:text-[9px] font-bold uppercase tracking-widest text-accent-secondary whitespace-nowrap font-condensed">{l.level}</span>
                      </div>
                      <div className="h-2 w-full bg-bg-secondary rounded-full overflow-hidden border border-text-primary/20">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${l.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          className="h-full bg-accent-primary border-r-2 border-text-primary rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quote / Vision */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-6 sm:p-10 neo-card-khaki shadow-lg relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-[0.02] text-text-primary">
                <Target size={120} />
              </div>
              <p className="font-display italic text-xl leading-relaxed relative z-10 text-text-primary">
                "Ma vision allie créativité pure et rigueur opérationnelle pour transformer chaque concept en une expérience mémorable."
              </p>
              <div className="mt-8 flex items-center gap-4 relative z-10">
                <div className="w-10 h-1 bg-accent-primary rounded-full" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-accent-primary font-condensed">Vision 2026</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
