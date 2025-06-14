import nodemailer from "nodemailer";

export async function POST(request) {
  const body = await request.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  // Use fixed recipient as per instruction
  const toEmail = "butrabalaprasad370@gmail.com";

  // Load env variables for sender credentials
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    return Response.json(
      { error: "Email credentials not set" },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user,
      pass,
    },
  });

  // Stylish HTML email template
  const html = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f7fafc; padding: 32px;">
      <div style="max-width: 520px; margin: 0 auto; background: #fff; border-radius: 12px; box-shadow: 0 4px 24px rgba(0,0,0,0.07); padding: 32px;">
        <h2 style="color: #2563eb; margin-bottom: 8px;">📬 New Portfolio Message</h2>
        <p style="color: #374151; font-size: 16px; margin-bottom: 24px;">
          You received a new message from your <b>Portfolio Contact Form</b>.
        </p>
        <div style="margin-bottom: 20px;">
          <div style="margin-bottom: 8px;">
            <span style="font-weight: 600; color: #111827;">Name:</span>
            <span style="color: #2563eb;">${name}</span>
          </div>
          <div style="margin-bottom: 8px;">
            <span style="font-weight: 600; color: #111827;">Email:</span>
            <a href="mailto:${email}" style="color: #2563eb; text-decoration: underline;">${email}</a>
          </div>
        </div>
        <div style="background: #f1f5f9; border-radius: 8px; padding: 18px 16px; margin-bottom: 24px;">
          <span style="font-weight: 600; color: #111827;">Message:</span>
          <p style="color: #374151; margin-top: 8px; white-space: pre-line;">${message}</p>
        </div>
        <div style="text-align: right; color: #64748b; font-size: 13px;">
          <em>Sent from your portfolio website</em>
        </div>
      </div>
    </div>
  `;

  const mailOptions = {
    from: `"Portfolio Contact" <${user}>`,
    to: toEmail,
    replyTo: email,
    subject: `📨 Portfolio Message from ${name}`,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    return Response.json(
      {
        message: "Message sent! I'll get back to you soon.",
        stylish: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email send error:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
