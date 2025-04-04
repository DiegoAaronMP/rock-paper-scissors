

export const GameZone = ({playerHand, playerCounter, computerHand, computerCounter}) => {
  return (
    <section className="gamezone-container">
        <div>
            <span className="gamezone-score-text">Player: {playerCounter}</span>
            <div className="gamezone-emoji-container">
              {
                playerHand === 'rock' 
                  ? '👊'
                  : playerHand === 'paper'
                  ? '✋' 
                  : playerHand === 'scissors'
                  ? '✌️'
                  : ''
              }
            </div>
        </div>

        <p className="versus">Vs.</p>

        <div>
            <span className="gamezone-score-text">Computer: {computerCounter}</span>
        <div className="gamezone-emoji-container">
          {
            computerHand === 'rock'
              ? '👊'
              : computerHand === 'paper'
              ? '✋'
              : computerHand === 'scissors'
              ? '✌️'
              : ''
          }
        </div>
        </div>
    </section>
  )
}
