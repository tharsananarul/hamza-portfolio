"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, FileText, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getAssetPath } from "@/utils/imageLoader";

const projects = [
  {
    title: "Affiche HCJ",
    category: "Design Graphique",
    type: "image",
    thumbnail: "/images/creations/affiche-hcj.png",
    link: "/images/creations/affiche-hcj.png",
    icon: <ExternalLink size={20} />,
  },
  {
    title: "Kakemono G-Schoks",
    category: "Design Graphique",
    type: "image",
    thumbnail: "/images/creations/kakemono-g-schoks.png",
    link: "/images/creations/kakemono-g-schoks.png",
    icon: <ExternalLink size={20} />,
  },
  {
    title: "Newsletter-Echec",
    category: "Rédaction & PAO",
    type: "pdf",
    thumbnail: "/images/creations/newsletter-echec.png",
    link: "/images/creations/newsletter-echec.pdf",
    icon: <FileText size={20} />,
  },
];

export function Portfolio() {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="portfolio" className="py-12 md:py-24 px-6 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16 gap-4 md:gap-6">
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-accent-primary font-bold mb-4 font-condensed">Mes Créations</h2>
            <div className="relative">
              <h3 className="text-4xl md:text-6xl font-display font-black text-text-primary uppercase tracking-tighter">Portfolio</h3>
              <div className="absolute left-1/4 -top-8 font-script text-5xl md:text-7xl text-accent-primary/20 rotate-[-6deg] select-none pointer-events-none">
                Créations
              </div>
            </div>
          </div>
          <p className="max-w-md text-text-secondary text-base md:text-lg italic font-medium">
            "Chaque création est une fenêtre ouverte sur mon imaginaire et mes compétences techniques."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-16">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              onClick={() => setSelectedProject(project)}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[4/5] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-white border-2 border-text-primary cursor-pointer shadow-[5px_5px_0px_var(--color-accent-secondary)] sm:shadow-[6px_6px_0px_var(--color-accent-secondary)] hover:shadow-[8px_8px_0px_var(--color-accent-secondary)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300"
            >
              <Image
                src={getAssetPath(project.thumbnail)}
                alt={project.title}
                fill
                className="object-cover transition-all duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-10 pb-10 sm:pb-14">
                <span className="text-accent-secondary text-[10px] font-bold uppercase tracking-[0.3em] mb-3 font-condensed">
                  {project.category}
                </span>
                <h4 className="text-2xl md:text-3xl font-display font-black text-white mb-6 uppercase tracking-tight">
                  {project.title}
                </h4>
                
                <div className="flex items-center gap-3 px-6 py-3 bg-accent-secondary border-2 border-text-primary rounded-full group-hover:bg-accent-primary group-hover:shadow-[3px_3px_0px_var(--color-text-primary)] text-white group-hover:text-white transition-all duration-300 shadow-sm w-fit font-condensed font-bold">
                  <div className="text-white">
                    {project.icon}
                  </div>
                  <span className="text-[10px] text-white font-bold uppercase tracking-widest">Voir le projet</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/projects">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-10 py-5 btn-neo-outline text-text-primary rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 group font-condensed"
            >
              Voir tous mes projets
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
            </motion.div>
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <MediaModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function MediaModal({ project, onClose }: { project: any; onClose: () => void }) {
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
    <div 
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4 pt-24 md:p-8 overflow-hidden"
      onClick={onClose}
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-bg-main/80 backdrop-blur-md" 
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative z-10 w-full max-w-4xl bg-white rounded-[2.5rem] overflow-hidden border-2 border-text-primary shadow-[8px_8px_0px_var(--color-text-primary)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b-2 border-text-primary/10 bg-bg-secondary/40">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-accent-primary font-bold font-condensed">{project.category}</p>
            <h3 className="text-text-primary font-display font-black text-xl uppercase tracking-tight">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-bg-secondary hover:bg-accent-primary border-2 border-text-primary text-text-primary hover:text-white transition-all duration-300 shadow-[2px_2px_0px_var(--color-text-primary)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          >
            <X size={20} />
          </button>
        </div>

        <div className="relative bg-bg-secondary min-h-[40vh] flex items-center justify-center">
          {project.type === "video" && (
            <video
              src={getAssetPath(project.link)}
              controls
              autoPlay
              playsInline
              className="w-full max-h-[70vh] object-contain"
            />
          )}
          
          {(project.type === "pdf" || project.type === "image") && (
            <div className="w-full flex flex-col items-center">
              {isMobile || project.type === "image" ? (
                <div className="p-8 text-center">
                  <div className="relative w-full max-w-lg aspect-video md:aspect-[16/9] mx-auto mb-8 rounded-2xl overflow-hidden shadow-2xl border-2 border-text-primary bg-white p-2">
                    <Image
                      src={getAssetPath(project.type === "image" ? project.link : project.thumbnail)}
                      alt={project.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {project.type === "pdf" && (
                    <a
                      href={getAssetPath(project.link)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 btn-neo-terracotta font-bold text-sm shadow-xl font-condensed hover:scale-105 transition-transform"
                    >
                      <FileText size={20} />
                      Ouvrir le document PDF
                    </a>
                  )}
                </div>
              ) : (
                <iframe
                  src={getAssetPath(project.link)}
                  className="w-full h-[70vh]"
                  title={project.title}
                />
              )}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
