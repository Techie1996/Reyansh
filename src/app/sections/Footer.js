import Image from 'next/image';

export default function Footer() {
    return (
        <footer style={{ background: '#fff', borderTop: '1px solid #eee', padding: '2vw 0', fontSize: 16 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', maxWidth: 1400, margin: '0 auto', gap: 32, padding: '2vw 5vw' }}>
                <div style={{ minWidth: 220, flex: 1, textAlign: 'center' }}>
                    <img src="./4118.jpg" alt="Scientific Glassware Logo" width={60} height={60} style={{ borderRadius: '50%', marginBottom: 8 }} />
                    <div style={{ fontWeight: 'bold', marginTop: 8 }}>Krishnawanshi
                        Overseas</div>
                    <div style={{ marginTop: 8, fontSize: 15, textDecoration: 'underline' }}>ISO Certified Scientific Company</div>
                </div>
                <div style={{ minWidth: 180, flex: 1, textAlign: 'center' }}>
                    <div style={{ fontWeight: 'bold', color: '#4285f4', fontSize: 20, marginBottom: 8 }}>Quick Links</div>
                    <div><a href="#home" style={{ margin: '0 12px' }}>Home</a></div>
                    <div><a href="#about" style={{ margin: '0 12px' }}>About</a></div>
                    <div><a href="/products" style={{ margin: '0 12px' }}>Products</a></div>
                    <div><a href="#contact" style={{ margin: '0 12px' }}>Contact Us</a></div>
                </div>
                <div style={{ minWidth: 280, flex: 1, textAlign: 'center' }}>
                    <iframe
                        title="Reyansh Scientific Works Map"
                        src="https://www.google.com/maps?q=Kaccha+Bazar+Ambala+Cantt,+Haryana,+133001&output=embed"
                        width="100%"
                        height="180"
                        style={{ border: 0, borderRadius: 8 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <div style={{ textAlign: 'center', color: '#888', marginTop: 16 }}>
                © 2024 Krishnawanshi
                Overseas All Right Reserved
            </div>
        </footer>
    );
} 