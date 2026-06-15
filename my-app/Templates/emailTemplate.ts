import { FormType } from "@/types";

export function emailTemplate(data: FormType) {
  return `

<div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,0.08);">
  
  <div style="background:linear-gradient(135deg,#0f172a,#1e293b);padding:40px;text-align:center;">
    <h1 style="color:#ffffff;margin:0;font-size:28px;">
      Thank You, ${data.name}!
    </h1>
    <p style="color:#cbd5e1;margin-top:12px;font-size:16px;">
      Your consultation request has been successfully received.
    </p>
  </div>

  <div style="padding:40px;">
    
    <p style="font-size:16px;color:#334155;">
      We appreciate you taking the time to reach out to <strong>Earendel Solutions</strong>.
    </p>

    <p style="font-size:16px;color:#334155;">
      Our team has received your request regarding
      <strong>${data.service}</strong> and will carefully review the information you've provided.
    </p>

    <div style="margin:32px 0;padding:24px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;">
      
      <h3 style="margin-top:0;color:#0f172a;">
        Request Summary
      </h3>

      <p style="margin:8px 0;">
        <strong>Name:</strong> ${data.name}
      </p>

      <p style="margin:8px 0;">
        <strong>Email:</strong> ${data.email}
      </p>

      <p style="margin:8px 0;">
        <strong>Service:</strong> ${data.service}
      </p>

      <p style="margin:8px 0;">
        <strong>Description:</strong><br/>
        ${data.description}
      </p>
    </div>

    <div style="padding:20px;border-left:4px solid #2563eb;background:#eff6ff;border-radius:8px;">
      <p style="margin:0;color:#1e3a8a;">
        <strong>What happens next?</strong>
      </p>
      <p style="margin-top:10px;color:#334155;">
        A member of our team will review your request and reach out within
        <strong>24 hours</strong> to discuss your goals, answer any questions,
        and outline the next steps.
      </p>
    </div>

    <p style="margin-top:32px;color:#334155;">
      If you'd like to add any additional information before we connect,
      simply reply to this email and we'll include it in your request.
    </p>

    <p style="margin-top:32px;color:#334155;">
      We look forward to working with you.
    </p>

    <p style="margin-top:24px;">
      Best regards,<br/>
      <strong>Earendel Solutions Team</strong>
    </p>

  </div>

  <div style="background:#f8fafc;padding:20px;text-align:center;border-top:1px solid #e2e8f0;">
    <p style="margin:0;font-size:13px;color:#64748b;">
      Earendel Solutions • Building modern digital experiences
    </p>
  </div>

</div>
  `;
}
