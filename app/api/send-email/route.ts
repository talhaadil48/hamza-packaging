import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const { name, phone, email, message } = await request.json()

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"FROM HAMZA PACKAGING WEBSITE" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "New Contact Form Submission",
      html: `
        <h3>New Message from ${name}</h3>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    })

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Email sending failed", error)
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 })
  }
}
