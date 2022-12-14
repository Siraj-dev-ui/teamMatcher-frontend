import { Routes, Route, useNavigation } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './pages/Dashboard';
import Requests from './pages/Requests';
import Teams from './pages/Teams';
import Layout from './layout/Layout';
import { Provider } from 'react-redux';

import { useEffect } from 'react';
import Matches from './pages/Matches';

function App() {
  const token = window.localStorage.getItem('token');

  return (
    <Routes>
      {token ? (
        <>
          <Route path='/' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='teams' element={<Teams />} />
            <Route path='requests' element={<Requests />} />
            <Route path='matches' element={<Matches />} />
          </Route>
        </>
      ) : (
        <>
          <Route path='/' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </>
      )}
    </Routes>
  );
}

export default App;
