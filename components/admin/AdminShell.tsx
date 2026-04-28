"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Scale, Users, LogOut, Sun, Moon, LayoutDashboard, PlusCircle, Trash2 } from "lucide-react";

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const adminPath = pathname.split("/")[1];
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [adminId, setAdminId] = useState<string>("1");

  useEffect(() => {
    const id = localStorage.getItem("admin_current") ?? "1";
    setAdminId(id);
    const saved = localStorage.getItem(`admin_${id}`);
    if (saved === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
      localStorage.setItem(`admin_${id}`, "dark");
    }
  }, []);

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem(`admin_${adminId}`, next);
  }

  function handleLogout() {
    fetch("/api/admin/logout", { method: "POST" });
    router.push("/");
  }

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex transition-colors duration-200">

        {/* Sidebar */}
        <aside className="w-64 bg-navy text-cream flex flex-col fixed top-0 left-0 h-full z-40">
          {/* Logo */}
          <div className="px-6 py-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Scale size={20} className="text-gold" />
              <span className="font-serif font-bold text-cream">Stratum Juris</span>
            </div>
            <p className="text-cream/40 text-xs mt-1">Admin Dashboard</p>
          </div>

          {/* Nav links */}
          <nav className="flex-1 px-4 py-6 space-y-1">
            <Link
              href={`/${adminPath}/overview`}
              className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded text-cream hover:bg-white/10 transition-colors"
            >
              <LayoutDashboard size={16} className="text-gold" />
              Overview
            </Link>
            <Link
              href={`/${adminPath}/leads`}
              className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded text-cream hover:bg-white/10 transition-colors"
            >
              <Users size={16} className="text-gold" />
              Leads
            </Link>
            <Link
              href={`/${adminPath}/leads/add`}
              className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded text-cream hover:bg-white/10 transition-colors"
            >
              <PlusCircle size={16} className="text-gold" />
              Add Enquiry
            </Link>
            <Link
              href={`/${adminPath}/deleted-leads`}
              className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded text-cream hover:bg-white/10 transition-colors"
            >
              <Trash2 size={16} className="text-gold" />
              Deleted Enquiries
            </Link>
          </nav>

          {/* Bottom */}
          <div className="px-4 py-6 border-t border-white/10 space-y-1">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-cream/60 hover:text-cream hover:bg-white/10 rounded transition-colors w-full"
            >
              {theme === "dark"
                ? <Sun size={16} className="text-gold" />
                : <Moon size={16} />
              }
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-cream/60 hover:text-cream hover:bg-white/10 rounded transition-colors w-full"
            >
              <LogOut size={16} />
              Log Out
            </button>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 ml-64 p-8 text-gray-800 dark:text-gray-100 transition-colors duration-200">
          {children}
        </main>
      </div>
    </div>
  );
}
