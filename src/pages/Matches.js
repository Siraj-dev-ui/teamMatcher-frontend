import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTab } from '../Slices/tabsSlice';

const Matches = () => {
  //   const [requestType, setRequestType] = useState('sended');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTab('matches'));
  });

  return (
    <div className='bg-gray-100 w-full h-screen overflow-y-hidden'>
      <div className='mx-10 '>matches</div>
    </div>
  );
};

export default Matches;
