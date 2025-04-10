import { Buttons } from "./components/Buttons";
import { GameZone } from "./components/GameZone";
import { useGame } from "./hooks/useGame";


function RPSApp() {

  const {
    playerHand,
    playerCounter,
    computerHand,
    computerCounter,
    resultMessage,
    playGame
  } = useGame();

  return (
    <>
      <h1 className="title">Rock, Paper, Scissors</h1>
      <p className="game-result">{resultMessage}</p>
      
      <GameZone playerCounter={playerCounter} playerHand={playerHand} computerHand={computerHand} computerCounter={computerCounter} />
      
      <Buttons game={playGame}/>
    </>
  )
}

export default RPSApp;
