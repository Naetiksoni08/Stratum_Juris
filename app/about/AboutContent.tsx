"use client";

import { motion } from "framer-motion";
import { CTABanner } from "@/components/home/CTABanner";


const distinguishers = [
  {
    title: "Strategic Control",
    description:
      "Each matter is conducted with a clearly defined litigation strategy, ensuring that proceedings remain directed and purposeful at every stage.",
  },
  {
    title: "Precision in Execution",
    description:
      "From drafting to final arguments, every aspect is handled with accuracy and attention to detail, maintaining consistency in position throughout.",
  },
  {
    title: "Clarity in Advice",
    description:
      "Clients are provided with direct and practical guidance, enabling decisions that are informed, timely and aligned with the larger objective.",
  },
  {
    title: "Professional Discipline",
    description:
      "Our work reflects consistency, discretion and adherence to the highest standards of professional conduct across all forums.",
  },
];

// Small label uses font-inter uppercase — same as "GET IN TOUCH"
// Big heading uses font-cormorant
function SectionHeading({ subtitle, title }: { subtitle: string; title: string }) {
  return (
    <div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-inter text-sm font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#B8973A" }}
      >
        {subtitle}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.08 }}
        className="font-cormorant text-4xl md:text-5xl font-semibold text-primary-text leading-tight"
      >
        {title}
      </motion.h2>
      <div className="gold-divider mt-5" />
    </div>
  );
}

