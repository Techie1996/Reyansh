const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

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

        // 1. Email to yourself
        await transporter.sendMail({
            from: 'govindayadav2478@gmail.com',
            to: 'govindayadav2478@gmail.com',
            subject: `Contact Form Submission from ${firstName} ${lastName}`,
            text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
        });

        // 2. Thank you email to the user
        await transporter.sendMail({
            from: 'govindayadav2478@gmail.com',
            to: email,
            subject: 'Thank you for contacting Reyansh Scientific Works!',
            text: `Dear ${firstName},\n\nThank you for reaching out to us! We have received your message and will get back to you soon.\n\nBest regards,\nReyansh Scientific Works`,
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