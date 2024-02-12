const express = require('express');
const bodyParser = require('body-parser');
const { createTransport } = require('nodemailer');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file
const path = require("path");
const transporter = createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
        user: "hitinbajaj77@gmail.com",
        pass: process.env.BREVO_API_KEY,
    },
});

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
// Route to handle POST requests for sending emails
app.post('/email', (req, res) => {
    const { to, subject, text } = req.body;

    if (!to || !subject || !text) {
        return res.status(400).json({ error: 'Missing required fields.' });
    }

    const mailOptions = {
        from: "hitinbajaj77@gmail.com",
        to,
        subject,
        text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Failed to send email.' });
        } else {
            console.log("Email sent: " + info.response);
            res.status(200).json({ message: 'Email sent successfully.' });
        }
    });
});
// production script
app.use(express.static("./frontend/dist"));
app.get("*", (req,res)=>{
    res.sendFile(path.resolve(__dirname,'frontend', 'dist', 'index.html'))
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
