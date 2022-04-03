import React from 'react';

interface Params {}

const Header: React.FC = ({}: Params) => {
  return (
    <header className='mb-10'>
      <h1 className='text-4xl font-bold underline'></h1>
    </header>
  );
};

export default Header;
