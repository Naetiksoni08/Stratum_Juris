"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Scale, Briefcase, Gavel, Building2, Users, Shield, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { practiceAreas } from "@/lib/data/practiceAreas";

const iconMap: Record<string, React.ElementType> = {
  Scale,
  Briefcase,
  Gavel,
  Building2,
  Users,
  Shield,
};

export function PracticeAreasSection() {
  return (
    <section className="pt-12 pb-20 lg:pt-12 lg:pb-28" style={{ background: 'linear-gradient(to bottom, #F4F5F8 0%, #D4DAE8 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="What We Do"
          title="Areas of Expertise"
          subtitle="Our practice focuses on handling disputes across key areas of civil, criminal and financial law, approached with clarity, structure and strategic intent."
          center
          className="mb-14"
          />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map((area, index) => {
            const Icon = iconMap[area.icon] || Scale;
            return (
              <Link key={area.id} href={`/expertise#${area.id}`} className="block">
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="card-hover group bg-background border border-border p-8 flex flex-col cursor-pointer h-full rounded-xl"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-accent-gold/40 mb-6 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-accent-gold" />
                  </div>

                  {/* Content */}
                  <h3 className="font-cormorant text-xl font-semibold text-primary-text mb-3">
                    {area.title}
                  </h3>
                  <p className="text-secondary-text font-inter text-sm leading-relaxed mb-6 flex-grow">
                    {area.shortDescription}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs font-inter font-medium text-accent-gold tracking-wide flex items-center gap-1.5">
                      Read More
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                    <div className="w-6 h-px bg-border group-hover:bg-accent-gold/30 transition-colors duration-300" />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="relative inline-flex">
            <Link
              href="/expertise"
              className="relative inline-flex items-center gap-2 border border-primary-text/20 text-primary-text px-8 py-3 text-sm font-inter font-medium tracking-wide transition-colors duration-300 hover:bg-primary-text/5 hover:border-primary-text/40 overflow-hidden rounded-lg"
            >
              View All Areas of Expertise
              <ArrowRight className="w-4 h-4" />
              <span className="absolute top-0 left-0 h-px bg-[#E2B96F] animate-border-top" style={{ width: 0 }} />
              <span className="absolute top-0 right-0 w-px bg-[#E2B96F] animate-border-right" style={{ height: 0 }} />
              <span className="absolute bottom-0 right-0 h-px bg-[#E2B96F] animate-border-bottom" style={{ width: 0 }} />
              <span className="absolute bottom-0 left-0 w-px bg-[#E2B96F] animate-border-left" style={{ height: 0 }} />
            </Link>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
