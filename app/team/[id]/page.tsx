import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, User } from "lucide-react";
import { teamMembers } from "@/lib/data/team";

export function generateStaticParams() {
  return teamMembers.map((m) => ({ id: m.id }));
}

function toSlug(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export default function TeamMemberPage({ params }: { params: { id: string } }) {
  const member = teamMembers.find((m) => m.id === params.id);
  if (!member) notFound();
  const taglineText = member.tagline || member.barEnrollment || "Advocate, Bar Council of India";

  const tags = [
    ...(member.bio ? [{ label: "Profile", slug: "profile" }] : []),
    ...(member.sections?.map((s) => ({ label: s.title, slug: toSlug(s.title) })) ?? []),
  ];

  return (
    <div className="pt-20">

      {/* ── Hero ── */}
      <section className="flex flex-col sm:flex-row overflow-hidden sm:min-h-[560px] pt-0 sm:pt-0" style={{ background: "#0f1c2e" }}>

        {/* Image — full width on mobile, 38% on desktop */}
        <div className="w-full sm:w-[38%] flex-shrink-0 relative h-[360px] sm:h-auto sm:min-h-[560px]" style={{ background: "#0f1c2e" }}>
          {/* Explicit top margin so photo starts lower */}
          <div className="absolute inset-x-0 bottom-0 top-5 sm:top-0">
            {member.image ? (
              <Image src={member.image} alt={member.name} fill className="object-contain object-bottom" priority />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <User className="w-16 h-16" style={{ color: "#B8973A" }} />
              </div>
            )}
          </div>

          {/* Bottom fade on mobile only */}
          <div className="absolute inset-x-0 bottom-0 h-16 sm:hidden pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, #0f1c2e)" }} />
          {/* "← Our Team" — mobile only */}
          <Link href="/team" className="sm:hidden absolute top-12 left-4 inline-flex items-center gap-2 font-inter text-xs tracking-[0.15em] uppercase z-10" style={{ color: "#B8973A" }}>
            <ArrowLeft className="w-3.5 h-3.5" />
            Our Team
          </Link>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center items-center sm:items-start px-8 sm:px-12 lg:px-16 pt-6 sm:pt-32 pb-12 sm:pb-16 text-center sm:text-left" style={{ background: "#0f1c2e" }}>
          {/* "← Our Team" — desktop only */}
          <Link href="/team" className="hidden sm:inline-flex items-center gap-2 font-inter text-xs tracking-[0.15em] uppercase mb-12 transition-colors duration-200" style={{ color: "#B8973A" }}>
            <ArrowLeft className="w-3.5 h-3.5" />
            Our Team
          </Link>

          <p className="font-inter text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: "#B8973A" }}>
            {member.role}
          </p>
          <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-5">
            {member.name}
          </h1>
          <div className="w-12 h-[2px] mb-6 mx-auto sm:mx-0" style={{ background: "#B8973A" }} />
          <p className="font-inter text-sm text-white mb-8" style={{ maxWidth: "380px" }}>
            {taglineText}
          </p>
        </div>
      </section>
      <div className="border-t border-border" />

      {/* ── Profile Content ── */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-14">

          {/* Bio */}
          {member.bio && (
            <>
              <div id="profile" className="scroll-mt-24">
                <p
                  className="font-inter text-xs font-semibold tracking-[0.2em] uppercase mb-3"
                  style={{ color: "#B8973A" }}
                >
                  Professional Background
                </p>
                <h2 className="font-cormorant text-3xl lg:text-4xl font-semibold text-primary-text mb-6">
                  Profile
                </h2>
                <div className="space-y-4">
                  {member.bio.split("\n\n").map((para, i) => (
                    <p key={i} className="font-inter text-base text-secondary-text leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
              <div className="border-t border-border" />
            </>
          )}

          {/* Additional sections */}
          {member.sections?.map((section, index) => (
            <div key={section.title} id={toSlug(section.title)} className="scroll-mt-24">
              <p
                className="font-inter text-xs font-semibold tracking-[0.2em] uppercase mb-3"
                style={{ color: "#B8973A" }}
              >
               {section.label ?? section.title} 
              </p>
              <h2 className="font-cormorant text-3xl lg:text-4xl font-semibold text-primary-text mb-6">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.content.split("\n\n").map((para, i) => {
                  const lines = para.split("\n");
                  if (lines.length > 1) {
                    return (
                      <div key={i}>
                        <p className="font-inter text-base font-semibold text-primary-text mb-1 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-gold flex-shrink-0" />
                          {lines[0]}
                        </p>
                        <p className="font-inter text-base text-secondary-text leading-relaxed pl-3.5">
                          {lines.slice(1).join(" ")}
                        </p>
                      </div>
                    );
                  }
                  return (
                    <p key={i} className="font-inter text-base text-secondary-text leading-relaxed">
                      {para}
                    </p>
                  );
                })}
              </div>
              {index < (member.sections?.length ?? 0) - 1 && (
                <div className="border-t border-border mt-14" />
              )}
            </div>
          ))}

          <div className="border-t border-border" />

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <p className="font-cormorant text-3xl lg:text-4xl font-semibold text-primary-text mb-2">
                Schedule a Consultation
              </p>
              <p className="font-inter text-base text-secondary-text">
                Discuss your matter directly with our team.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent-gold text-white px-10 py-4 text-sm font-inter font-medium tracking-wide hover:bg-hover-gold transition-all duration-300 whitespace-nowrap rounded-lg"
            >
              Get in Touch
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
