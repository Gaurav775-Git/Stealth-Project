import React from 'react';
import { FileWarning } from 'lucide-react';

const EmptyState = ({
  icon: Icon = FileWarning,
  title = 'No data found',
  message = 'There is no content to display at the moment.',
  className = '',
  children,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-10 text-center bg-white rounded-2xl shadow-custom-light border border-neutral-100 ${className}`}
    >
      <Icon size={56} className="text-primary-DEFAULT mb-4" />
      <h3 className="text-2xl font-bold text-neutral-700 mb-2">{title}</h3>
      <p className="text-neutral-500 mb-6 max-w-sm">{message}</p>
      {children}
    </div>
  );
};

export default EmptyState;
