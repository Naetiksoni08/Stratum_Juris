"use client";

import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";

interface DeletedLead {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: string;
  source: string;
  tags: string[];
  deletedAt: string;
  originalCreatedAt: string;
}

export default function DeletedLeadsTable() {
  const [leads, setLeads] = useState<DeletedLead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/deleted-leads")
      .then((r) => r.json())
      .then((d) => { setLeads(d.leads || []); setLoading(false); });
  }, []);

  function formatDate(d: string) {
    return new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  }

  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <Trash2 size={28} className="text-gold" />
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Deleted Enquiries</h1>
          <p className="text-sm text-gray-400 mt-0.5">{leads.length} deleted {leads.length === 1 ? "record" : "records"}</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
        {loading ? (
          <div className="py-16 text-center text-gray-400 text-sm">Loading...</div>
        ) : leads.length === 0 ? (
          <div className="py-16 text-center text-gray-400 text-sm">No deleted enquiries.</div>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-gray-100 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
              <tr>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Name</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Phone</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Email</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Status</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Practice Areas</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Matter</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Deleted On</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 dark:divide-gray-700">
              {leads.map((lead) => (
                <tr key={lead._id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors opacity-70">
                  <td className="px-4 py-4 font-medium text-gray-700 dark:text-gray-300 line-through">{lead.name}</td>
                  <td className="px-4 py-4 text-gray-500 dark:text-gray-400">{lead.phone}</td>
                  <td className="px-4 py-4 text-gray-500 dark:text-gray-400">{lead.email}</td>
                  <td className="px-4 py-4">
                    <span className="px-2 py-0.5 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 capitalize">{lead.status}</span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-wrap gap-1">
                      {lead.tags?.map((tag) => (
                        <span key={tag} className="px-1.5 py-0.5 text-[10px] font-semibold bg-gray-100 dark:bg-gray-700 text-gray-400 rounded">{tag}</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-4 text-gray-400 max-w-sm whitespace-normal break-words leading-relaxed">{lead.message || "—"}</td>
                  <td className="px-4 py-4 text-red-400 text-xs">{formatDate(lead.deletedAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
