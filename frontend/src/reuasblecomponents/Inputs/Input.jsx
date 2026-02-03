import React from 'react';

const Input = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  className = '',
  error,
  ...props
}) => {
  const baseStyles = "block w-full px-4 py-2.5 text-neutral-800 bg-white border border-neutral-300 rounded-lg shadow-sm transition-all duration-200 ease-in-out placeholder-neutral-400";
  const focusStyles = "focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT focus:border-primary-DEFAULT";
  const errorStyles = "border-error-DEFAULT focus:ring-error-DEFAULT";

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${baseStyles} ${focusStyles} ${error ? errorStyles : ""} ${className}`}
        {...props}
      />
      {error && <p className="mt-2 text-sm text-error-DEFAULT">{error}</p>}
    </div>
  );
};

export default Input;
