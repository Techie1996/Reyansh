import ContactForm from '../contact-form';

export default function Contact() {
    return (
        <section id="contact" style={{ background: '#fafbff', padding: '5vw 0' }}>
            <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: 24 }}>Let's Talk</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, justifyContent: 'center' }}>
                <div style={{ flex: 1, minWidth: 280, maxWidth: 400 }}>
                    <div style={{ marginBottom: 16 }}>
                        <b>Contact us today to discuss your business needs.</b>
                    </div>
                    <div style={{ marginBottom: 8 }}>#331/332 Kaccha Bazar Ambala Cantt, Haryana, 133001</div>
                    <div style={{ marginBottom: 8 }}>kanhascientificglassworks@gmail.com<br />kanhascientific@gmail.com</div>
                    <div style={{ marginBottom: 8 }}>+91- 9034339343, 7404339343</div>
                    <div style={{ marginBottom: 8 }}>
                        <b>Follow us on Social</b><br />
                        <span style={{ fontSize: 28, marginRight: 8 }}>📷</span>
                        <span style={{ fontSize: 28, marginRight: 8 }}>📘</span>
                        <span style={{ fontSize: 28 }}>🔗</span>
                    </div>
                </div>
                <div style={{ flex: 1, minWidth: 280, maxWidth: 500 }}>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
} 