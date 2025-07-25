"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function NavMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
    function handleNavClick(e, id) {
        e.preventDefault();
        setMenuOpen(false);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }
    function handleBrochure(e) {
        e.preventDefault();
        window.open('https://reyansh.onrender.com/brochure.pdf', '_blank');
        setMenuOpen(false);
    }
    return (
        <>
            {/* Hamburger for mobile */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                    display: 'none',
                    background: 'none',
                    border: 'none',
                    fontSize: 32,
                    cursor: 'pointer',
                    marginLeft: 16,
                }}
                className="nav-hamburger"
                aria-label="Open navigation menu"
            >
                &#9776;
            </button>
            <nav
                style={{
                    display: 'flex',
                    gap: 32,
                    fontSize: 18,
                    alignItems: 'center',
                }}
                className={menuOpen ? 'nav-open' : ''}
            >
                <a href="#home" onClick={e => handleNavClick(e, 'home')} style={{ textDecoration: 'underline', textUnderlineOffset: 4, color: '#111' }}>Home</a>
                <a href="#about" onClick={e => handleNavClick(e, 'about')} style={{ color: '#111' }}>About</a>
                <Link href="/products" style={{ color: '#111', cursor: 'pointer' }}>Products</Link>
                <a href="#contact" onClick={e => handleNavClick(e, 'contact')} style={{ color: '#111' }}>Contact Us</a>
                <a href="#" onClick={handleBrochure} className="nav-brochure-desktop" style={{ background: '#000', color: '#fff', padding: '0.5rem 2rem', borderRadius: 24, fontWeight: 'bold', textDecoration: 'none', fontSize: 18, marginLeft: 16 }}>Brochure</a>
            </nav>
            {/* Mobile menu overlay */}
            {menuOpen && (
                <div className="nav-mobile-menu" style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    background: 'rgba(255,255,255,0.98)',
                    zIndex: 9999,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    paddingTop: 32,
                }}>
                    <a href="#" onClick={handleBrochure} style={{ background: '#000', color: '#fff', padding: '0.7rem 2.2rem', borderRadius: 24, fontWeight: 'bold', textDecoration: 'none', fontSize: 20, marginBottom: 32 }}>Brochure</a>
                    <a href="#home" onClick={e => handleNavClick(e, 'home')} style={{ color: '#111', fontSize: 22, margin: '16px 0' }}>Home</a>
                    <a href="#about" onClick={e => handleNavClick(e, 'about')} style={{ color: '#111', fontSize: 22, margin: '16px 0' }}>About</a>
                    <Link href="/products" style={{ color: '#111', fontSize: 22, margin: '16px 0', cursor: 'pointer' }} onClick={() => setMenuOpen(false)}>Products</Link>
                    <a href="#contact" onClick={e => handleNavClick(e, 'contact')} style={{ color: '#111', fontSize: 22, margin: '16px 0' }}>Contact Us</a>
                    <button onClick={() => setMenuOpen(false)} style={{ position: 'absolute', top: 18, right: 24, fontSize: 32, background: 'none', border: 'none', cursor: 'pointer' }} aria-label="Close menu">&times;</button>
                </div>
            )}
            <style>{`
        @media (max-width: 900px) {
          nav {
            display: none !important;
          }
          .nav-hamburger {
            display: block !important;
          }
          .nav-brochure-desktop {
            display: none !important;
          }
        }
        @media (min-width: 901px) {
          .nav-mobile-menu {
            display: none !important;
          }
        }
      `}</style>
        </>
    );
} 