import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Hero } from "@/components/home/Hero";
import { FirmIntro } from "@/components/home/FirmIntro";
import { PracticeAreasSection } from "@/components/home/PracticeAreasSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { CTABanner } from "@/components/home/CTABanner";
import { TrustedPartnership } from "@/components/home/TrustedPartnership";

export const metadata: Metadata = {
  title: "Stratum Juris | Strategic Legal Counsel",
  description:
    "Stratum Juris — a premier litigation and dispute resolution firm. Strategic, results-oriented legal representation across India's courts and arbitral tribunals.",
};

export default function HomePage() {
  if (process.env.MAINTENANCE_MODE === "true") {
    redirect("/maintenance");
  }

  return (
    <>
      <Hero />
      <FirmIntro />
      <PracticeAreasSection />
      <WhyChooseUs />
      <Testimonials />
      <TrustedPartnership />
      <CTABanner />
    </>
  );
}