"use client";

import { useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type Status = "pending" | "contacted" | "closed" | "spam";

const statusColors: Record<Status, string> = {
  pending: "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/40 dark:text-yellow-300 dark:border-yellow-800",
  contacted: "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/40 dark:text-green-300 dark:border-green-800",
  closed: "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/40 dark:text-red-300 dark:border-red-800",
  spam: "bg-gray-100 text-gray-500 border-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600",
};

export default function StatusDropdown({
  leadId,
  initialStatus,
}: {
  leadId: string;
  initialStatus: Status;
}) {
  const [status, setStatus] = useState<Status>(initialStatus);
  const [loading, setLoading] = useState(false);

  async function handleChange(newStatus: Status) {
    const previous = status;
    setStatus(newStatus);
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/leads/${leadId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error("Update failed");
      toast.success("Status updated");
    } catch {
      setStatus(previous);
      toast.error("Failed to update status");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center gap-3">
      <label className="text-sm font-medium text-navy/60 dark:text-gray-400">Status</label>
      <select
        value={status}
        onChange={(e) => handleChange(e.target.value as Status)}
        disabled={loading}
        className={cn(
          "px-3 py-1.5 text-sm font-semibold rounded-full border focus:outline-none capitalize cursor-pointer disabled:opacity-60 appearance-none",
          statusColors[status]
        )}
      >
        <option value="pending">Pending</option>
        <option value="contacted">Contacted</option>
        <option value="closed">Closed</option>
        <option value="spam">Spam</option>
      </select>
    </div>
  );
}
