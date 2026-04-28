"use client";

import { motion } from "framer-motion";
import { Scale, Target, Swords, Trophy } from "lucide-react";

const EXPO_OUT = [0.16, 1, 0.3, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36, filter: "blur(4px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, ease: EXPO_OUT, delay },
});

const steps = [
  {
    label: "Evaluate",
    icon: Scale,
    description: "A clear assessment of facts, legal position, risk and desired outcome defines direction from the outset.",
  },
  {
    label: "Define",
    icon: Target,
    description: "Strategy is structured with precision, setting a clear course of action aligned with the client's objectives.",
  },
  {
    label: "Pursue",
    icon: Swords,
    description: "Proceedings are driven with discipline and consistency, ensuring momentum remains strong at every stage.",
  },
  {
    label: "Resolve",
    icon: Trophy,
    description: "Focus remains on securing outcomes that are effective, enforceable and aligned with the client's interests.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="pt-20 pb-20 lg:pt-28 lg:pb-28" style={{ background: "#F4F5F8" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">
          <motion.p {...fadeUp(0)} className="font-inter text-sm font-semibold tracking-[0.2em] uppercase text-[#B8973A] mb-4">
            Approach
          </motion.p>
          <motion.h2 {...fadeUp(0.1)} className="font-cormorant text-4xl lg:text-5xl font-semibold text-primary-text mb-5">
            Clarity from the Outset
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EXPO_OUT, delay: 0.2 }}
            className="gold-divider mx-auto mb-6 origin-left"
            style={{ background: "linear-gradient(90deg, #B8973A, #9a7a2e)" }}
          />
          <motion.p {...fadeUp(0.25)} className="font-inter text-base text-black leading-relaxed max-w-xl mx-auto mb-16">
            At Stratum Juris, briefs are taken forward with clarity, structure and a defined objective from
            the outset. The focus remains on understanding the client's position, identifying leverage early
            and driving proceedings with consistency and control.
          </motion.p>
        </div>

        {/* Stepper */}
        <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Horizontal line — sits at center of icon boxes (h-16 = 64px → top 32px) */}
          <div
            className="absolute hidden lg:block pointer-events-none"
            style={{
              top: 32,
              left: "12.5%",
              right: "12.5%",
              height: 1,
              background: "#B8973A",
              opacity: 0.4,
            }}
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.label}
                {...fadeUp(0.1 + index * 0.12)}
                className="group text-center relative"
              >
                <div
                  className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-xl transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-[#B8973A] group-hover:shadow-[0_0_0_2px_#B8973A]"
                  style={{ border: "1px solid #B8973A", background: "#F4F5F8" }}
                >
                  <Icon
                    className="transition-colors duration-300 group-hover:text-white"
                    size={26}
                    style={{ color: "#B8973A" }}
                  />
                </div>
                <h3 className="font-cormorant text-3xl font-semibold text-primary-text mb-3 group-hover:text-[#B8973A] transition-colors duration-300">
                  {step.label}
                </h3>
                <p className="font-inter text-sm font-medium text-black/80 leading-relaxed text-justify">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
