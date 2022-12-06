import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import SendRequest from '../components/SendRequest';
import { setTab } from '../Slices/tabsSlice';
import requestsData from '../utils/requestsData';

const Matches = () => {
  //   const [requestType, setRequestType] = useState('sended');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTab('matches'));
  });

  return (
    <div className='bg-gray-100 w-full h-screen overflow-y-hidden'>
      <div className='mx-10 '>
        <div className='mt-10 w-full h-full  bg-white shadow-lg rounded-lg p-5'>
          {' '}
          <div className=' text-center font-bold text-3xl mb-5'>
            Your Fixtures
          </div>
          {requestsData.map((team) => (
            <SendRequest
              key={team._id}
              name={team.name}
              contact={team.contact}
              _id={team._id}
              component={'matches'}
              dateRecieved={team.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Matches;
