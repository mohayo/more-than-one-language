import React from 'react';
import yourImage from "../assets/abi.png";

const AboutPage = ({ setPage }) => {
  const go = (id) => { setPage(id); window.scrollTo(0, 0); };

  return (
    <div className="page">

      {/* ── Section 1: Meet Abisade ── */}
      <div className="section bg-white">
        <div className="section-inner">
          <div className="section-label">Our Story</div>
          <div className="divider" />
          <h1 className="section-title">Meet <span className="accent">Abisade Aluko</span></h1>

          <div className="about-grid">

            {/* Left col: photo + mission box */}
            <div>
              <div className="about-photo" style={{ overflow: "hidden" }}>
                <img
                  src={yourImage}
                  alt="Abisade Aluko"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
                />
              </div>
              <div className="about-mission">
                <h4>Our Mission</h4>
                <p>To celebrate culture, preserve language, and strengthen identity — creating spaces where communities connect with their heritage, share their stories, and pass their knowledge to future generations.</p>
              </div>
            </div>

            {/* Right col: bio */}
            <div>

            <p className="section-body" style={{ marginBottom: 20, maxWidth: "100%" }}>
            I am Abisade, founder of More Than One Language (MTOL).              </p>

              <p className="section-body" style={{ marginBottom: 20, maxWidth: "100%" }}>
              My journey began in 2002, when I moved from Nigeria to the United Kingdom. As a Yoruba teenager, I experienced culture shock first-hand and understood the challenges of adapting to a very different way of life.              </p>

              <p className="section-body" style={{ marginBottom: 20, maxWidth: "100%" }}>
              I also saw that many Nigerian children born in the UK, or growing up in other countries, could not speak Yoruba. Some who could speak it chose not to, and many parents found it difficult to encourage their children to use the language. In many cases, English or the dominant local language was seen as more fashionable.              </p>
              <p className="section-body" style={{ marginBottom: 20, maxWidth: "100%" }}>
                That experience inspired me to promote Yoruba language and bilingualism among children in migrant families — and to help parents see the value of raising children who can embrace more than one culture.
              </p>
              <p className="section-body" style={{ marginBottom: 20, maxWidth: "100%" }}>
                When I had my first child in 2014, I made a conscious decision to teach him Yoruba from an early age. Now, as a mother of two, my sons aged 12 and 8 speak both English and Yoruba fluently and confidently, despite being born and raised in the UK.
              </p>
              <p className="section-body" style={{ maxWidth: "100%" }}>
                I am passionate about sharing my knowledge and practical teaching strategies to support you on this journey. Through my virtual Yoruba classes, I aim to help grow a global community of proud, confident Yoruba speakers.
              </p>

              <div style={{ marginTop: 36, display: "flex", flexWrap: "wrap", gap: 10 }}>
                <button className="btn btn-primary" style={{ fontSize: "clamp(0.75rem, 2vw, 0.95rem)", padding: "10px 16px", whiteSpace: "nowrap" }} onClick={() => go("lessons")}>Explore Our Lessons →</button>
                <button className="btn btn-outline" style={{ fontSize: "clamp(0.75rem, 2vw, 0.95rem)", padding: "10px 16px", whiteSpace: "nowrap" }} onClick={() => go("contact")}>Book a Discovery Call</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Section 2: Why It Matters — three pillars ── */}
      <div className="section" style={{ background: "#f7f5f0" }}>
        <div className="section-inner">
          <div className="section-label">Our Philosophy</div>
          <div className="divider" />
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
            color: "#2d6a4f",
            lineHeight: 1.55,
            maxWidth: 740,
            margin: "0 0 48px 0",
          }}>
            Language is more than words. It is the heartbeat of a people, the keeper of history, and the bridge between generations.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 24,
            marginBottom: 64,
          }}>
            {[
              {
                icon: "🌍",
                title: "Celebrating Culture",
                body: "Culture lives in our traditions, music, art, food, and stories. Celebrating it means honouring the past while encouraging expression in the present — building stronger, more connected communities.",
              },
              {
                icon: "🗣️",
                title: "Why Language Matters",
                body: "Language shapes how we think and understand the world. Through it, we inherit the values, traditions, and memories of those who came before us. Preserving it keeps future generations connected to their roots.",
              },
              {
                icon: "🌱",
                title: "Strengthening Identity",
                body: "Knowing where we come from helps us understand who we are. Language and culture provide belonging, confidence, and resilience — connecting people across generations.",
              },
            ].map(({ icon, title, body }) => (
              <div key={title} style={{
                background: "#fff",
                borderRadius: 8,
                padding: "28px 22px",
                borderTop: "3px solid #c9a84c",
              }}>
                <div style={{ fontSize: "1.5rem", marginBottom: 12 }}>{icon}</div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#2d6a4f",
                  margin: "0 0 10px 0",
                }}>{title}</h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                  color: "#555",
                  margin: 0,
                }}>{body}</p>
              </div>
            ))}
          </div>

          {/* Vision + Commitment */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 48,
            marginBottom: 56,
          }}>
            {[
              {
                title: "Our Vision",
                intro: "A future where cultural heritage is celebrated, languages are preserved, and communities are empowered to pass their traditions to future generations.",
                items: [
                  "Heritage languages continue to thrive",
                  "Cultural traditions are shared with pride",
                  "Young people stay connected to their roots",
                  "Communities have tools to safeguard their heritage",
                  "Diversity is recognised as a source of strength",
                ],
              },
              {
                title: "Our Commitment",
                intro: "Everything we do is guided by a commitment to community, continuity, and cultural pride.",
                items: [
                  "Promoting language learning and preservation",
                  "Documenting and sharing cultural knowledge",
                  "Supporting intergenerational learning",
                  "Encouraging community storytelling",
                  "Creating opportunities for cultural exchange",
                  "Inspiring pride in heritage and identity",
                ],
              },
            ].map(({ title, intro, items }) => (
              <div key={title}>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#2d6a4f",
                  margin: "0 0 12px 0",
                }}>{title}</h3>
                <p className="section-body" style={{ marginBottom: 16, maxWidth: "100%" }}>{intro}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {items.map((item) => (
                    <li key={item} style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      color: "#444",
                      padding: "7px 0 7px 22px",
                      borderBottom: "1px solid #e8e8e8",
                      position: "relative",
                    }}>
                      <span style={{
                        position: "absolute",
                        left: 0,
                        color: "#c9a84c",
                        fontSize: "0.8rem",
                      }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{
            textAlign: "center",
            padding: "40px 32px",
            background: "#2d6a4f",
            borderRadius: 8,
          }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "#fff",
              margin: "0 0 24px 0",
            }}>
              Every conversation, story, song, and tradition passed on keeps culture alive.<br />
              <em style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                color: "#c9a84c",
              }}>Because every language matters. Every culture matters. Every story matters.</em>
            </p>
            <button className="btn btn-primary" onClick={() => go("lessons")}>Learn More →</button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default AboutPage;