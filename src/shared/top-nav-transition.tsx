"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Transition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full h-full overflow-hidden" style={{ position: 'relative' }}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={typeof window !== 'undefined' ? window.location.pathname : 'initial'}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="relative w-full h-full"
          style={{ position: 'relative' }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
