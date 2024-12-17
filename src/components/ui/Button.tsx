import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  icon?: LucideIcon;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  icon: Icon,
  className = '',
}) => {
  const baseStyles = "inline-flex items-center px-6 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1";
  const variants = {
    primary: "bg-gray-900 text-white hover:bg-gray-800",
    secondary: "border-2 border-gray-900 text-gray-900 hover:bg-gray-100",
  };

  const content = (
    <>
      {children}
      {Icon && <Icon className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" size={20} />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );
};