import React from 'react';

import Tasks from './components/Tasks/Tasks';
import Container from './components/UI/Container';
import './App.css';

function App() {
  return (
    <div>
      <Container className="m-6 p-5 bg-[#91CAFF21] w-1/2 rounded-3xl shadow-[0px_0px_40px_20px_rgba(145,202,255,0.13)]">
        <Tasks />
        <Tasks />
      </Container>
    </div>
  );
}

export default App;
