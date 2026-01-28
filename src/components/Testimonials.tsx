interface TestimonialItem {
  quote: string;
  author: string;
  title: string;
}

interface TestimonialsProps {
  items?: TestimonialItem[];
  showTestimonials?: boolean;
}

const defaultTestimonials: TestimonialItem[] = [
  {
    quote: 'Experiência profissional de alta qualidade. A equipe demonstrou total domínio sobre as questões tributárias complexas do nosso caso.',
    author: 'Maria Silva',
    title: 'Diretora Executiva, Empresa X',
  },
  {
    quote: 'Atuação estratégica e segura. Conseguiram resolver uma questão administrativa que parecia impossível.',
    author: 'João Santos',
    title: 'Gestor Público Municipal',
  },
  {
    quote: 'Profissionalismo do início ao fim. Equipe preparada, atenta e sempre disponível para esclarecer dúvidas.',
    author: 'Ana Costa',
    title: 'Executiva de Agência',
  },
];

export default function Testimonials({
  items = defaultTestimonials,
  showTestimonials = true,
}: TestimonialsProps) {
  if (!showTestimonials || items.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-12 text-center text-navy">
        O que nossos clientes dizem
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((testimonial, index) => (
          <div key={index} className="p-6 bg-white rounded-lg border border-gray-100">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-bronze"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
            <div>
              <p className="font-semibold text-gray-900">{testimonial.author}</p>
              <p className="text-sm text-gray-600">{testimonial.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
