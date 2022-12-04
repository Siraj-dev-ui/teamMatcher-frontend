import React from 'react';
import { useSelector } from 'react-redux';

const MyTeam = () => {
  const myTeam = useSelector((s) => s.teams.myTeam);
  return (
    <div>
      <div className=' text-center font-bold text-3xl mb-3'>Your Team</div>
      <div className=' text-start p-3 text-2xl flex'>
        <div className='mr-4 font-bold  w-1/6'>Name:</div>
        <div className='uppercase w-5/6'>{myTeam.name}</div>
      </div>
      <div className=' text-start p-3 text-2xl flex'>
        <div className='mr-4 font-bold w-1/6'>Contact:</div>
        <div className='uppercase w-5/6'>{myTeam.contact}</div>
      </div>
    </div>
  );
};

export default MyTeam;
