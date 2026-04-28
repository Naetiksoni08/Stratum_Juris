import { notFound } from "next/navigation";
import { requireAdminAuth } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import { Lead } from "@/lib/models/Lead";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import StatusDropdown from "@/components/admin/StatusDropdown";
import TagEditor from "@/components/admin/TagEditor";
import NotesPanel from "@/components/admin/NotesPanel";

export default async function LeadDetailPage({
  params,
}: {
  params: { adminSlug: string; id: string };
}) {
  if (params.adminSlug !== process.env.ADMIN_PATH) notFound();
  await requireAdminAuth();
  await connectDB();

  const lead = await Lead.findById(params.id).lean();
  if (!lead) notFound();
  const l = lead as any;

  const submittedAt = new Date(l.createdAt).toLocaleString("en-IN", {
    day: "numeric", month: "long", year: "numeric",
    hour: "2-digit", minute: "2-digit", hour12: true,
  });

  return (
    <div>
      {/* Back */}
      <Link
        href={`/${params.adminSlug}/leads`}
        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gold transition-colors mb-6"
      >
        <ArrowLeft size={14} /> Back to Leads
      </Link>

      {/* Main card */}
      <div className="bg-white dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 mb-4">
        {/* Header */}
        <div className="px-8 py-6 flex items-start justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl font-bold text-gray-900 dark:text-white mb-1">{l.name}</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Submitted on {submittedAt}</p>
          </div>
          <StatusDropdown leadId={l._id.toString()} initialStatus={l.status} />
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700" />

        {/* Email + Phone */}
        <div className="px-8 py-5 grid grid-cols-2 gap-6">
          <div>
            <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1.5">Email</p>
            <a href={`mailto:${l.email}`} className="text-sm text-gray-900 dark:text-white hover:text-gold transition-colors">
              {l.email}
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1.5">Phone</p>
            <a href={`tel:${l.phone}`} className="text-sm text-gray-900 dark:text-white hover:text-gold transition-colors">
              {l.phone}
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700" />

        {/* Practice Areas */}
        <div className="px-8 py-5">
          <TagEditor leadId={l._id.toString()} initialTags={l.tags || []} />
        </div>

        {/* Message */}
        {l.message && (
          <>
            <div className="border-t border-gray-200 dark:border-gray-700" />
            <div className="px-8 py-5">
              <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">Message</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{l.message}</p>
            </div>
          </>
        )}
      </div>

      {/* Notes card */}
      <NotesPanel leadId={l._id.toString()} initialNotes={l.notes || []} />
    </div>
  );
}
