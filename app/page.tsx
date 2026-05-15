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
  title: "Stratum Juris | Litigation & Strategic Disputes",
  description:
    "Stratum Juris — a disputes-focused litigation law firm handling criminal, commercial, regulatory and white-collar proceedings with strategic courtroom representation across courts and tribunals.",
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