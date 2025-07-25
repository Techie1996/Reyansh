const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());

// const allowedOrigins = [
//   'https://reyansh-acharya.vercel.app',
//   'https://reyansh-glwz.vercel.app',
// ];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true); // Allow the request
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   methods: ['GET', 'POST', 'OPTIONS'],
//   allowedHeaders: ['Content-Type'],
// };
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));


app.use(cors(corsOptions));
app.options('*', cors(corsOptions));


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
