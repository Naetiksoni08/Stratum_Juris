"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "sonner";

const COUNTRY_CODES = [
  { code: "+91", country: "India" },
  { code: "+1", country: "USA / Canada" },
  { code: "+44", country: "UK" },
  { code: "+92", country: "Pakistan" },
  { code: "+971", country: "UAE" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+65", country: "Singapore" },
  { code: "+61", country: "Australia" },
  { code: "+49", country: "Germany" },
  { code: "+33", country: "France" },
  { code: "+81", country: "Japan" },
  { code: "+86", country: "China" },
  { code: "+7", country: "Russia" },
  { code: "+55", country: "Brazil" },
  { code: "+27", country: "South Africa" },
  { code: "+234", country: "Nigeria" },
  { code: "+254", country: "Kenya" },
  { code: "+60", country: "Malaysia" },
  { code: "+62", country: "Indonesia" },
  { code: "+63", country: "Philippines" },
  { code: "+64", country: "New Zealand" },
  { code: "+20", country: "Egypt" },
  { code: "+39", country: "Italy" },
  { code: "+34", country: "Spain" },
  { code: "+31", country: "Netherlands" },
  { code: "+41", country: "Switzerland" },
  { code: "+46", country: "Sweden" },
  { code: "+47", country: "Norway" },
  { code: "+45", country: "Denmark" },
  { code: "+358", country: "Finland" },
  { code: "+48", country: "Poland" },
  { code: "+90", country: "Turkey" },
  { code: "+98", country: "Iran" },
  { code: "+964", country: "Iraq" },
  { code: "+974", country: "Qatar" },
  { code: "+968", country: "Oman" },
  { code: "+973", country: "Bahrain" },
  { code: "+965", country: "Kuwait" },
  { code: "+880", country: "Bangladesh" },
  { code: "+94", country: "Sri Lanka" },
  { code: "+977", country: "Nepal" },
  { code: "+95", country: "Myanmar" },
  { code: "+66", country: "Thailand" },
  { code: "+84", country: "Vietnam" },
];

const PRACTICE_TAGS = [
  "Civil & Commercial Litigation",
  "Criminal Defence",
  "White Collar Crimes & Economic Offences",
  "Property & Real Estate Disputes",
  "Family & Matrimonial Disputes",
  "Arbitration & ADR",
];
const SOURCES = [
  { value: "whatsapp", label: "WhatsApp" },
  { value: "email", label: "Direct Email" },
  { value: "phone", label: "Phone Call" },
  { value: "referral", label: "Referral" },
  { value: "website", label: "Website Form" },
];
const STATUSES = [
  { value: "pending", label: "Pending" },
  { value: "contacted", label: "Contacted" },
  { value: "closed", label: "Closed" },
  { value: "spam", label: "Spam" },
];

export default function AddEnquiryForm() {
  const router = useRouter();
  const pathname = usePathname();
  const adminPath = pathname.split("/")[1];

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    status: "pending",
    source: "whatsapp",
    enquiryDate: new Date().toISOString().split("T")[0],
  });
  const [countryCode, setCountryCode] = useState("+91");
  const [tags, setTags] = useState<string[]>([]);
  const [tagDropdownOpen, setTagDropdownOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const tagDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (tagDropdownRef.current && !tagDropdownRef.current.contains(e.target as Node)) {
        setTagDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function toggleTag(tag: string) {
    setTags((prev) => prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error("Name, email and phone are required.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/admin/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, phone: `${countryCode} ${form.phone}`, tags }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to add enquiry");
      }
      toast.success("Enquiry added successfully!");
      router.push(`/${adminPath}/leads`);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass = "w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded focus:outline-none focus:border-gold text-sm transition-colors";
  const labelClass = "block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">

      {/* Name */}
      <div>
        <label className={labelClass}>Name <span className="text-red-400">*</span></label>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name of person who enquired" className={inputClass} />
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Email <span className="text-red-400">*</span></label>
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="email@example.com" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Phone <span className="text-red-400">*</span></label>
          <div className="flex gap-3">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="w-24 px-2 py-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-sm focus:outline-none focus:border-gold transition-colors shrink-0"
            >
              {COUNTRY_CODES.map((c) => (
                <option key={c.code} value={c.code}>{c.code} {c.country}</option>
              ))}
            </select>
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="98765 43210"
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className={labelClass}>Message / Notes</label>
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="What did they enquire about?" rows={3} className={inputClass + " resize-none"} />
      </div>

      {/* Status + Source */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Status</label>
          <select name="status" value={form.status} onChange={handleChange} className={inputClass}>
            {STATUSES.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Source</label>
          <select name="source" value={form.source} onChange={handleChange} className={inputClass}>
            {SOURCES.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Date */}
      <div>
        <label className={labelClass}>Enquiry Date</label>
        <input name="enquiryDate" type="date" value={form.enquiryDate} onChange={handleChange} className={inputClass} />
      </div>

      {/* Tags multi-select dropdown */}
      <div>
        <label className={labelClass}>Practice Areas</label>
        <div className="relative" ref={tagDropdownRef}>
          <button
            type="button"
            onClick={() => setTagDropdownOpen((v) => !v)}
            className={inputClass + " flex items-center justify-between text-left"}
          >
            <span className={tags.length === 0 ? "text-gray-400" : "text-gray-800 dark:text-gray-100"}>
              {tags.length === 0 ? "Select practice areas" : tags.join(", ")}
            </span>
            <ChevronDown size={16} className={`shrink-0 text-gray-400 transition-transform duration-200 ${tagDropdownOpen ? "rotate-180" : ""}`} />
          </button>

          {tagDropdownOpen && (
            <div className="absolute z-20 top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg max-h-52 overflow-y-auto">
              {PRACTICE_TAGS.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gold/10 transition-colors text-left"
                >
                  <span className={`w-4 h-4 border flex items-center justify-center shrink-0 transition-colors ${tags.includes(tag) ? "bg-gold border-gold" : "bg-transparent border-gray-500 dark:border-gray-500"}`}>
                    {tags.includes(tag) && <span className="text-navy text-[10px] font-bold">✓</span>}
                  </span>
                  <span className={tags.includes(tag) ? "text-gold font-semibold" : "text-gray-700 dark:text-gray-200"}>
                    {tag}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <span key={tag} className="inline-flex items-center gap-1 bg-gold/15 text-gold text-xs font-semibold px-2.5 py-1">
                {tag}
                <button type="button" onClick={() => toggleTag(tag)} className="hover:text-red-400 transition-colors">×</button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Submit */}
      <div className="flex items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="bg-gold text-navy px-8 py-2.5 text-sm font-bold tracking-widest uppercase hover:bg-gold-dark transition-colors disabled:opacity-60"
        >
          {submitting ? "Adding..." : "Add Enquiry"}
        </button>
        <button
          type="button"
          onClick={() => router.push(`/${adminPath}/leads`)}
          className="text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
        >
          Cancel
        </button>
      </div>

    </form>
  );
}
