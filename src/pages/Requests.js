import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTab } from '../Slices/tabsSlice';

const Requests = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTab('requests'));
  });
  return <div>Requests</div>;
};

export default Requests;
