import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const Tag = ({
  label,
  color = 'primary', // primary, neutral, success, warning, error
  onRemove,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center space-x-1 px-3 py-1 text-sm font-medium rounded-full transition-all duration-200 ease-in-out";
  
  const colorVariants = {
    primary: "bg-primary-accent text-primary-dark",
    neutral: "bg-neutral-200 text-neutral-600",
    success: "bg-success-light text-success-dark",
    warning: "bg-warning-light text-warning-dark",
    error: "bg-error-light text-error-dark",
    secondary: "bg-secondary-accent text-secondary-dark", // New secondary tag
  };
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className={`${baseStyles} ${colorVariants[color]} ${className}`}
      {...props}
    >
      <span>{label}</span>
      {onRemove && (
        <button
          onClick={onRemove}
          className="ml-1 p-0.5 -mr-1 rounded-full hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-current"
          aria-label={`Remove ${label} tag`}
        >
          <X size={14} />
        </button>
      )}
    </motion.span>
  );
};

export default Tag;
