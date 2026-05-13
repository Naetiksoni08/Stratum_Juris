import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { practiceAreas } from "@/lib/data/practiceAreas";

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ id: area.id }));
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mt-4">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-4 pl-4 py-2 hover:scale-[1.02] transition-transform duration-200 cursor-default origin-left"
          style={{ borderLeft: "2px solid #B8973A" }}
        >
          <span className="font-inter text-base text-secondary-text leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PracticeAreaPage({ params }: { params: { id: string } }) {
  const area = practiceAreas.find((a) => a.id === params.id);
  if (!area) notFound();

  const currentIndex = practiceAreas.findIndex((a) => a.id === params.id);
  const prev = practiceAreas[currentIndex - 1] ?? null;
  const next = practiceAreas[currentIndex + 1] ?? null;

  return (
    <div className="pt-20">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: "#0A1628" }}>
        {/* Grid line pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <Link
            href="/expertise"
            className="inline-flex items-center gap-2 font-inter text-xs tracking-[0.15em] uppercase mb-10 transition-colors duration-200"
            style={{ color: "#B8973A" }}
          >
            <ArrowLeft className="w-3.5 h-3.5" style={{ color: "#B8973A" }} />
            Back to All Areas
          </Link>

          <p className="font-inter text-sm font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#B8973A" }}>
            Practice Area
          </p>
          <h1 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
            {area.title}
          </h1>
          <div className="gold-divider mb-8" />
          <div className="space-y-4">
            {area.intro.split("\n\n").map((para, i) => (
              <p key={i} className="font-inter text-base lg:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-border" />


      {/* ── Detail content ────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-14">

          {/* Nature of Matters — optional */}
          {area.natureOfMatters && (
            <>
              <div>
                <h2 className="font-cormorant text-3xl lg:text-4xl font-semibold text-primary-text mb-5">
                  Nature of Matters
                </h2>
                <p className="font-inter text-base text-secondary-text leading-relaxed">
                  {area.natureOfMatters.intro}
                </p>
                <BulletList items={area.natureOfMatters.items} />
              </div>
              <div className="border-t border-border" />
            </>
          )}

          {/* Scope of Work — shown only if no natureOfMatters */}
          {!area.natureOfMatters && (
            <>
              <div>
                <h2 className="font-cormorant text-3xl lg:text-4xl font-semibold text-primary-text mb-5">
                  Scope of Work
                </h2>
                <BulletList items={area.scopeOfWork} />
              </div>
              <div className="border-t border-border" />
            </>
          )}

          {/* Legal Framework — optional */}
          {area.legalFramework && (
            <>
              <div>
                <h2 className="font-cormorant text-3xl lg:text-4xl font-semibold text-primary-text mb-6">
                  Legal Framework
                </h2>
                <p className="font-inter text-sm text-secondary-text mb-5 leading-relaxed">
                  Matters are handled within established statutory frameworks, including:
                </p>
                <div className="space-y-1">
                  {area.legalFramework.map((item) => (
                    <div
                      key={item.statute}
                      className="bg-white border-0 px-5 py-4 hover:bg-secondary/40 hover:translate-x-1 transition-all duration-200 cursor-default"
                    >
                      <p className="font-inter text-sm font-semibold text-primary-text mb-1">
                        {item.statute}
                      </p>
                      <p className="font-inter text-xs text-secondary-text leading-relaxed">
                        {item.scope}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t border-border" />
            </>
          )}

          {/* How Matters Are Handled */}
          <div>
            <h2 className="font-cormorant text-3xl lg:text-4xl font-semibold text-primary-text mb-6">
              How Matters Are Handled
            </h2>
            <p className="font-inter text-base text-secondary-text leading-relaxed">
              {area.howHandled}
            </p>
            {area.howHandledSteps && (
              <BulletList items={area.howHandledSteps} />
            )}
            {area.howHandledOutro && (
              <p className="font-inter text-base text-secondary-text leading-relaxed mt-5">
                {area.howHandledOutro}
              </p>
            )}
          </div>

          <div className="border-t border-border" />

          {/* Strategic Focus */}
          <div>
            <h2 className="font-cormorant text-3xl lg:text-4xl font-semibold text-primary-text mb-5">
              Strategic Focus
            </h2>
            <BulletList items={area.strategicFocus} />
          </div>

          {/* Enforcement & Recovery — optional */}
          {area.enforcementNote && (
            <>
              <div className="border-t border-border" />
              <div>
                <h2 className="font-cormorant text-3xl lg:text-4xl font-semibold text-primary-text mb-5">
                  Enforcement & Recovery
                </h2>
                <p className="font-inter text-base text-secondary-text leading-relaxed">
                  {area.enforcementNote}
                </p>
              </div>
            </>
          )}

          <div className="border-t border-border" />

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <p className="font-cormorant text-4xl lg:text-5xl font-semibold text-primary-text mb-3">
                Discuss Your Matter
              </p>
              <p className="font-inter text-base text-secondary-text">
                Schedule a consultation to understand how we can assist.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent-gold text-white px-10 py-4 text-sm font-inter font-medium tracking-wide hover:bg-hover-gold transition-all duration-300 whitespace-nowrap rounded-lg"
            >
              Request a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* Prev / Next navigation */}
      {(prev || next) && (
        <section className="border-t border-border bg-background">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 py-10 flex justify-between gap-6">
            {prev ? (
              <Link
                href={`/expertise/${prev.id}`}
                className="group flex items-center gap-3 text-secondary-text hover:text-primary-text transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                <div>
                  <p className="font-inter text-xs text-accent-gold tracking-[0.15em] uppercase mb-0.5">Previous</p>
                  <p className="font-cormorant text-lg font-semibold">{prev.title}</p>
                </div>
              </Link>
            ) : <div />}
            {next ? (
              <Link
                href={`/expertise/${next.id}`}
                className="group flex items-center gap-3 text-secondary-text hover:text-primary-text transition-colors duration-200 text-right"
              >
                <div>
                  <p className="font-inter text-xs text-accent-gold tracking-[0.15em] uppercase mb-0.5">Next</p>
                  <p className="font-cormorant text-lg font-semibold">{next.title}</p>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            ) : <div />}
          </div>
        </section>
      )}

    </div>
  );
}
