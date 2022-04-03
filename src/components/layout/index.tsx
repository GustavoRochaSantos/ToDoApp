import React from 'react';
import Header from './Header';

interface Params {
  children: React.ReactNode;
}

const Layout = ({ children }: Params) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Header />
      <div className='flex justify-center items-center w-full'>{children}</div>
    </div>
  );
};

export default Layout;
