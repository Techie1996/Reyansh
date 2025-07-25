"use client";
import Image from 'next/image';
import NavMenu from './NavMenu';

export default function HeroHeader() {
    return (
        <header style={{ borderBottom: '1px solid #eee', background: '#fff', position: 'relative', zIndex: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2rem 5vw', maxWidth: 1400, margin: '0 auto', position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <img src="./4118.jpg" alt="Krishnawanshi Overseas Logo" width={60} height={60} />
                    <div style={{ fontWeight: 'bold', fontSize: 24, lineHeight: 1.1, color: '#111' }}>
                        Krishnawanshi<br />Overseas
                    </div>
                </div>
                <NavMenu />
            </div>
            <section id="home" style={{ position: 'relative', width: '100%', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: '#fff' }}>
                {/* Background image */}
                <img
                    src="/h.jpg"
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
                        KRISHNAWANSHI<br />OVERSEAS
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