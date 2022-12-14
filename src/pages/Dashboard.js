import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTab } from '../Slices/tabsSlice';
import { setMyTeam } from '../Slices/teamsSlice';
import { baserUrl } from '../utils/urls';

const Dashboard = () => {
  const dispatch = useDispatch();

  // const myTeam = useSelector((s) => s.teams.myTeam);
  // const user = useSelector((s) => s.loginUser.user);

  // const getTeam = async () => {
  //   console.log('get team with id : ', user._id);
  //   const res = await axios.post(`${baserUrl}/teams/getMyTeam`, {
  //     // _id: user._id,
  //     token: window.localStorage.getItem('token'),
  //   });
  //   console.log(res);

  //   dispatch(setMyTeam(res.data.myTeam));
  // };
  // useEffect(() => {
  //   if (Object.keys(myTeam).length === 0) {
  //     console.log('fetching teams');
  //     getTeam();
  //   }
  // }, []);
  useEffect(() => {
    dispatch(setTab('dashboard'));
  });
  return (
    <div className='bg-gray-100 w-full h-screen'>
      <div className='mx-10'>
        <div className='flex pt-10'>
          <div className='w-1/3 h-30 bg-white shadow shadow-md mr-3 p-5 rounded-md'>
            <div className='text-4xl text-right font-bold'>Teams</div>
            <div className='text-3xl'>23</div>
          </div>
          <div className='w-1/3 h-30 bg-white shadow shadow-md mr-3 p-5 rounded-md'>
            <div className='text-4xl text-right font-bold'>Your Matches</div>
            <div className='text-3xl'>23</div>
          </div>
          <div className='w-1/3 h-30 bg-white shadow shadow-md mr-3 p-2 rounded-md flex'>
            <div className='w-1/2 shadow shadow-lg mr-3 bg-green-500 p-4 rounded-md'>
              <div className='text-4xl  font-bold'>Win</div>
              <div className='text-3xl text-right'>20</div>
            </div>
            <div className='w-1/2 shadow shadow-lg  bg-red-500 p-4 text-white rounded-md'>
              <div className='text-4xl  font-bold'>Lose</div>
              <div className='text-3xl text-right'>3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
