import React, { useEffect } from 'react';
import SendRequest from './SendRequest';
import { baserUrl } from '../utils/urls';
import { useDispatch, useSelector } from 'react-redux';
import { setOtherTeams } from '../Slices/teamsSlice';
import axios from 'axios';
// import { set } from 'immer/dist/internal';

const AvailableTeams = () => {
  const dispatch = useDispatch();
  const team = useSelector((s) => s.teams.myTeam);
  const availableTeams = useSelector((s) => s.teams.otherTeams);
  const getAvailableTeams = async () => {
    const res = await axios.post(`${baserUrl}/teams/getAvailableTeams`, {
      _id: team._id,
    });
    console.log('res of available teams : ', res);
    if (res.data.status === 'success') {
      dispatch(setOtherTeams(res.data.availableTeams));
    }
  };
  useEffect(() => {
    getAvailableTeams();
  }, []);

  return (
    <div>
      {' '}
      <div className=' text-center font-bold text-3xl mb-5'>AvailableTeams</div>
      {/* {Object.keys(availableTeams).length} */}
      {availableTeams.map((team) => (
        <SendRequest
          key={team._id}
          name={team.name}
          contact={team.contact}
          _id={team._id}
        />
      ))}
      {/* <SendRequest />
      <SendRequest />
      <SendRequest />
      <SendRequest />
      <SendRequest />
      <SendRequest />
      <SendRequest /> */}
    </div>
  );
};

export default AvailableTeams;
