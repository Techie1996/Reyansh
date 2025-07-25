"use client";

import { useState } from 'react';

export default function ContactForm() {
    const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' });
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (data.success) {
                setStatus('Message sent successfully!');
                setForm({ firstName: '', lastName: '', email: '', message: '' });
            } else {
                setStatus('Failed to send message.');
            }
        } catch (err) {
            setStatus('Failed to send message.');
        }
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 600, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', gap: 16 }}>
                <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} required style={{ flex: 1, padding: 8 }} />
                <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} required style={{ flex: 1, padding: 8 }} />
            </div>
            <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required style={{ padding: 8 }} />
            <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required style={{ padding: 8, minHeight: 100 }} />
            <button type="submit" disabled={loading} style={{ padding: 12, fontWeight: 'bold', background: '#000', color: '#fff', border: 'none', borderRadius: 8 }}>
                {loading ? 'Sending...' : 'Send'}
            </button>
            {status && <div style={{ marginTop: 12, color: status.includes('success') ? 'green' : 'red' }}>{status}</div>}
        </form>
    );
} 