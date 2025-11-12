import React from 'react';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  className = '',
}) => {
  return (
    <div
      className={`
        container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20
        safe-area-padding
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default ResponsiveContainer;
