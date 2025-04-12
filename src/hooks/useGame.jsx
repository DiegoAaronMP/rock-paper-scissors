import { useState } from "react";

const hands = ['rock', 'paper', 'scissors'];

const determineWinner = (player, computer) => {
    // Determines if it is a tie
    if (player === computer) return "tie";

    // The object structure looks like this.
    // player's hand (winner hand): loser hand 
    // rocks beats scissors
    const wins = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    // Determines the winner
    // * wins[rock] === computer
    // *    'scissors' === 'scissors'
    return wins[player] === computer ? "player" : "computer";
};

export const useGame = () => {
    const [playerHand, setPlayerHand] = useState('');
    const [computerHand, setComputerHand] = useState('');
    const [playerCounter, setPlayerCounter] = useState(0);
    const [computerCounter, setComputerCounter] = useState(0);
    const [resultMessage, setResultMessage] = useState('');

    const playGame = (hand) => {
        setPlayerHand(hand);        
        const randomNumber = (Math.random() * (2 - 0)).toFixed(0);
        const cpuHand = hands[randomNumber];
        setComputerHand(cpuHand);
        
        if (hand === cpuHand ) {
            setResultMessage("It's a tie!");
            return;
        } else if (hand === 'rock' && cpuHand === 'paper') {
            setResultMessage('Computer wins!');
            setComputerCounter(counter => counter + 1);
            return;
        } else if (hand === 'rock' && cpuHand === 'scissors') {
            setResultMessage('Player wins!');
            setPlayerCounter(counter => counter + 1);
            return;
        } else if (hand === 'paper' && cpuHand === 'scissors') {
            setResultMessage('Computer wins!');
            setComputerCounter(counter => counter + 1);
            return;
        } else if (hand === 'paper' && cpuHand === 'rock') {
            setResultMessage('Player wins!');
            setPlayerCounter(counter => counter + 1);
            return;
        } else if (hand === 'scissors' && cpuHand === 'rock') {
            setResultMessage('Computer wins!');
            setComputerCounter(counter => counter + 1);
            return;
        } else {
            setResultMessage('Player wins!');
            setPlayerCounter(counter => counter + 1);
            return;
        }
    }

    return {
        playerHand,
        playerCounter,
        computerHand,
        computerCounter,
        resultMessage,
        playGame
    }
}
