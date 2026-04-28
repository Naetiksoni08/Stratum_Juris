import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Stratum Juris to schedule a confidential consultation. Call, email, or use our secure online form.",
};

export default function ContactPage() {
  return <ContactContent />;
}
