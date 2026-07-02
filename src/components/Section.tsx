interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  backgroundColor?: string;
  id?: string;
  noPadding?: boolean;
}

export default function Section({
  children,
  className = '',
  containerSize = 'lg',
  backgroundColor = 'bg-white',
  id,
  noPadding = false,
}: SectionProps) {
  const maxWidthClass = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-7xl',
    xl: 'max-w-screen-2xl',
    full: 'max-w-none',
  }[containerSize];

  const paddingClass = noPadding ? 'py-0 px-0' : 'py-14 sm:py-20 px-4 sm:px-6 lg:px-12';

  return (
    <section className={`${paddingClass} ${backgroundColor} ${className}`} id={id}>
      <div className={`${maxWidthClass} mx-auto`}>{children}</div>
    </section>
  );
}
