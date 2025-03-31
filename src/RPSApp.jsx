import { Buttons } from "./components/Buttons";
import { GameZone } from "./components/GameZone";


function RPSApp() {

  return (
    <>
      <h1 className="title">Rock, Paper, Scissors</h1>
      
      <GameZone />
      
      <Buttons />
    </>
  )
}

export default RPSApp;
