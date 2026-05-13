"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Expertise", href: "/expertise" },
  { label: "Our Team", href: "/team" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group min-w-0 flex-1 mb-3">
              <Image
                src="/logo.png"
                alt="Stratum Juris Logo"
                width={55}
                height={55}
                className="flex-shrink-0 lg:w-[70px] lg:h-[70px] -mr-1 mt-3 lg:mt-4"
              />
              <div className="flex flex-col leading-none ml-2 mt-2 lg:mt-3 items-center lg:items-start">
                <span className="font-cormorant text-base text-[22px] lg:text-3xl font-bold text-[#B8973A] tracking-tight transition-colors duration-300">
                  STRATUM JURIS
                </span>
                <span className="text-[9px] lg:text-[9px] tracking-[0.2em] lg:tracking-[0.25em] text-[#B8973A] uppercase font-inter font-extrabold mt-0.5">
                  Advocates & Solicitors
                </span>
              </div>
            </Link>

            {/* Vertical divider */}
            <div className="hidden lg:block w-px h-8 bg-[#B8973A]/30 mx-4" />

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <div key={item.href} className="flex items-center">
                  <Link
                    href={item.href}
                    className={cn(
                      "nav-link px-4 py-2 text-xs tracking-[0.12em] uppercase font-inter font-medium transition-colors duration-300",
                      pathname === item.href
                        ? "text-[#B8973A]"
                        : "text-[#B8973A] hover:text-[#D4A853]"
                    )}
                  >
                    {item.label}
                  </Link>
                  {index < navItems.length - 1 && (
                    <span className="text-border text-xs px-1">·</span>
                  )}
                </div>
              ))}

              <span className="text-border text-xs px-1">·</span>

              <Link
                href="/contact"
                className={cn(
                  "ml-2 px-5 py-2 border text-xs tracking-[0.12em] uppercase font-inter font-medium transition-all duration-300 rounded-lg",
                  pathname === "/contact"
                    ? "bg-[#B8973A] border-[#B8973A] text-white"
                    : "border-[#B8973A] text-[#B8973A] hover:bg-[#B8973A] hover:text-white"
                )}
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-[#B8973A] hover:text-[#D4A853] transition-colors flex-shrink-0 ml-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-background flex flex-col"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {/* Updated Logo/Brand Row for Mobile Overlay */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex flex-row items-center mb-6"
              >
                <Image
                  src="/logo.png"
                  alt="Stratum Juris Logo"
                  width={70}
                  height={70}
                  className="flex-shrink-0 -mr-3"
                />
                <div className="flex flex-col text-left leading-tigh ml-4">
                  <span className="font-cormorant text-2xl font-bold text-[#B8973A] tracking-tight">
                    STRATUM JURIS
                  </span>
                  <p className="text-[10px] tracking-[0.25em] text-[#B8973A] uppercase font-inter font-bold mt-0.5">
                    Advocates & Solicitors
                  </p>
                </div>
              </motion.div>

              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.07 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "font-cormorant text-3xl font-semibold transition-colors duration-200",
                      pathname === item.href
                        ? "text-[#B8973A]"
                        : "text-primary-text hover:text-[#B8973A]"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 px-8 py-3 border border-[#B8973A] text-[#B8973A] rounded-lg font-inter text-sm tracking-widest uppercase hover:bg-[#B8973A] hover:text-white transition-all duration-300"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}