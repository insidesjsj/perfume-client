import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
