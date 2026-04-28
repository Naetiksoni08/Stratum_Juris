"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-20 lg:py-24 border-y border-border" style={{ backgroundColor: "#F4F1EC" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 36, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          <div className="text-center lg:text-left max-w-2xl">
            <p className="font-inter text-sm font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#B8973A" }}>
              Get in Touch
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-text leading-tight mb-4">
              Ready to Discuss Your Case?
            </h2>
            <p className="text-secondary-text font-inter text-base leading-relaxed">
              Schedule a confidential consultation with one of our senior attorneys. The first step to
              resolving your legal matter is a conversation.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 flex-shrink-0"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent-gold text-white px-16 py-4 text-sm font-inter font-medium tracking-wide hover:bg-hover-gold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group rounded-xl"
            >
              Book Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
