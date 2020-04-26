import React from 'react';
import './App.css';
import { DogPicture } from '../dog-picture/dog-picture';
import { CatPicture } from '../cat-picture/cat-picture';

function App() {
  return (
    <div className="App">
      <header className="App-header" data-testid="header">
        <div className="pic">
          <DogPicture />
        </div>
        <div className="pic">
          <CatPicture />
        </div>
      </header>
    </div>
  );
}

export default App;
