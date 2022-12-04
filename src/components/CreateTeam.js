import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { baserUrl } from '../utils/urls';
import { setMyTeam } from '../Slices/teamsSlice';

const CreateTeam = () => {
  const user = useSelector((s) => s.loginUser.user);
  const dispatch = useDispatch();
  const refTeamName = useRef();
  const refContact = useRef();
  const addTeam = async (event) => {
    try {
      event.preventDefault();
      console.log('sending team request : ');
      console.log('user id sending', user._id);
      let data = {};
      data.name = refTeamName.current.value;
      data.contact = refContact.current.value;
      data.user_Id = user._id;

      const res = await axios.post(`${baserUrl}/teams/createTeam`, data);
      if (res.data.status === 'success') {
        alert('team Added successfully...');
        dispatch(setMyTeam(JSON.parse(JSON.stringify(res.data.team))));
      } else if (res.data.status === 'failed') {
        alert(res.data.message);
      }
    } catch (err) {
      console.log('error in creating team : ', err);
    }
  };
  return (
    <div className='block p-6 rounded-lg bg-white max-w-sm'>
      <form onSubmit={addTeam}>
        <div className='form-group mb-6'>
          <input
            type='text'
            ref={refTeamName}
            className='form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            id='exampleInput90'
            placeholder='Team Name'
          />
        </div>
        <div className='form-group mb-6'>
          <input
            type='text'
            ref={refContact}
            className='form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            id='exampleInput91'
            placeholder='Contact'
          />
        </div>

        <button
          type='submit'
          className='
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out'
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateTeam;
