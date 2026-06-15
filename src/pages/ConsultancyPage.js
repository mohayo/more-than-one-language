import React, { useState } from 'react';
import { T } from '../constants/tokens';

const ConsultancyPage = ({ setPage }) => {
  const [tab, setTab] = useState("Schools");
  const go = (id) => { setPage(id); window.scrollTo(0,0); };

  const services = {
    "Schools": {
      desc: "Supporting schools to embed heritage language and cultural identity into the fabric of education.",
      items: ["Curriculum development", "Heritage language programmes", "Teacher training", "Interactive workshops", "After-school programmes", "Cultural enrichment activities"]
    },
    "Local Authorities": {
      desc: "Helping local authorities create truly inclusive programmes that reflect the communities they serve.",
      items: ["Community engagement programmes", "Cultural inclusion projects", "Representation initiatives", "Accessibility improvements", "Community outreach strategies", "Diversity reporting support"]
    },
    "Organisations": {
      desc: "Building cultural competency within organisations so teams can engage meaningfully with diverse communities.",
      items: ["Employee cultural competency training", "Community outreach strategies", "Improved communication strategies", "Culturally inclusive initiatives", "Inclusion audits", "Staff awareness workshops"]
    },
    "Universities": {
      desc: "Collaborating with higher education institutions on research, lectures, and cultural programming.",
      items: ["Guest lectures", "Research collaborations", "Cultural programmes", "Student awareness events", "Heritage language research", "Community partnerships"]
    }
  };

  const outcomes = [
    { icon: "📈", label: "Improved organisational & student engagement" },
    { icon: "🧩", label: "Stronger cultural competency across teams" },
    { icon: "🤲", label: "Better stakeholder relationships" },
    { icon: "🏛️", label: "More inclusive programmes" },
    { icon: "💬", label: "Increased trust with diverse audiences" },
    { icon: "🎉", label: "Cultural celebration events" },
  ];

  return (
    <div className="page">
      {/* Hero */}
      <div style={{background:`linear-gradient(135deg, #0d3d22, ${T.green})`, padding:"64px 24px"}}>
        <div style={{maxWidth:1120,margin:"0 auto"}}>
          <div style={{fontSize:12,fontWeight:600,letterSpacing:"3px",textTransform:"uppercase",color:"rgba(255,255,255,0.6)",marginBottom:16}}>Consultancy & Speaking</div>
          <h1 className="playfair" style={{fontSize:"clamp(30px,4.5vw,52px)",fontWeight:900,color:"white",lineHeight:1.15,marginBottom:20,maxWidth:720}}>
            Why Languages, Heritage and Cultural Identity <span style={{color:T.gold}}>Matter in Modern Britain</span>
          </h1>
          <p style={{fontSize:17,color:"rgba(255,255,255,0.82)",maxWidth:620,lineHeight:1.75}}>
            Modern Britain is one of the most linguistically and culturally diverse societies in the world. Our services help organisations move beyond representation towards meaningful cultural engagement.
          </p>
        </div>
      </div>

      {/* Context */}
      <div className="section bg-cream">
        <div className="section-inner">
          <div className="section-label">The Context</div>
          <div className="divider"/>
          <h2 className="section-title">Heritage Languages Are an <span className="accent">Asset, Not an Afterthought</span></h2>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,alignItems:"start"}}>
            <div>
              <p style={{fontSize:16,lineHeight:1.8,color:T.mid,marginBottom:20}}>
                Millions of people in the UK speak, hear, or have family connections to languages other than English — including Yoruba, Igbo, Punjabi, Urdu, Bengali, Arabic, Polish, Mandarin, Somali, and many others.
              </p>
              <p style={{fontSize:16,lineHeight:1.8,color:T.mid}}>
                Heritage languages and cultural diversity are often overlooked, despite their importance in shaping identity, confidence, belonging, and cultural continuity. Organisations that work well with diverse communities recognise that language and culture are central to trust, participation, and belonging.
              </p>
            </div>
            <div>
              <div style={{background:T.white,border:`1px solid ${T.border}`,borderRadius:16,padding:32}}>
                <h3 className="playfair" style={{fontSize:20,fontWeight:700,color:T.charcoal,marginBottom:16}}>Our Work Helps Clients</h3>
                <ul style={{listStyle:"none"}}>
                  {["Move beyond representation to real engagement","Develop culturally informed strategies","Deepen trust with diverse communities","Build inclusive programmes that reflect real lives","Train staff to communicate across cultures"].map(item => (
                    <li key={item} style={{fontSize:14,color:T.mid,padding:"8px 0",borderBottom:`1px solid ${T.border}`,display:"flex",gap:10,alignItems:"flex-start"}}>
                      <span style={{color:T.green,fontWeight:700,flexShrink:0}}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="section bg-white">
        <div className="section-inner">
          <div className="section-label">Our Services</div>
          <div className="divider"/>
          <h2 className="section-title">Who We <span className="accent">Work With</span></h2>
          <div className="service-tabs">
            {Object.keys(services).map(s => (
              <button key={s} className={`service-tab ${tab === s ? "active" : ""}`} onClick={() => setTab(s)}>{s}</button>
            ))}
          </div>
          <div className="service-content">
            <h3>{tab}</h3>
            <p style={{fontSize:15,color:T.mid,marginBottom:28,lineHeight:1.7}}>{services[tab].desc}</p>
            <ul className="service-list">
              {services[tab].items.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>

      {/* Outcomes */}
      <div className="section bg-cream">
        <div className="section-inner">
          <div className="section-label">What You Can Expect</div>
          <div className="divider"/>
          <h2 className="section-title">Measurable <span className="accent">Outcomes</span></h2>
          <div className="outcomes-grid">
            {outcomes.map(o => (
              <div className="outcome-chip" key={o.label}>
                <div className="icon">{o.icon}</div>
                <p>{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-banner">
        <h2 className="playfair">Let's Build Something <em style={{color:T.gold,fontStyle:"normal"}}>Meaningful Together</em></h2>
        <p>Get in touch to discuss how we can support your organisation, school, or institution.</p>
        <div className="btn-group">
          <button className="btn btn-gold" onClick={() => go("contact")}>Make an Enquiry →</button>
        </div>
      </div>
    </div>
  );
};

export default ConsultancyPage;
