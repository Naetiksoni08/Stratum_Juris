"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export function TrustedPartnership() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "linear-gradient(to bottom, #060E1A 0%, #0A1628 100%)" }}>
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          
          backgroundImage: "radial-gradient(circle, #B8973A 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 36, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#B8973A] font-inter text-sm tracking-[0.25em] uppercase mb-5"
        >
          Trusted Legal Partnership
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 36, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-cormorant text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight"
        >
          An Associated Advisory Practice
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 36, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="space-y-4 mb-10"
        >
          <p className="font-inter text-white/60 text-base leading-relaxed">
            Legal matters often require both dispute resolution and regulatory or advisory support.
            To facilitate this, Stratum Juris works alongside its associated advisory practice.
          </p>
          <p className="font-cormorant text-[#B8973A] font-semibold text-2xl text-center">
            Jiya &amp; Associates – Legal &amp; Regulatory Consultants
          </p>
          <p className="font-inter text-white/60 text-base leading-relaxed">
            This collaborative structure allows clients to access coordinated legal support across
            litigation, regulatory compliance, tax advisory and corporate matters where required.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <a
            href="https://www.jiyaandassociates.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#B8973A] hover:bg-[#D4A853] font-extrabold text-black/100 font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 transition-colors duration-300 rounded-xl"
          >
            Visit Jiya &amp; Associates
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

