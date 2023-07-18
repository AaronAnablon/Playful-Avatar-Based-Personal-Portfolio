import transporter from "@/server/mailer";

export async function POST(req) {
  if (req.method === 'POST') {
    const { data } = req.body.data;
    console.log(data)
    if (!req.headers['headers']) {
      return {
        statusCode: 400,
        body: 'Missing required header: x-custom-header',
      };
    }

    try {
      await transporter.sendMail({
        from: data.sender,
        to: process.env.EMAIL,
        subject: data.senderName,
        text: data.text,
      });

      return {
        statusCode: 200,
        body: 'Email sent successfully',
      };
    } catch (error) {
      console.error('Error sending email:', error);
      return {
        statusCode: 500,
        body: 'Failed to send email',
      };
    }
  }

  return {
    statusCode: 405,
    body: 'Method Not Allowed',
  };
}
