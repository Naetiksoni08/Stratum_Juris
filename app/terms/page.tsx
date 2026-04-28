import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for the Stratum Juris website.",
};

export default function TermsPage() {
  return (
    <div className="pt-20 pb-24">
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="font-inter text-sm font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#B8973A" }}>Legal</p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-semibold text-primary-text mb-4">
            Terms of Use
          </h1>
          <div className="w-12 h-0.5 bg-accent-gold mb-4" />
          <p className="text-secondary-text font-inter text-sm">Last updated: March 2024</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-8">
          {[
            {
              title: "Acceptance of Terms",
              body: "By accessing and using this website, you accept and agree to be bound by these Terms of Use. If you do not agree, please do not use this website.",
            },
            {
              title: "No Legal Advice",
              body: "The content on this website is provided for general informational purposes only and does not constitute legal advice. No lawyer–client relationship is formed by your use of this website or by sending an email to Stratum Juris.",
            },
            {
              title: "Bar Council Disclaimer",
              body: "The rules of the Bar Council of India prohibit law firms from advertising or soliciting work in any form or manner. This website is not intended to constitute advertising or solicitation under the rules of any jurisdiction.",
            },
            {
              title: "Intellectual Property",
              body: "All content on this website, including text, graphics, and logos, is the property of Stratum Juris and is protected by applicable intellectual property laws. You may not reproduce or distribute any content without prior written permission.",
            },
            {
              title: "Limitation of Liability",
              body: "Stratum Juris shall not be liable for any loss or damage arising from your reliance on information contained on this website. All information is provided 'as is' without warranty of any kind.",
            },
            {
              title: "Governing Law",
              body: "These Terms of Use are governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in India.",
            },
          ].map((section) => (
            <div key={section.title} className="border-b border-border pb-8 last:border-0">
              <h2 className="font-cormorant text-2xl font-semibold text-primary-text mb-3">
                {section.title}
              </h2>
              <p className="font-inter text-secondary-text text-base leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
