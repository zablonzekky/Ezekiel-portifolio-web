import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  padding = 'p-6',
  onClick,
  ...props 
}) => {
  const baseClasses = 'card bg-surface rounded-lg shadow-lg';
  const hoverClasses = hover ? 'hover:scale-102 hover:shadow-hover cursor-pointer' : '';
  const classes = `${baseClasses} ${hoverClasses} ${padding} ${className}`;

  return (
    <div className={classes} onClick={onClick} {...props}>
      {children}
    </div>
  );
};

export default Card;