import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const styles = `
  /* ─── Hamburger button ───────────────────────────────────── */
  .nav-hamburger {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 28px;
    height: 20px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1001;
  }

  .nav-hamburger span {
    display: block;
    width: 100%;
    height: 2px;
    background: #1B6B3A;
    border-radius: 2px;
    transition: transform 0.25s ease, opacity 0.25s ease;
    transform-origin: center;
  }

  .nav-hamburger.is-open span:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
  }
  .nav-hamburger.is-open span:nth-child(2) {
    opacity: 0;
    transform: scaleX(0);
  }
  .nav-hamburger.is-open span:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
  }

  /* ─── Mobile menu drawer ─────────────────────────────────── */
  .mobile-menu {
    position: fixed;
    top: 0;
    right: 0;
    width: min(320px, 85vw);
    height: 100dvh;
    background: #fff;
    box-shadow: -4px 0 24px rgba(0, 0, 0, 0.12);
    z-index: 1000;
    transform: translateX(100%);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow-y: auto;
  }

  .mobile-menu--open {
    transform: translateX(0);
  }

  .mobile-menu-inner {
    display: flex;
    flex-direction: column;
    padding: 90px 28px 40px;
    gap: 4px;
  }

  .mobile-nav-link {
    display: block;
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    cursor: pointer;
    padding: 14px 12px;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    color: #333;
    border-radius: 8px;
    transition: background 0.15s ease, color 0.15s ease;
  }

  .mobile-nav-link:hover {
    background: #f5f9f6;
    color: #1B6B3A;
  }

  .mobile-nav-link.active {
    color: #1B6B3A;
    font-weight: 600;
    background: #edf5f0;
  }

  /* ─── Backdrop ───────────────────────────────────────────── */
  .mobile-menu-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.35);
    z-index: 999;
    backdrop-filter: blur(2px);
  }

  /* ─── Responsive breakpoint ──────────────────────────────── */
  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }

    .nav-hamburger {
      display: flex;
    }
  }
`;

const Nav = ({ page, setPage }) => {
  const [open, setOpen] = useState(false);

  const pages = [
    { id: "home",        label: "Home" },
    { id: "about",       label: "About" },
    { id: "consultancy", label: "Consultancy" },
    { id: "lessons",     label: "Yoruba Lessons" },
    { id: "contact",     label: "Contact" },
  ];

  const go = (id) => {
    setPage(id);
    setOpen(false);
    window.scrollTo(0, 0);
  };

  // Close menu on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <style>{styles}</style>

      <nav className="nav">
        <div className="nav-inner">
          {/* Logo */}
          <div className="nav-logo" onClick={() => go("home")}>
            <div className="nav-logo-circle"><Logo size={36} /></div>
            <div className="nav-logo-text">
              <div className="top">MORE THAN ONE</div>
              <div className="bottom">LANGUAGE</div>
            </div>
          </div>

          {/* Desktop links */}
          <div className="nav-links">
            {pages.map(p => (
              <button
                key={p.id}
                className={`nav-link ${page === p.id ? 'active' : ''}`}
                onClick={() => go(p.id)}
              >
                {p.label}
              </button>
            ))}
            <button
              className="btn btn-gold"
              style={{ fontSize: 13, padding: '9px 18px' }}
              onClick={() => go('contact')}
            >
              Book a Discovery Call
            </button>
          </div>

          {/* Hamburger — mobile only */}
          <button
            className={`nav-hamburger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-menu ${open ? 'mobile-menu--open' : ''}`} aria-hidden={!open}>
        <div className="mobile-menu-inner">
          {pages.map(p => (
            <button
              key={p.id}
              className={`mobile-nav-link ${page === p.id ? 'active' : ''}`}
              onClick={() => go(p.id)}
              tabIndex={open ? 0 : -1}
            >
              {p.label}
            </button>
          ))}
          <button
            className="btn btn-gold"
            style={{ marginTop: 12, width: '100%', fontSize: 14, padding: '12px 18px' }}
            onClick={() => go('contact')}
            tabIndex={open ? 0 : -1}
          >
            Book a Discovery Call
          </button>
        </div>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="mobile-menu-backdrop"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Nav;