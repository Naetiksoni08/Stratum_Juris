"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EXPO_OUT = [0.16, 1, 0.3, 1] as const;

const practiceLinks = [
  { label: "Civil & Commercial Litigation", href: "/expertise/civil-commercial-litigation" },
  { label: "Criminal Defence", href: "/expertise/criminal-defence" },
  { label: "White Collar Crimes & Economic Offences", href: "/expertise/white-collar-economic-offences" },
  { label: "Property & Real Estate Disputes", href: "/expertise/property-real-estate" },
  { label: "Family & Matrimonial Disputes", href: "/expertise/family-matrimonial" },
  { label: "Arbitration & ADR", href: "/expertise/arbitration" },
];

const quickLinks = [
  { label: "About the Firm", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Expertise", href: "/expertise" },
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
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Brand & Logo */}
          <motion.div {...fromLeft(0)} className="col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center gap-1">
              <div className="relative w-14 h-14 lg:w-20 lg:h-20 flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="Stratum Juris Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col ml-0">
                <p className="font-cormorant text-xl lg:text-2xl font-bold text-white leading-tight uppercase tracking-wide whitespace-nowrap">
                  STRATUM JURIS
                </p>
                <p className="text-[11px] tracking-[0.15em] uppercase font-inter mt-0.5" style={{ color: "#B8973A" }}>
                  Advocates & Solicitors
                </p>
              </div>
            </div>
            <p className="text-sm text-white/40 font-inter leading-relaxed mb-6 text-justify">
              A practice defined by preparation and positioning, Stratum Juris approaches disputes with early clarity on leverage and risk, maintaining control over direction and pace of proceedings.
            </p>
          </motion.div>

          {/* Column 2: Practice Areas */}
          <motion.div {...fromLeft(0.12)}>
            <h3 className="font-cormorant text-lg font-semibold text-[#B8973A] mb-5 pb-2 border-b border-white/10">
              Practice Areas
            </h3>
            <ul className="space-y-2.5">
              {practiceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="text-sm text-white/40 hover:text-[#B8973A] transition-colors duration-200 font-inter flex items-center gap-2">
                    <span className="text-[#B8973A] text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Quick Links */}
          <motion.div {...fromRight(0.12)}>
            <h3 className="font-cormorant text-lg font-semibold text-[#B8973A] mb-5 pb-2 border-b border-white/10">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="text-sm text-white/40 hover:text-[#B8973A] transition-colors duration-200 font-inter flex items-center gap-2">
                    <span className="text-[#B8973A] text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact */}
          <motion.div {...fromRight(0)}>
            <h3 className="font-cormorant text-lg font-semibold text-[#B8973A] mb-5 pb-2 border-b border-white/10">
              Contact
            </h3>
            <ul className="space-y-6">
              {/* Head Office */}
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B8973A] flex-shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#B8973A] uppercase font-bold tracking-wider mb-1">Head Office</span>
                  <span className="text-sm text-white/40 font-inter leading-relaxed">
                    A-3/87, Office No. 101, Garg Complex,<br />
                    Block J, Guru Nanak Pura, Laxmi Nagar,<br />
                    Delhi – 110092
                  </span>
                </div>
              </li>

              {/* Branch Office */}
              <li className="flex items-start gap-3">
                <div className="w-4 flex-shrink-0" /> {/* Spacer to align with Head Office icon */}
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#B8973A] uppercase font-bold tracking-wider mb-1">Branch Office</span>
                  <span className="text-sm text-white/40 font-inter leading-relaxed">
                    103-A, Anant Vihar Apartment,<br />
                    1, Lohiya Marg, Civil Lines,<br />
                    Prayagraj, UP – 211001
                  </span>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#B8973A] flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919315413745" className="text-sm text-white/40 hover:text-[#B8973A] font-inter transition-colors duration-200">+91-9315413745</a>
                  <a href="tel:+919811251825" className="text-sm text-white/40 hover:text-[#B8973A] font-inter transition-colors duration-200">+91-9811251825</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#B8973A] flex-shrink-0" />
                <a href="mailto:contact@stratumjuris.com"
                  className="text-sm text-white/40 hover:text-[#B8973A] font-inter transition-colors duration-200">
                  contact@stratumjuris.com
                </a>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Back to Top */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-6">

            <p className="text-xs text-white/25 font-inter text-left w-full sm:w-auto">
              © {new Date().getFullYear()} Stratum Juris. All rights reserved.
            </p>

            <div className="flex justify-end w-full sm:w-auto">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Back to top"
                className="group flex items-center gap-3 hover:text-[#B8973A] transition-colors duration-300"
              >
                <span className="font-inter text-xs tracking-[0.2em] uppercase text-white/40 group-hover:text-[#B8973A] transition-colors duration-300">
                  Back to Top
                </span>
                <div className="w-9 h-9 border border-white/20 flex items-center justify-center group-hover:border-[#B8973A] transition-colors duration-300">
                  <ArrowUp className="w-4 h-4 text-white/40 group-hover:text-[#B8973A] group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
              </button>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}