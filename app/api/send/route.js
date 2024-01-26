import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {

  try {
    const data = await resend.emails.send({
      from: "ASME",
      to: "santisingha191@gmail.com",
      subject: "Connection request",
      html: `<p>send you a mail from your portfolio website</p>`
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
