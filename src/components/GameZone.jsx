
const handToEmoji = {
  rock: "👊",
  paper: "✋",
  scissors: "✌️"
}

export const GameZone = ({playerHand, playerCounter, computerHand, computerCounter}) => {
  return (
    <section className="gamezone-container" aria-label="Game status">
        <div>
            <span className="gamezone-score-text">Player: {playerCounter}</span>
            <div className="gamezone-emoji-container">
              { handToEmoji[playerHand] || '' }
            </div>
        </div>

        <p className="versus">Vs.</p>

        <div>
            <span className="gamezone-score-text">Computer: {computerCounter}</span>
            <div className="gamezone-emoji-container">
                { handToEmoji[computerHand] || '' }
            </div>
        </div>
    </section>
  )
}
