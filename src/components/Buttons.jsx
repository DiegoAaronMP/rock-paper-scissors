const hands = [
  { type: 'rock', emoji: '👊' },
  { type: 'paper', emoji: '✋' },
  { type: 'scissors', emoji: '✌️' }
];

export const Buttons = ({game}) => {
  
  return (
    <section className="buttons-container" aria-label="Choose your move">
        <h2>Choose an option</h2>

        {
          hands.map(({ type, emoji }) => (
            <button key={type} onClick={() => game(type)} aria-label={type} className="button">
              {emoji}
            </button>
          ))
        }

    </section>
  )
}
