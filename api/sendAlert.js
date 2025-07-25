// /api/sendAlert.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method not allowed');
  }

  const { ip, email, reason } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.ALERT_EMAIL_USER,
        pass: process.env.ALERT_EMAIL_PASS
      }
    });

    const info = await transporter.sendMail({
      from: "Security Alert" <${process.env.ALERT_EMAIL_USER}>,
      to: process.env.ALERT_EMAIL_USER,
      subject: '🚨 Alert: Suspicious Activity Detected',
      text: 🔐 هشدار امنیتی:\nIP: ${ip}\nEmail: ${email || 'نامشخص'}\nReason: ${reason}
    });

    res.status(200).json({ message: 'Email sent', info });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
}
