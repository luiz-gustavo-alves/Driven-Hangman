import { useState } from "react";
import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "./palavras";

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomWord(palavras) {
    return palavras[randomInt(0, palavras.length - 1)];
}

export default function App() {

    const alfabeto = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ];

    const [word, setWord] = useState("");
    const [hangmanStatus, setHangmanStatus] = useState(0);
    const [usedLetters, setUsedLetters] = useState([...alfabeto]);
    const [gameStatus, setGameStatus] = useState("game-over");

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
                setUsedLetters([...alfabeto]);
                setGameStatus("game-over");
            }
        }
    }

    function startGame() {

        const word = getRandomWord(palavras);
        setWord(word.toUpperCase());
        setHangmanStatus(0);
        setUsedLetters([]);
        setGameStatus("playing");
    }

    return (
        <>
            <Jogo startGame={startGame} parseGuessWord={parseGuessWord} hangmanStatus={hangmanStatus} gameStatus={gameStatus} />
            <Letras getUsedLetters={getUsedLetters} usedLetters={usedLetters} />
        </>
    );
}