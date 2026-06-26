import React from 'react';
import { T } from '../constants/tokens';

const LessonsPage = ({ setPage }) => {
  const go = (id) => { setPage(id); window.scrollTo(0,0); };

  const phrases = [
    { yoruba: "Ẹ káàárọ̀", english: "Good morning" },
    { yoruba: "Ẹ káàsán", english: "Good afternoon" },
    { yoruba: "Ẹ kúlẹ́ o", english: "Welcome home" },
    { yoruba: "Ẹ kú iṣẹ́", english: "Well done for your work" },
    { yoruba: "Nibo lo n lo?", english: "Where are you going?" },
    { yoruba: "Ki lo fe je?", english: "What would you like to eat?" },
  ];

  const names = [
    { name: "Ayọ̀délé", meaning: "Joy has come home" },
    { name: "Olúwáfẹ́mi", meaning: "God loves me" },
    { name: "Adéọlá", meaning: "The crown of wealth" },
  ];

  const countries = ["🇬🇧 UK", "🇺🇸 USA", "🇨🇦 Canada", "🇦🇺 Australia", "🇫🇷 France", "🇩🇪 Germany"];

  return (
    <div className="page">
      {/* Hero banner */}

              <div style={{background: `linear-gradient(135deg, ${T.greenDark}, ${T.green})`, padding:"64px 24px"}}>
          <div style={{maxWidth:1120, margin:"0 auto", display:"flex", gap:40, alignItems:"center"}}>
            
            <div style={{flex:6}}>
              <div style={{fontSize:12,fontWeight:600,letterSpacing:"3px",textTransform:"uppercase",color:"rgba(255,255,255,0.6)",marginBottom:16}}>Learn Yoruba</div>
              <h1 className="playfair" style={{fontSize:"clamp(32px,5vw,56px)",fontWeight:900,color:"white",lineHeight:1.15,marginBottom:16}}>
                Connect with Your Heritage.<br/><span style={{color:T.gold}}>Build Cultural Confidence.</span>
              </h1>
              <p style={{fontSize:17,color:"rgba(255,255,255,0.85)",maxWidth:600,lineHeight:1.75}}>
              Online Yoruba lessons for children, adults, families, schools and organisations across the UK and beyond.              </p>
            </div>

            <div style={{flex:4}} className="hero-card">
              <div className="hero-card-title">Our Reach So Far</div>
              <div className="stat-row">
                <div className="stat">
                  <div className="stat-num">98+</div>
                  <div className="stat-lbl">Complete beginners taught</div>
                </div>
                <div className="stat">
                  <div className="stat-num">6</div>
                  <div className="stat-lbl">Countries served globally</div>
                </div>
              </div>
              <div style={{fontSize:12,color:"rgba(255,255,255,0.55)",marginBottom:10,textTransform:"uppercase",letterSpacing:"1.5px",fontWeight:600}}>Students from</div>
              <div className="flag-list">
                {countries.map(c => <span key={c} className="flag-chip">{c}</span>)}
              </div>
            </div>

          </div>
        </div>

      {/* Classes */}
      <div className="section bg-white">
        <div className="section-inner">
          <div className="section-label">Our Classes</div>
          <div className="divider"/>
          <h2 className="section-title">Structured Learning for <span className="accent">Every Stage</span></h2>
          <div className="lesson-grid">
            {/* Children */}
            <div className="lesson-card">
              <div className="lesson-tag lesson-tag-child">For Children</div>
              <h3>The Yoruba Language Circle</h3>
              <p>A fun, interactive virtual space where children aged 5-15 learn Yoruba through songs, stories, games, and conversation.</p>
              <ul className="lesson-features">
                <li>Small group sizes for maximum engagement</li>
                <li>Age-appropriate curriculum</li>
                <li>Focus on speaking, listening and writing confidence</li>
                <li>Term-based progression</li>
              </ul>
              <a href="https://yoruba-language-circle.newzenler.com/courses/yoruba-language-circle"  rel="noopener" className="btn btn-primary" style={{width:"100%",justifyContent:"center"}}>Enrol Your Child →</a>
            </div>

            {/* Adults */}
            <div className="lesson-card">
              <div className="lesson-tag lesson-tag-adult">For Adults</div>
              <h3>Yoruba for Adults</h3>
              <p>Tailored for beginners and returners who want to reclaim their heritage language or support their children's learning.</p>
              <ul className="lesson-features">
                <li>Flexible online classes</li>
                <li>Practical conversational focus</li>
                <li>Supportive teaching</li>
                <li>Resources for home practice</li>
              </ul>
              <a href="https://yoruba-language-circle.newzenler.com/courses/yoruba-for-adult-membership"  rel="noopener" className="btn btn-outline" style={{width:"100%",justifyContent:"center",borderColor:T.gold,color:"#7a5c00"}}>Explore Adult Classes →</a>
            </div>
          </div>
        </div>
      </div>

      {/* Common Phrases */}
      <div className="section bg-cream">
        <div className="section-inner">
          <div className="section-label">A Taste of Yoruba</div>
          <div className="divider"/>
          <h2 className="section-title">Common <span className="accent">Phrases & Greetings</span></h2>
          <div className="phrase-grid">
            {phrases.map(p => (
              <div key={p.yoruba} className="phrase-card">
                <div className="phrase-yoruba">{p.yoruba}</div>
                <div className="phrase-english">{p.english}</div>
              </div>
            ))}
          </div>

          <div style={{marginTop:64}}>
            <div className="section-label">Yoruba Names</div>
            <h3 className="playfair" style={{fontSize:26,fontWeight:700,color:T.charcoal,marginBottom:8}}>Names That Carry Meaning</h3>
            <p style={{fontSize:15,color:T.mid,marginBottom:28}}>Yoruba names are living poetry — each one tells a story about the child, the family, and the moment they arrived.</p>
            <div style={{display:"flex",gap:16,flexWrap:"wrap"}}>
              {names.map(n => (
                <div key={n.name} style={{background:T.white,border:`1px solid ${T.border}`,borderRadius:12,padding:"20px 28px",minWidth:200}}>
                  <div className="playfair" style={{fontSize:22,fontWeight:700,color:T.green,marginBottom:6}}>{n.name}</div>
                  <div style={{fontSize:13,color:T.light,fontStyle:"italic"}}>{n.meaning}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-banner">
        <h2 className="playfair">Your First Lesson Starts <em style={{color:T.gold,fontStyle:"normal"}}>with a Conversation</em></h2>
        <p>Book a free discovery call to find the right class for you or your child.</p>
        <div className="btn-group">
          <button className="btn btn-gold" onClick={() => go("contact")}>Book a Free Discovery Call</button>
          <a href="https://yoruba-language-circle.newzenler.com/courses/yoruba-language-circle"  rel="noopener" className="btn" style={{background:"rgba(255,255,255,0.15)",color:"white",border:"1px solid rgba(255,255,255,0.3)"}}>Join the Next Yoruba Course →</a>
        </div>
      </div>
    </div>
  );
};

export default LessonsPage;
