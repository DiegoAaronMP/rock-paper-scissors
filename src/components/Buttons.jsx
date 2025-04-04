
export const Buttons = ({game}) => {
  
  return (
    <section className="buttons-container">
        <p>Choose an option</p>

        <button onClick={() => game('rock')} className="button">
            👊
        </button>

        <button onClick={() => game('paper')} className="button">
            ✋
        </button>

        <button onClick={() => game('scissors')} className="button">
            ✌️
        </button>
    </section>
  )
}
