import { notFound } from "next/navigation";
import { requireAdminAuth } from "@/lib/auth";
import AddEnquiryForm from "@/components/admin/AddEnquiryForm";

export default async function AddLeadPage({ params }: { params: { adminSlug: string } }) {
  if (params.adminSlug !== process.env.ADMIN_PATH) notFound();
  await requireAdminAuth();

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-serif text-3xl text-navy dark:text-white font-bold">Add Enquiry</h1>
        <p className="text-navy/50 dark:text-gray-400 text-sm mt-1">Manually log a new client enquiry</p>
      </div>
      <AddEnquiryForm />
    </div>
  );
}
