import { useState } from "react"

import Jogo from "./Jogo"
import Letras from "./Letras"
import Chute from "./Chute"

/* Replaces special characters into normal characters */
function parseSpecialChar(word) {
    return word.normalize("NFD").replace(/\p{Diacritic}/gu, "");
}

export default function App() {

    const alfabeto = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];

    const [gameState, setGameState] = useState({
        word: "",
        hangmanStatus: 0,
        usedLetters: [],
        guessValue: "",
        gameStatus: "game-over"
    });

    function setNewGameState(newGameState) {

        setGameState(game => ({
            ...game,
            ...newGameState
        }));
    }

    return (
        <>
            <Jogo 
                setNewGameState={setNewGameState} 
                parseSpecialChar={parseSpecialChar} 
                gameState={gameState} 
            />
            <Letras 
                setNewGameState={setNewGameState} 
                parseSpecialChar={parseSpecialChar} 
                alfabeto={alfabeto} 
                gameState={gameState} 
            />
            <Chute 
                setNewGameState={setNewGameState}  
                parseSpecialChar={parseSpecialChar} 
                gameState={gameState} 
            />
        </>
    );
}