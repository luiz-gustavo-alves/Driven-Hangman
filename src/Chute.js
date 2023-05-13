import { InputContainer, InputContent, SubmitContent } from "./styles/chute";

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

    function checkDisabledInput() {
        
        if (gameStatus === "win" || gameStatus === "game-over") return true;
        return false;
    }

    const isDisabled = checkDisabledInput();
    const placeholderInputText = isDisabled ? guessValue : "Digite a palavra...";

    return (
        <InputContainer>
            <h2>Já sei a palavra!</h2>
            <form>
                <InputContent
                    data-test="guess-input"
                    type="text"
                    placeholder={placeholderInputText}
                    value={guessValue}
                    disabled={isDisabled}
                    onChange={handleChange}
                ></InputContent>
                <SubmitContent
                    data-test="guess-button"
                    type="submit"
                    disabled={isDisabled}
                    onClick={checkGuessValue}
                >Chutar</SubmitContent>
            </form>
        </InputContainer>
    );
}