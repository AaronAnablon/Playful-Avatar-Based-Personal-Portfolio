import transporter from "@/server/mailer";
import { NextResponse } from "next/server";

export async function POST(req) {

    const data = await req.json()

    try {
      transporter.sendMail({
        from: data.email,
        to: process.env.EMAIL,
        subject: data.name + ' ' + data.email,
        text: data.message,
      });

      return NextResponse.json({ msg: "Successfuly Sent " ,status:200})
    } catch (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ error: "Error on '/api/mail': " + error ,status:400})
    }
  }
