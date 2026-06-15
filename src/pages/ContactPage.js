import React, { useState } from 'react';
import { T } from '../constants/tokens';

const ContactPage = () => {
  const [form, setForm] = useState({ org: "", name: "", phone: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm(f => ({...f, [e.target.name]: e.target.value}));
  const submit = () => {
    if (!form.name || !form.email) return;
    setSent(true);
  };

  return (
    <div className="page">
      <div style={{background:`linear-gradient(135deg, ${T.greenDark}, ${T.green})`, padding:"64px 24px 80px"}}>
        <div style={{maxWidth:1120,margin:"0 auto"}}>
          <div style={{fontSize:12,fontWeight:600,letterSpacing:"3px",textTransform:"uppercase",color:"rgba(255,255,255,0.6)",marginBottom:16}}>Get in Touch</div>
          <h1 className="playfair" style={{fontSize:"clamp(30px,4.5vw,52px)",fontWeight:900,color:"white",lineHeight:1.15}}>
            Start Your <span style={{color:T.gold}}>Journey With Us</span>
          </h1>
        </div>
      </div>

      <div className="section bg-cream" style={{marginTop:-40}}>
        <div className="section-inner">
          <div className="contact-grid">
            {/* Form */}
            <div style={{background:T.white,border:`1px solid ${T.border}`,borderRadius:20,padding:40}}>
              <h2 className="playfair" style={{fontSize:24,fontWeight:700,marginBottom:8,color:T.charcoal}}>Send Us an Enquiry</h2>
              <p style={{fontSize:14,color:T.light,marginBottom:32}}>For Yoruba lessons, consultancy, or speaking engagements.</p>
              {sent ? (
                <div style={{background:T.greenLight,border:`1px solid #cce7d6`,borderRadius:12,padding:32,textAlign:"center"}}>
                  <div style={{fontSize:40,marginBottom:16}}>✅</div>
                  <h3 className="playfair" style={{fontSize:22,fontWeight:700,color:T.green,marginBottom:8}}>Thank you!</h3>
                  <p style={{color:T.mid}}>We'll be in touch at {form.email} very soon.</p>
                </div>
              ) : (
                <div>
                  <div className="form-grid">
                    <div className="form-group">
                      <label>Organisation Name</label>
                      <input name="org" placeholder="Your school or organisation" value={form.org} onChange={handle}/>
                    </div>
                    <div className="form-group">
                      <label>Your Name *</label>
                      <input name="name" placeholder="Full name" value={form.name} onChange={handle}/>
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input name="phone" placeholder="+44 ..." value={form.phone} onChange={handle}/>
                    </div>
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handle}/>
                    </div>
                    <div className="form-group full">
                      <label>Service Interested In</label>
                      <select name="service" value={form.service} onChange={handle}>
                        <option value="">Select a service...</option>
                        <option>Children's Yoruba Classes</option>
                        <option>Adult Yoruba Classes</option>
                        <option>School Consultancy</option>
                        <option>Organisational Consultancy</option>
                        <option>Local Authority Consultancy</option>
                        <option>University Collaboration / Guest Lecture</option>
                        <option>Speaking Engagement</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="form-group full">
                      <label>Message / Additional Information</label>
                      <textarea name="message" placeholder="Tell us a little about your goals..." value={form.message} onChange={handle}/>
                    </div>
                  </div>
                  <button className="btn btn-primary" style={{marginTop:24,width:"100%",justifyContent:"center"}} onClick={submit}>Send Enquiry →</button>
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              <h2 className="playfair" style={{fontSize:28,fontWeight:700,color:T.charcoal,marginBottom:8}}>Contact Information</h2>
              <p style={{fontSize:15,color:T.mid,marginBottom:32,lineHeight:1.7}}>We'd love to hear from you. Reach out via any of the channels below.</p>

              <div className="contact-info-item">
                <div className="contact-info-icon">📧</div>
                <div>
                  <div className="contact-info-label">Email</div>
                  <div className="contact-info-value"><a href="mailto:info@morethanonelanguage.org" style={{color:T.green,textDecoration:"none"}}>info@morethanonelanguage.org</a></div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">📞</div>
                <div>
                  <div className="contact-info-label">Telephone</div>
                  <div className="contact-info-value"><a href="tel:07944687049" style={{color:T.charcoal,textDecoration:"none"}}>07944 687049</a></div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">📸</div>
                <div>
                  <div className="contact-info-label">Instagram</div>
                  <div className="contact-info-value"><a href="https://www.instagram.com/more_than_one_language" target="_blank" rel="noopener" style={{color:T.green,textDecoration:"none"}}>@more_than_one_language</a></div>
                </div>
              </div>

              <div style={{background:T.greenLight,border:`1px solid #cce7d6`,borderRadius:16,padding:28,marginTop:32}}>
                <h4 className="playfair" style={{fontSize:18,fontWeight:700,color:T.green,marginBottom:8}}>Book a Free Discovery Call</h4>
                <p style={{fontSize:14,color:T.mid,lineHeight:1.7,marginBottom:16}}>Not sure where to start? A 20-minute discovery call is the perfect first step — no pressure, just a conversation.</p>
                <a href="mailto:info@morethanonelanguage.org?subject=Discovery Call Request" className="btn btn-primary" style={{fontSize:13,padding:"10px 20px"}}>Request a Call →</a>
              </div>

              <div style={{background:T.goldLight,border:`1px solid #e8d5a0`,borderRadius:16,padding:28,marginTop:16}}>
                <h4 className="playfair" style={{fontSize:18,fontWeight:700,color:"#7a5c00",marginBottom:8}}>Ready to Enrol Directly?</h4>
                <p style={{fontSize:14,color:T.mid,marginBottom:16,lineHeight:1.7}}>Jump straight into one of our courses on the Newzenler platform.</p>
                <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
                  <a href="https://yoruba-language-circle.newzenler.com/courses/yoruba-language-circle" target="_blank" rel="noopener" className="btn btn-gold" style={{fontSize:13,padding:"10px 18px"}}>Children's Course</a>
                  <a href="https://yoruba-language-circle.newzenler.com/courses/yoruba-for-adult-membership" target="_blank" rel="noopener" className="btn btn-outline" style={{fontSize:13,padding:"10px 18px",borderColor:T.gold,color:"#7a5c00"}}>Adult Course</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
