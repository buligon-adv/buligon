interface PracticeAreaCardProps {
  title: string;
  description: string;
  slug: string;
  icon?: string;
}

export default function PracticeAreaCard({
  title,
  description,
  slug,
  icon = '⚖️',
}: PracticeAreaCardProps) {
  return (
    <a
      href={`/area/${slug}`}
      className="group p-6 rounded-lg border border-gray-200 hover:border-bronze transition-all hover:shadow-lg hover:-translate-y-1 bg-white"
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-bronze transition-colors text-navy">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">{description}</p>
      <div className="mt-4 inline-flex items-center text-bronze font-semibold">
        Saiba mais
        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  );
}
