import Image from 'next/image';

export default function About() {
    return (
        <section id="about" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 32, padding: '5vw 0', background: '#fafbff' }}>
            <div style={{ flex: 1, minWidth: 280, maxWidth: 500 }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: 16 }}>What We Do</h2>
                <p style={{ fontSize: 18, lineHeight: 1.6 }}>Kanha Scientific Glassware is a trusted manufacturer and exporter specializing in a wide range of high-quality laboratory glassware. With years of expertise in crafting precision glassware, we are dedicated to providing reliable and durable products for scientific research, educational purposes, and industrial applications. Our commitment to excellence and innovation has earned us a reputation as one of the top suppliers in the industry.</p>
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
                <Image src="/vercel.svg" alt="Glassware" width={350} height={250} />
            </div>
        </section>
    );
} 