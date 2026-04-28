"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Search, Filter, ArrowUp, ArrowDown, Star, MoreVertical, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface Lead {
  _id: string;
  name: string;
  email: string;
  phone: string;
  status: "pending" | "contacted" | "closed" | "spam";
  tags: string[];
  starred: boolean;
  createdAt: string;
}

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
  contacted: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  closed: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
  spam: "bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400",
};

const PRACTICE_TAGS = [
  "Civil & Commercial Litigation",
  "Criminal Defence",
  "White Collar Crimes & Economic Offences",
  "Property & Real Estate Disputes",
  "Family & Matrimonial Disputes",
  "Arbitration & ADR",
];

export default function LeadsTable({ adminPath }: { adminPath: string }) {
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [tagFilter, setTagFilter] = useState("");
  const [sortDir, setSortDir] = useState<"desc" | "asc">("desc");
  const [dateRange, setDateRange] = useState("");
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (statusFilter) params.set("status", statusFilter);
    if (tagFilter) params.set("tag", tagFilter);

    const res = await fetch(`/api/admin/leads?${params.toString()}`);
    if (res.status === 401) {
      router.push(`/${adminPath}/login?unauthorized=1`);
      return;
    }
    const data = await res.json();
    setLeads(data.leads || []);
    setLoading(false);
  }, [search, statusFilter, tagFilter, adminPath, router]);

  useEffect(() => {
    const timer = setTimeout(fetchLeads, 300);
    return () => clearTimeout(timer);
  }, [fetchLeads]);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === "visible") fetchLeads();
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [fetchLeads]);

  const displayedLeads = useMemo(() => {
    let list = [...leads];

    if (dateRange) {
      const now = new Date();
      const start = new Date();
      if (dateRange === "today") start.setHours(0, 0, 0, 0);
      else if (dateRange === "week") start.setDate(now.getDate() - 7);
      else if (dateRange === "month") start.setMonth(now.getMonth() - 1);
      list = list.filter((l) => new Date(l.createdAt) >= start);
    }

    list.sort((a, b) => {
      if (a.starred !== b.starred) return a.starred ? -1 : 1;
      const diff = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      return sortDir === "desc" ? -diff : diff;
    });

    return list;
  }, [leads, sortDir, dateRange]);

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "numeric", month: "short", year: "numeric",
    });
  }

  async function toggleStar(e: React.MouseEvent, lead: Lead) {
    e.stopPropagation();
    const newVal = !lead.starred;
    setLeads((prev) => prev.map((l) => l._id === lead._id ? { ...l, starred: newVal } : l));
    await fetch(`/api/admin/leads/${lead._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ starred: newVal }),
    });
  }

  async function handleStatusChange(e: React.ChangeEvent<HTMLSelectElement>, lead: Lead) {
    e.stopPropagation();
    const newStatus = e.target.value as Lead["status"];
    setLeads((prev) => prev.map((l) => l._id === lead._id ? { ...l, status: newStatus } : l));
    const res = await fetch(`/api/admin/leads/${lead._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });
    if (res.ok) toast.success("Status updated");
    else toast.error("Failed to update status");
  }

  async function handleDelete(e: React.MouseEvent, leadId: string) {
    e.stopPropagation();
    setOpenMenuId(null);
    const res = await fetch(`/api/admin/leads/${leadId}`, { method: "DELETE" });
    if (res.ok) {
      setLeads((prev) => prev.filter((l) => l._id !== leadId));
      toast.success("Enquiry deleted and moved to Deleted Enquiries.");
    } else {
      toast.error("Failed to delete enquiry.");
    }
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="font-serif text-3xl text-navy dark:text-white font-bold">Leads</h1>
        <p className="text-navy/50 dark:text-gray-400 text-sm mt-1">{displayedLeads.length} total enquiries</p>
      </div>

      <div className="flex flex-wrap gap-3 mb-4">
        <div className="relative flex-1 min-w-[200px]">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search name, phone or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-navy dark:text-gray-100 text-sm focus:outline-none focus:border-gold transition-colors"
          />
        </div>
        <div className="relative">
          <Filter size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="pl-9 pr-8 py-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-navy dark:text-gray-100 text-sm focus:outline-none focus:border-gold appearance-none transition-colors"
          >
            <option value="">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="contacted">Contacted</option>
            <option value="closed">Closed</option>
            <option value="spam">Spam</option>
          </select>
        </div>
        <select
          value={tagFilter}
          onChange={(e) => setTagFilter(e.target.value)}
          className="px-4 py-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-navy dark:text-gray-100 text-sm focus:outline-none focus:border-gold appearance-none transition-colors"
        >
          <option value="">All Practice Areas</option>
          {PRACTICE_TAGS.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        <select
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
          className="px-4 py-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-navy dark:text-gray-100 text-sm focus:outline-none focus:border-gold appearance-none transition-colors"
        >
          <option value="">All Time</option>
          <option value="today">Today</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
        </select>
      </div>

      <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
        {loading ? (
          <div className="py-16 text-center text-navy/40 dark:text-gray-500 text-sm">Loading leads...</div>
        ) : displayedLeads.length === 0 ? (
          <div className="py-16 text-center text-navy/40 dark:text-gray-500 text-sm">No leads found.</div>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-gray-100 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
              <tr>
                <th className="px-2 py-3 w-8" />
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Name</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Phone</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Email</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Tags</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Status</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  <button onClick={() => setSortDir(sortDir === "desc" ? "asc" : "desc")} className="flex items-center gap-1 hover:text-gold transition-colors">
                    Date {sortDir === "desc" ? <ArrowDown size={12} /> : <ArrowUp size={12} />}
                  </button>
                </th>
                <th className="w-10 px-2 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 dark:divide-gray-700">
              {displayedLeads.map((lead) => (
                <tr
                  key={lead._id}
                  onClick={() => router.push(`/${adminPath}/leads/${lead._id}`)}
                  className={cn(
                    "hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer transition-colors",
                    lead.status === "spam" && "opacity-50"
                  )}
                >
                  <td className="px-2 py-4" onClick={(e) => toggleStar(e, lead)}>
                    <Star
                      size={15}
                      className={cn(
                        "transition-colors",
                        lead.starred ? "fill-gold text-gold" : "text-gray-300 dark:text-gray-600 hover:text-gold"
                      )}
                    />
                  </td>
                  <td className={cn("px-4 py-4 font-medium text-navy dark:text-white", lead.status === "spam" && "line-through")}>{lead.name}</td>
                  <td className={cn("px-4 py-4 text-navy/70 dark:text-gray-300", lead.status === "spam" && "line-through")}>{lead.phone}</td>
                  <td className="px-4 py-4 text-navy/50 dark:text-gray-400">{lead.email}</td>
                  <td className="px-4 py-4">
                    <div className="flex flex-wrap gap-1">
                      {lead.tags?.map((tag) => (
                        <span key={tag} className="px-1.5 py-0.5 text-[10px] font-semibold bg-gold/10 text-gold rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-4" onClick={(e) => e.stopPropagation()}>
                    <select
                      value={lead.status}
                      onChange={(e) => handleStatusChange(e, lead)}
                      className={cn(
                        "px-2 py-1 text-xs font-semibold rounded-full border focus:outline-none capitalize cursor-pointer appearance-none text-center",
                        statusColors[lead.status]
                      )}
                    >
                      <option value="pending">Pending</option>
                      <option value="contacted">Contacted</option>
                      <option value="closed">Closed</option>
                      <option value="spam">Spam</option>
                    </select>
                  </td>
                  <td className="px-4 py-4 text-navy/50 dark:text-gray-400">{formatDate(lead.createdAt)}</td>
                  <td className="px-2 py-4 relative" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => setOpenMenuId(openMenuId === lead._id ? null : lead._id)}
                      className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                    >
                      <MoreVertical size={16} />
                    </button>
                    {openMenuId === lead._id && (
                      <div className="absolute right-2 top-10 z-30 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg w-48">
                        <button
                          onClick={(e) => handleDelete(e, lead._id)}
                          className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                        >
                          <Trash2 size={14} />
                          Delete this enquiry
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
