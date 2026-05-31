"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useUploadModal } from "@/lib/upload-modal";
import { useRouter } from "next/navigation";

export default function UploadModal() {
  const { open, setOpen } = useUploadModal();
  const router = useRouter();

  // ESC closes the modal
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
          className="fixed inset-0 bg-ink/60 flex items-center justify-center z-[200] p-5"
        >
          <motion.div
            initial={{ y: 30, scale: 0.95 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 30, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="bg-paper border-[4px] border-ink rounded-neo-xl p-10 px-9 shadow-neo-xl max-w-[480px] w-full text-center relative"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3.5 right-3.5 w-9 h-9 bg-white border-2 border-ink rounded-full cursor-pointer font-display"
              aria-label="Close"
            >
              ×
            </button>
            <div className="w-[60px] h-[60px] mx-auto mb-5 border-[5px] border-ink rounded-full border-t-coral animate-rot" />
            <h3 className="text-[32px] mb-3.5 font-display">Preview Mode</h3>
            <p className="text-[#333] mb-6">
              Upload is wired in the production build. This is a portfolio
              demo — the F1 story shows what the pipeline produces end-to-end.
            </p>
            <button
              onClick={() => {
                setOpen(false);
                router.push("/stories/f1");
              }}
              className="btn btn-primary"
            >
              See a finished story →
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
