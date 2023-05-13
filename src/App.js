import { useState } from "react";

import Jogo from "./Jogo";
import Letras from "./Letras";
import Chute from "./Chute";

export default function App() {

    const alfabeto = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];

    const [game, setGame] = useState({
        word: "",
        hangmanStatus: 0,
        usedLetters: [],
        guessValue: "",
        gameStatus: "game-over"
    });

    function setNewGameState(newGameState) {

        setGame(game => ({
            ...game,
            ...newGameState
        }));
    }

    return (
        <>
            <Jogo setNewGameState={setNewGameState} game={game} />
            <Letras setNewGameState={setNewGameState} alfabeto={alfabeto} game={game} />
            <Chute setNewGameState={setNewGameState} game={game} />
        </>
    );
}