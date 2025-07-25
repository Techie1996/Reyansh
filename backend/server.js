const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
// app.use(cors());
// CORS configuration

// CORS configuration
const corsOptions = {
    origin: 'https://reyansh-glwz.vercel.app',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
};
app.use(cors(corsOptions));

// Custom middleware to validate origin
app.use((req, res, next) => {
    const allowedOrigin = 'https://reyansh-glwz.vercel.app';
    const origin = req.headers.origin;
    if (origin !== allowedOrigin) {
        return res.status(403).json({ success: false, error: 'Unauthorized origin' });
    }
    next();
});

// Optional: Add rate-limiting
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
});
app.use('/api/contact', limiter);
app.get('/', (req, res) => {
    res.send('Reyansh Backend API Running');
});


app.post('/api/contact', async (req, res) => {
    try {
        const { firstName, lastName, email, message } = req.body;
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'govindayadav2478@gmail.com',
                pass: 'vboj hawo vwbh skum', // your app password
            },
        });
        await transporter.sendMail({
            from: 'dummy@example.com',
            to: 'reyanshscientificworks@gmail.com',
            subject: `Contact Form Submission from ${firstName} ${lastName}`,
            text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
        });
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
}); 