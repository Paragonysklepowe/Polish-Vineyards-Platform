import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  href,
  ...props
}) => {
  const baseStyles = cn(
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
    {
      'bg-[#722F37] text-white hover:bg-[#8B4513] focus:ring-[#722F37]': variant === 'primary',
      'bg-[#F7E7CE] text-[#8B4513] hover:bg-[#F7E7CE]/80 focus:ring-[#F7E7CE]': variant === 'secondary',
      'border border-[#722F37] text-[#722F37] hover:bg-[#722F37]/10 focus:ring-[#722F37]': variant === 'outline',
      'px-3 py-1.5 text-sm': size === 'sm',
      'px-4 py-2 text-base': size === 'md',
      'px-6 py-3 text-lg': size === 'lg',
      'w-full': fullWidth,
    },
    className
  );

  if (href) {
    return (
      <Link to={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseStyles} {...props}>
      {children}
    </button>
  );
};