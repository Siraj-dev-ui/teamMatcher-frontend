import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Entry = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Entry;
