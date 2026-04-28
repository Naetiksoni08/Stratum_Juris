"use client";

import { motion } from "framer-motion";
import Link from "next/link";
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/stratum.png')" }}
      />
      {/* Overlay — darker at top for navbar visibility, lighter towards center */}
      <div className="absolute inset-0 bg-[#0B1929]/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1929]/70 via-transparent to-transparent" />


      {/* Navy accent line */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-accent-gold to-transparent"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      <div className="relative z-10 w-full px-12 lg:px-42 py-32 text-left">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] mb-6 text-left"
          >
            CLARITY IN STRATEGY.{" "}
            <span className="text-accent-gold italic">STRENGTH</span>
            <br />
            IN EXECUTION.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/85 font-inter text-lg leading-relaxed mb-10 max-w-xl text-left"
          >
            From the first consultation to final adjudication, each matter is approached
            with clarity, structure and strategic intent across civil, criminal and
            financial disputes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 text-white px-8 py-4 text-sm font-inter font-medium tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 rounded-lg"
              style={{ backgroundColor: "#B8973A" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#9a7a2e")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#B8973A")}
            >
              Request a Consultation
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
