"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { User } from "lucide-react";
import { CTABanner } from "@/components/home/CTABanner";
import { teamMembers } from "@/lib/data/team";

export function TeamContent() {
  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section
        className="relative py-20 lg:py-28 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/team.png')" }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(10,22,40,0.82) 55%, rgba(10,22,40,0.40))" }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-inter text-sm font-semibold tracking-[0.2em] uppercase mb-3"
              style={{ color: "#B8973A" }}
            >
              The People Behind
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-5"
            >
              Our Team
            </motion.h1>
            <div className="gold-divider mb-8" />
            <div className="space-y-5">
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-inter text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                The strength of a litigation practice lies in the people who build and carry each matter forward.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="font-inter text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                Stratum Juris is led by a team of experienced law professionals engaged in dispute resolution across civil, criminal and financial matters. The practice brings together courtroom experience, strategic insight and a disciplined approach to litigation.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="font-inter text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                The team has represented clients across a range of judicial and quasi-judicial forums, including trial courts, High Courts, the Hon'ble Supreme Court and specialised tribunals. This exposure informs a practical understanding of how matters evolve at different stages of litigation and how strategy must adapt accordingly.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-20">

          {/* Founder Featured Card */}
          {(() => {
            const founder = teamMembers.find((m) => m.id === "founder");
            if (!founder) return null;
            return (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-0 border border-border"
              >
                {/* Image */}
                <div className="relative flex-shrink-0 w-full sm:w-[260px]" style={{ minHeight: "300px", backgroundColor: "#E8E2D9" }}>
                  {founder.image ? (
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, 260px"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <User className="w-16 h-16" style={{ color: "#B8A898" }} />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center px-8 py-8 lg:px-12">
                  <p className="font-inter text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#B8973A" }}>
                    {founder.role}
                  </p>
                  <h2 className="font-cormorant text-4xl lg:text-5xl font-semibold text-primary-text leading-tight mb-4">
                    {founder.name}
                  </h2>
                  <div className="w-10 h-[1.5px] mb-5" style={{ background: "#B8973A" }} />
                  <p className="font-inter text-sm text-secondary-text leading-relaxed mb-7 max-w-xl">
                    {founder.bio.split("\n\n")[0]}
                  </p>
                  <Link
                    href={`/team/${founder.id}`}
                    className="self-start inline-flex items-center gap-2 font-inter text-xs tracking-[0.15em] uppercase border px-5 py-2.5 border-primary-text/30 text-primary-text hover:border-[#B8973A] hover:text-[#B8973A] transition-colors duration-200"
                  >
                    View Full Profile →
                  </Link>
                </div>
              </motion.div>
            );
          })()}

          {/* Team Members Grid */}
          <div>
            <p className="font-inter text-xs font-semibold tracking-[0.22em] uppercase mb-8" style={{ color: "#B8973A" }}>
              Team Members
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.filter((m) => m.id !== "founder").map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group border border-border"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ height: "350px", backgroundColor: "#E8E2D9" }}>
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top transition-all duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <User className="w-16 h-16" style={{ color: "#B8A898" }} />
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="px-5 pt-4 pb-5">
                    <h3 className="font-cormorant text-xl font-semibold text-primary-text leading-tight mb-1">
                      {member.name}
                    </h3>
                    <p className="font-inter text-xs tracking-[0.15em] uppercase mb-4" style={{ color: "#B8973A" }}>
                      {member.role}
                    </p>
                    <Link
                      href={`/team/${member.id}`}
                      className="inline-flex items-center gap-1.5 font-inter text-xs tracking-wide uppercase border px-4 py-2 border-primary-text/25 text-primary-text hover:border-[#B8973A] hover:text-[#B8973A] transition-colors duration-200"
                    >
                      View Profile →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>
      <CTABanner />
    </div>
  );
}
