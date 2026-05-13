"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, X } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"),
  queryType: z.string().min(1, "Please select a query type"),
  description: z
    .string()
    .min(10, "Please provide at least 10 characters describing your matter"),
});

type FormData = z.infer<typeof schema>;

const queryTypes = [
  "Civil & Commercial Litigation",
  "Criminal Defence",
  "White Collar Crimes & Economic Offences",
  "Property & Real Estate Disputes",
  "Family & Matrimonial Disputes",
  "Arbitration & ADR",
  "Other",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputBase =
    "w-full bg-background border border-border px-4 py-3 text-sm font-inter text-primary-text placeholder-secondary-text/50 focus:outline-none focus:border-accent-gold transition-colors duration-200";

  const errorClass = "border-red-400 focus:border-red-400";

  return (
    <>
      {/* Success Modal */}
      {status === "success" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md shadow-2xl rounded-lg p-10 flex flex-col items-center text-center relative">
            <button
              onClick={() => setStatus("idle")}
              className="absolute top-4 right-4 text-primary-text/30 hover:text-primary-text transition-colors"
            >
              <X size={18} />
            </button>

            <div className="mb-5">
              <CheckCircle size={48} className="text-accent-gold" strokeWidth={1.5} />
            </div>

            <h3 className="font-cormorant text-2xl font-bold text-primary-text mb-3">
              Thank you for reaching out.
            </h3>

            <p className="text-primary-text/55 text-sm leading-relaxed mb-8">
              Your inquiry has been received. A member of our team will contact you within{" "}
              <span className="font-semibold text-primary-text/80">24 hours</span> to discuss your matter in confidence.
            </p>

            <button
              onClick={() => setStatus("idle")}
              className="w-full bg-accent-gold text-white py-3 font-semibold tracking-widest text-sm hover:bg-hover-gold transition-colors duration-200"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {/* Name */}
        <div>
          <label className="block text-xs font-inter font-medium text-primary-text tracking-wide uppercase mb-2">
            Full Name <span className="text-accent-gold">*</span>
          </label>
          <input
            {...register("name")}
            type="text"
            className={`${inputBase} ${errors.name ? errorClass : ""}`}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-500 font-inter">{errors.name.message}</p>
          )}
        </div>

        {/* Email + Phone */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-inter font-medium text-primary-text tracking-wide uppercase mb-2">
              Email <span className="text-accent-gold">*</span>
            </label>
            <input
              {...register("email")}
              type="email"
              className={`${inputBase} ${errors.email ? errorClass : ""}`}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-500 font-inter">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-inter font-medium text-primary-text tracking-wide uppercase mb-2">
              Phone <span className="text-accent-gold">*</span>
            </label>
            <input
              {...register("phone")}
              type="tel"
              className={`${inputBase} ${errors.phone ? errorClass : ""}`}
            />
            {errors.phone && (
              <p className="mt-1.5 text-xs text-red-500 font-inter">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Query Type */}
        <div>
          <label className="block text-xs font-inter font-medium text-primary-text tracking-wide uppercase mb-2">
            Nature of Matter <span className="text-accent-gold">*</span>
          </label>
          <select
            {...register("queryType")}
            className={`${inputBase} ${errors.queryType ? errorClass : ""} appearance-none cursor-pointer`}
            defaultValue=""
          >
            <option value="" disabled>
              Select the type of legal matter
            </option>
            {queryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.queryType && (
            <p className="mt-1.5 text-xs text-red-500 font-inter">{errors.queryType.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-xs font-inter font-medium text-primary-text tracking-wide uppercase mb-2">
            Brief Description <span className="text-accent-gold">*</span>
          </label>
          <textarea
            {...register("description")}
            rows={5}
            className={`${inputBase} resize-none ${errors.description ? errorClass : ""}`}
          />
          {errors.description && (
            <p className="mt-1.5 text-xs text-red-500 font-inter">{errors.description.message}</p>
          )}
        </div>

        {/* Error state */}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 text-red-600"
          >
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <p className="text-sm font-inter">
              Something went wrong. Please try again or call us directly.
            </p>
          </motion.div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-accent-gold text-white py-5 text-sm font-inter font-medium tracking-widest uppercase flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed hover:bg-hover-gold transition-colors duration-300 rounded-lg"
        >
          {status === "loading" ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
              />
              Sending...
            </>
          ) : (
            <>
              Send Inquiry
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </>
  );
}
