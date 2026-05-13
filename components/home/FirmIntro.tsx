"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const EXPO_OUT = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: EXPO_OUT },
  },
};

const dividerAnim = {
  hidden: { scaleX: 0, opacity: 0 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: EXPO_OUT, delay: 0.1 },
  },
};

export function FirmIntro() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="pt-16 pb-16 lg:pt-24 lg:pb-24" style={{ background: '#F4F1EC' }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid lg:grid-cols-[2fr_3fr] gap-5 lg:gap-24 items-start"
        >
          {/* Left — sticky heading block */}
          <div className="lg:sticky lg:top-32">
            <motion.p
              variants={fadeUp}
              className="font-inter text-sm font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#B8973A" }}>
              Who We Are
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-cormorant text-3xl lg:text-5xl font-semibold text-primary-text leading-tight mb-5"
            >
              A Litigation Practice Built on Structure and Strategy
            </motion.h2>

            <motion.div
              variants={dividerAnim}
              className="gold-divider mb-8 origin-left"
            />

            {/* Desktop only button */}
            <motion.div variants={fadeUp} className="hidden lg:block">
              <div className="relative inline-flex">
                <Link
                  href="/about"
                  className="relative inline-flex items-center justify-center gap-2 border border-primary-text/20 text-primary-text px-8 py-3 text-sm font-inter font-medium tracking-wide transition-colors duration-300 hover:bg-primary-text/5 hover:border-primary-text/40 overflow-hidden rounded-lg"
                >
                  Learn More About Us
                  <span className="absolute top-0 left-0 h-px bg-[#E2B96F] animate-border-top" style={{ width: 0 }} />
                  <span className="absolute top-0 right-0 w-px bg-[#E2B96F] animate-border-right" style={{ height: 0 }} />
                  <span className="absolute bottom-0 right-0 h-px bg-[#E2B96F] animate-border-bottom" style={{ width: 0 }} />
                  <span className="absolute bottom-0 left-0 w-px bg-[#E2B96F] animate-border-left" style={{ height: 0 }} />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right — paragraphs */}
          <div className="space-y-5">
            <motion.p variants={fadeUp} className="text-secondary-text font-inter text-base leading-relaxed">
              Litigation is not approached as a linear process, but as a sequence of controlled decisions taken at the right stage. From the initial assessment to final adjudication, emphasis is placed on identifying pressure points, anticipating opposition strategy and aligning each procedural step with the intended outcome.
            </motion.p>
            <motion.p variants={fadeUp} className="text-secondary-text font-inter text-base leading-relaxed">
              Matters are evaluated not only on legal merits, but also on evidentiary strength, procedural positioning and practical enforceability. This allows for a measured approach where resources are directed with purpose and proceedings remain aligned with the client's objective at every stage.
            </motion.p>
            <motion.p variants={fadeUp} className="text-secondary-text font-inter text-base leading-relaxed">
              The practice places significant focus on interim stages of litigation, where early orders often define the trajectory of a dispute. Strategic use of interim reliefs, procedural tools and timing ensures that the client's position is secured from the outset and strengthened as the matter progresses.
            </motion.p>
            <motion.p variants={fadeUp} className="text-secondary-text font-inter text-base leading-relaxed">
              Consistency in position is maintained across all stages — pleadings, arguments and appellate remedies — ensuring the case develops with coherence and discipline rather than fragmentation.
            </motion.p>

            {/* Mobile only button */}
            <motion.div variants={fadeUp} className="lg:hidden pt-2 flex justify-center">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 border border-primary-text/20 text-primary-text px-8 py-3 text-sm font-inter font-medium tracking-wide transition-colors duration-300 hover:bg-primary-text/5 hover:border-primary-text/40 rounded-lg"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}