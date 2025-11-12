import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  to?: string;
  onClick?: () => void;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
  disabled = false,
  className = '',
  type = 'button',
}) => {
  const baseStyles = `
    inline-flex items-center justify-center font-semibold rounded-lg
    transition-all duration-300 transform
    disabled:opacity-50 disabled:cursor-not-allowed
    ${fullWidth ? 'w-full' : ''}
  `;

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm min-h-[44px]',
    md: 'px-6 py-3 text-base min-h-[48px]',
    lg: 'px-8 py-4 text-lg min-h-[52px]',
    xl: 'px-10 py-5 text-xl min-h-[56px]',
  };

  const variantStyles = {
    primary: `
      bg-gradient-beba text-white
      hover:shadow-lg hover:scale-105
      active:scale-95
    `,
    secondary: `
      bg-beba-purple text-white
      hover:bg-beba-purple-light hover:shadow-lg hover:scale-105
      active:scale-95
    `,
    outline: `
      border-2 border-beba-pink text-beba-pink
      hover:bg-beba-pink hover:text-white hover:scale-105
      active:scale-95
    `,
    ghost: `
      text-beba-blue hover:bg-beba-blue/10
      hover:scale-105 active:scale-95
    `,
  };

  const combinedStyles = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    ${className}
  `;

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className="mr-2" size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />
      )}
      {children}
      {Icon && iconPosition === 'right' && (
        <Icon className="ml-2" size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />
      )}
    </>
  );

  const MotionComponent = motion.button;

  if (to) {
    return (
      <Link to={to} className={combinedStyles}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedStyles}
      >
        {content}
      </a>
    );
  }

  return (
    <MotionComponent
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      {content}
    </MotionComponent>
  );
};

export default Button;
