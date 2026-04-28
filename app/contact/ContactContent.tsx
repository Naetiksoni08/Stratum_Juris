"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    lines: [
      "A-3/87, Office No. 101, Garg Complex",
      "Block J, Guru Nanak Pura, Laxmi Nagar",
      "Delhi – 110092",
    ],
  },
  {
    icon: Phone,
    title: "Telephone",
    lines: ["+91-9315413745", "+91-9811251825"],
    href: "tel:+919315413745",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["contact@stratumjuris.com"],
    href: "mailto:contact@stratumjuris.com",
  },
  {
    icon: Clock,
    title: "Office Hours",
    lines: [
      "Monday – Saturday: 10:00 AM – 8:00 PM",
    ],
  },
];

const MAP_EMBED_URL = "https://maps.google.com/maps?q=Jiya+and+Associates+Laxmi+Nagar+Delhi&output=embed&z=17&iwloc=near";
const MAPS_OPEN_URL = "https://www.google.com/maps/search/?api=1&query=Jiya+and+Associates+Laxmi+Nagar+Delhi";

export function ContactContent() {
  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section
        className="py-20 lg:py-28 relative bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/contact.png')", backgroundPosition: "70% center" }}
      >
        {/* Dark overlay — heavier on left so text is readable */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(10,22,40,0.65) 45%, rgba(10,22,40,0.20))" }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-inter text-sm font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: "#B8973A" }}
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-5"
          >
            Contact Us
          </motion.h1>
          <div className="gold-divider mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-inter text-lg max-w-2xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            Schedule a confidential consultation with one of our senior attorneys.
            We respond to all inquiries within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-cormorant text-3xl font-semibold text-primary-text mb-2">
                Reach Out
              </h2>
              <div className="gold-divider mb-8" />

              <div className="space-y-7 mb-10">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-10 h-10 border border-border flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-accent-gold" />
                      </div>
                      <div>
                        <p className="font-inter text-xs font-semibold text-secondary-text tracking-wide uppercase mb-1.5">
                          {info.title}
                        </p>
                        {info.lines.map((line, i) =>
                          info.href ? (
                            <a
                              key={i}
                              href={info.href}
                              target={info.href.startsWith("http") ? "_blank" : undefined}
                              rel="noopener noreferrer"
                              className="block font-inter text-sm text-primary-text hover:text-accent-gold transition-colors duration-200"
                            >
                              {line}
                            </a>
                          ) : (
                            <p key={i} className="font-inter text-sm text-primary-text">
                              {line}
                            </p>
                          )
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative bg-secondary border border-border overflow-hidden"
              >
                <div className="relative w-full overflow-hidden" style={{ height: "380px" }}>
                  <iframe
                    src={MAP_EMBED_URL}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Jiya & Associates Office Location"
                  />
                  <a
                    href={MAPS_OPEN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 left-3 bg-white text-primary-text text-xs font-semibold px-3 py-1.5 shadow flex items-center gap-1.5 hover:shadow-md hover:text-accent-gold transition-all duration-200 z-10"
                  >
                    <MapPin size={11} />
                    Open in Maps ↗
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-secondary/30 p-8 lg:p-10 border border-border"
            >
              <h2 className="font-cormorant text-3xl font-semibold text-primary-text mb-2">
                Send an Inquiry
              </h2>
              <div className="gold-divider mb-8" />
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
