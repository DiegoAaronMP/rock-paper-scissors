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
        // Another way to do this: Math.floor(Math.random() * 3) 
        const cpuHand = hands[(Math.random() * (2 - 0)).toFixed(0)];
        setComputerHand(cpuHand);
        
        const winner = determineWinner(hand, cpuHand);

        if (winner === 'player') {
            setResultMessage('Player wins!');
            setPlayerCounter(counter => counter + 1);
        } else if (winner === 'computer') { 
            setResultMessage('Computer wins!');
            setComputerCounter(counter => counter + 1);
        } else {
            setResultMessage("It's a tie!");
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
