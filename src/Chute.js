export default function Chute(props) {

    const {setNewGameState, parseSpecialChar, gameState} = props;
    const {word, guessValue, gameStatus} = gameState;

    function handleChange(event) {

        const newGameState = {guessValue: event.target.value};
        setNewGameState(newGameState);
    }

    function checkGuessValue() {

        const parsedGuessValue = parseSpecialChar(guessValue);
        let newGameState = {usedLetters: [...parsedGuessValue.toLowerCase()]};

        if (guessValue.toLowerCase() === word) {
            newGameState = Object.assign(newGameState, {
                gameStatus: "win",
            });
        } else {
            newGameState = Object.assign(newGameState, {
                gameStatus: "game-over",
                hangmanStatus: 6
            });
        }
        setNewGameState(newGameState);
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
                <input
                    data-test="guess-input"
                    className={textInputClass}
                    type="text" value={guessValue}
                    disabled={isDisabled}
                    onChange={handleChange}
                ></input>
                <button
                    data-test="guess-button"
                    className={submitButtonClass}
                    type="submit"
                    disabled={isDisabled}
                    onClick={checkGuessValue}
                >Chutar</button>
            </form>
        </div>
    );
}