// Two-column layout for content sections (NOT hero)
function TwoCol({
  left,
  right,
  bg = "bg-background",
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  bg?: string;
}) {
  return (
    <section className={`py-20 lg:py-28 ${bg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-16 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-32">{left}</div>
          <div>{right}</div>
        </div>
      </div>
    </section>
  );
}

export function AboutContent() {
  return (
    <div className="pt-20">

      {/* ── Page Hero — single column, full width left ─────────── */}
      <section
        className="py-20 lg:py-28 relative bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/about.jpeg')", backgroundPosition: "center 30%" }}
      >
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(10,22,40,0.80) 55%, rgba(10,22,40,0.30))" }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-inter text-sm font-semibold tracking-[0.2em] uppercase mb-3"
              style={{ color: "#B8973A" }}
            >
              About Us
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.0] mb-6"
            >
              Structured Litigation.
              <br />
              <span className="italic" style={{ color: "#B8973A" }}>Decisive Outcomes.</span>
            </motion.h1>
            <div className="gold-divider mb-7" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-inter text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.72)" }}
            >
              Stratum Juris is a dispute resolution practice representing individuals and businesses
              in civil, criminal and financial matters. The firm is engaged in handling contentious
              mandates that require precision in analysis, discipline in execution and firm control
              over proceedings.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── OUR PRACTICE ───────────────────────────────────────── */}
      <TwoCol
        bg="bg-cream"
        left={
          <SectionHeading
            subtitle="Structured handling of complex disputes"
            title="Our Practice"
          />
        }
        right={
          <div className="space-y-5 text-secondary-text font-inter text-base leading-relaxed">
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              We appear before courts, tribunals and quasi-judicial forums, structuring each
              matter with a clear understanding of its legal position, procedural posture and
              the direction it must take. Our role extends beyond representation—we shape the
              course of disputes through deliberate strategy and consistent advocacy.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
              Matters are approached with a defined objective and conducted with continuity,
              ensuring that every stage of the proceeding aligns with the intended outcome.
              The focus remains on advancing the client's position with clarity and purpose,
              without deviation or unnecessary complexity.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              We do not merely participate in litigation—we direct its course.
            </motion.p>
          </div>
        }
      />

      {/* ── OUR PHILOSOPHY ─────────────────────────────────────── */}
      <TwoCol
        bg="bg-background"
        left={
          <SectionHeading
            subtitle="Strategy defines every proceeding"
            title="Our Philosophy"
          />
        }
        right={
          <div className="space-y-5 text-secondary-text font-inter text-base leading-relaxed">
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              At Stratum Juris, litigation is not treated as a reactive process, but as a structured exercise in control, positioning and execution.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
              Every dispute is examined for its legal strength, procedural standing and practical implications at the outset. This allows for the formulation of a clear and sustainable litigation strategy, avoiding fragmentation in approach as the matter progresses.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              Our philosophy is grounded in preparation and consistency. Each step within a proceeding is calibrated to reinforce the overall position, ensuring that actions taken at one stage do not undermine the outcome at another. This continuity of approach is critical in complex and multi-layered disputes.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}>
              Clarity at the outset defines the outcome at the end.
            </motion.p>
          </div>
        }
      />

      {/* ── OUR APPROACH ───────────────────────────────────────── */}
      <TwoCol
        bg="bg-cream"
        left={
          <SectionHeading
            subtitle="Execution aligned with strategy"
            title="Our Approach"
          />
        }
        right={
          <div className="space-y-5 text-secondary-text font-inter text-base leading-relaxed">
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              Disputes require more than standard handling—they demand structure, timing and decisive action.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
              We begin with a precise assessment of the legal and factual matrix, followed by the development of a litigation strategy aligned with the client's objectives. Proceedings are then conducted with discipline, ensuring that filings, arguments and procedural steps are executed with consistency and intent.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              Our approach is not fragmented across stages; it remains cohesive from initiation to resolution. This allows for sustained control over the matter, minimising unpredictability and strengthening the client's position throughout the course of litigation.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}>
              Client interaction remains direct and focused. We ensure that advice is clear, actionable and aligned with the realities of the dispute, enabling informed decision-making without dilution of strategy.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              Execution, not explanation, defines effective litigation.
            </motion.p>
          </div>
        }
      />

      {/* ── WHY CLIENTS CHOOSE US ──────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="max-w-3xl mb-8">
            <SectionHeading
              subtitle="Reliable and structured representation"
              title="Why Clients Choose Us"
            />
          </div>

          <div className="mb-10 space-y-2">
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-secondary-text font-inter text-base leading-relaxed">
              Clients engage Stratum Juris for representation that is structured, dependable and outcome-oriented, particularly in matters where precision and control are critical. This combination of structured thinking and disciplined execution allows us to handle disputes that require sustained attention and strategic continuity.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="text-secondary-text font-inter text-base leading-relaxed">
              Our practice is distinguished by:
            </motion.p>
          </div>

          <div className="space-y-0 divide-y divide-border border-t border-border">
            {distinguishers.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="grid lg:grid-cols-[1fr_2fr] gap-6 lg:gap-24 py-7 group cursor-default px-4 -mx-4 transition-colors duration-300"
                style={{ backgroundColor: "transparent" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#F0EDEA")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                <div className="flex items-start gap-4">
                  <div className="w-1 h-5 mt-1 flex-shrink-0 rounded-full" style={{ backgroundColor: "#B8973A" }} />
                  <h3 className="font-cormorant text-xl font-semibold text-primary-text group-hover:text-accent-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
                <p className="font-inter text-sm text-secondary-text leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 max-w-3xl">
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-secondary-text font-inter text-base">
              Reliability in litigation is built on consistency, not intensity.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── COMMITMENT TO CLIENTS ──────────────────────────────── */}
      <TwoCol
        bg="bg-secondary"
        left={
          <SectionHeading
            subtitle="Outcome driven client focus"
            title="Commitment to Clients"
          />
        }
        right={
          <div className="space-y-5 text-secondary-text font-inter text-base leading-relaxed">
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              At Stratum Juris, every matter is approached with a clear sense of responsibility and a defined commitment to achieving results that align with the client's position.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
              We remain focused on conducting litigation with precision, maintaining consistency in approach and ensuring that clients are represented with clarity and control at every stage of the proceedings. Our engagement is marked by responsiveness, discretion and a sustained focus on the outcome.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              Beyond individual matters, our commitment extends to building long-term professional relationships based on trust, reliability and performance. Clients engage us with the expectation of structured representation, and that expectation informs every aspect of our work.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}>
              Every brief entrusted to us is pursued to its logical conclusion.
            </motion.p>
          </div>
        }
      />

      <CTABanner />
    </div>
  );
}
