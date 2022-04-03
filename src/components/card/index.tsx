import React from 'react';

interface Params {
  title: string;
  children: React.ReactNode;
}

const Card = ({ title, children }: Params) => {
  return (
    <div className='mb-5'>
      <h3 className='text-2xl font-bold mb-4'>{title}</h3>
      {children}
    </div>
  );
};

export default Card;
