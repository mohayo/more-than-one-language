import React from 'react';
import yourImage from "../assets/abi.png";

const AboutPage = ({ setPage }) => {
  const go = (id) => { setPage(id); window.scrollTo(0,0); };
  return (
    <div className="page">
      <div className="section bg-white">
        <div className="section-inner">
          <div className="section-label">Our Story</div>
          <div className="divider"/>
          <h1 className="section-title">Meet <span className="accent">Abisade Aluko</span></h1>
          <div className="about-grid">
            <div>
            <div className="about-photo" style={{ height: "100%", overflow: "hidden" }} >
              <img src={yourImage} alt="Abisade Aluko" style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block"
                }} 
              />
            </div>
              <div className="about-mission">
                <h4>Our Mission</h4>
                <p>To ensure that Yoruba language and culture remain vibrant and accessible for future generations in the UK and globally.</p>
              </div>
            </div>
            <div>
            <p className="section-body" style={{marginBottom:24,maxWidth:"100%"}}>
                When I moved from Nigeria to the United Kingdom as a Yoruba teenager more than 20 years ago, I experienced first-hand the reality of culture shock and the challenges that come with adjusting to a very different way of life.
              </p>

              <p className="section-body" style={{marginBottom:24,maxWidth:"100%"}}>
                I also noticed that many Nigerian children born in the UK or living in other countries could not speak Yoruba at all. Some who could speak it chose not to, while many parents struggled to encourage their children to use the language. Speaking only English or the dominant local language was often seen as more fashionable.
              </p>

              <p className="section-body" style={{marginBottom:24,maxWidth:"100%"}}>
                That experience inspired me not only to promote Yoruba language and bilingualism among children in migrant families, but also to lead by example and help parents see the value of raising children who can embrace more than one culture.
              </p>

              <p className="section-body" style={{marginBottom:24,maxWidth:"100%"}}>
                When I had my first child in 2014, I made a conscious decision to teach him Yoruba from an early age. Now, as a mother of two, my sons aged 12 and 8 speak both English and Yoruba fluently and confidently, despite being born and raised in the UK. This has played an important role in shaping their identity as both British and Nigerian Yoruba boys.
              </p>

              <p className="section-body" style={{maxWidth:"100%"}}>
                I am passionate about sharing my knowledge and practical teaching strategies to support you on this journey. Through my virtual Yoruba classes, I aim to provide ongoing support and learning that helps grow a global community of proud, confident Yoruba speakers.
              </p>
              <div style={{marginTop:40}}>
                <button className="btn btn-primary" onClick={() => go("lessons")}>Explore Our Lessons →</button>
                <button className="btn btn-outline" style={{marginLeft:12}} onClick={() => go("contact")}>Book a Discovery Call</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
