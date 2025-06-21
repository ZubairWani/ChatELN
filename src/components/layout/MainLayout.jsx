import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header'; 

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="w-full mx-0 px-0">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;