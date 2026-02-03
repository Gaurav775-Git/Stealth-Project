import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  children,
  onClick,
  variant = 'primary', // primary, secondary, outline, ghost, danger
  size = 'md', // sm, md, lg
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-primary-DEFAULT text-white hover:bg-primary-dark focus:ring-primary-DEFAULT shadow-md hover:shadow-lg",
    secondary: "bg-secondary-DEFAULT text-white hover:bg-secondary-dark focus:ring-secondary-DEFAULT shadow-md hover:shadow-lg",
    outline: "bg-transparent border border-neutral-300 text-neutral-700 hover:bg-neutral-100 focus:ring-primary-DEFAULT",
    ghost: "bg-transparent text-neutral-700 hover:bg-neutral-100 focus:ring-primary-DEFAULT",
    danger: "bg-error-DEFAULT text-white hover:bg-error-dark focus:ring-error-DEFAULT shadow-md hover:shadow-lg",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-2.5 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
