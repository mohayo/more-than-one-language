import React from 'react';
import Logo from './Logo';

const Footer = ({ setPage }) => {
  const go = (id) => { setPage(id); window.scrollTo(0,0); };
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{display:"flex",alignItems:"center",gap:12}}>
              <div style={{width:44,height:44,borderRadius:"50%",background:"white",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <Logo size={36}/>
              </div>
              <div>
                <div style={{fontSize:11,fontWeight:700,letterSpacing:"1px",color:"rgba(255,255,255,0.5)"}}>MORE THAN ONE</div>
                <div style={{fontSize:16,fontWeight:900,color:"white",fontFamily:"'Playfair Display',serif"}}>LANGUAGE</div>
              </div>
            </div>
            <p>Preserving language. Celebrating culture. Strengthening identity — for children, adults, families, and organisations across the UK and beyond.</p>
            {/* <div style={{marginTop:20,display:"flex",gap:12}}>
              <a href="https://www.instagram.com/more_than_one_language" target="_blank" rel="noopener" style={{display:"flex",alignItems:"center",justifyContent:"center",width:36,height:36,background:"rgba(255,255,255,0.1)",borderRadius:8,fontSize:16,color:"white",textDecoration:"none"}}>📸</a>
              <a href="mailto:info@morethanonelanguage.org" style={{display:"flex",alignItems:"center",justifyContent:"center",width:36,height:36,background:"rgba(255,255,255,0.1)",borderRadius:8,fontSize:16,color:"white",textDecoration:"none"}}>✉️</a>
            </div> */}
          </div>
          <div className="footer-col">
            <h5>Pages</h5>
            <ul>
              {[["home","Home"],["about","About"],["lessons","Yoruba Lessons"],["consultancy","Consultancy"],["contact","Contact"]].map(([id,label]) => (
                <li key={id}><button onClick={() => go(id)}>{label}</button></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:info@morethanonelanguage.org">info@morethanonelanguage.org</a></li>
              <li><a href="tel:07944687049">07944 687049</a></li>
              <li><a href="https://www.instagram.com/more_than_one_language"  rel="noopener">@more_than_one_language</a></li>
            </ul>
            <div style={{marginTop:24}}>
              <h5>Courses</h5>
              <ul>
                <li><a href="https://yoruba-language-circle.newzenler.com/courses/yoruba-language-circle"  rel="noopener">Children's Classes</a></li>
                <li><a href="https://yoruba-language-circle.newzenler.com/courses/yoruba-for-adult-membership"  rel="noopener">Adult Classes</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} More Than One Language. All rights reserved.</p>
          <p>Designed for More Than One Language</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
