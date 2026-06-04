"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Mail } from "lucide-react";
import { Magnetic } from "./Magnetic";

const links = [
  { href: "/",           label: "Accueil" },
  { href: "/about",       label: "À propos" },
  { href: "/skills",      label: "Compétences" },
  { href: "/projects",    label: "Projets" },
  { href: "/contact",     label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4 md:px-12 py-4 md:py-6 translate-y-0 ${
          scrolled ? "opacity-30 hover:opacity-100 focus-within:opacity-100" : "opacity-100"
        }`}
      >
        <div 
          className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 rounded-[1.5rem] md:rounded-[2.5rem] px-4 py-2 md:px-10 md:py-4 ${
            scrolled ? "bg-white border-2 border-text-primary shadow-[4px_4px_0px_var(--color-text-primary)]" : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo */}
          <Magnetic strength={0.2}>
            <div className="relative group z-[110]">
              <Link href="/" className="flex items-center gap-2 md:gap-4">
                <div className="relative w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-accent-primary/10 border-2 border-text-primary text-text-primary transition-all duration-300 group-hover:shadow-[2px_2px_0px_var(--color-text-primary)] shadow-sm">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6 text-text-primary transition-transform duration-300">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M21 9H3" />
                    <path d="M21 15H3" />
                    <path d="M12 3v18" />
                    <path d="M7.5 3v18" />
                    <path d="M16.5 3v18" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display font-black text-sm md:text-2xl tracking-tight text-text-primary leading-none uppercase">
                    HAMZA CISSE
                  </span>
                  <span className="text-[7px] md:text-[10px] uppercase tracking-[0.3em] text-accent-primary font-black mt-0.5 font-condensed">Portfolio</span>
                </div>
              </Link>
            </div>
          </Magnetic>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2">
            {links.map((link) => (
              <Magnetic key={link.href} strength={0.1}>
                <Link
                  href={link.href}
                  className="relative px-6 py-3 group overflow-hidden"
                >
                  <span className={`relative z-10 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300 ${
                    (pathname === link.href || pathname === `${link.href}/`) ? "text-text-primary" : "text-text-secondary group-hover:text-text-primary"
                  }`}>
                    {link.label}
                  </span>
                  {(pathname === link.href || pathname === `${link.href}/`) && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-accent-primary/10 border-2 border-text-primary rounded-full shadow-[2px_2px_0px_var(--color-text-primary)]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </Magnetic>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <Magnetic strength={0.15}>
              <Link 
                href="/contact" 
                className="hidden md:flex items-center gap-2 btn-neo-terracotta px-6 py-3 text-[10px] font-black uppercase tracking-widest font-condensed"
              >
                Collaborer <ArrowRight size={14} />
              </Link>
            </Magnetic>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-[110] flex flex-col gap-1.5 p-2 group"
              aria-label="Toggle Menu"
            >
              <div className={`w-6 h-0.5 bg-text-primary transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <div className={`w-6 h-0.5 bg-text-primary transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <div className={`w-6 h-0.5 bg-text-primary transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[120] bg-text-primary/10 backdrop-blur-md lg:hidden"
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[340px] z-[130] bg-white border-l-2 border-text-primary flex flex-col lg:hidden shadow-2xl"
            >
              <div className="flex flex-col p-8 pt-28 gap-1 items-start overflow-y-auto flex-1">
                <p className="text-accent-primary font-black tracking-[0.4em] uppercase text-[9px] mb-8 opacity-60 font-condensed">Menu</p>
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      className="group flex items-baseline gap-4 py-4 border-b border-text-primary/10"
                    >
                      <span className="text-[10px] font-display font-bold text-accent-primary opacity-50">
                        0{i + 1}.
                      </span>
                      <span className={`text-lg font-black uppercase tracking-[0.25em] transition-all duration-300 ${
                        (pathname === link.href || pathname === `${link.href}/`) ? "text-accent-secondary" : "text-text-primary group-hover:tracking-[0.35em]"
                      }`}>
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {/* Footer Part of Sidebar */}
              <div className="p-10 bg-bg-secondary border-t-2 border-text-primary">
                <div className="flex items-center gap-6 mb-8">
                  <a 
                    href="https://www.tiktok.com/@kisame931" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-text-primary hover:text-accent-primary transition-all hover:scale-110"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-text-primary">
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                  </a>
                  <a 
                    href="mailto:hayyz931@gmail.com" 
                    className="text-text-primary hover:text-accent-primary transition-all hover:scale-110"
                  >
                    <Mail size={24} />
                  </a>
                </div>
                <p className="text-text-primary font-black tracking-[0.2em] uppercase text-[10px] font-condensed">
                  © HAMZA CISSE 2026
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </>
  );
}
