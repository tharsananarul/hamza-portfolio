"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PageWrapper } from "@/components/PageWrapper";
import { Download, GraduationCap, Briefcase, MapPin, Mail } from "lucide-react";
import { getAssetPath } from "@/utils/imageLoader";

const education = [
  {
    year: "Dès Septembre 2026",
    title: "Licence Professionnelle Communication",
    institution: "Recherche d'alternance active",
    desc: "Futur étudiant en Licence Professionnelle, à la recherche d'une alternance pour septembre 2026.",
    icon: <GraduationCap size={17} />,
  },
  {
    year: "Janvier 2024 — Juin 2026",
    title: "BTS Communication",
    institution: "Lycée Jacques Brel, La Courneuve",
    desc: "Formation axée sur la stratégie de communication digitale, la création de supports visuels et la production de contenus.",
    icon: <GraduationCap size={17} />,
  },
  {
    year: "Juillet — Août 2023",
    title: "CQP Grand Événements",
    institution: "Envergure, Drancy",
    desc: "Certificat de Qualification Professionnelle en gestion de la sécurité événementielle.",
    icon: <GraduationCap size={17} />,
  },
  {
    year: "Août 2023",
    title: "SST - Sauveteur Secouriste du Travail",
    institution: "Envergure, Drancy",
    desc: "Certificat officiel de sauveteur secouriste du travail pour la prévention et les premiers secours.",
    icon: <GraduationCap size={17} />,
  },
  {
    year: "Septembre 2021 — Juin 2024",
    title: "Baccalauréat Général (Mention AB)",
    institution: "Lycée Jacques Brel, La Courneuve",
    desc: "Spécialités : Sciences Économiques et Sociales (SES) & Langues, Littératures et Cultures Étrangères (LLCER).",
    icon: <GraduationCap size={17} />,
  },
  {
    year: "2020",
    title: "Brevet des Collèges (Mention AB)",
    institution: "Collège Raymond Poincaré, La Courneuve",
    desc: "Diplôme national du brevet.",
    icon: <GraduationCap size={17} />,
  },
];

const experience = [
  {
    year: "Avril — Juin 2025",
    title: "Stage en communication",
    institution: "H.Coeur Jaune, La Courneuve / Drancy",
    desc: "Participation à des projets audiovisuels et éducatifs : création de brochures et supports visuels, retouche photo, captation vidéo, animation d'ateliers pour jeunes et communication sur les réseaux sociaux.",
    icon: <Briefcase size={17} />,
  },
  {
    year: "Depuis Juillet 2024",
    title: "Agent de prévention et de sécurité événementiel",
    sub: "JO 2024",
    institution: "GestNSport, Stade de France / Parc des Princes",
    desc: "Gestion des flux de spectateurs, coordination en équipe et sécurisation des sites lors des Jeux Olympiques de Paris 2024.",
    icon: <Briefcase size={17} />,
  },
  {
    year: "Décembre 2021",
    title: "Stage de 3ème",
    institution: "Maternelle Raymond Poincaré, La Courneuve",
    desc: "Interaction avec les enfants et adaptation à différents publics en tant qu'assistant et superviseur sous la direction de la professeure.",
    icon: <Briefcase size={17} />,
  },
];

