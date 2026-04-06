'use client';

import { useState, FormEvent } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Validação básica
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert('Por favor, preencha todos os campos.');
      setIsLoading(false);
      return;
    }

    // Simular envio via mailto
    const mailtoLink = `mailto:contato@buligonadvogados.adv.br?subject=Novo Contato de ${formData.name}&body=Nome: ${formData.name}%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0A%0AMensagem:%0A${formData.message}`;
    
    window.location.href = mailtoLink;
    setSubmitted(true);
    setIsLoading(false);

    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="p-6 bg-green-50 border border-green-200 text-center">
        <p className="text-green-800 font-semibold">Obrigado por sua mensagem!</p>
        <p className="text-green-700 text-sm mt-2">
          Em breve entraremos em contato com você.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
            Nome completo
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-navy focus:border-transparent outline-none transition-all"
            style={{ '--tw-ring-color': 'var(--color-navy)' } as any}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-navy focus:border-transparent outline-none transition-all"
            style={{ '--tw-ring-color': 'var(--color-navy)' } as any}
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
          Telefone / WhatsApp
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-navy focus:border-transparent outline-none transition-all"
          style={{ '--tw-ring-color': 'var(--color-navy)' } as any}
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-navy focus:border-transparent outline-none transition-all resize-none"
          style={{ '--tw-ring-color': 'var(--color-navy)' } as any}
          required
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 font-semibold text-white transition-all hover:shadow-lg disabled:opacity-50"
        style={{ backgroundColor: 'var(--color-navy)' }}
      >
        {isLoading ? 'Enviando...' : 'Enviar mensagem'}
      </button>

      <p className="text-sm text-gray-600 text-center">
        Responderemos sua mensagem em até 24 horas.
      </p>
    </form>
  );
}
