import { useState } from "react"

const hands = ['rock', 'paper', 'scissors'];

export const useGame = () => {
    const [playerHand, setPlayerHand] = useState('');
    const [computerHand, setComputerHand] = useState('');
    const [playerCounter, setPlayerCounter] = useState(0);
    const [computerCounter, setComputerCounter] = useState(0);

    const playGame = (hand) => {
        setPlayerHand(hand);        
        const randomNumber = (Math.random() * (2 - 0)).toFixed(0);
        const cpuHand = hands[randomNumber];
        setComputerHand(cpuHand);
        
        if (hand === cpuHand ) {
            console.log('tie');
            return;
        } else if (hand === 'rock' && cpuHand === 'paper') {
            setComputerCounter(counter => counter + 1);
            return;
        } else if (hand === 'rock' && cpuHand === 'scissors') {
            setPlayerCounter(counter => counter + 1);
            return;
        } else if (hand === 'paper' && cpuHand === 'scissors') {
            setComputerCounter(counter => counter + 1);
            return;
        } else if (hand === 'paper' && cpuHand === 'rock') {
            setPlayerCounter(counter => counter + 1);
            return;
        } else if (hand === 'scissors' && cpuHand === 'rock') {
            setComputerCounter(counter => counter + 1);
            return;
        } else {
            setPlayerCounter(counter => counter + 1);
            return;
        }
    }

    return {
        playerHand,
        playerCounter,
        computerHand,
        computerCounter,
        playGame
    }
}
