import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import ButtonAppBar from './components/ButtonAppBar/ButtonAppBar';
import { Button, Paper } from '@mui/material';
import CustomButton from './components/CustomButton/CustomButton';
import RightBox from './components/RightBox/RightBox';
import { Route, Routes } from 'react-router-dom';
import Auth from './app/pages/Auth/Auth.page';
import Dashboard from './app/pages/Dashboard/Dasboard.page';

function App() {
  return (
    <div className="App">
      <ButtonAppBar></ButtonAppBar>
      <Routes>
        <Route index element={<Auth></Auth>}></Route>
        <Route path="auth" element={<Auth></Auth>}></Route>
        <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </div>
  );
}

export default App;
