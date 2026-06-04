"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { PageWrapper } from "@/components/PageWrapper";
import { ArrowRight, Film, Video, Image as ImageIcon, Sparkles, Pencil } from "lucide-react";
import { getAssetPath } from "@/utils/imageLoader";
import { Portfolio } from "@/components/Portfolio";

/* ── Hamza's Key Interests / Hobbies ── */
const hobbies = [
  { title: "Montage Vidéo", icon: <Film size={16} />, img: "/images/photos-presentation/cinema-life-2.jpg", wide: true },
  { title: "Image & Photo", icon: <ImageIcon size={16} />, img: "/images/photos-presentation/mode-lifestyle.jpg" },
  { title: "Pop Culture", icon: <Sparkles size={16} />, img: "/images/photos-presentation/dragon-ball.jpg" },
  { title: "Short-format Trends", icon: <Video size={16} />, img: "/images/photos-presentation/photo-plage.jpg", wide: true },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <PageWrapper>
      
      {/* ════════════ HERO SECTION ════════════ */}
      <section ref={heroRef} className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-28 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center justify-center relative z-20">
          
          {/* Availability Badge (Neo-Brutalist Style) */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-accent-secondary text-white font-condensed font-bold text-[10px] uppercase tracking-[0.15em] neo-border shadow-[3px_3px_0px_0px_var(--color-text-primary)] mb-10"
          >
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Recherche d'alternance — Septembre 2026
          </motion.div>

          {/* Centerpiece Layout inspired by the user's reference image */}
          <div className="relative w-full max-w-5xl flex flex-col items-center justify-center my-4 py-8">
            
            {/* Top-Left Tag: VIDEO EDITOR */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="absolute left-2 md:left-12 top-0 font-condensed text-[10px] md:text-xs uppercase tracking-[0.4em] text-text-secondary font-bold bg-bg-secondary px-3 py-1.5 rounded-lg border border-text-primary/10"
            >
              VIDEO EDITOR
            </motion.div>

            {/* Outlined Vector Drawing Camera Icon Float (matches reference doodles) */}
            <div className="absolute left-[8%] top-[25%] opacity-20 hidden md:block select-none pointer-events-none">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </div>

            {/* Outlined Vector Film Icon Float (matches reference doodles) */}
            <div className="absolute right-[8%] top-[10%] opacity-20 hidden md:block select-none pointer-events-none">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                <line x1="7" y1="2" x2="7" y2="22" />
                <line x1="17" y1="2" x2="17" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="2" y1="7" x2="7" y2="7" />
                <line x1="2" y1="17" x2="7" y2="17" />
                <line x1="17" y1="17" x2="22" y2="17" />
                <line x1="17" y1="7" x2="22" y2="7" />
              </svg>
            </div>

            {/* Main Overlapping Typography */}
            <div className="relative select-none text-center py-4">
              {/* Back Block Text: PORTFOLIO */}
              <h1 
                className="font-display font-black text-6xl sm:text-8xl md:text-[10rem] lg:text-[11.5rem] leading-none tracking-tighter uppercase text-text-primary flex justify-center items-center gap-0"
              >
                <span className="text-accent-primary">P</span>
                <span>ORTFOLIO</span>
              </h1>
              
              {/* Overlapping Badge: Creative Visual (mimics yellow "Creative Visual" pill in reference) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, x: -50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute left-[-5%] sm:left-[10%] top-[40%] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 bg-accent-secondary text-white rounded-lg neo-border shadow-[3px_3px_0px_0px_var(--color-text-primary)] z-20"
              >
                Creative Visual
              </motion.div>

              {/* Overlapping Script Text: View My */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, rotate: -6 }}
                transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-1/2 top-1/2 -translate-x-[45%] -translate-y-[70%] font-script text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] text-accent-secondary z-10 select-none pointer-events-none opacity-90"
              >
                View My
              </motion.div>
            </div>

            {/* Bottom-Right Tag: GRAPHIC DESIGNER */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="absolute right-2 md:right-12 bottom-0 font-condensed text-[10px] md:text-xs uppercase tracking-[0.4em] text-text-secondary font-bold bg-bg-secondary px-3 py-1.5 rounded-lg border border-text-primary/10"
            >
              COMMUNICATION DIGITALE
            </motion.div>
          </div>

          {/* Subtitle / Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-sm md:text-xl text-text-secondary text-center max-w-xl mt-6 font-medium leading-relaxed font-sans"
          >
            Je m'appelle <span className="text-text-primary font-bold">Hamza Cisse</span>. Futur étudiant en Licence Pro Communication, passionné par la création visuelle, le montage et la communication digitale, actuellement à la recherche d'une alternance.
          </motion.p>

          {/* Action Buttons (Neo-Brutalist Shifting Style) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 mt-10"
          >
            <Link href="/projects" className="btn-neo-terracotta flex items-center gap-4 px-10 py-5 text-[10px] font-condensed font-bold uppercase tracking-[0.2em]">
              Découvrir mes projets
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <ArrowRight size={16} />
              </motion.div>
            </Link>
            <Link href="/contact" className="btn-neo-outline flex items-center gap-4 px-10 py-5 text-[10px] font-condensed font-bold uppercase tracking-[0.2em]">
              Travaillons ensemble
            </Link>
          </motion.div>
          
        </div>
      </section>

      {/* ════════════ BIO / ABOUT SECTION ════════════ */}
      <section className="relative z-20 py-20 md:py-36 px-6 md:px-12 lg:px-24 border-t-2 border-text-primary bg-bg-secondary/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Left Column: Portrait photo with offset solid background */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative w-full max-w-md mx-auto lg:mx-0 aspect-[4/5]">
                {/* Offset backing */}
                <div className="absolute inset-0 bg-accent-primary rounded-[2.5rem] translate-x-4 translate-y-4 neo-border z-0" />
                {/* Outlined image */}
                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden neo-border bg-bg-secondary z-10 img-zoom">
                  <Image
                    src={getAssetPath("/images/photos-presentation/hamza-photo.png")}
                    alt="Hamza Cisse Portrait"
                    fill
                    className="object-cover object-center contrast-[1.05] transition-all duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Link href="/about" className="inline-flex items-center gap-2 text-accent-primary text-[10px] font-condensed font-bold uppercase tracking-[0.3em] mb-4 hover:opacity-70 transition-opacity">
                  Découvrir mon parcours <ArrowRight size={14} />
                </Link>
                
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-text-primary tracking-tighter leading-[1.05] mb-6 uppercase">
                  L'impact visuel <br />
                  <span className="text-accent-primary italic-display">au service de l'image.</span>
                </h2>
                
                <p className="text-sm md:text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl font-medium">
                  Futur étudiant en Licence Professionnelle Communication, je suis passionné par l'image, le montage vidéo et la communication digitale. Je crée des montages inspirés des tendances actuelles, souvent dans des formats courts de moins de 20 secondes. Autodidacte déterminé, j'affine mes compétences en permanence et je recherche activement une alternance pour septembre 2026.
                </p>

                {/* Stats Grid (Neo-Brutalist Outlined Cards) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-y-2 border-text-primary/10">
                  {[
                    { label: "Formation", value: "Licence Pro" },
                    { label: "Spécialité", value: "Vidéo & Image" },
                    { label: "Compétences", value: "Montage & PAO" },
                    { label: "Besoin Actuel", value: "Alternance" },
                  ].map((stat, i) => (
                    <div key={i} className="space-y-1 bg-white p-4 rounded-xl border border-text-primary/10 shadow-[3px_3px_0px_var(--color-accent-primary)]">
                      <p className="text-[9px] font-condensed uppercase tracking-widest text-accent-primary font-bold">{stat.label}</p>
                      <p className="text-sm md:text-base font-display font-bold text-text-primary uppercase tracking-tight">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <Portfolio />

      {/* ════════════ FINAL CTA BLOCK ════════════ */}
      <section className="py-20 md:py-32 px-6 relative border-t-2 border-text-primary">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-10 md:p-24 rounded-[3rem] text-center neo-card-terracotta"
          >
            <div className="relative z-10">
              <span className="text-[10px] font-condensed uppercase tracking-[0.5em] font-bold text-accent-primary mb-8 block">
                Alternance Septembre 2026
              </span>
              <h4 className="text-2xl md:text-5xl font-display font-bold text-text-primary leading-snug mb-12 max-w-4xl mx-auto text-balance uppercase tracking-tight">
                "Actuellement à la recherche d’un contrat d'alternance pour septembre 2026, je souhaite mettre en pratique mes compétences. Si vous cherchez un profil créatif et déterminé, contactez-moi !"
              </h4>
              <Link href="/contact" className="btn-neo-terracotta inline-flex items-center gap-5 px-12 py-6 rounded-full text-[10px] font-condensed font-bold uppercase tracking-widest">
                Me contacter <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </PageWrapper>
  );
}
