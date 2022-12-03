import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import io from 'socket.io-client';
import { baserUrl } from '../utils/urls';
var socket;
const Available = () => {
  const [available, setAvailable] = useState(true);
  const user = useSelector((state) => state.loginUser.user);
  const myTeam = useSelector((state) => state.teams.myTeam);
  useEffect(() => {
    socket = io(baserUrl);
    socket.emit('setup', user._id);
    // socket.on('connected', () => setSocketConnected(true));
    // socket.on('typing', () => setIsTyping(true));
    // socket.on('stop typing', () => setIsTyping(false));
  }, []);

  const handleAvailability = async () => {
    // console.log('emmit availability');
    console.log('my teams : ', myTeam);
    if (Object.keys(myTeam).length === 0) {
      alert('please create the teams first...');
      return;
    }
    setAvailable(!available);
    const updateAvailable = await axios.post('', { _id: user._id });
    socket.emit('availability', 'user available');
    socket.on('emmited', (msg) => {
      console.log('msg');
    });
  };
  return (
    <div className='text-white mr-3 flex items-center'>
      <span className='mr-2'>Available</span>
      <input
        type='checkbox'
        className='accent-emerald-500/25 w-5 h-5'
        checked={available}
        onChange={handleAvailability}
      />
    </div>
  );
};

export default Available;
