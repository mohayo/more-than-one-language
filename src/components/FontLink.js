import React from 'react';
import { T } from '../constants/tokens';

const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Inter:wght@300;400;500;600&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { font-family: 'Inter', sans-serif; background: ${T.cream}; color: ${T.charcoal}; -webkit-font-smoothing: antialiased; }

    .playfair { font-family: 'Playfair Display', serif; }

    /* Nav */
    .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; background: ${T.white}; border-bottom: 1px solid ${T.border}; }
    .nav-inner { max-width: 1120px; margin: 0 auto; padding: 0 24px; display: flex; align-items: center; justify-content: space-between; height: 68px; }
    .nav-logo { display: flex; align-items: center; gap: 12px; cursor: pointer; text-decoration: none; }
    .nav-logo-circle { width: 44px; height: 44px; border-radius: 50%; background: ${T.white}; border: 2px solid ${T.green}; display: flex; align-items: center; justify-content: center; flex-shrink: 0; overflow: hidden; }
    .nav-logo-text .top { font-family: 'Playfair Display', serif; font-size: 13px; font-weight: 700; color: ${T.green}; line-height: 1.1; letter-spacing: 0.5px; }
    .nav-logo-text .bottom { font-family: 'Playfair Display', serif; font-size: 17px; font-weight: 900; color: ${T.green}; line-height: 1; letter-spacing: 0.3px; }
    .nav-links { display: flex; align-items: center; gap: 8px; }
    .nav-link { background: none; border: none; font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 500; color: ${T.mid}; cursor: pointer; padding: 8px 14px; border-radius: 6px; transition: all 0.2s; }
    .nav-link:hover, .nav-link.active { color: ${T.green}; background: ${T.greenLight}; }
    .nav-cta { background: ${T.green}; color: ${T.white}; border: none; font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 600; cursor: pointer; padding: 9px 20px; border-radius: 8px; transition: background 0.2s; margin-left: 8px; }
    .nav-cta:hover { background: ${T.greenDark}; }
    .nav-hamburger { display: none; background: none; border: none; cursor: pointer; padding: 8px; flex-direction: column; gap: 5px; }
    .nav-hamburger span { display: block; width: 22px; height: 2px; background: ${T.charcoal}; border-radius: 2px; }

    /* Sections */
    .page { padding-top: 68px; min-height: 100vh; }
    .section { padding: 80px 24px; }
    .section-inner { max-width: 1120px; margin: 0 auto; }
    .section-label { font-size: 12px; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase; color: ${T.gold}; margin-bottom: 16px; }
    .section-title { font-family: 'Playfair Display', serif; font-size: clamp(28px, 4vw, 44px); font-weight: 700; color: ${T.charcoal}; line-height: 1.2; margin-bottom: 20px; }
    .section-title .accent { color: ${T.green}; }
    .section-body { font-size: 17px; line-height: 1.8; color: ${T.mid}; max-width: 680px; }

    /* Buttons */
    .btn { display: inline-flex; align-items: center; gap: 8px; border: none; font-family: 'Inter', sans-serif; font-weight: 600; font-size: 15px; cursor: pointer; padding: 13px 26px; border-radius: 8px; transition: all 0.2s; text-decoration: none; }
    .btn-primary { background: ${T.green}; color: ${T.white}; }
    .btn-primary:hover { background: ${T.greenDark}; transform: translateY(-1px); box-shadow: 0 6px 18px rgba(27,107,58,0.28); }
    .btn-outline { background: transparent; color: ${T.green}; border: 2px solid ${T.green}; }
    .btn-outline:hover { background: ${T.greenLight}; }
    .btn-gold { background: ${T.gold}; color: ${T.white}; }
    .btn-gold:hover { background: #b07e1f; transform: translateY(-1px); box-shadow: 0 6px 18px rgba(201,149,42,0.32); }

    /* Hero */
    .hero { background: linear-gradient(135deg, ${T.greenDark} 0%, ${T.green} 60%, #2d8a52 100%); color: ${T.white}; padding: 96px 24px 80px; }
    .hero-inner { max-width: 1120px; margin: 0 auto; display: grid; grid-template-columns: 1fr 420px; gap: 64px; align-items: center; }
    .hero-label { font-size: 12px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: rgba(255,255,255,0.65); margin-bottom: 20px; }
    .hero-title { font-family: 'Playfair Display', serif; font-size: clamp(36px, 5vw, 64px); font-weight: 900; line-height: 1.1; margin-bottom: 24px; }
    .hero-title em { color: ${T.gold}; font-style: normal; }
    .hero-sub { font-size: 18px; line-height: 1.7; color: rgba(255,255,255,0.82); margin-bottom: 40px; max-width: 520px; }
    .hero-buttons { display: flex; gap: 14px; flex-wrap: wrap; }
    .hero-card { background: rgba(255,255,255,0.1); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.18); border-radius: 20px; padding: 36px; }
    .hero-card-title { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 700; color: ${T.white}; margin-bottom: 20px; }
    .stat-row { display: flex; gap: 24px; margin-bottom: 24px; }
    .stat { flex: 1; }
    .stat-num { font-family: 'Playfair Display', serif; font-size: 36px; font-weight: 900; color: ${T.gold}; line-height: 1; }
    .stat-lbl { font-size: 12px; color: rgba(255,255,255,0.65); margin-top: 4px; line-height: 1.3; }
    .flag-list { display: flex; flex-wrap: wrap; gap: 8px; }
    .flag-chip { background: rgba(255,255,255,0.15); border-radius: 20px; padding: 5px 12px; font-size: 12px; color: rgba(255,255,255,0.85); font-weight: 500; }

    /* Why cards */
    .why-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; margin-top: 48px; }
    .why-card { background: ${T.white}; border: 1px solid ${T.border}; border-radius: 16px; padding: 32px; transition: box-shadow 0.2s, transform 0.2s; }
    .why-card:hover { box-shadow: 0 8px 32px rgba(27,107,58,0.1); transform: translateY(-2px); }
    .why-icon { width: 48px; height: 48px; background: ${T.greenLight}; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 20px; }
    .why-card h3 { font-family: 'Playfair Display', serif; font-size: 19px; font-weight: 700; color: ${T.charcoal}; margin-bottom: 10px; }
    .why-card p { font-size: 14px; line-height: 1.7; color: ${T.mid}; }

    /* Testimonial strip */
    .testimonial-strip { background: ${T.greenLight}; border-top: 1px solid #cce7d6; border-bottom: 1px solid #cce7d6; }
    .testimonial-inner { max-width: 1120px; margin: 0 auto; padding: 64px 24px; }
    .testimonial-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px; margin-top: 40px; }
    .testimonial-card { background: ${T.white}; border-radius: 16px; padding: 28px; border-left: 4px solid ${T.gold}; }
    .testimonial-text { font-size: 15px; line-height: 1.7; color: ${T.mid}; font-style: italic; margin-bottom: 16px; }
    .testimonial-author { font-size: 13px; font-weight: 600; color: ${T.green}; }

    /* Phrases */
    .phrase-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px; margin-top: 32px; }
    .phrase-card { background: ${T.goldLight}; border: 1px solid #e8d5a0; border-radius: 12px; padding: 20px 24px; }
    .phrase-yoruba { font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 700; color: ${T.charcoal}; margin-bottom: 6px; }
    .phrase-english { font-size: 13px; color: ${T.light}; font-style: italic; }

    /* Lesson cards */
    .lesson-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-top: 48px; }
    .lesson-card { background: ${T.white}; border: 1px solid ${T.border}; border-radius: 20px; padding: 40px; }
    .lesson-tag { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; padding: 5px 12px; border-radius: 20px; margin-bottom: 20px; }
    .lesson-tag-child { background: ${T.greenLight}; color: ${T.green}; }
    .lesson-tag-adult { background: ${T.goldLight}; color: #7a5c00; }
    .lesson-card h3 { font-family: 'Playfair Display', serif; font-size: 26px; font-weight: 700; color: ${T.charcoal}; margin-bottom: 16px; }
    .lesson-card p { font-size: 15px; line-height: 1.75; color: ${T.mid}; margin-bottom: 28px; }
    .lesson-features { list-style: none; margin-bottom: 32px; }
    .lesson-features li { font-size: 14px; color: ${T.mid}; padding: 6px 0; display: flex; align-items: center; gap: 10px; }
    .lesson-features li::before { content: "✓"; color: ${T.green}; font-weight: 700; font-size: 15px; flex-shrink: 0; }

    /* Consultancy services */
    .service-tabs { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 40px; margin-bottom: 32px; }
    .service-tab { background: ${T.white}; border: 1px solid ${T.border}; border-radius: 8px; padding: 10px 20px; font-size: 14px; font-weight: 500; cursor: pointer; transition: all 0.2s; color: ${T.mid}; }
    .service-tab.active { background: ${T.green}; color: ${T.white}; border-color: ${T.green}; }
    .service-content { background: ${T.white}; border: 1px solid ${T.border}; border-radius: 16px; padding: 40px; }
    .service-content h3 { font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 700; margin-bottom: 20px; color: ${T.charcoal}; }
    .service-list { list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
    .service-list li { font-size: 14px; color: ${T.mid}; display: flex; align-items: center; gap: 10px; }
    .service-list li::before { content: "→"; color: ${T.gold}; font-weight: 700; }

    /* Outcomes */
    .outcomes-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; margin-top: 40px; }
    .outcome-chip { background: ${T.white}; border: 1px solid ${T.border}; border-radius: 12px; padding: 20px; text-align: center; }
    .outcome-chip .icon { font-size: 28px; margin-bottom: 10px; }
    .outcome-chip p { font-size: 13px; color: ${T.mid}; line-height: 1.4; font-weight: 500; }

    /* Form */
    .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    .form-group { display: flex; flex-direction: column; gap: 6px; }
    .form-group.full { grid-column: 1 / -1; }
    .form-group label { font-size: 13px; font-weight: 600; color: ${T.charcoal}; }
    .form-group input, .form-group textarea, .form-group select { border: 1px solid ${T.border}; border-radius: 8px; padding: 12px 16px; font-family: 'Inter', sans-serif; font-size: 14px; color: ${T.charcoal}; background: ${T.white}; outline: none; transition: border 0.2s; }
    .form-group input:focus, .form-group textarea:focus, .form-group select:focus { border-color: ${T.green}; box-shadow: 0 0 0 3px ${T.greenLight}; }
    .form-group textarea { resize: vertical; min-height: 120px; }

    /* Contact */
    .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
    .contact-info-item { display: flex; align-items: flex-start; gap: 16px; padding: 20px 0; border-bottom: 1px solid ${T.border}; }
    .contact-info-icon { width: 44px; height: 44px; background: ${T.greenLight}; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; }
    .contact-info-label { font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; color: ${T.light}; font-weight: 600; margin-bottom: 4px; }
    .contact-info-value { font-size: 15px; color: ${T.charcoal}; font-weight: 500; }

    /* About */
    .about-grid { display: grid; grid-template-columns: 420px 1fr; gap: 80px; align-items: start; }
    .about-photo { width: 100%; aspect-ratio: 3/4; background: ${T.greenLight}; border-radius: 24px; display: flex; align-items: center; justify-content: center; font-size: 64px; border: 2px solid ${T.border}; }
    .about-mission { background: ${T.green}; color: ${T.white}; border-radius: 16px; padding: 32px; margin-top: 32px; }
    .about-mission h4 { font-family: 'Playfair Display', serif; font-size: 18px; margin-bottom: 12px; }
    .about-mission p { font-size: 15px; line-height: 1.75; color: rgba(255,255,255,0.85); }

    /* Footer */
    .footer { background: ${T.charcoal}; color: rgba(255,255,255,0.75); }
    .footer-inner { max-width: 1120px; margin: 0 auto; padding: 60px 24px 40px; }
    .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 48px; margin-bottom: 48px; }
    .footer-brand p { font-size: 14px; line-height: 1.7; margin-top: 16px; max-width: 300px; }
    .footer-col h5 { font-size: 13px; font-weight: 700; color: ${T.white}; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 16px; }
    .footer-col ul { list-style: none; }
    .footer-col ul li { margin-bottom: 10px; }
    .footer-col ul li button { background: none; border: none; font-family: 'Inter', sans-serif; font-size: 14px; color: rgba(255,255,255,0.6); cursor: pointer; padding: 0; transition: color 0.2s; }
    .footer-col ul li button:hover, .footer-col ul li a:hover { color: ${T.gold}; }
    .footer-col ul li a { font-size: 14px; color: rgba(255,255,255,0.6); text-decoration: none; transition: color 0.2s; }
    .footer-bottom { border-top: 1px solid rgba(255,255,255,0.1); padding-top: 28px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
    .footer-bottom p { font-size: 13px; }
    .footer-bottom .gold { color: ${T.gold}; }

    /* CTA banner */
    .cta-banner { background: linear-gradient(135deg, ${T.greenDark}, ${T.green}); padding: 72px 24px; text-align: center; }
    .cta-banner h2 { font-family: 'Playfair Display', serif; font-size: clamp(26px, 4vw, 42px); font-weight: 800; color: ${T.white}; margin-bottom: 16px; }
    .cta-banner p { font-size: 17px; color: rgba(255,255,255,0.8); margin-bottom: 36px; max-width: 520px; margin-left: auto; margin-right: auto; }
    .cta-banner .btn-group { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

    /* Alternating bg */
    .bg-cream { background: ${T.cream}; }
    .bg-white { background: ${T.white}; }
    .bg-green-light { background: ${T.greenLight}; }

    /* Divider */
    .divider { width: 48px; height: 4px; background: ${T.gold}; border-radius: 2px; margin-bottom: 28px; }

    /* Responsive */
    @media (max-width: 900px) {
      .hero-inner { grid-template-columns: 1fr; }
      .hero-card { display: none; }
      .lesson-grid { grid-template-columns: 1fr; }
      .about-grid { grid-template-columns: 1fr; }
      .about-photo { aspect-ratio: 4/3; }
      .contact-grid { grid-template-columns: 1fr; }
      .footer-grid { grid-template-columns: 1fr 1fr; }
      .service-list { grid-template-columns: 1fr; }
      .form-grid { grid-template-columns: 1fr; }
      .nav-links.open { display: flex; flex-direction: column; position: fixed; top: 68px; left: 0; right: 0; background: ${T.white}; padding: 20px; border-bottom: 1px solid ${T.border}; z-index: 99; align-items: stretch; }
      .nav-hamburger { display: flex; }
    }
    @media (max-width: 600px) {
      .section { padding: 56px 16px; }
      .footer-grid { grid-template-columns: 1fr; }
      .stat-row { gap: 16px; }
      .outcomes-grid { grid-template-columns: 1fr 1fr; }
    }
  `}</style>
);

export default FontLink;
