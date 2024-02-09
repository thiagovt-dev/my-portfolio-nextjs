"use server";
import { EmailTemplate } from "../../../components/EmailSection/EmailTemplate";
import { CONTACT_EMAIL, FROM_EMAIL } from "@/config/environment";
import { Resend } from "resend";

export interface EmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = FROM_EMAIL;
const contactEmail = CONTACT_EMAIL;

export async function POST(req: Request, res: Response) {
  const { name, email, subject, message }: EmailParams = await req.json();
  try {
    const data = await resend.emails.send({
      from: `Thiago Vasconcelos <${fromEmail}>`,
      to: [email, contactEmail],
      subject: subject,
      react: EmailTemplate({name, subject, message }) as React.ReactElement,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
