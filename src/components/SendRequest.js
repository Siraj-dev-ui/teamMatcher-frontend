import React from 'react';
// import DateRangePicker from 'flowbite-datepicker/DateRangePicker';

const SendRequest = () => {
  return (
    <div className='bg-white flex justify-between items-center  rounded-xl drop-shadow-xl mb-5'>
      <div className='py-3 w-full  rounded-xl flex justify-between items-center'>
        <span className='ml-3 w-1/4'>Teams Name</span>
        <span className=' w-1/4'>Contact</span>
        <span className='mr-5 w-1/4'>
          <input type={'date'} />
        </span>

        <span className=' w-1/4 flex justify-center'>
          <button
            type='button'
            class='inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out'
          >
            Send Request
          </button>
        </span>
      </div>
    </div>
  );
};

export default SendRequest;
