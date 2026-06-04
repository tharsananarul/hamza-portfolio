"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { getAssetPath } from "@/utils/imageLoader";

export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 md:gap-24 items-center">
        {/* Left Column: Outlined profile image with offset backing */}
        <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0">
          {/* Offset terracotta backing */}
          <div className="absolute inset-0 bg-accent-secondary rounded-[2.5rem] translate-x-4 translate-y-4 neo-border z-0" />
          <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden neo-border bg-bg-secondary z-10 img-zoom">
            <Image
              src={getAssetPath("/images/photos-presentation/hamza-photo.png")}
              alt="Hamza Cisse Portfolio"
              fill
              className="object-cover contrast-[1.05] transition-all duration-700"
            />
          </div>
        </div>

        {/* Right Column: Text and details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <span className="text-[10px] font-condensed uppercase tracking-[0.4em] text-accent-primary font-bold mb-4 block">À mon sujet</span>
            <div className="relative">
              <h3 className="text-4xl md:text-6xl font-display font-black text-text-primary leading-[1.1] tracking-tighter uppercase">
                Passionné & <span className="text-accent-primary italic-display">Créatif</span>
              </h3>
              <div className="absolute left-1/4 -top-8 font-script text-5xl md:text-7xl text-accent-primary/20 rotate-[-6deg] select-none pointer-events-none">
                Hamza Cisse
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-text-secondary leading-relaxed font-medium">
              Je m’appelle Hamza Cisse et je suis un futur étudiant en Licence Professionnelle Communication. Passionné par le montage vidéo, l’image et la communication digitale, je suis en recherche d'une alternance pour septembre 2026.
            </p>
            
            <div className="pl-6 border-l-4 border-accent-primary/40 py-2 bg-bg-secondary/40 rounded-r-xl">
              <span className="italic text-lg md:text-xl text-text-primary font-medium block leading-relaxed">
                "Créer des montages vidéo inspirés des tendances, souvent des formats courts de moins de 20 secondes. C'est devenu une véritable passion."
              </span>
            </div>

            <p className="text-base text-text-secondary leading-relaxed font-medium opacity-80">
              Issu d’un bac général (spécialités SES et LLCE), j’ai développé mes compétences en autodidacte grâce à ma détermination et aux tutoriels. Mon objectif ? Trouver une alternance stimulante pour septembre 2026, mettre en pratique mes compétences et participer à des projets innovants.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 neo-card-khaki flex flex-col justify-center"
            >
              <span className="block text-3xl font-display font-black text-text-primary mb-1">Licence Pro</span>
              <span className="text-[10px] text-accent-primary uppercase tracking-[0.2em] font-bold font-condensed">Communication</span>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 neo-card-terracotta flex flex-col justify-center"
            >
              <span className="block text-3xl font-display font-black text-text-primary mb-1">Vidéo</span>
              <span className="text-[10px] text-accent-primary uppercase tracking-[0.2em] font-bold font-condensed">Montage & Image</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
