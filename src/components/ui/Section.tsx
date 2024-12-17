import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'white' | 'gray';
}

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = '',
  background = 'white',
}) => {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50',
  };

  return (
    <section id={id} className={`py-20 ${bgColors[background]} ${className}`}>
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  );
};