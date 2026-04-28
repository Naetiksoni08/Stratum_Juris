import { notFound } from "next/navigation";
import { requireAdminAuth } from "@/lib/auth";
import DeletedLeadsTable from "@/components/admin/DeletedLeadsTable";

export default async function DeletedLeadsPage({ params }: { params: { adminSlug: string } }) {
  if (params.adminSlug !== process.env.ADMIN_PATH) notFound();
  await requireAdminAuth();
  return <DeletedLeadsTable />;
}
