/***HANGMAN.JS FILE***/
//Import React and useState
import React, { useState } from 'react';
//Import connect from react-redux
import { connect } from 'react-redux';
//Import the getRandomWord function from the randomWord.js file
import { getRandomWord } from './randomWord';
//Import the Hangman.css file
import './Hangman.css';
//Import the bootstrap.min.css file
import 'bootstrap/dist/css/bootstrap.min.css';
//Import the Button component from react-bootstrap
import { Button } from 'react-bootstrap';
//Import the images
import step0 from './images/state1.GIF';
import step1 from './images/state2.GIF';
import step2 from './images/state3.GIF';
import step3 from './images/state4.GIF';
import step4 from './images/state5.GIF';
import step5 from './images/state6.GIF';
import step6 from './images/state7.GIF';
import step7 from './images/state8.GIF';
import step8 from './images/state9.GIF';
import step9 from './images/state10.gif';
import step10 from './images/state11.GIF';

//Create the Hangman component
//The Hangman component receives the maxWrong and images props
//The Hangman component uses the useState hook to create the mistake, guessed and answer variables
const Hangman = ({ maxWrong, images }) => {
    //The mistake variable is set to 0
    const [mistake, setMistake] = useState(0);
    //The guessed variable is set to an empty Set
    const [guessed, setGuessed] = useState(new Set([]));
    //The answer variable is set to the result of the getRandomWord function
    const [answer, setAnswer] = useState(getRandomWord());

    //The handleGuess function is created and receives an event
    const handleGuess = (e) => {
        //The letter variable is set to the value of the event
        let letter = e.target.value;
        //The setGuessed function is called and the guessed variable is updated with the letter variable
        setGuessed((guessed) => new Set(guessed.add(letter)));
        //The setMistake function is called and the mistake variable is updated
        setMistake((mistake) => mistake + (answer.includes(letter) ? 0 : 1));
    };
    //The guessedWord function is created
    // The split method splits the answer variable into an array of substrings
    const guessedWord = () => {
        return answer.split("").map((letter) => (guessed.has(letter) ? letter : " _ "));
    };

    //The generateButtons function is created to generate the buttons for the letters
    const generateButtons = () => {
        return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
            <Button
                className="btn btn-lg btn-success m-2"
                key={letter}
                value={letter}
                onClick={handleGuess}
                disabled={guessed.has(letter)}
            >
                {letter}
            </Button>
        ));
    };

    //The resetButton function is created to reset the game when the user clicks the Restart Game button
    const resetButton = () => {
        setMistake(0);
        setGuessed(new Set([]));
        setAnswer(getRandomWord());
    };

    //The gameOver variable is result of the comparison between the mistake and maxWrong variables and checks if its greater than or equal to the maxWrong variable 
    //so that the game is over when the user has made 10 mistakes
    const gameOver = mistake >= maxWrong;
    //The isWinner variable is the result of the comparison between the guessedWord function and the answer variable
    const isWinner = guessedWord().join("") === answer;
    let gameStat = generateButtons();
    //If the isWinner variable is true, the gameStat variable is set to 'You Won'!!!
    if (isWinner) {
        gameStat = "You Won!!!";
    }
    //If the gameOver variable is true, the gameStat variable is set to 'You Lost'!!!
    if (gameOver) {
        gameStat = "You Lost!!!";
    }

    return (
        <div className="Hangman container">
            <div className="float-right"><h3>Wrong Guesses: <span className='red'>{mistake}</span> of <span className='red'>{maxWrong}</span></h3></div>
            <div className="text-center">
                {/*The images array is used to display the images*/}
                <img src={images[mistake]} alt="" />
            </div>
            <div className="text-center">
                <p>Guess the Word:</p>
                {/*The guessWord function is called if the gameOver variable is false*/}
                <p>{!gameOver ? guessedWord() : answer}</p>
                <p>{gameStat}</p>
                {/*Restart Game button*/}
                <Button className="btn btn-warning" onClick={resetButton}>Restart Game</Button>
            </div>

        </div>
    );
};

//The mapStateToProps function is created to map the state to the props
const mapStateToProps = () => ({
    maxWrong: 10,
    images: [step0, step1, step2, step3, step4, step5, step6, step7, step8, step9, step10]
});
//The Hangman component is exported
export default connect(mapStateToProps)(Hangman);
