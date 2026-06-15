import React from 'react';
import { T } from '../constants/tokens';

const HomePage = ({ setPage }) => {
  const go = (id) => { setPage(id); window.scrollTo(0,0); };

  const whyCards = [
    { icon: "👨‍👩‍👧", title: "Family & Elder Connection", body: "Speaking Yoruba helps people communicate naturally with relatives and elders, strengthening family bonds across generations." },
    { icon: "🌍", title: "A Global Language Community", body: "Yoruba is spoken by millions across Nigeria, Benin, Togo, and the global Yoruba diaspora. The language is your passport to this community." },
    { icon: "🎭", title: "Cultural Identity", body: "Yoruba carries history, traditions, values and worldview. Proverbs, songs, and oral traditions come fully alive in the language itself." },
    { icon: "🌱", title: "Preserving Heritage", body: "Every language encodes unique knowledge. Teaching Yoruba to new generations helps preserve an irreplaceable part of human heritage." },
    { icon: "🧠", title: "Cognitive Benefits", body: "Children with strong first-language skills often transfer literacy abilities to new languages. Bilingualism provides lasting cognitive and social advantages." },
    { icon: "🤝", title: "Belonging & Confidence", body: "Language is identity. Knowing Yoruba gives diaspora children and adults a confident, rooted sense of who they are and where they come from." },
  ];

  const testimonials = [
    { text: "My daughter has gone from knowing zero Yoruba to greeting her grandparents fluently. The change in their relationship is incredible.", author: "Parent of an 8-year-old student, UK" },
    { text: "As an adult complete beginner, I was nervous. But the classes are so warm and structured. I can now hold basic conversations with my family in Lagos.", author: "Adult student, London" },
    { text: "Abisade's approach is patient, culturally rich, and genuinely transformative. Our sons are proud to be Yoruba boys.", author: "Parent of two students, Manchester" },
    { text: "I grew up in the UK and always felt disconnected from my Nigerian heritage. This class gave me something I didn't know I was missing.", author: "Adult student, Birmingham" },
  ];

  const countries = ["🇬🇧 UK", "🇺🇸 USA", "🇨🇦 Canada", "🇦🇺 Australia", "🇫🇷 France", "🇩🇪 Germany"];

  return (
    <div className="page">
      {/* Hero */}
      <div className="hero">
        <div className="hero-inner">
          <div>
            <div className="hero-label">UK-Based Heritage Language Education</div>
            <h1 className="hero-title playfair">
              Preserving Language.<br/>
              Celebrating <em>Culture.</em><br/>
              Strengthening Identity.
            </h1>
            <p className="hero-sub">Online Yoruba lessons for children, adults, families, schools and organisations across the UK and beyond.</p>
            <div className="hero-buttons">
              <a href="https://yoruba-language-circle.newzenler.com/courses/yoruba-language-circle"  rel="noopener" className="btn btn-gold">Join a Yoruba Course →</a>
              <button className="btn btn-outline" style={{color:"white",borderColor:"rgba(255,255,255,0.4)"}} onClick={() => go("contact")}>Book a Free Discovery Call</button>
            </div>
          </div>
          <div className="hero-card">
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

      {/* Why Learn Yoruba */}
      <div className="section bg-cream">
        <div className="section-inner">
          <div className="section-label">The Case for Yoruba</div>
          <div className="divider"/>
          <h2 className="section-title">Why Learn <span className="accent">Yoruba?</span></h2>
          <p className="section-body">Language is more than words — it is memory, identity, and belonging. Here is why thousands of families across the diaspora are choosing to reconnect.</p>
          <div className="why-grid">
            {whyCards.map(c => (
              <div className="why-card" key={c.title}>
                <div className="why-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonial-strip">
        <div className="testimonial-inner">
          <div className="section-label">What Students Say</div>
          <div className="divider"/>
          <h2 className="section-title">Stories of <span className="accent">Reconnection</span></h2>
          <div className="testimonial-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">— {t.author}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="cta-banner">
        <h2 className="playfair">Ready to Start Your <em style={{color:T.gold,fontStyle:"normal"}}>Yoruba Journey?</em></h2>
        <p>Whether you're a parent, an adult learner, a school, or an organisation — we have a path for you.</p>
        <div className="btn-group">
          <a href="https://yoruba-language-circle.newzenler.com/courses/yoruba-language-circle"  rel="noopener" className="btn btn-gold">Children's Classes →</a>
          <a href="https://yoruba-language-circle.newzenler.com/courses/yoruba-for-adult-membership"  rel="noopener" className="btn" style={{background:"rgba(255,255,255,0.15)",color:"white",border:"1px solid rgba(255,255,255,0.3)"}}>Adult Classes →</a>
          <button className="btn" style={{background:"transparent",color:"white",border:"1px solid rgba(255,255,255,0.3)"}} onClick={() => go("consultancy")}>Consultancy Services →</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
