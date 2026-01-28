interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl';
  backgroundColor?: string;
  id?: string;
}

export default function Section({
  children,
  className = '',
  containerSize = 'lg',
  backgroundColor = 'bg-white',
  id,
}: SectionProps) {
  const maxWidthClass = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-7xl',
    xl: 'max-w-screen-2xl',
  }[containerSize];

  return (
    <section className={`py-24 sm:py-32 px-4 sm:px-6 lg:px-12 ${backgroundColor} ${className}`} id={id}>
      <div className={`${maxWidthClass} mx-auto`}>{children}</div>
    </section>
  );
}
