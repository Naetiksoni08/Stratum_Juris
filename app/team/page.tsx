import type { Metadata } from "next";
import { TeamContent } from "./TeamContent";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the experienced advocates at Stratum Juris — a team of dedicated litigators, arbitration specialists, and legal strategists serving clients across India.",
};

export default function TeamPage() {
  return <TeamContent />;
}
