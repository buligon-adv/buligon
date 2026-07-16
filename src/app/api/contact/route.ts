import { NextResponse } from "next/server";
import { Resend } from "resend";

const FROM_EMAIL = "Site Buligon <site@buligonadvogados.adv.br>";
const CONTACT_EMAIL = "contato@buligonadvogados.adv.br";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
  website?: unknown;
};

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character] ?? character,
  );
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY não está configurada.");
    return NextResponse.json(
      { error: "O envio de mensagens está temporariamente indisponível." },
      { status: 503 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
  }

  const name = cleanText(payload.name, 120);
  const email = cleanText(payload.email, 254).toLowerCase();
  const phone = cleanText(payload.phone, 40);
  const message = cleanText(payload.message, 5000);
  const website = cleanText(payload.website, 200);

  // Campo invisível: bots costumam preenchê-lo, pessoas não.
  if (website) {
    return NextResponse.json({ success: true });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !emailPattern.test(email) || !phone || !message) {
    return NextResponse.json(
      { error: "Preencha todos os campos com dados válidos." },
      { status: 400 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: [CONTACT_EMAIL],
    replyTo: email,
    subject: `Novo contato pelo site — ${name.replace(/[\r\n]/g, " ")}`,
    text: [
      `Nome: ${name}`,
      `E-mail: ${email}`,
      `Telefone / WhatsApp: ${phone}`,
      "",
      "Mensagem:",
      message,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; color: #0C1F40; line-height: 1.6; max-width: 640px;">
        <div style="border-left: 4px solid #BC9576; padding-left: 20px; margin-bottom: 28px;">
          <p style="margin: 0; color: #BC9576; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;">Formulário do site</p>
          <h1 style="margin: 6px 0 0; font-size: 24px;">Novo contato recebido</h1>
        </div>
        <p><strong>Nome:</strong> ${safeName}</p>
        <p><strong>E-mail:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
        <p><strong>Telefone / WhatsApp:</strong> ${safePhone}</p>
        <div style="margin-top: 28px; padding: 20px; background: #F5F3F0; border-radius: 4px;">
          <strong>Mensagem:</strong>
          <p style="margin-bottom: 0;">${safeMessage}</p>
        </div>
      </div>
    `,
  });

  if (error) {
    console.error("Falha ao enviar mensagem pelo Resend:", error.name);
    return NextResponse.json(
      { error: "Não foi possível enviar sua mensagem. Tente novamente." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
