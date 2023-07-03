//***APP.JS FILE***/
//Import React, the Hangman and Help components
import React from 'react';
import './App.css';
import Hangman from './components/Hangman';
import Help from './components/Help';

function App() {
  return (
    <div className="App">
      {/*Add the title, the Help and the Hangman component*/}
      <h1 className="text-center">Hangman</h1>
      <Help/>
      <Hangman />
    </div>
  );
}
//Export the App component
export default App;
