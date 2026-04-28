import { notFound } from "next/navigation";
import { requireAdminAuth } from "@/lib/auth";
import LeadsTable from "@/components/admin/LeadsTable";

export default async function LeadsPage({ params }: { params: { adminSlug: string } }) {
  if (params.adminSlug !== process.env.ADMIN_PATH) notFound();
  await requireAdminAuth();
  return <LeadsTable adminPath={params.adminSlug} />;
}
