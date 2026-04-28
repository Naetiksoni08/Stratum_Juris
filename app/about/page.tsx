import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Stratum Juris — our story, mission, values, and what sets us apart as a premier litigation and dispute resolution firm.",
  openGraph: {
    title: "About Stratum Juris | Law Firm",
    description:
      "Founded on principle, built for results. Discover the story, mission, and values behind Stratum Juris.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
