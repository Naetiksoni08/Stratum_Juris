import { notFound } from "next/navigation";
import LoginForm from "@/components/admin/LoginForm";
import { Toaster } from "sonner";

export default function LoginPage({ params }: { params: { adminSlug: string } }) {
  if (params.adminSlug !== process.env.ADMIN_PATH) notFound();
  return (
    <>
      <Toaster richColors position="top-right" />
      <LoginForm adminPath={params.adminSlug} />
    </>
  );
}
