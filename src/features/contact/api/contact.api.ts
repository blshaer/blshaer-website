import emailjs from "@emailjs/browser";
import { ContactFormValues } from "../schema/contact.schema";

export const sendContactEmail = async (
  data: ContactFormValues,
): Promise<void> => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

  if (!serviceId || !templateId || !userId) {
    throw new Error("EmailJS configuration missing");
  }

  await emailjs.send(
    serviceId,
    templateId,
    {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    },
    userId,
  );
};
