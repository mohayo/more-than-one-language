import React from 'react';
import { T } from '../constants/tokens';

/* ─── Photo Imports ──────────────────────────────────────────────────────── */
import photo1 from "../assets/photo1.svg";
import photo2 from "../assets/photo2.svg";
import photo3 from "../assets/culture.jpg";
import photo4 from "../assets/photo3.svg";

/* ─── Collage ────────────────────────────────────────────────────────────── */
const Collage = () => {
  const goldColor = T.gold || "#C9952A";

  const photos = [
    {
      src: photo1,
      alt: "Children's Yoruba language classes",
      label: "Children's Classes",
      // Left Top: Pulled wide and slightly up
      style: { top: "-1%", left: "-6%", width: "60%", rotate: "-5deg", zIndex: 8 },
      tapeRotate: "2deg"
    },
    {
      src: photo2,
      alt: "School and youth programmes",
      label: "Schools & Education",
      // Right Top: Pushed way out to the top right edge
      style: { top: "2%", right: "-8%", width: "59%", rotate: "5deg", zIndex: 11 },
      tapeRotate: "-3deg"
    },
    {
      src: photo3,
      alt: "Diverse cultural community group",
      label: "Cultural Community",
      // Left Bottom: Pushed way down out to the bottom left edge
      style: { bottom: "1%", left: "-5%", width: "58%", rotate: "4deg", zIndex: 10 },
      tapeRotate: "-2deg"
    },
    {
      src: photo4,
      alt: "Consultancy and organisational work",
      label: "Consultancy & Org",
      // Right Bottom: Pushed way down out to the bottom right edge
      style: { bottom: "-2%", right: "-7%", width: "61%", rotate: "-4deg", zIndex: 9 },
      tapeRotate: "4deg"
    }
  ];

  return (
    <div style={{ 
      position: "relative", 
      width: "100%", 
      aspectRatio: "1 / 1", 
      maxWidth: "680px", // Expanded maximum width container so your photos have space to fly outward without clipping
      margin: "0 auto", 
      padding: "50px",   // Extra breathing room padding
      perspective: "1200px" 
    }}>
      <svg
        viewBox="0 0 520 520"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 5, pointerEvents: "none", opacity: 0.55 }}
      >
        <defs>
          <filter id="gold-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        {/* Expanded background linking vectors to keep pace with the layout separation */}
        <path d="M120 145 Q 260 90 425 165" fill="none" stroke={goldColor} strokeWidth="1.2" strokeDasharray="5 5" />
        <path d="M425 165 Q 465 340 405 450" fill="none" stroke={goldColor} strokeWidth="1.2" strokeDasharray="5 5" />
        <path d="M405 450 Q 240 490 130 425" fill="none" stroke={goldColor} strokeWidth="1.2" strokeDasharray="5 5" />
        <path d="M130 425 Q 70 275 120 145" fill="none" stroke={goldColor} strokeWidth="1.2" strokeDasharray="5 5" />
        {[ [120, 145], [425, 165], [405, 450], [130, 425] ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="4" fill={goldColor} filter="url(#gold-glow)" />
        ))}
      </svg>

      {photos.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            ...p.style,
            aspectRatio: "1 / 1.16",
            padding: "14px 14px 46px 14px", 
            background: "#ffffff",
            borderRadius: "4px",
            boxShadow: "0 16px 36px -10px rgba(0,0,0,0.14), 0 6px 16px -4px rgba(0,0,0,0.08)",
            border: "1px solid rgba(0,0,0,0.04)",
            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            cursor: "pointer",
            transformOrigin: "center center",
            transform: `rotateZ(${p.style.rotate}) translateZ(0px)`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = `rotateZ(${parseFloat(p.style.rotate) * 0.25}deg) scale(1.05) translateZ(40px) translateY(-10px)`;
            e.currentTarget.style.zIndex = "25";
            e.currentTarget.style.boxShadow = "0 42px 70px -16px rgba(0,0,0,0.2), 0 20px 32px -8px rgba(0,0,0,0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = `rotateZ(${p.style.rotate}) translateZ(0px)`;
            e.currentTarget.style.zIndex = p.style.zIndex.toString();
            e.currentTarget.style.boxShadow = "0 16px 36px -10px rgba(0,0,0,0.14), 0 6px 16px -4px rgba(0,0,0,0.08)";
          }}
        >
          <div style={{
            position: "absolute",
            top: "-14px",
            left: "calc(50% - 38px)",
            width: "76px",
            height: "24px",
            background: `linear-gradient(180deg, rgba(255,255,255,0.1) 0%, ${goldColor.startsWith('#') ? goldColor + '26' : 'rgba(201, 149, 42, 0.15)'} 100%)`,
            backgroundColor: "rgba(255, 254, 250, 0.4)",
            backdropFilter: "blur(1.5px)",
            borderLeft: `1px dashed ${goldColor}`,
            borderRight: `1px dashed ${goldColor}`,
            opacity: 0.85,
            transform: `rotate(${p.tapeRotate})`,
            pointerEvents: "none",
            zIndex: 4
          }} />

          <div style={{ 
            width: "100%", 
            height: "100%", 
            overflow: "hidden", 
            borderRadius: "2px", 
            background: "#f7f7f7",
            position: "relative",
            outline: `1px solid ${goldColor}`, 
            outlineOffset: "2px" 
          }}>
            <img 
              src={p.src} 
              alt={p.alt} 
              style={{ 
                width: "100%", 
                height: "100%", 
                objectFit: "cover",
                display: "block",
                transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
              }} 
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            />
            <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 20px rgba(0,0,0,0.05)", pointerEvents: "none" }} />
          </div>

          <div style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "46px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 14px"
          }}>
            <span style={{
              fontSize: "10px",
              fontWeight: "700",
              color: "#262626",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              opacity: 0.85,
              fontFamily: "inherit",
              textAlign: "center"
            }}>
              {p.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

/* ─── HomePage ─────────────────────────────────────────────────────────────── */
const HomePage = ({ setPage }) => {
  const go = (id) => { setPage(id); window.scrollTo(0, 0); };
  const goldColor = T.gold || "#C9952A";

  const cultureCards = [
    {
      icon: "🏛️",
      title: "Heritage Is an Asset",
      body: "Cultural heritage — language, tradition, oral history, and identity — is not a relic of the past. It is a living resource that shapes how communities engage, contribute, and thrive in the present.",
    },
    {
      icon: "🌍",
      title: "Diversity Drives Innovation",
      body: "Organisations and institutions that actively engage with cultural diversity benefit from broader perspectives, stronger community trust, and more effective communication with the people they serve.",
    },
    {
      icon: "🤝",
      title: "Inclusion Requires Understanding",
      body: "Genuine inclusion goes beyond representation. It requires understanding the cultural contexts, values, and lived experiences of the communities involved — and building programmes that reflect that understanding.",
    },
    {
      icon: "🎓",
      title: "Education as a Bridge",
      body: "Cultural education — whether in schools, organisations, or families — builds empathy, reduces barriers, and creates the shared understanding that makes diverse communities genuinely cohesive.",
    },
    {
      icon: "🧒",
      title: "Identity Shapes Futures",
      body: "Children who grow up with a strong sense of cultural identity demonstrate greater confidence, resilience, and academic engagement. Cultural preservation is not just history — it is an investment in the next generation.",
    },
    {
      icon: "🔗",
      title: "Connection Across Generations",
      body: "When cultural knowledge is lost, so is the thread between generations. Preserving language, story, and tradition keeps families and communities connected across time and geography.",
    },
  ];

  return (
    <div className="page">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="hero">
        <div className="hero-inner">
          <div>
            <div className="hero-label">UK-Based Cultural Education &amp; Consultancy</div>
            <h1 className="hero-title playfair">
              Preserving Language.<br />
              Celebrating <em>Culture.</em><br />
              Strengthening Identity.
            </h1>
            <p className="hero-sub">
              Connecting communities to their heritage through cultural preservation,
              language, storytelling, and education.
            </p>
            <div className="hero-buttons">
              <a
                href="https://yoruba-language-circle.newzenler.com/courses/yoruba-language-circle"
                rel="noopener"
                className="btn btn-gold"
              >
                Book a Free Discovery Call →
              </a>
            </div>
          </div>
          <Collage />
        </div>
      </div>

      {/* ── The Case for Cultural Preservation (Rolex Split-Screen Deck) ─── */}
      <div 
        style={{ 
          position: "relative", 
          backgroundColor: "#fff5ea",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "40px",
          padding: "80px 4% 0 4%",
          boxSizing: "border-box"
        }}
      >
        {/* Left Side: Pinned Intro Title Block */}
        <div style={{
          position: "sticky",
          top: "120px",
          height: "calc(100vh - 160px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          paddingBottom: "40px"
        }}>
          <div className="section-label" style={{ textAlign: "left" }}>Why It Matters</div>
          <div className="divider" style={{ margin: "15px 0", transformOrigin: "left" }} />
          <h2 className="section-title" style={{ fontSize: "2.8rem", marginBottom: "24px", lineHeight: "1.2", textAlign: "left" }}>
            The Case for <br />
            <span className="accent">Cultural Preservation</span>
          </h2>
          <p className="section-body" style={{ maxWidth: "440px", fontSize: "1.1rem", opacity: 0.85, lineHeight: "1.7", textAlign: "left" }}>
            Culture is not a background detail — it is the foundation of identity, community, and belonging.
            In a rapidly changing world, preserving it is one of the most meaningful investments.
          </p>
        </div>

        {/* Right Side: Scrolling Deck of Overlay Cards */}
        <div style={{ position: "relative" }}>
          {cultureCards.map((c, i) => (
            <div 
              key={c.title}
              style={{
                position: "sticky",
                top: `${100 + (i * 24)}px`, 
                height: "70vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box"
              }}
            >
              <div 
                style={{
                  width: "100%",
                  background: "#ffffff",
                  borderRadius: "16px",
                  padding: "40px 32px",
                  boxShadow: `0 ${20 + i * 5}px ${40 + i * 10}px -15px rgba(0, 0, 0, 0.07)`,
                  border: "1px solid rgba(0, 0, 0, 0.03)",
                  display: "grid",
                  gridTemplateColumns: "64px 1fr",
                  gap: "24px",
                  alignItems: "start",
                  transform: `scale(${1 - (cultureCards.length - i) * 0.012})`, 
                  transformOrigin: "top center",
                  transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
                }}
              >
                <div style={{
                  fontSize: "2.2rem",
                  width: "64px",
                  height: "64px",
                  background: `linear-gradient(135deg, rgba(255,255,255,1) 0%, ${goldColor}12 100%)`,
                  border: `1px solid ${goldColor}33`,
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 16px -4px rgba(201, 149, 42, 0.06)"
                }}>
                  {c.icon}
                </div>

                <div>
                  <h3 style={{ 
                    fontSize: "1.45rem", 
                    fontWeight: "600", 
                    color: "#1a1a1a", 
                    marginBottom: "10px",
                    letterSpacing: "-0.01em"
                  }}>
                    {c.title}
                  </h3>
                  <p style={{ 
                    fontSize: "1.02rem", 
                    color: "#555555", 
                    lineHeight: "1.65"
                  }}>
                    {c.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div style={{ height: "20vh" }} />
        </div>
      </div>

      {/* ── CTA Banner ───────────────────────────────────────────────────── */}
      <div className="cta-banner">
        <h2 className="playfair">
          Ready to Work <em style={{ color: goldColor, fontStyle: "normal" }}>With Us?</em>
        </h2>
        <p>Whether you're a parent, an adult learner, a school, or an organisation — we have a path for you.</p>
        <div className="btn-group">
          <button className="btn btn-gold" onClick={() => go("consultancy")}>
            Consultancy Services →
          </button>
          <button
            className="btn"
            style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}
            onClick={() => go("lessons")}
          >
            Yoruba Lessons →
          </button>
        </div>
      </div>

    </div>
  );
};

export default HomePage;