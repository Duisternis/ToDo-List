import React from 'react';

import Tasks from './components/Tasks/Tasks';
import Container from './components/UI/Container';
import Navbar from './components/Stats/Navbar';
import Stats from './components/Stats/Stats';
import './App.css';

function App() {
  return (
    <div className="flex w-[95%] ">
      <Container className="basis-1/2 m-16 p-5 bg-[#91CAFF21] rounded-3xl shadow-[0px_0px_40px_20px_rgba(145,202,255,0.13)]">
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
      </Container>

      <Stats className="basis-1/2" />

      <Navbar className="bg-[#91CAFF21] fixed inset-y-0 right-0 flex items-center shadow-[0px_0px_40px_20px_rgba(145,202,255,0.13)]" />
    </div>
  );
}

export default App;
