import Image from 'next/image';

export default function About() {
    return (
        <>
            <section id="about" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 32, padding: '5vw 0', background: '#fafbff' }}>
                <div style={{ flex: 1, minWidth: 280, maxWidth: 500 }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: 16 }}>What We Do</h2>
                    <p style={{ fontSize: 18, lineHeight: 1.6 }}>
                        Krishnawanshi Overseas is a trusted manufacturer and exporter specializing in a wide range of high-quality laboratory glassware. With years of expertise in crafting precision glassware, we are dedicated to providing reliable and durable products for scientific research, educational purposes, and industrial applications. Our commitment to excellence and innovation has earned us a reputation as one of the top suppliers in the industry.
                    </p>
                    <div style={{ display: 'flex', gap: 24, marginTop: 32, justifyContent: 'center' }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: 32, fontWeight: 'bold', color: '#4285f4', background: '#e3f0ff', borderRadius: '50%', width: 70, height: 70, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>12+</div>
                            <div style={{ marginTop: 8 }}>Years Of Establishment</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: 32, fontWeight: 'bold', color: '#4285f4', background: '#e3f0ff', borderRadius: '50%', width: 70, height: 70, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>500+</div>
                            <div style={{ marginTop: 8 }}>Clients</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: 32, fontWeight: 'bold', color: '#4285f4', background: '#e3f0ff', borderRadius: '50%', width: 70, height: 70, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>40</div>
                            <div style={{ marginTop: 8 }}>No of Employees</div>
                        </div>
                    </div>
                </div>
                <div style={{ flex: 1, minWidth: 280, maxWidth: 400, textAlign: 'center' }}>
                    <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="Scientific Glassware" width={350} height={250} style={{ borderRadius: 12, objectFit: 'cover' }} />
                </div>
            </section>
            {/* Company Goel Section */}
            <section style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 32, padding: '2vw 0 5vw 0', background: '#fff' }}>
                <div style={{ flex: 1, minWidth: 280, maxWidth: 500, textAlign: 'center' }}>
                    <img src="https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80" alt="Colorful Glassware" width={420} height={180} style={{ borderRadius: 8, objectFit: 'contain', background: '#fff' }} />
                </div>
                <div style={{ flex: 1, minWidth: 280, maxWidth: 600, textAlign: 'left', padding: '0 2vw' }}>
                    <h2 style={{ color: '#2979ff', fontWeight: 800, fontSize: '2rem', marginBottom: 16, letterSpacing: 1 }}>COMPANY GOEL</h2>
                    <ul style={{ fontSize: 22, color: '#222', lineHeight: 1.7, listStyle: 'disc inside', margin: 0, padding: 0 }}>
                        <li>Affordable Quality</li>
                        <li>Diverse Product Range</li>
                        <li>Serving Industrial, Pharmaceutical, School and University Industries</li>
                        <li>Class A and B Product Classification</li>
                    </ul>
                </div>
                <style>{`
          @media (max-width: 900px) {
            section[style*='Company Goel'] {
              flex-direction: column !important;
              text-align: center !important;
            }
            section[style*='Company Goel'] > div {
              max-width: 100% !important;
              padding: 0 !important;
            }
            section[style*='Company Goel'] ul {
              text-align: left !important;
              margin: 0 auto !important;
              max-width: 90vw !important;
            }
          }
        `}</style>
            </section>
        </>
    );
} 