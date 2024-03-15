import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <Sidebar />
          </div>
          <div className='col-8'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
