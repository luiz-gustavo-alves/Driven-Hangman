import parseSpecialChar from "./utils";

function Letra(props) {
    
    const {letra, setNewGameState, game} = props;
    const {word, hangmanStatus, usedLetters, gameStatus} = game;

    function checkGuessWord(usedLetters) {

        let newGameState = {usedLetters: usedLetters};
        const parsedWord = parseSpecialChar(word);
        const lastUsedLetter = usedLetters[usedLetters.length - 1];

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

    let isDisabled, keyClass;
    if (gameStatus === "win" || gameStatus === "game-over") {
        isDisabled = true;
        keyClass = "key disabled";
    } else {
        isDisabled = usedLetters.includes(letra) ? true : false;
        keyClass = isDisabled ? "key disabled" : "key";
    }

    return (
        <li>
            <button 
                data-test="letter" 
                type="button" 
                className={keyClass} 
                disabled={isDisabled} 
                onClick={() => getUsedLetters(letra)}
            >{letra}</button>
        </li>
    );
}

export default function Letras(props) {

    const {setNewGameState, alfabeto, game} = props;

    return (
        <ul className="keyboard">
            {alfabeto.map(letra => <Letra
                key={letra}
                letra={letra}
                setNewGameState={setNewGameState}
                game={game}
            />)}
        </ul>
    );
}