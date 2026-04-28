"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Scale, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

function LoginFormInner({ adminPath }: { adminPath: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toastShown = useRef(false);
  useEffect(() => {
    if (searchParams.get("unauthorized") === "1" && !toastShown.current) {
      toastShown.current = true;
      toast.warning("Log in first to view the admin workspace", {
        id: "unauthorized-warning",
        duration: 4000,
      });
    }
  }, [searchParams]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.error || "Invalid credentials");
        return;
      }
      if (!localStorage.getItem("admin_current")) {
        localStorage.setItem("admin_current", "1");
      }
      router.push(`/${adminPath}/overview`);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-sm p-8 shadow-2xl">
        <div className="flex items-center gap-2 mb-8">
          <Scale size={22} className="text-gold" />
          <div>
            <h1 className="font-serif text-xl text-navy font-bold">Admin Login</h1>
            <p className="text-navy/40 text-xs">Stratum Juris</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-navy mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="admin@example.com"
              className="w-full px-4 py-3 border border-gray-200 text-navy focus:outline-none focus:border-gold transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-navy mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 pr-11 border border-gray-200 text-navy focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-navy/40 hover:text-navy transition-colors"
                tabIndex={-1}
              >
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm bg-red-50 px-3 py-2">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-navy text-cream py-3 font-semibold hover:opacity-90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function LoginForm({ adminPath }: { adminPath: string }) {
  return (
    <Suspense>
      <LoginFormInner adminPath={adminPath} />
    </Suspense>
  );
}
