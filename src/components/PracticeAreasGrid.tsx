import PracticeAreaCard from './PracticeAreaCard';

interface PracticeAreasGridProps {
  areas: Array<{
    id: string;
    title: string;
    shortDescription: string;
    slug: string;
  }>;
  columns?: number;
}

export default function PracticeAreasGrid({
  areas,
  columns = 3,
}: PracticeAreasGridProps) {
  const colClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  }[columns] || 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';

  return (
    <div className={`grid ${colClass} gap-6`}>
      {areas.map((area) => (
        <PracticeAreaCard
          key={area.id}
          title={area.title}
          description={area.shortDescription}
          slug={area.slug}
        />
      ))}
    </div>
  );
}
