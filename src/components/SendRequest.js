import axios from 'axios';
import React, { useState, useSyncExternalStore } from 'react';
import { baserUrl } from '../utils/urls';
import { useSelector } from 'react-redux';
// import DateRangePicker from 'flowbite-datepicker/DateRangePicker';

const SendRequest = ({ name, contact, _id, component, dateRecieved }) => {
  // const date = new Date();

  // let day = date.getDate();
  // let month = date.getMonth() + 1;
  // let year = date.getFullYear();

  // // This arrangement can be altered based on how we want the date's format to appear.
  // // let currentDate = `${day}-${month}-${year}`;
  // let currentDate = `${year}-${month}-${day}`;
  const [todayDate, setTodayDate] = useState(dateRecieved);
  console.log('current date is : ', todayDate);
  const team = useSelector((s) => s.teams.myTeam);
  const sendRequest = async () => {
    const res = axios.post(`${baserUrl}/`, {
      sendTo_Id: _id,
      sendBy_Id: team._id,
      matchDate: todayDate,
    });
  };
  const cancelRequest = async () => {
    const res = axios.post(`${baserUrl}/`, {
      sendTo_Id: _id,
      sendBy_Id: team._id,
      matchDate: todayDate,
    });
  };
  const acceptRequest = async () => {
    const res = axios.post(`${baserUrl}/`, {
      sendTo_Id: _id,
      sendBy_Id: team._id,
      matchDate: todayDate,
    });
  };
  const rejectRequest = async () => {
    const res = axios.post(`${baserUrl}/`, {
      sendTo_Id: _id,
      sendBy_Id: team._id,
      matchDate: todayDate,
    });
  };
  const finishRequest = async () => {
    const res = axios.post(`${baserUrl}/`, {
      sendTo_Id: _id,
      sendBy_Id: team._id,
      matchDate: todayDate,
    });
  };
  return (
    <div className='bg-white flex justify-between items-center  rounded-xl drop-shadow-xl mb-5'>
      <div className='py-3 w-full  rounded-xl flex justify-between items-center'>
        <span className='ml-3 w-1/4'>{name}</span>
        <span className=' w-1/4'>{contact}</span>
        <span className='mr-5 w-1/4'>
          <input
            type={'date'}
            defaultValue={dateRecieved}
            onChange={(e) => setTodayDate(e.target.value)}
          />
        </span>

        <span className=' w-1/4 flex justify-center'>
          {component === 'receivedRequests' ? (
            <>
              <button
                onClick={acceptRequest}
                type='button'
                className='inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out'
              >
                Accept
              </button>
              <button
                onClick={rejectRequest}
                type='button'
                className='inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out'
              >
                {(component === 'teams' && 'Send Request') ||
                  (component === 'sendedRequests' && 'Cancel Request') ||
                  (component === 'receivedRequests' && 'Reject') ||
                  (component === 'matches' && 'Finish')}
              </button>
            </>
          ) : (
            <>
              <button
                onClick={
                  (component === 'teams' && sendRequest) ||
                  (component === 'sendedRequests' && cancelRequest) ||
                  (component === 'receivedRequests' && rejectRequest) ||
                  (component === 'matches' && sendRequest)
                }
                type='button'
                className='inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out'
              >
                {(component === 'teams' && 'Send Request') ||
                  (component === 'sendedRequests' && 'Cancel Request') ||
                  (component === 'receivedRequests' && 'Reject') ||
                  (component === 'matches' && 'Finish')}
              </button>
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default SendRequest;
