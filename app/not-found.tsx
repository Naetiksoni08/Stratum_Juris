import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 text-center">
      <p className="text-accent-gold font-inter text-xs tracking-[0.3em] uppercase mb-4">
        404 · Page Not Found
      </p>
      <h1 className="font-cormorant text-5xl md:text-6xl font-semibold text-primary-text mb-5">
        This Page Does Not Exist
      </h1>
      <div className="w-16 h-0.5 bg-accent-gold mx-auto mb-6" />
      <p className="text-secondary-text font-inter text-base max-w-md mb-10 leading-relaxed">
        The page you are looking for may have been moved, deleted, or may never have existed.
        Please return to our homepage or contact us directly.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="px-7 py-3 bg-accent-gold text-white font-inter text-sm hover:bg-hover-gold transition-colors"
        >
          Return Home
        </Link>
        <Link
          href="/contact"
          className="px-7 py-3 border border-accent-gold text-accent-gold font-inter text-sm hover:bg-accent-gold hover:text-white transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
