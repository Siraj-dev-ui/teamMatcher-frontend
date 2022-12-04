import axios from 'axios';
import React, { useState, useSyncExternalStore } from 'react';
import { baserUrl } from '../utils/urls';
import { useSelector } from 'react-redux';
// import DateRangePicker from 'flowbite-datepicker/DateRangePicker';

const SendRequest = ({ name, contact, _id }) => {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${day}-${month}-${year}`;
  const [todayDate, setTodayDate] = useState(currentDate);
  console.log('current date is : ', todayDate);
  const team = useSelector((s) => s.teams.myTeam);
  const sendRequest = async () => {
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
            defaultValue={currentDate}
            onChange={(e) => setTodayDate(e.target.value)}
          />
        </span>

        <span className=' w-1/4 flex justify-center'>
          <button
            onClick={sendRequest}
            type='button'
            className='inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out'
          >
            Send Request
          </button>
        </span>
      </div>
    </div>
  );
};

export default SendRequest;
