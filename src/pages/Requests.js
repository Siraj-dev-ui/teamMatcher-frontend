import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import SendRequest from '../components/SendRequest';
import { setTab } from '../Slices/tabsSlice';
import requestsData from '../utils/requestsData';

const Requests = () => {
  const [requestType, setRequestType] = useState('sended');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTab('requests'));
  });

  return (
    <div className='bg-gray-100 w-full h-screen overflow-y-hidden'>
      <div className='mx-10 '>
        <div className=' flex w-full justify-center mt-5 w-auto'>
          <div className=' shadow-xl  bg-gray-300 p-5 rounded-full'>
            <span
              className={`${
                requestType == 'sended'
                  ? 'bg-green-700 text-white font-bold'
                  : 'bg-gray-300 hover:bg-white'
              } rounded-full w-1/2 p-3 cursor-pointer mr-3`}
              onClick={() => setRequestType('sended')}
            >
              Sended
            </span>
            <span
              className={`${
                requestType == 'received'
                  ? 'bg-green-700 text-white font-bold'
                  : 'bg-gray-300 hover:bg-white'
              } rounded-full w-1/2 p-3 cursor-pointer `}
              onClick={() => setRequestType('received')}
            >
              Received
            </span>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-lg mt-5 p-3'>
          {requestType === 'sended' ? (
            <>
              {requestsData.map((item) => (
                <SendRequest
                  key={item._id}
                  name={item.name}
                  contact={item.contact}
                  _id={item._id}
                  component={'sendedRequests'}
                  dateRecieved={item.date}
                />
              ))}
            </>
          ) : (
            <>
              {requestsData.map((item) => (
                <SendRequest
                  key={item._id}
                  name={item.name}
                  contact={item.contact}
                  _id={item._id}
                  component={'receivedRequests'}
                  dateRecieved={item.date}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Requests;
