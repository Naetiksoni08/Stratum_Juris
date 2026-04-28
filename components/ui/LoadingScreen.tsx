"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen({ onDone }: { onDone?: () => void }) {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const seen = sessionStorage.getItem("stratum-loaded");

    if (seen) {
      // Already visited — skip loading screen, show disclaimer immediately
      onDone?.();
      return;
    }

    setVisible(true);

    const dismiss = setTimeout(() => {
      setVisible(false);
      // Set flag only after timer fires — avoids React strict-mode double-run bug
      sessionStorage.setItem("stratum-loaded", "1");
      // Give exit animation time to finish before showing disclaimer
      setTimeout(() => onDone?.(), 800);
    }, 3500);

    // No cleanup — intentional, prevents strict-mode double-invocation from clearing the timer
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            background: "#080F19",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Wordmark */}
          <motion.h1
            initial={{ opacity: 0, y: 18, letterSpacing: "0.12em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.28em" }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 5vw, 3.4rem)",
              fontWeight: 600,
              color: "#FFFFFF",
              textTransform: "uppercase",
              margin: 0,
              lineHeight: 1,
            }}
          >
            Stratum Juris
          </motion.h1>

          {/* Gold rule */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.95, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              marginTop: "18px",
              marginBottom: "14px",
              height: "1px",
              width: "100px",
              background: "linear-gradient(90deg, transparent, #B8943F, transparent)",
              transformOrigin: "center",
            }}
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 1.3 }}
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#B8943F",
              fontWeight: 400,
              margin: 0,
            }}
          >
            Advocates &amp; Solicitors
          </motion.p>

          {/* Progress line sweeping across bottom */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 3.3, delay: 0.1, ease: "linear" }}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: "linear-gradient(90deg, transparent, #B8943F 40%, #D4AA5A 60%, transparent)",
              transformOrigin: "left",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
