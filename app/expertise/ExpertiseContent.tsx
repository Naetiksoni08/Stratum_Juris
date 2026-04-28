"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Scale, Briefcase, Gavel, Building2, Users, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABanner } from "@/components/home/CTABanner";
import { practiceAreas } from "@/lib/data/practiceAreas";

const iconMap: Record<string, React.ElementType> = {
  Scale,
  Briefcase,
  Gavel,
  Building2,
  Users,
  Shield,
};

export function ExpertiseContent() {
  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section
        className="relative bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/practice.png')", backgroundPosition: "center 30%", minHeight: "480px", paddingTop: "7rem", paddingBottom: "7rem" }}
      >
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(10,22,40,0.75) 50%, rgba(10,22,40,0.30))" }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-inter text-sm font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: "#B8973A" }}
          >
            What We Do
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-5"
          >
            Areas of Expertise
          </motion.h1>
          <div className="gold-divider mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-inter text-lg max-w-2xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            We offer focused, specialist expertise across a defined range of practice areas —
            each led by advocates who have dedicated their careers to that field.
          </motion.p>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="pt-8 pb-20 lg:pt-10 lg:pb-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-0 divide-y divide-border">
            {practiceAreas.map((area, index) => {
              const Icon = iconMap[area.icon] || Scale;
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={area.id}
                  id={area.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="py-16 lg:py-20 scroll-mt-24"
                >
                  <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? "lg:grid-flow-col-dense" : ""}`}>
                    {/* Text */}
                    <div className={!isEven ? "lg:col-start-2" : ""}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 flex items-center justify-center border border-border">
                          <Icon className="w-5 h-5 text-accent-gold" />
                        </div>
                        <span className="text-accent-gold font-inter text-xs tracking-[0.2em] uppercase">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h2 className="font-cormorant text-3xl lg:text-4xl font-semibold text-primary-text mb-4">
                        {area.title}
                      </h2>
                      <div className="gold-divider mb-6" />
                      <p className="text-secondary-text font-inter text-base leading-relaxed mb-6 text-justify">
                        {area.intro}
                      </p>
                      <Link
                        href={`/expertise/${area.id}`}
                        className="inline-flex items-center gap-1.5 text-accent-gold font-inter text-sm font-medium hover:text-hover-gold transition-colors duration-200 group/rm"
                      >
                        Read More
                        <ArrowRight className="w-3.5 h-3.5 group-hover/rm:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>

                    {/* Key Points */}
                    <div className={`${!isEven ? "lg:col-start-1 lg:row-start-1" : ""} p-8 border border-border rounded-xl transition-transform duration-300 hover:scale-[1.02] cursor-default`} style={{ backgroundColor: "#F5F0E8", boxShadow: "0 8px 24px rgba(10,22,40,0.12), 0 2px 8px rgba(10,22,40,0.07)" }}>
                      <h3 className="font-cormorant text-2xl font-bold mb-6 text-primary-text">
                        Key Services
                      </h3>
                      <ul className="space-y-3">
                        {area.keyPoints.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-accent-gold flex-shrink-0 mt-0.5" />
                            <span className="font-inter text-sm leading-relaxed" style={{ color: "#1a1a1a" }}>
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 pt-6 border-t border-border">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 text-accent-gold font-inter text-sm font-medium hover:text-hover-gold transition-colors duration-200"
                        >
                          Discuss your matter →
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
