// @ts-nocheck
"use client";

import { Sacramento, Inter, Cormorant_Garamond } from "next/font/google";
import content from "../data/content.json";

const script = Sacramento({ subsets: ["latin"], weight: ["400"] });
const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], style: ["normal", "italic"] });
const body = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

// Boutique blush palette — soft blush rose, champagne, sage, deep mauve, ivory
const BLUSH = "#C28A7B";
const BLUSH_DEEP = "#8A584C";
const CHAMPAGNE = "#D9B98E";
const SAGE = "#8A9479";
const SAGE_DEEP = "#5C6647";
const MAUVE = "#5F3C46";
const IVORY = "#FBF6EF";
const CREAM = "#F4ECE0";
const INK = "#2B1E1F";
const MUTED = "#8A7670";

export default function Page() {
  const phoneTel = "tel:" + content.contact.phone.replace(/[^0-9]/g, "");
  const mapUrl = "https://maps.google.com/maps?output=embed&q=" + encodeURIComponent(content.contact.mapEmbedQuery);

  return (
    <main className={body.className} style={{ backgroundColor: IVORY, color: INK }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes shimmerLine { 0%,100% { background-position: 0% 0; } 50% { background-position: 100% 0; } }
        .fade-up { animation: fadeUp 1.1s cubic-bezier(.2,.7,.2,1) forwards; }
        .fade-in { animation: fadeIn 1.3s ease-out forwards; }
        .gold-line { background: linear-gradient(90deg, ${CHAMPAGNE}, ${BLUSH}, ${CHAMPAGNE}); background-size: 200% 100%; animation: shimmerLine 6s ease-in-out infinite; }
        .d1 { animation-delay: .15s; opacity: 0; }
        .d2 { animation-delay: .32s; opacity: 0; }
        .d3 { animation-delay: .48s; opacity: 0; }
      `}</style>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: "rgba(251,246,239,0.95)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${BLUSH}33` }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-baseline gap-2">
            <span className={display.className + " italic"} style={{ fontSize: "1.8rem", color: MAUVE, fontWeight: 500 }}>Lugali</span>
            <span className={script.className} style={{ fontSize: "1.4rem", color: BLUSH }}>beauty</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.3em]" style={{ color: MAUVE }}>
            <a href="#services" className="hover:opacity-60 transition">Services</a>
            <a href="#story" className="hover:opacity-60 transition">Studio</a>
            <a href="#visit" className="hover:opacity-60 transition">Book</a>
          </div>
          <a href={phoneTel} className="px-5 py-2.5 text-xs uppercase tracking-[0.2em] rounded-full transition-transform hover:-translate-y-0.5" style={{ backgroundColor: MAUVE, color: IVORY }}>
            Book now
          </a>
        </div>
      </nav>

      {/* HERO — soft editorial split */}
      <section id="top" className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className={script.className + " fade-in d1"} style={{ fontSize: "2.6rem", color: BLUSH, lineHeight: 1 }}>
              welcome, darling.
            </p>
            <h1 className={display.className + " fade-up d1 mt-2"} style={{ fontSize: "clamp(2.75rem, 7.5vw, 5.5rem)", color: MAUVE, fontWeight: 500, lineHeight: 1.02, letterSpacing: "-0.005em" }}>
              Lashes, brows,<br /><em style={{ color: BLUSH, fontStyle: "italic", fontWeight: 400 }}>glow —</em> set in 90 minutes.
            </h1>
            <p className="fade-up d2 mt-8 text-lg max-w-md leading-relaxed" style={{ color: MUTED }}>
              {content.hero.subheading}
            </p>
            <div className="fade-up d3 mt-10 flex flex-col sm:flex-row gap-3">
              <a href={phoneTel} className="px-9 py-4 rounded-full text-sm uppercase tracking-[0.2em] transition-transform hover:-translate-y-0.5" style={{ backgroundColor: MAUVE, color: IVORY }}>
                Book your appointment
              </a>
              <a href="#services" className="px-9 py-4 rounded-full text-sm uppercase tracking-[0.2em] border transition-colors" style={{ borderColor: MAUVE, color: MAUVE }}>
                See services
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] rounded-3xl bg-cover bg-center fade-in d2" style={{ backgroundImage: `url("${content.hero.image}")`, border: `6px solid ${IVORY}`, boxShadow: `0 0 0 2px ${BLUSH}40, 12px 12px 0 ${CHAMPAGNE}` }} />
            {/* Floating service note */}
            <div className="absolute -bottom-8 -left-4 md:-left-8 z-10 px-7 py-5 rounded-3xl" style={{ backgroundColor: IVORY, border: `1px solid ${BLUSH}33`, boxShadow: `0 8px 24px rgba(95,60,70,0.12)` }}>
              <p className={script.className} style={{ fontSize: "1.7rem", color: BLUSH, lineHeight: 1 }}>signature</p>
              <p className={display.className + " mt-1"} style={{ fontSize: "1.3rem", color: MAUVE, fontWeight: 500 }}>Volume Lash Set</p>
              <p className={display.className + " italic mt-1"} style={{ fontSize: "1.4rem", color: BLUSH_DEEP }}>$220</p>
            </div>
          </div>
        </div>
        <div className="gold-line h-px max-w-7xl mx-auto mt-20" />
      </section>

      {/* STORY */}
      <section id="story" className="px-6 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <p className={script.className} style={{ fontSize: "2.4rem", color: BLUSH, lineHeight: 1 }}>our studio</p>
          <h2 className={display.className + " mt-2"} style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: MAUVE, fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.005em" }}>
            {content.about.heading}
          </h2>
          <div className="mt-10 space-y-6 text-lg leading-loose" style={{ color: MUTED }}>
            {content.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* SERVICES — soft cards */}
      <section id="services" className="px-6 py-24 md:py-32" style={{ backgroundColor: CREAM }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className={script.className} style={{ fontSize: "2.4rem", color: SAGE_DEEP, lineHeight: 1 }}>services &amp; pricing</p>
            <h2 className={display.className + " mt-2"} style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: MAUVE, fontWeight: 500 }}>
              <em style={{ color: BLUSH, fontStyle: "italic", fontWeight: 400 }}>The</em> menu
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.services.map((s, i) => (
              <div key={i} className="p-7 rounded-3xl transition-transform hover:-translate-y-1" style={{ backgroundColor: IVORY, border: `1px solid ${BLUSH}33`, boxShadow: `0 4px 16px rgba(95,60,70,0.06)` }}>
                <p className={script.className} style={{ fontSize: "1.5rem", color: BLUSH, lineHeight: 1 }}>{["one","two","three","four","five","six"][i]}</p>
                <h3 className={display.className + " mt-2"} style={{ fontSize: "1.6rem", color: MAUVE, fontWeight: 500, lineHeight: 1.1, letterSpacing: "0.005em" }}>{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: MUTED }}>{s.description}</p>
                {s.price && (
                  <div className="mt-6 pt-5" style={{ borderTop: `1px dashed ${BLUSH}33` }}>
                    <p className={display.className + " italic"} style={{ fontSize: "1.4rem", color: BLUSH_DEEP, fontWeight: 500 }}>{s.price}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      {content.gallery && (
        <section className="px-6 py-24">
          <div className="max-w-6xl mx-auto">
            <p className={script.className + " text-center"} style={{ fontSize: "2.4rem", color: BLUSH, lineHeight: 1 }}>from the chair</p>
            <h2 className={display.className + " text-center mt-2 mb-12"} style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", color: MAUVE, fontWeight: 500 }}>
              Recent <em style={{ color: BLUSH, fontStyle: "italic", fontWeight: 400 }}>work</em>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {content.gallery.map((src, i) => (
                <div key={i}>
                  <div className="aspect-[3/4] rounded-3xl bg-cover bg-center" style={{ backgroundImage: `url("${src}")`, border: `4px solid ${IVORY}`, boxShadow: `0 0 0 1px ${BLUSH}30, 6px 6px 0 ${CHAMPAGNE}` }} />
                  <p className={script.className + " mt-4 text-center"} style={{ fontSize: "1.4rem", color: BLUSH }}>
                    {["volume lash", "brow lamination", "signature facial"][i]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* REVIEWS */}
      <section className="px-6 py-24" style={{ backgroundColor: SAGE_DEEP, color: IVORY }}>
        <div className="max-w-5xl mx-auto">
          <p className={script.className + " text-center"} style={{ fontSize: "2.4rem", color: CHAMPAGNE, lineHeight: 1 }}>love letters</p>
          <h2 className={display.className + " text-center mt-2 mb-14"} style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", color: IVORY, fontWeight: 500 }}>
            From <em style={{ color: CHAMPAGNE, fontStyle: "italic", fontWeight: 400 }}>our clients</em>
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {content.reviews.slice(0, 3).map((r, i) => (
              <div key={i}>
                <div className="flex gap-1 mb-4" style={{ color: CHAMPAGNE, fontSize: "1rem" }}>
                  {Array.from({ length: r.rating || 5 }).map((_, j) => <span key={j}>★</span>)}
                </div>
                <p className={display.className} style={{ fontSize: "1.25rem", color: IVORY, lineHeight: 1.55, fontStyle: "italic", fontWeight: 400 }}>"{r.text}"</p>
                <p className={script.className + " mt-6"} style={{ fontSize: "1.4rem", color: CHAMPAGNE }}>— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="px-6 py-24 md:py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className={script.className} style={{ fontSize: "2.4rem", color: BLUSH, lineHeight: 1 }}>visit the studio</p>
            <h2 className={display.className + " mt-2"} style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", color: MAUVE, fontWeight: 500, lineHeight: 1.05, letterSpacing: "-0.005em" }}>
              On East <em style={{ color: BLUSH, fontStyle: "italic", fontWeight: 400 }}>Broadway.</em>
            </h2>
            <p className="mt-6 text-base" style={{ color: MUTED }}>{content.contact.address}</p>
            <a href={phoneTel} className={display.className} style={{ display: "block", marginTop: "0.5rem", fontSize: "1.85rem", color: BLUSH_DEEP, fontWeight: 500 }}>
              {content.contact.phone}
            </a>
            <p className={script.className + " mt-3"} style={{ fontSize: "1.4rem", color: SAGE_DEEP }}>by appointment · same-day often available</p>
            <div className="mt-10">
              <p className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: MUTED }}>Open every day</p>
              <table className="w-full">
                <tbody>
                  {Object.entries(content.contact.hours).map(([day, time]) => (
                    <tr key={day} style={{ borderBottom: `1px solid ${BLUSH}25` }}>
                      <td className={display.className + " py-3 text-base"} style={{ color: MAUVE, fontWeight: 500 }}>{day}</td>
                      <td className={display.className + " italic py-3 text-base text-right"} style={{ color: MUTED }}>{String(time)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <a href={phoneTel} className="inline-block mt-10 px-9 py-4 rounded-full text-sm uppercase tracking-[0.2em] transition-transform hover:-translate-y-0.5" style={{ backgroundColor: MAUVE, color: IVORY }}>
              Book your appointment →
            </a>
          </div>
          <div className="h-[520px] rounded-3xl overflow-hidden" style={{ border: `4px solid ${IVORY}`, boxShadow: `0 0 0 1px ${BLUSH}33, 8px 8px 0 ${CHAMPAGNE}` }}>
            <iframe title="Lugali location" width="100%" height="100%" loading="lazy" style={{ border: 0 }} referrerPolicy="no-referrer-when-downgrade" src={mapUrl} />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: MAUVE, color: IVORY }}>
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className={display.className + " italic"} style={{ fontSize: "2rem", color: IVORY, fontWeight: 500 }}>Lugali</span>
            <span className={script.className} style={{ fontSize: "1.6rem", color: CHAMPAGNE }}>beauty lounge</span>
          </div>
          <div className="flex flex-wrap gap-5 text-xs uppercase tracking-[0.3em]">
            {content.social && Object.entries(content.social).map(([k, v]) => (
              <a key={k} href={String(v)} target="_blank" rel="noreferrer" className="capitalize hover:text-amber-200 transition" style={{ color: CHAMPAGNE }}>{k}</a>
            ))}
          </div>
        </div>
        <div className={script.className + " py-4 text-center text-base"} style={{ borderTop: `1px solid ${CHAMPAGNE}33`, color: CHAMPAGNE }}>
          xoxo · © {new Date().getFullYear()} Lugali Beauty Lounge
        </div>
      </footer>
    </main>
  );
}