"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { navLinks, contato } from "@/lib/content";

const EASE_CARE = [0.22, 1, 0.36, 1] as const;

export default function Header() {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Fecha o menu ao navegar (ajuste de estado durante o render — padrão React)
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll com o menu aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? "bg-porcelain/85 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur-md"
          : "bg-porcelain"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href="/" aria-label="Clínica Alento — home" className="shrink-0">
          <Logo />
        </Link>

        {/* Nav desktop */}
        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`text-sm font-medium transition-colors hover:text-sage-700 ${
                    isActive(link.href) ? "text-sage-700" : "text-ink"
                  }`}
                >
                  {link.label}
                </Link>
                {/* link ativo sublinhado pela linha do cuidado */}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-underline"
                    transition={
                      reduced ? { duration: 0 } : { duration: 0.35, ease: EASE_CARE }
                    }
                    className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-sage-600"
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={contato.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-sage-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sage-700 sm:inline-flex"
          >
            <MessageCircle className="size-4" aria-hidden />
            Agendar pelo WhatsApp
          </a>

          {/* Toggle do menu mobile */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="inline-flex size-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-sage-100 lg:hidden"
          >
            {menuOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      {/* Menu mobile full-screen com stagger */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="menu-mobile"
            initial={reduced ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-18 z-40 bg-porcelain lg:hidden"
          >
            <nav aria-label="Navegação principal" className="flex h-full flex-col px-6 pt-8">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={reduced ? false : { opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: EASE_CARE, delay: i * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      className={`block border-b border-line py-4 font-display text-3xl ${
                        isActive(link.href) ? "text-sage-700" : "text-ink"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={reduced ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: EASE_CARE,
                  delay: navLinks.length * 0.08,
                }}
                className="mt-8"
              >
                <a
                  href={contato.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sage-600 px-6 py-4 font-medium text-white"
                >
                  <MessageCircle className="size-5" aria-hidden />
                  Agendar pelo WhatsApp
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
