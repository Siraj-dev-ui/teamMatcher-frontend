import React, { useEffect } from 'react';
import { Link, Outlet, useNavigation } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div className='bg-black shadow-lg w-full h-20 flex justify-between items-center'>
        <div className='flex flex-row mx-10 items-center h-full text-white'>
          <span className='text-5xl font-bold text-green-400 shadow-md shadow-cyan-300 cursor-pointer'>
            TM
          </span>
          <div className='ml-10 text-xl'>
            <Link to={'/'}>
              <span className='mx-3 cursor-pointer font-bold'>Dashboard</span>
            </Link>
            <Link to={'/teams'}>
              <span className='mx-3 cursor-pointer text-gray-300'>Teams</span>
            </Link>
            <Link to={'/requests'}>
              <span className='mx-3 cursor-pointer text-gray-300'>
                Requests
              </span>
            </Link>
          </div>
        </div>
        <div className='mx-3 cursor-pointer text-gray-300 text-2xl pr-3 bg-cyan-700 h-[50%] rounded-lg text-center'>
          <span className='p-3 text-center w-full'>Logout</span>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
