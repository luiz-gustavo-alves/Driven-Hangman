export default function Chute(props) {

    const {setGuessValue, checkGuessValue, guessValue, gameStatus} = props;

    function handleChange(event) {
        setGuessValue(event.target.value);
    }

    let isDisabled;

    if (gameStatus === "win" || gameStatus === "game-over") {
        isDisabled = true;
    } else {
        isDisabled = false;
    }

    const textInputClass = isDisabled ? "text-input input-disabled" : "text-input";
    const submitButtonClass = isDisabled ? "submit-button disabled" : "submit-button";

    return (
        <div className="guesstimate">
            <h2>Já sei a palavra!</h2>
            <form>
                <input data-test="guess-input" className={textInputClass} type="text" value={guessValue} disabled={isDisabled} onChange={handleChange} ></input>
                <button data-test="guess-button" className={submitButtonClass} type="submit" disabled={isDisabled} onClick={checkGuessValue}>Chutar</button>
            </form>
        </div>
    );
}