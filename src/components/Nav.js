import React, { useState } from 'react';
import Logo from './Logo';

const Nav = ({ page, setPage }) => {
  const [open, setOpen] = useState(false);
  const pages = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "lessons", label: "Yoruba Lessons" },
    { id: "consultancy", label: "Consultancy" },
    { id: "contact", label: "Contact" },
  ];
  const go = (id) => { setPage(id); setOpen(false); window.scrollTo(0,0); };
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="nav-logo" onClick={() => go("home")}>
          <div className="nav-logo-circle"><Logo size={36}/></div>
          <div className="nav-logo-text">
            <div className="top">MORE THAN ONE</div>
            <div className="bottom">LANGUAGE</div>
          </div>
        </div>
        <div className={`nav-links ${open ? "open" : ""}`}>
          {pages.map(p => (
            <button key={p.id} className={`nav-link ${page === p.id ? "active" : ""}`} onClick={() => go(p.id)}>{p.label}</button>
          ))}
          <button className="btn btn-gold" style={{fontSize:13,padding:"9px 18px"}} onClick={() => go("contact")}>Book a Discovery Call</button>
        </div>
        <button className="nav-hamburger" style={{display:"none"}} onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span/><span/><span/>
        </button>
        <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span/><span/><span/>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
