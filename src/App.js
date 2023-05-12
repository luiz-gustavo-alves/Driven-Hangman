import { useState } from "react";
import Jogo from "./Jogo";
import Letras from "./Letras";
import Chute from "./Chute";
import palavras from "./palavras";

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomWord(palavras) {
    return palavras[randomInt(0, palavras.length - 1)];
}

export default function App() {

    const alfabeto = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];

    const [word, setWord] = useState("");
    const [hangmanStatus, setHangmanStatus] = useState(0);
    const [usedLetters, setUsedLetters] = useState([...alfabeto]);
    const [gameStatus, setGameStatus] = useState("game-over");
    const [guessValue, setGuessValue] = useState("");

    function parseGuessWord() {

        let guessWord = "";
        for (let i = 0; i < word.length; i++) {
            guessWord += usedLetters.includes(word[i]) ? word[i] : "_";
        }

        if (!guessWord.includes("_") && hangmanStatus < 6) {
            setGameStatus("win");
        }
        return guessWord;
    }
    
    function getUsedLetters(letter) {

        const currentUsedLetters = [...usedLetters, letter];
        setUsedLetters(currentUsedLetters);
        checkGuessWord(currentUsedLetters);
    }

    function checkGuessWord(usedLetters) {

        if (!word.includes(usedLetters[usedLetters.length - 1])) {
            setHangmanStatus(hangmanStatus + 1);

            if (hangmanStatus === 5) {
                setGameStatus("game-over");
                setUsedLetters([...alfabeto]);
            }
        }
    }

    function checkGuessValue(event) {

        event.preventDefault();

        if (guessValue.toLowerCase() === word) {
            setGameStatus("win");
            setUsedLetters(guessValue.toLowerCase());
        }
        else {
            setGameStatus("game-over");
            setUsedLetters([...alfabeto]);
            setHangmanStatus(6);
        }
    }

    function startGame() {

        const word = getRandomWord(palavras);
        setWord(word);
        setHangmanStatus(0);
        setUsedLetters([]);
        setGameStatus("playing");
        setGuessValue("");
    }

    return (
        <>
            <Jogo startGame={startGame} parseGuessWord={parseGuessWord} hangmanStatus={hangmanStatus} gameStatus={gameStatus} />
            <Letras getUsedLetters={getUsedLetters}  usedLetters={usedLetters} gameStatus={gameStatus} />
            <Chute setGuessValue={setGuessValue} checkGuessValue={checkGuessValue} guessValue={guessValue} gameStatus={gameStatus} />
        </>
    );
}