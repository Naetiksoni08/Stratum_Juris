import type { Metadata } from "next";
import { ExpertiseContent } from "./ExpertiseContent";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Stratum Juris offers comprehensive legal representation in civil litigation, commercial disputes, arbitration, corporate litigation, consumer law, and criminal defence across India.",
};

export default function ExpertisePage() {
  return <ExpertiseContent />;
}
