import Image from 'next/image';

const products = [
    {
        name: 'Beaker',
        desc: '100ml, 250ml, 500ml, 1000ml',
        img: 'https://images.unsplash.com/photo-1517971071642-34a2d3eccb5e?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'Flask',
        desc: '250ml, 500ml, 1000ml',
        img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'Test Tube',
        desc: '5ml, 10ml, 20ml, 50ml',
        img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'Double Surface Condenser',
        desc: '100mm, 150mm, 200mm, 300mm, 400mm, 500mm',
        img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'Burettes (Glass Stopcock/Rotaflow)',
        desc: '5ml, 10ml, 25ml, 50ml, 100ml',
        img: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'Pipettes (Graduated/Volumetric)',
        desc: '1.0ml, 2.0ml, 5.0ml, 10.0ml, 25.0ml, 50.0ml',
        img: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3fdc?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'Culture Tubes (Clear Glass/Amber(RB))',
        desc: '5ml, 10ml, 30ml, 60ml, 150ml',
        img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'Culture Tubes (Clear Glass/Amber(FB))',
        desc: '5ml, 10ml, 30ml, 60ml, 150ml',
        img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    },
];

export default function Products() {
    return (
        <section id="products" style={{ background: '#111', color: '#fff', padding: '5vw 0' }}>
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: 8 }}>Our Products</h2>
            <p style={{ textAlign: 'center', marginBottom: 32 }}>Product Offerings</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 32 }}>
                {products.map((p, i) => (
                    <div key={i} style={{ background: '#fff', color: '#111', borderRadius: 12, padding: 24, width: 220, textAlign: 'center', boxShadow: '0 2px 8px #0001' }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={p.img} alt={p.name} width={100} height={120} style={{ objectFit: 'cover', borderRadius: 8, margin: '0 auto' }} />
                        <div style={{ fontWeight: 'bold', marginTop: 12 }}>{p.name}</div>
                        <div style={{ fontSize: 15 }}>{p.desc}</div>
                    </div>
                ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 32 }}>
                <a href="#" style={{ background: '#fff', color: '#111', padding: '0.5rem 2rem', borderRadius: 24, fontWeight: 'bold', textDecoration: 'none', fontSize: 18 }}>MORE...</a>
            </div>
        </section>
    );
} 