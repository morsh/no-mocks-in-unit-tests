import React from 'react';
import './App.css';
import { DogPicture } from '../dog-picture/dog-picture';

function App() {
  return (
    <div className="App">
      <header className="App-header" data-testid="header">
        <div className="pic">
          <DogPicture />
        </div>
      </header>
    </div>
  );
}

export default App;
