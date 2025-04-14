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
    <main className="wrapper">
      <header>
        <h1 className="title">Rock, Paper, Scissors</h1>
      </header>
      
      <section aria-live="polite">
        <p className="game-result">{resultMessage}</p>
      </section>
      
      <GameZone playerCounter={playerCounter} playerHand={playerHand} computerHand={computerHand} computerCounter={computerCounter} />
      
      <Buttons game={playGame}/>
    </main>
  )
}

export default RPSApp;
