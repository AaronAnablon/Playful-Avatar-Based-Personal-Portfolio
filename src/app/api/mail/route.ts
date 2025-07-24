import transporter from "@/server/mailer";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {

    const data = await req.json()

    try {
      await transporter.sendMail({
        from: process.env.EMAIL,
        to: data.email,
        subject: data.subject,
        text: data.message,
      });

      return NextResponse.json({ msg: "Successfully Sent" ,status:200})
    } catch (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ error: "Error on '/api/mail': " + error ,status:400})
    }
  }
