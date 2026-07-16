"use client";

import { FormEvent, useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  website: string;
}

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
  website: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Não foi possível enviar sua mensagem.");
      }

      setFormData(initialFormData);
      setSubmitted(true);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Não foi possível enviar sua mensagem. Tente novamente.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="border border-green-200 bg-green-50 p-6 text-center" role="status">
        <p className="font-semibold text-green-800">Obrigado por sua mensagem!</p>
        <p className="mt-2 text-sm text-green-700">
          Recebemos seus dados e entraremos em contato em breve.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-5 text-xs font-bold uppercase tracking-widest text-navy underline underline-offset-4"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Não preencha este campo</label>
        <input
          id="website"
          name="website"
          type="text"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-900">
            Nome completo
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            maxLength={120}
            autoComplete="name"
            className="w-full border border-gray-300 px-4 py-2 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-navy"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-900">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            maxLength={254}
            autoComplete="email"
            className="w-full border border-gray-300 px-4 py-2 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-navy"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-gray-900">
          Telefone / WhatsApp
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          maxLength={40}
          autoComplete="tel"
          className="w-full border border-gray-300 px-4 py-2 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-navy"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-900">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          maxLength={5000}
          className="w-full resize-none border border-gray-300 px-4 py-2 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-navy"
          required
        />
      </div>

      {errorMessage && (
        <p className="border border-red-200 bg-red-50 p-3 text-center text-sm text-red-700" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-navy py-3 font-semibold text-white transition-all hover:bg-bronze hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isLoading ? "Enviando..." : "Enviar mensagem"}
      </button>

      <p className="text-center text-sm text-gray-400">
        Ao enviar, você concorda com nossa política de privacidade.
      </p>
    </form>
  );
}
