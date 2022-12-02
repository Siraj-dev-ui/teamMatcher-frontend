import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AvailableTeams from '../components/AvailableTeams';
import CreateTeam from '../components/CreateTeam';
import { setTab } from '../Slices/tabsSlice';
const Teams = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTab('teams'));
  });
  return (
    <div className='bg-gray-100 w-full h-screen'>
      <div className='mx-10 pt-5'>
        <div className='bg-white text-right pr-5 pt-3  shadow-lg shadow-gray-400 rounded-lg border-rose-600 border'>
          <div>
            {/* <span className='bg-black text-white font-bold p-2 rounded-md cursor-pointer'> */}

              {/* modal button */}
              <div class=''>
        <button
          type='button'
          class='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
          data-bs-toggle='modal'
          data-bs-target='#exampleModalCenter'
        >
         Create Team
        </button>
        
      </div>
            {/* </span> */}
          </div>
          <div className=' text-center text-orange-600 mb-5'>
            <span>You did'nt create your team yet...</span>
          </div>
        </div>
        <div className='mt-10 w-full h-full  bg-white shadow-lg rounded-lg p-5'>
        <AvailableTeams/>
      </div>
      </div>

     

      {/* test */}
      <div
          class='modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto'
          id='exampleModalCenter'
          tabindex='-1'
          aria-labelledby='exampleModalCenterTitle'
          aria-modal='true'
          role='dialog'
        >
          <div class='modal-dialog modal-dialog-centered relative w-auto pointer-events-none'>
            <div class='modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current'>
              <div class='modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md'>
                <h5
                  class='text-xl font-medium leading-normal text-gray-800'
                  id='exampleModalScrollableLabel'
                >
                  Create
                </h5>
                <button
                  type='button'
                  class='btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
              </div>
              <div class='modal-body relative p-4 flex items-center justify-center'>
                <CreateTeam/>
              </div>
              
            </div>
          </div>
        </div>

    </div>
  );
};

export default Teams;
