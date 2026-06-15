"use server";

import { FormType } from "@/types";
import { db } from "../db";
import { consultationTable } from "../db/schema";
import { eq } from "drizzle-orm";
import { Resend } from "resend";
import "dotenv/config";
import { emailTemplate } from "@/Templates/emailTemplate";

export async function createConsultation(data: FormType) {
  try {
    // Check for duplicate email
    const existing = await db
      .select()
      .from(consultationTable)
      .where(eq(consultationTable.email, data.email));

    if (existing.length > 0) {
      return {
        success: false,
        message: "This email has already submitted a request.",
      };
    }

    // Insert if no duplicate
    await db.insert(consultationTable).values(data);

    //email logic
    const resend = new Resend(process.env.EMAIL_KEY!);
    const result = await resend.emails.send({
      from: "onboarding@resend.dev", // see note below
      to: "earendelsolutions123@gmail.com",
      subject: "CONSULTATION FORM",
      html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Service:</strong> ${data.service}</p>
    <p><strong>Description:</strong> ${data.description}</p>
  `,
    });
    console.log("Email sent to US:", result);

    // In future if we have money we will enable this
    // const result2 = await resend.emails.send({
    //   from: "our domain ", // see note below
    //   to: data.email,
    //   subject: "CONSULTATION FORM",
    //   html: emailTemplate(data),
    // });
    // console.log("Email sent to USER:", result2);

    return { success: true, message: "Data inserted successfully" };
  } catch (err) {
    console.error("DB error: ", err);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
