"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function HeroHeader() {
    function handleNavClick(e, id) {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }
    function handleBrochure(e) {
        e.preventDefault();
        window.open('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', '_blank');
    }
    return (
        <header style={{ borderBottom: '1px solid #eee', background: '#fff', position: 'relative', zIndex: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2rem 5vw', maxWidth: 1400, margin: '0 auto', position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <Image src="/window.svg" alt="Logo" width={60} height={60} />
                    <div style={{ fontWeight: 'bold', fontSize: 24, lineHeight: 1.1, color: '#111' }}>
                        Kanha<br />Scientific<br />Glassworks
                    </div>
                </div>
                <nav style={{ display: 'flex', gap: 32, fontSize: 18 }}>
                    <a href="#home" onClick={e => handleNavClick(e, 'home')} style={{ textDecoration: 'underline', textUnderlineOffset: 4, color: '#111' }}>Home</a>
                    <a href="#about" onClick={e => handleNavClick(e, 'about')} style={{ color: '#111' }}>About</a>
                    <Link href="/products" style={{ color: '#111', cursor: 'pointer' }}>Products</Link>
                    <a href="#contact" onClick={e => handleNavClick(e, 'contact')} style={{ color: '#111' }}>Contact Us</a>
                </nav>
                <a href="#" onClick={handleBrochure} style={{ background: '#000', color: '#fff', padding: '0.5rem 2rem', borderRadius: 24, fontWeight: 'bold', textDecoration: 'none', fontSize: 18 }}>Brochure</a>
            </div>
            <section id="home" style={{ position: 'relative', width: '100%', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: '#fff' }}>
                {/* Background image */}
                <img
                    src="https://images.unsplash.com/photo-1517971071642-34a2d3eccb5e?auto=format&fit=crop&w=1200&q=80"
                    alt="Scientific Glassware Background"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.18,
                        zIndex: 0,
                    }}
                />
                {/* Remove overlay for clarity */}
                <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', width: '100%' }}>
                    <h1
                        style={{
                            fontSize: '3.5rem',
                            fontWeight: 'bold',
                            margin: 0,
                            letterSpacing: 2,
                            lineHeight: 1.1,
                            display: 'inline-block',
                            animation: 'rotateText 12s linear infinite',
                            color: '#111',
                            textShadow: '0 2px 8px #fff4',
                        }}
                    >
                        KANHA<br />SCIENTIFIC<br />GLASSWORKS
                    </h1>
                    <p style={{ fontSize: 22, marginTop: 16, color: '#111', fontWeight: 500 }}>Innovative Scientific Glassware Industry</p>
                </div>
                <style>{`
          @keyframes rotateText {
            0% { transform: rotate(-3deg); }
            50% { transform: rotate(3deg); }
            100% { transform: rotate(-3deg); }
          }
        `}</style>
            </section>
        </header>
    );
} 