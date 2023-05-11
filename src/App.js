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
    const [hangmanStatus, sethangmanStatus] = useState(0);
    const [usedLetter, setUsedLetter] = useState([...alfabeto]);

    function startGame() {

        const palavra = getRandomWord(palavras);
        setWord(palavra);
        sethangmanStatus(0);
        setUsedLetter([]);
    }
    
    return (
        <>
            <Jogo startGame={startGame} hangmanStatus={hangmanStatus} word={word} />
            <Letras setUsedLetter={setUsedLetter} sethangmanStatus={sethangmanStatus} alfabeto={alfabeto} usedLetter={usedLetter} />
        </>
    );
}