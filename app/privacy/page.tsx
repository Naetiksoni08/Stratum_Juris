import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Stratum Juris — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-20 pb-24">
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="font-inter text-sm font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#B8973A" }}>Legal</p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-semibold text-primary-text mb-4">
            Privacy Policy
          </h1>
          <div className="w-12 h-0.5 bg-accent-gold mb-4" />
          <p className="text-secondary-text font-inter text-sm">Last updated: March 2024</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-8">
          {[
            {
              title: "Information We Collect",
              body: "When you contact us via our website form, telephone, or email, we collect your name, email address, telephone number, and details of your legal query. We do not collect payment information through this website.",
            },
            {
              title: "How We Use Your Information",
              body: "Information you provide is used solely to respond to your inquiry, schedule consultations, and provide legal services if a formal engagement is established. We do not sell, rent, or share your information with third parties for marketing purposes.",
            },
            {
              title: "Confidentiality",
              body: "All information shared with Stratum Juris is treated with the utmost confidentiality, consistent with our professional obligations under the Bar Council of India Rules and applicable law.",
            },
            {
              title: "Data Security",
              body: "We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, disclosure, alteration, or destruction.",
            },
            {
              title: "Cookies",
              body: "This website uses essential cookies to ensure proper functioning. No tracking or advertising cookies are used without your explicit consent.",
            },
            {
              title: "Contact",
              body: "For any questions regarding this Privacy Policy or your personal data, please contact us at privacy@stratumjuris.com.",
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
