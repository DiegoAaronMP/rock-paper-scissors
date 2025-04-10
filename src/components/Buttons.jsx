const hands = [
  { type: 'rock', emoji: '👊' },
  { type: 'paper', emoji: '✋' },
  { type: 'scissors', emoji: '✌️' }
];

export const Buttons = ({game}) => {
  
  return (
    <section className="buttons-container">
        <p>Choose an option</p>

        {
          hands.map(({ type, emoji }) => (
            <button key={type} onClick={() => game(type)} className="button">
              {emoji}
            </button>
          ))
        }

    </section>
  )
}
