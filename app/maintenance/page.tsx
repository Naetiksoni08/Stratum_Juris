"use client";


export default function MaintenancePage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
      style={{ background: "#0A1628" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative text-center max-w-md">

        {/* Logo box */}
        {/* <Image
          src="/maintenance.png"
          alt="Stratum Juris"
          width={65}
          height={65}
          className="mx-auto mb-6 rounded-xl"
        /> */}

        {/* Eyebrow */}
        <p className="font-cormorant text-3xl font-semibold tracking-wide mb-1" style={{ color: "#B8973A" }}>
          STRATUM JURIS
        </p>
        <p className="text-[11px] tracking-[0.15em] uppercase font-inter mb-6" style={{ color: "#B8973A" }}>
          Advocates & Solicitors
        </p>

        {/* Heading */}
        <h1 className="font-cormorant text-4xl md:text-5xl font-semibold text-white leading-tight mb-4">
          We'll Be Back Shortly
        </h1>

        {/* Divider */}
        <div className="w-10 h-px mx-auto mb-6" style={{ background: "#B8973A" }} />

        {/* Body */}
        <p className="font-inter text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
          Our website is currently undergoing scheduled maintenance.
          We will be back online shortly. Thank you for your patience.
        </p>

        {/* Contact */}
        <p className="font-inter text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
          For urgent matters, reach us at {" "}
          <a
            href="mailto:contact@stratumjuris.com"
            className="transition-colors duration-200"
            style={{ color: "#B8973A" }}
          >
            contact@stratumjuris.com
          </a>
        </p>

      </div>
    </div>
  );
}
