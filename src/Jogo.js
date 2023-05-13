import { HangmanContent, GuessWord } from "./styles/jogo";
import palavras from "./palavras";

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
}

function getRandomWord(palavras) {
    return palavras[randomInt(0, palavras.length - 1)];
}

export default function Jogo(props) {

    const {setNewGameState, parseSpecialChar, gameState} = props;
    const {word, hangmanStatus, usedLetters, gameStatus} = gameState;

    function startGame() {

        const randomWord = getRandomWord(palavras);
        const newGameState = {
            word: randomWord,
            hangmanStatus: 0,
            usedLetters: [],
            guessValue: "",
            gameStatus: "playing"
        };
        setNewGameState(newGameState);
    }

    function parseGuessWord() {

        let guessWord = "";
        if (gameStatus === "win" || gameStatus === "game-over") guessWord = word;
        else {

            for (let i = 0; i < word.length; i++) {
                guessWord += usedLetters.includes(parseSpecialChar(word[i])) ? word[i] : "_";
            }

            if (!guessWord.includes("_") && hangmanStatus < 6) {
                const newGameState = {gameStatus: "win"};
                setNewGameState(newGameState);
            }
        }
        return guessWord;
    }

    function selectGuessWordColor() {

        if (gameStatus === "win") return "#27AE60";
        if (gameStatus === "game-over") return "#FF0000";
        return "#000000";
    }

    const guessWord = parseGuessWord();
    const guessWordColor = selectGuessWordColor();
    const hangmanImagePath = `./assets/forca${hangmanStatus}.png`;

    return (
        <HangmanContent>
            <img data-test="game-image" src={hangmanImagePath} alt={hangmanStatus}/>
            <button
                data-test="choose-word"
                type="button"
                onClick={startGame}
                >Escolher Palavra
            </button>
            <GuessWord data-test="word" guessWordColor={guessWordColor}>{guessWord}</GuessWord>
        </HangmanContent>
    );
}