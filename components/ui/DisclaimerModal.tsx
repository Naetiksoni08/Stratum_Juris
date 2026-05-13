"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const points = [
  "The user is voluntarily using our website to gain information about us for their information and use. They also acknowledge that there has been no attempt by us to advertise or solicit work.",
  "Any information obtained or downloaded from our website does not lead to the creation of an attorney-client relationship between the Firm and the user.",
  "The content on this website is for informational purposes only and cannot be construed to be a form of legal opinion or legal advice.",
  "Stratum Juris will not be held liable for any consequences from actions taken based on the materials or information provided on this website.",
];

export function DisclaimerModal({ enabled = false }: { enabled?: boolean }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (enabled) setVisible(true);
  }, [enabled]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="disclaimer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="fixed inset-0 z-[998] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white w-full max-w-3xl shadow-2xl flex flex-col max-h-[88vh] rounded-2xl overflow-hidden"
          >
            {/* Scrollable body */}
            <div className="overflow-y-auto flex-1 px-10 pt-9 pb-6">

              {/* Title */}
              <h2 className="font-cormorant text-center text-2xl font-bold tracking-wide uppercase text-primary-text mb-6">
                Disclaimer
              </h2>

              {/* Intro paragraph */}
              <p className="font-inter text-sm text-secondary-text leading-relaxed mb-5">
                The Bar Council of India prohibits advocates from engaging in any form of
                advertisement or solicitation. By accessing the Stratum Juris website,
                the user acknowledges that:
              </p>

              {/* Bullet points — inside a bordered box */}
              <div className="border border-gray-200 rounded-xl bg-gray-50 px-6 py-5">
                <ul className="list-disc list-outside pl-4 space-y-3">
                  {points.map((point, i) => (
                    <li key={i} className="font-inter text-sm text-secondary-text leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex-shrink-0 px-10 py-6 flex justify-center gap-4 border-t border-gray-100">
              <button
                onClick={() => { window.location.href = "https://www.google.com"; }}
                className="px-10 py-3 font-bold text-sm border border-gray-500 rounded-full hover:border-gray-300 hover:text-primary-text transition-all duration-200"
              >
                Deny
              </button>
              <button
                onClick={() => setVisible(false)}
                className="px-10 py-3 font-inter text-sm font-semibold rounded-full transition-all duration-200"
                style={{ backgroundColor: "#B8973A" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#9a7a2e")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#B8973A")}
              >
                I Agree
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
