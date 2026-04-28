"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DisclaimerModal } from "@/components/ui/DisclaimerModal";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";

const ADMIN_PATH = process.env.NEXT_PUBLIC_ADMIN_PATH || "stratum-admin";

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith(`/${ADMIN_PATH}`);
  const isPreview = pathname.startsWith("/preview");
  const isMaintenance = pathname.startsWith("/maintenance");

  if (isAdmin || isPreview || isMaintenance) return <>{children}</>;

  return (
    <>
      <ScrollProgressBar />
      <DisclaimerModal enabled={true} />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
