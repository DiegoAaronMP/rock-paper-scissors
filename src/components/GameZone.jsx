

export const GameZone = () => {
  return (
    <section className="gamezone-container">
        <div>
            <span className="gamezone-score-text">Player: 0</span>
            <div className="gamezone-emoji-container"></div>
        </div>

        <p className="versus">Vs.</p>

        <div>
            <span className="gamezone-score-text">Computer: 0</span>
            <div className="gamezone-emoji-container"></div>
        </div>
    </section>
  )
}
