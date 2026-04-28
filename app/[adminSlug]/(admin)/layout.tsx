import AdminShell from "@/components/admin/AdminShell";
import { Toaster } from "sonner";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster richColors position="top-right" />
      <AdminShell>{children}</AdminShell>
    </>
  );
}
