import { Keyboard, Key } from "./styles/letras";

function Letra(props) {

    const {letra, setNewGameState, parseSpecialChar, gameState} = props;
    const {word, hangmanStatus, usedLetters, gameStatus} = gameState;

    function checkGuessWord(currentUsedLetters) {

        let newGameState = {usedLetters: currentUsedLetters};

        const parsedWord = parseSpecialChar(word);
        const lastUsedLetter = currentUsedLetters[currentUsedLetters.length - 1];

        if (!parsedWord.includes(lastUsedLetter)) {
            newGameState = Object.assign(newGameState, {
                hangmanStatus: hangmanStatus + 1
            });

            if (hangmanStatus === 5) {
                newGameState = Object.assign(newGameState, {
                    gameStatus: "game-over",
                });
            }
        }
        setNewGameState(newGameState);
    }

    function getUsedLetters(letter) {

        const currentUsedLetters = [...usedLetters, letter];
        checkGuessWord(currentUsedLetters);
    }

    function checkDisabledKey(letra) {

        if (gameStatus === "win" || gameStatus === "game-over") return true;
        else {
            return usedLetters.includes(letra) ? true : false;
        }
    }

    const isDisabled = checkDisabledKey(letra);

    return (
        <li>
            <Key
                data-test="letter"
                type="button"
                disabled={isDisabled}
                onClick={() => getUsedLetters(letra)}
            >{letra}</Key>
        </li>
    );
}

export default function Letras(props) {

    const {setNewGameState, parseSpecialChar, alfabeto, gameState} = props;

    return (
        <Keyboard>
            {alfabeto.map(letra => 
            <Letra
                key={letra}
                letra={letra}
                setNewGameState={setNewGameState}
                parseSpecialChar={parseSpecialChar}
                gameState={gameState}
            />)}
        </Keyboard>
    );
}