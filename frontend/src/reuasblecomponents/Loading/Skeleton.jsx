import React from 'react';

const Skeleton = ({
  width = 'full',
  height = 'h-4',
  className = '',
}) => {
  return (
    <div
      className={`animate-pulse bg-neutral-200 rounded-lg ${width === 'full' ? 'w-full' : width} ${height} ${className}`}
    ></div>
  );
};

export default Skeleton;
