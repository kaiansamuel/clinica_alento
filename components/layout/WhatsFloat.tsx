"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { contato } from "@/lib/content";

const EASE_CARE = [0.22, 1, 0.36, 1] as const;

export default function WhatsFloat() {
  const reduced = useReducedMotion();
  const [showPreview, setShowPreview] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Balão de preview após 4s
  useEffect(() => {
    if (dismissed) return;
    const timer = setTimeout(() => setShowPreview(true), 4000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  // Some ao rolar
  useEffect(() => {
    if (!showPreview) return;
    const onScroll = () => {
      setShowPreview(false);
      setDismissed(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true, once: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showPreview]);

  return (
    <div className="fixed right-5 bottom-5 z-50 flex items-center gap-3 md:right-8 md:bottom-8">
      <AnimatePresence>
        {showPreview && (
          <motion.div
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.4, ease: EASE_CARE }}
            className="rounded-2xl rounded-br-sm bg-white px-4 py-3 text-sm text-ink shadow-[0_8px_30px_rgba(35,48,41,0.12)]"
          >
            Agende em 1 minuto 👋
          </motion.div>
        )}
      </AnimatePresence>
      <a
        href={contato.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar pelo WhatsApp"
        className="flex size-14 items-center justify-center rounded-full bg-sage-600 text-white shadow-[0_8px_30px_rgba(78,138,108,0.4)] transition-all duration-200 hover:-translate-y-1 hover:bg-sage-700"
      >
        <MessageCircle className="size-6" aria-hidden />
      </a>
    </div>
  );
}
