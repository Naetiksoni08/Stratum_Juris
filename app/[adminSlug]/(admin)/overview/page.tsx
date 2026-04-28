import { notFound } from "next/navigation";
import { requireAdminAuth } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import { Lead } from "@/lib/models/Lead";
import { Users, Phone, CheckCircle, XCircle, TrendingUp, CalendarDays, Star, Ban } from "lucide-react";
import Link from "next/link";

export default async function OverviewPage({ params }: { params: { adminSlug: string } }) {
  if (params.adminSlug !== process.env.ADMIN_PATH) notFound();
  await requireAdminAuth();
  await connectDB();

  const now = new Date();
  const weekStart = new Date(now); weekStart.setDate(now.getDate() - 7);
  const monthStart = new Date(now); monthStart.setDate(1); monthStart.setHours(0,0,0,0);

  const [total, pending, contacted, closed, thisWeek, thisMonth, starred, spam] = await Promise.all([
    Lead.countDocuments(),
    Lead.countDocuments({ status: "pending" }),
    Lead.countDocuments({ status: "contacted" }),
    Lead.countDocuments({ status: "closed" }),
    Lead.countDocuments({ createdAt: { $gte: weekStart } }),
    Lead.countDocuments({ createdAt: { $gte: monthStart } }),
    Lead.countDocuments({ starred: true }),
    Lead.countDocuments({ status: "spam" }),
  ]);

  const allTimeCards = [
    { label: "Total Leads", value: total, icon: Users, color: "text-blue-400" },
    { label: "Pending", value: pending, icon: Phone, color: "text-yellow-400" },
    { label: "Contacted", value: contacted, icon: CheckCircle, color: "text-green-400" },
    { label: "Closed", value: closed, icon: XCircle, color: "text-red-400" },
  ];

  const activityCards = [
    { label: "This Week", value: thisWeek, sub: "new enquiries", icon: TrendingUp, color: "text-blue-400" },
    { label: "This Month", value: thisMonth, sub: "new enquiries", icon: CalendarDays, color: "text-purple-400" },
    { label: "Starred", value: starred, sub: "important leads", icon: Star, color: "text-gold" },
    { label: "Spam", value: spam, sub: "filtered out", icon: Ban, color: "text-gray-400" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-serif text-3xl text-navy dark:text-white font-bold">Overview</h1>
        <p className="text-navy/50 dark:text-gray-400 text-sm mt-1">Your leads at a glance</p>
      </div>

      {/* All Time */}
      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">All Time</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {allTimeCards.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.label} className="bg-white dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{c.label}</p>
                <Icon size={16} className={c.color} />
              </div>
              <p className="font-serif text-4xl font-bold text-gray-900 dark:text-white">{c.value}</p>
            </div>
          );
        })}
      </div>

      {/* Activity */}
      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">Activity</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {activityCards.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.label} className="bg-white dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{c.label}</p>
                <Icon size={16} className={c.color} />
              </div>
              <p className="font-serif text-4xl font-bold text-gray-900 dark:text-white">{c.value}</p>
              <p className="text-xs text-gray-500 mt-1">{c.sub}</p>
            </div>
          );
        })}
      </div>

      {/* CTA buttons */}
      <div className="flex gap-3">
        <Link
          href={`/${params.adminSlug}/leads`}
          className="px-5 py-2.5 bg-gray-800 dark:bg-gray-700 text-white text-sm font-semibold hover:opacity-80 transition-colors"
        >
          View All Leads
        </Link>
        <Link
          href={`/${params.adminSlug}/leads?status=pending`}
          className="px-5 py-2.5 border border-gray-400 dark:border-gray-600 text-gray-800 dark:text-white text-sm font-semibold hover:border-gray-600 dark:hover:border-gray-400 transition-colors"
        >
          View Pending ({pending})
        </Link>
      </div>
    </div>
  );
}
