"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { PageWrapper } from "@/components/PageWrapper";
import { Play, FileText, ImageIcon, X, ExternalLink } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { getAssetPath } from "@/utils/imageLoader";

const categories = ["Tous", "Vidéo", "Design", "Rédaction"];

const projects = [
  {
    title: "Affiche HCJ",
    category: "Design",
    type: "image",
    src: "/images/creations/affiche-hcj.png",
    thumb: "/images/creations/affiche-hcj.png",
    desc: "Conception visuelle d'affiche pour la marque HCJ en BTS Communication."
  },
  {
    title: "Kakemono G-Schoks",
    category: "Design",
    type: "image",
    src: "/images/creations/kakemono-g-schoks.png",
    thumb: "/images/creations/kakemono-g-schoks.png",
    desc: "Kakemono événementiel dynamique pour G-Shock. Impact visuel fort et respect de l'identité de marque."
  },
  {
    title: "Newsletter-Echec",
    category: "Rédaction",
    type: "pdf",
    src: "/images/creations/newsletter-echec.pdf",
    thumb: "/images/creations/newsletter-echec.png",
    desc: "Simulation de newsletter sur le thème des échecs. Travail éditorial et de mise en page."
  }
];

type Project = typeof projects[0];

function MediaModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[1000] flex items-center justify-center p-4 pt-24 md:p-8"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-bg-main/80 backdrop-blur-md" />

        {/* Modal box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-4xl bg-white rounded-[2.5rem] overflow-hidden border-2 border-text-primary shadow-[8px_8px_0px_var(--color-text-primary)]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-8 py-6 border-b-2 border-text-primary/10 bg-bg-secondary/40">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent-primary mb-1 font-condensed">{project.category}</p>
              <h3 className="font-display font-black text-xl md:text-2xl text-text-primary uppercase tracking-tight">{project.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="p-3 rounded-full bg-bg-secondary hover:bg-accent-primary border-2 border-text-primary text-text-primary hover:text-white transition-all shadow-sm group"
              aria-label="Fermer"
            >
              <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          {/* Content */}
          <div className="relative bg-bg-secondary min-h-[40vh] flex items-center justify-center overflow-hidden">
            {project.type === "video" && (
              <video
                src={getAssetPath(project.src)}
                controls
                autoPlay
                playsInline
                className="w-full max-h-[70vh] object-contain"
              >
                Votre navigateur ne supporte pas la lecture vidéo.
              </video>
            )}
            
            {project.type === "pdf" && (
              <div className="w-full flex flex-col items-center bg-bg-secondary">
                {isMobile ? (
                  <div className="p-12 text-center">
                    <div className="relative w-48 h-64 mx-auto mb-8 rounded-[2rem] overflow-hidden shadow-xl border-2 border-text-primary bg-white p-2">
                      <Image
                        src={getAssetPath(project.thumb)}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-text-secondary mb-8 text-sm font-medium max-w-xs mx-auto">
                      Ce document PDF est optimisé pour une lecture en plein écran.
                    </p>
                    <a
                      href={getAssetPath(project.src)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-10 py-5 btn-neo-terracotta text-white rounded-full font-bold text-sm shadow-xl active:scale-95 transition-all font-condensed"
                    >
                      <FileText size={20} />
                      Ouvrir le PDF
                    </a>
                  </div>
                ) : (
                  <iframe
                    src={getAssetPath(project.src)}
                    className="w-full h-[70vh]"
                    title={project.title}
                  />
                )}
              </div>
            )}

            {project.type === "image" && (
              <div className="relative w-full h-[70vh] bg-bg-secondary">
                <Image
                  src={getAssetPath(project.src)}
                  alt={project.title}
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-10 py-8 border-t-2 border-text-primary/10 bg-bg-secondary/40 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <p className="text-text-secondary text-sm font-medium leading-relaxed max-w-2xl italic">"{project.desc}"</p>
            {project.type === "pdf" && !isMobile && (
              <a
                href={getAssetPath(project.src)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-primary hover:text-accent-secondary text-[10px] font-bold uppercase tracking-widest border-b-2 border-accent-primary pb-1 flex items-center gap-2 transition-all whitespace-nowrap font-condensed"
              >
                Plein écran <ExternalLink size={14} />
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("Tous");
  const [selected, setSelected] = useState<Project | null>(null);

  const filteredProjects = projects.filter(p => filter === "Tous" || p.category === filter);
  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <PageWrapper>
      {selected && <MediaModal project={selected} onClose={closeModal} />}

      <div className="max-w-7xl mx-auto px-6 pt-28 md:pt-40 pb-20">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <h1 
              className="font-display font-black leading-[0.9] tracking-tighter mb-4 uppercase text-text-primary"
              style={{ fontSize: "clamp(3.5rem, 12vw, 8rem)" }}
            >
              Projets<span className="text-accent-primary italic-display">.</span>
            </h1>
            <div className="absolute left-1/2 -top-8 -translate-x-1/2 font-script text-5xl md:text-8xl text-accent-primary/20 rotate-[-4deg] select-none pointer-events-none">
              Mes Travaux
            </div>
            <p className="text-lg md:text-xl font-medium opacity-85 max-w-2xl mx-auto mt-6 text-text-secondary">
              Une sélection de mes travaux en communication, design et création de contenu.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 px-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-8 md:px-12 py-3.5 md:py-4 rounded-full text-[10px] md:text-xs tracking-[0.2em] uppercase active:scale-95 transition-all duration-300 border-2",
                  filter === cat 
                    ? "bg-accent-primary text-white border-text-primary shadow-[4px_4px_0px_var(--color-text-primary)] font-black font-condensed" 
                    : "bg-white text-text-primary border-text-primary shadow-[3px_3px_0px_var(--color-text-primary)] hover:bg-bg-secondary hover:text-accent-primary font-bold font-condensed hover:shadow-[4px_4px_0px_var(--color-text-primary)] hover:translate-y-[-1px]"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Section */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 pb-24"
        >
          {filteredProjects.map((project, i) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-[3.5/4.5] rounded-[2.5rem] overflow-hidden bg-white border-2 border-text-primary cursor-pointer shadow-[6px_6px_0px_var(--color-accent-secondary)] hover:shadow-[8px_8px_0px_var(--color-accent-secondary)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
              onClick={() => setSelected(project)}
            >
              <Image
                src={getAssetPath(project.thumb)}
                alt={project.title}
                fill
                className="object-cover transition-all duration-1000 group-hover:scale-105 group-hover:brightness-[0.8] brightness-[0.95]"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                  <span className="text-accent-secondary text-[10px] font-bold uppercase tracking-[0.3em] mb-3 block font-condensed">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-black text-white mb-8 leading-tight uppercase tracking-tight">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <div className="flex items-center gap-3 px-8 py-4 bg-accent-secondary border-2 border-text-primary rounded-full group-hover:bg-accent-primary text-white group-hover:text-white transition-all duration-300 shadow-xl font-condensed font-bold">
                      <div className="text-white group-hover:scale-110 transition-transform">
                        {project.type === "video" ? <Play size={16} fill="currentColor" /> : 
                         project.type === "pdf" ? <FileText size={16} /> : <ImageIcon size={16} />}
                      </div>
                      <span className="text-[10px] text-white font-bold uppercase tracking-widest whitespace-nowrap">
                        {project.type === "video" ? "Regarder" : project.type === "pdf" ? "Découvrir" : "Aperçu"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageWrapper>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