export default function About() {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-6 pt-28 md:pt-40 pb-20">

        {/* ═══ HERO ═══ */}
        <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-center lg:items-start mb-20 md:mb-32">

          {/* Portrait Container with offset backing (Neo-Brutalist) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] mx-auto lg:mx-0 flex-shrink-0 aspect-[3/4]"
          >
            {/* Offset Terracotta backing */}
            <div className="absolute inset-0 bg-accent-secondary rounded-[3rem] translate-x-4 translate-y-4 neo-border z-0" />
            <div className="absolute inset-0 rounded-[3rem] overflow-hidden neo-border bg-bg-secondary z-10">
              <Image
                src={getAssetPath("/images/photos-presentation/hamza-photo.png")}
                alt="Hamza Cisse" fill sizes="380px"
                className="object-cover object-top contrast-[1.08] transition-all duration-700" priority
              />
            </div>
            
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-2xl rotate-3 bg-accent-primary text-white neo-border shadow-[3px_3px_0px_var(--color-text-primary)] z-20 font-condensed"
            >
              Montage & Image
            </motion.div>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-4 -left-4 text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-2xl -rotate-3 bg-accent-secondary text-white neo-border shadow-[3px_3px_0px_var(--color-text-primary)] z-20 font-condensed"
            >
              Licence Pro
            </motion.div>
          </motion.div>

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Overlapping header style */}
            <div className="relative mb-8 inline-block lg:block">
              <h1 
                className="font-display font-black leading-tight tracking-tighter uppercase text-text-primary"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
              >
                PROFIL<span className="text-accent-primary">.</span>
              </h1>
              <div className="absolute left-1/4 -top-8 font-script text-5xl md:text-7xl text-accent-primary/20 rotate-[-6deg] select-none pointer-events-none">
                Mon Parcours
              </div>
            </div>

            <div
              className="space-y-4 text-base md:text-xl leading-relaxed mb-10 font-medium text-text-secondary"
            >
              <p>
                Futur étudiant en Licence Professionnelle Communication, je suis passionné par le montage vidéo, l’image, la création visuelle et les stratégies digitales. Je suis à la recherche d'une alternance pour septembre 2026 afin de mettre en pratique mes compétences et d’apporter de la valeur à une équipe créative.
              </p>
            </div>

            {/* Pills (Neo-Brutalist Style) */}
            <div
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10"
            >
              {[
                { icon: <MapPin size={13} />, text: "Île-de-France" },
                { icon: <Mail   size={13} />, text: "hayyz931@gmail.com" },
              ].map((p) => (
                <span
                  key={p.text}
                  className="inline-flex items-center gap-2 text-xs font-bold px-5 py-2 rounded-full bg-white neo-border text-text-secondary shadow-[3px_3px_0px_var(--color-accent-primary)] font-condensed"
                >
                  {p.icon}{p.text}
                </span>
              ))}
            </div>

            <a
              href={getAssetPath("/cv/cv_hamza_stage.pdf")}
              download
              className="inline-flex items-center gap-3 btn-neo-terracotta text-sm font-bold px-10 py-5 font-condensed shadow-lg"
            >
              Télécharger mon CV <Download size={18} />
            </a>
          </div>
        </div>

        {/* ═══ TIMELINE ═══ */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Formation (Neo-card-khaki) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[2.5rem] p-8 md:p-12 neo-card-khaki shadow-xl"
          >
            <div className="flex items-center gap-4 mb-10">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-accent-primary text-white border-2 border-text-primary shadow-sm"
              >
                <GraduationCap size={22} />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-black text-text-primary uppercase">Formation</h3>
            </div>

            <div className="space-y-10 relative">
              <div className="absolute left-[23px] top-4 bottom-4 w-[2px] bg-text-primary/10" />
              
              {education.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="pl-16 relative group"
                >
                  {/* Outlined indicator bullet */}
                  <div
                    className="absolute left-0 top-1 w-[46px] h-[46px] rounded-full flex items-center justify-center z-10 bg-white border-2 border-text-primary text-accent-primary group-hover:bg-accent-primary group-hover:text-white transition-all duration-300 shadow-[2px_2px_0px_var(--color-text-primary)]"
                  >
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] block mb-2 text-accent-secondary font-condensed">{item.year}</span>
                  <h4 className="text-lg md:text-xl font-display font-bold mb-1 text-text-primary">{item.title}</h4>
                  <p className="text-[10px] font-bold mb-3 text-accent-primary/80 uppercase tracking-widest font-condensed">{item.institution}</p>
                  <p className="text-sm md:text-base leading-relaxed text-text-secondary font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Expérience (Neo-card-terracotta) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="rounded-[2.5rem] p-8 md:p-12 neo-card-terracotta shadow-xl"
          >
            <div className="flex items-center gap-4 mb-10">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-accent-secondary text-white border-2 border-text-primary shadow-sm"
              >
                <Briefcase size={22} />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-black text-text-primary uppercase">Expérience</h3>
            </div>

            <div className="space-y-10 relative">
              <div className="absolute left-[23px] top-4 bottom-4 w-[2px] bg-text-primary/10" />

              {experience.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="pl-16 relative group"
                >
                  {/* Outlined indicator bullet */}
                  <div
                    className="absolute left-0 top-1 w-[46px] h-[46px] rounded-full flex items-center justify-center z-10 bg-white border-2 border-text-primary text-accent-secondary group-hover:bg-accent-secondary group-hover:text-white transition-all duration-300 shadow-[2px_2px_0px_var(--color-text-primary)]"
                  >
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] block mb-2 text-accent-primary font-condensed">{item.year}</span>
                  <div className="flex flex-wrap items-center gap-3 mb-1.5">
                    <h4 className="text-lg md:text-xl font-display font-bold text-text-primary">{item.title}</h4>
                    {item.sub && (
                      <span className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-accent-secondary text-white border border-text-primary shadow-[2px_2px_0px_var(--color-text-primary)] font-condensed">
                        {item.sub}
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] font-bold mb-3 text-accent-primary/80 uppercase tracking-widest font-condensed">{item.institution}</p>
                  <p className="text-sm md:text-base leading-relaxed text-text-secondary font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </PageWrapper>
  );
}
