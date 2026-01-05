import React from 'react';
//import { cn } from '../../utils/cn'; // Instala clsx y tailwind-merge o usa template literals simples

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth, 
  className, 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-primary/30",
    outline: "border-2 border-primary text-primary hover:bg-primary/10",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};