/***HELP COMPONENT***/
//Import React and useState
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

//Create the Help component
const Help = () => {
  //The showRules variable is set to false
  const [showRules, setShowRules] = useState(false);
  //The handleToggle function is created to toggle the showRules variable
  const handleToggle = () => {
    //The setShowRules function is called and the showRules variable is updated
    setShowRules(!showRules);
  };

  return (
    <div>
      {/*The button is created to toggle the showRules variable*/}
      <button className="btn btn-danger" onClick={handleToggle}>
        Help
      </button>
      {/*The showRules variable is checked to see if the rules should be displayed*/}
      {showRules && (
        <Container className="help-content">
          <h3>Hangman Game Rules</h3>
          <p>A player's objective is to identify a secret word of which only the number of letters is originally revealed by lines.</p>
          <p>In each round, the player guesses a letter of the alphabet: if it's present in the word, it is revealed, otherwise one of the 
            hangman's body parts is drawn in. The game ends in a win if the word is entirely revealed by correct guesses, and ends in loss 
            if the hangman's body is completely revealed instead. To assist the player, a visible record of all guessed letters is maintained.</p>
          <p>For this game, the player has 10 attempts to guess the word correctly.</p>
        </Container>
      )}
    </div>
  );
};

export default Help;
