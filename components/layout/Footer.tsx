"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Linkedin, Instagram, ArrowUp } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EXPO_OUT = [0.16, 1, 0.3, 1] as const;

const practiceLinks = [
  { label: "Civil Litigation", href: "/expertise#civil-litigation" },
  { label: "Commercial Disputes", href: "/expertise#commercial-disputes" },
  { label: "Arbitration & ADR", href: "/expertise#arbitration" },
  { label: "Corporate Litigation", href: "/expertise#corporate-litigation" },
  { label: "Consumer Disputes", href: "/expertise#consumer-disputes" },
  { label: "Criminal Defence", href: "/expertise#criminal-defence" },
];

const quickLinks = [
  { label: "About the Firm", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Expertise", href: "/expertise" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-60px" });

  const fromLeft = (delay = 0) => ({
    initial: { opacity: 0, x: -60, filter: "blur(4px)" },
    animate: inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : { opacity: 0, x: -60, filter: "blur(4px)" },
    transition: { duration: 0.85, ease: EXPO_OUT, delay },
  });

  const fromRight = (delay = 0) => ({
    initial: { opacity: 0, x: 60, filter: "blur(4px)" },
    animate: inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : { opacity: 0, x: 60, filter: "blur(4px)" },
    transition: { duration: 0.85, ease: EXPO_OUT, delay },
  });

  return (
    <footer className="bg-primary-text text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand — from left */}
          <motion.div {...fromLeft(0)} className="lg:col-span-1">
            <div className="mb-6">
              <p className="font-cormorant text-2xl font-bold text-white">STRATUM JURIS</p>
              <p className="text-[10px] tracking-[0.25em] uppercase font-inter mt-1" style={{ color: "#B8973A" }}>
                Advocates & Solicitors
              </p>
            </div>
            <p className="text-sm text-white/40 font-inter leading-relaxed mb-6 text-justify">
              A practice defined by preparation and positioning, Stratum Juris approaches disputes with early clarity on leverage and risk, maintaining control over direction and pace of proceedings, to deliver outcomes that are precise and enforceable.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="LinkedIn"
                className="w-8 h-8 border border-white/15 flex items-center justify-center hover:border-accent-gold hover:text-accent-gold transition-colors duration-300">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Practice Areas — from left */}
          <motion.div {...fromLeft(0.12)}>
            <h3 className="font-cormorant text-lg font-semibold text-white mb-5 pb-2 border-b border-white/10">
              Practice Areas
            </h3>
            <ul className="space-y-2.5">
              {practiceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="text-sm text-white/40 hover:text-accent-gold transition-colors duration-200 font-inter flex items-center gap-2">
                    <span className="text-accent-gold text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links — from right */}
          <motion.div {...fromRight(0.12)}>
            <h3 className="font-cormorant text-lg font-semibold text-white mb-5 pb-2 border-b border-white/10">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="text-sm text-white/40 hover:text-accent-gold transition-colors duration-200 font-inter flex items-center gap-2">
                    <span className="text-accent-gold text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact — from right */}
          <motion.div {...fromRight(0)}>
            <h3 className="font-cormorant text-lg font-semibold text-white mb-5 pb-2 border-b border-white/10">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/40 font-inter leading-relaxed">
                  A-3/87, Office No. 101, Garg Complex,<br />
                  Block J, Guru Nanak Pura, Laxmi Nagar,<br />
                  Delhi – 110092
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent-gold flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919315413745" className="text-sm text-white/40 hover:text-accent-gold font-inter transition-colors duration-200">+91-9315413745</a>
                  <a href="tel:+919811251825" className="text-sm text-white/40 hover:text-accent-gold font-inter transition-colors duration-200">+91-9811251825</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent-gold flex-shrink-0" />
                <a href="mailto:contact@stratumjuris.com"
                  className="text-sm text-white/40 hover:text-accent-gold font-inter transition-colors duration-200">
                  contact@stratumjuris.com
                </a>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <p className="text-xs text-white/25 font-inter">
                © {new Date().getFullYear()} Stratum Juris. All rights reserved.
              </p>
              <span className="text-white/15">·</span>
              <Link href="/privacy" className="text-xs text-white/25 hover:text-accent-gold transition-colors">
                Privacy Policy
              </Link>
              <span className="text-white/15">·</span>
              <Link href="/terms" className="text-xs text-white/25 hover:text-accent-gold transition-colors">
                Terms of Use
              </Link>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="group flex items-center gap-3 hover:text-accent-gold transition-colors duration-300"
            >
              <span className="font-inter text-xs tracking-[0.2em] uppercase text-white/40 group-hover:text-accent-gold transition-colors duration-300">
                Back to Top
              </span>
              <div className="w-9 h-9 border border-white/20 flex items-center justify-center group-hover:border-accent-gold transition-colors duration-300">
                <ArrowUp className="w-4 h-4 text-white/40 group-hover:text-accent-gold group-hover:-translate-y-0.5 transition-all duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
