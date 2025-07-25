import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { firstName, lastName, email, message } = await req.json();

        // Dummy SMTP credentials (replace with real ones in production)
        const transporter = nodemailer.createTransport({
            host: 'smtp.example.com',
            port: 587,
            secure: false,
            auth: {
                user: 'dummy@example.com',
                pass: 'dummypassword',
            },
        });

        await transporter.sendMail({
            from: 'dummy@example.com',
            to: 'kanhascientificglassworks@gmail.com',
            subject: `Contact Form Submission from ${firstName} ${lastName}`,
            text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
        });

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ success: false, error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
} 