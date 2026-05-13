"use client";

import { useEffect, useRef } from "react";
import { Quote } from "lucide-react";

const all10 = [
  { quote: "A commercial dispute with significant financial exposure required immediate and structured action. Stratum Juris approached the matter with clear strategy from the outset, securing interim protection and maintaining consistent pressure through the proceedings. The clarity in approach and control over each stage made a decisive difference to the outcome."},
  { quote: "Stratum Juris handled a cheque dishonour matter for us with a clear and structured approach. The proceedings were conducted efficiently, and the focus remained on securing recovery without unnecessary delay."},
  { quote: "Keshav handled a recovery suit for us with clarity and consistency. His preparation was thorough, and the matter was conducted in a structured manner from filing through hearings." },
  { quote: "Before initiating a commercial dispute, we sought legal assessment from the firm. The team's understanding of the legal position and identification of leverage points gave us a clear strategy going forward."},
  { quote: "Raagansh handled the matter with urgency and clarity. The preparation was thorough, and relief was secured at the appropriate stage without delay. The approach remained precise and reassuring throughout." },
  { quote: "A child custody matter was handled with a balanced and thoughtful approach. The team ensured that our concerns were properly addressed while maintaining clarity throughout the proceedings. The handling was both professional and sensitive to the situation."},
  { quote: "A long-standing property dispute was taken up by Stratum Juris, and the difference in approach was immediately noticeable. The arguments forwarded by Keshav and Raagansh were commendable and on-point. The matter was handled with structure and consistency, and progress was made steadily without unnecessary delays. Their clarity in handling the case gave us confidence throughout."},
  { quote: "In a criminal proceeding, the team demonstrated strong preparation and clarity in court. Each stage was explained properly, and the matter was handled with confidence and control. Their approach made a difficult situation far more manageable, which helped me get desired reliefs."},
  { quote: "A matter involving proceedings under the Prevention of Money Laundering Act required careful and discreet handling. Stratum Juris approached it with a clear understanding of the legal and procedural aspects, ensuring that every step was taken thoughtfully. It is a bliss to see Ravi and Keshav put their brains together. Their professionalism and control over the matter were highly reassuring." },
  { quote: "A high-value commercial dispute involving multiple parties required careful handling across parallel proceedings. Stratum Juris approached the matter with clear strategy from the outset, aligning each step with the overall objective while maintaining consistency in position. The level of preparation and control over the proceedings made a significant difference, particularly at critical stages where timely intervention was key. The outcome reflected both precision in execution and a strong understanding of the larger commercial context." },
];

const row1 = all10.slice(0, 5);
const row2 = all10.slice(5, 10);

function MarqueeRow({ items, reverse = false }: { items: typeof all10; reverse?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const doubled = [...items, ...items];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let x = reverse ? -(track.scrollWidth / 2) : 0;
    let raf: number;
    const speed = 0.6;
    const animate = () => {
      if (!pausedRef.current) {
        x += reverse ? speed : -speed;
        const half = track.scrollWidth / 2;
        if (!reverse && Math.abs(x) >= half) x = 0;
        if (reverse && x >= 0) x = -half;
        track.style.transform = `translateX(${x}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [reverse]);

  return (
    <div className="overflow-hidden py-2">
    <div ref={trackRef} style={{ display: "flex", gap: "20px", width: "max-content" }}>
        {doubled.map((t, i) => (
          <div
            key={i}
            onMouseEnter={() => { pausedRef.current = true; }}
            onMouseLeave={() => { pausedRef.current = false; }}
            style={{
              width: "min(380px, 85vw)",
              flexShrink: 0,
              background: "#fff",
              border: "1px solid #E8E2D9",
              borderTop: "3px solid transparent",
              borderRadius: "12px",
              padding: "28px 24px",
              cursor: "default",
              transition: "transform 0.25s ease, box-shadow 0.25s ease, border-top-color 0.25s ease",
            }}
            onMouseOver={e => {
              const el = e.currentTarget;
              el.style.transform = "translateY(-6px)";
              el.style.boxShadow = "0 12px 32px rgba(10,22,40,0.12)";
              el.style.borderTopColor = "#B8973A";
            }}
            onMouseOut={e => {
              const el = e.currentTarget;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
              el.style.borderTopColor = "transparent";
            }}
          >
            <Quote size={22} style={{ color: "#B8973A", marginBottom: "14px", opacity: 0.7 }} />
            <p className="font-inter my-auto" style={{ fontSize: "13px", lineHeight: 1.8, color: "#0A1628", marginBottom: "20px" }}>
              "{t.quote}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 overflow-hidden" style={{ background: "#F4F1EC" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-14">
        <p className="font-inter text-sm font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#B8973A" }}>
          Client Testimonials
        </p>
        <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-text">
          What Our Clients Say
        </h2>
        <div className="gold-divider mx-auto mt-5" />
      </div>

      <MarqueeRow items={row1} reverse={false} />
      <div className="mt-5">
        <MarqueeRow items={row2} reverse={true} />
      </div>
    </section>
  );
}
