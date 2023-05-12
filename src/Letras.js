function Letra(props) {
    
    const {letra, getUsedLetters, usedLetters, gameStatus} = props;

    let isDisabled;
    let keyClass;

    if (gameStatus === "win" || gameStatus === "game-over") {
        isDisabled = true;
        keyClass = "key disabled";
    } else {
        isDisabled = usedLetters.includes(letra) ? true : false;
        keyClass = isDisabled ? "key disabled" : "key";
    }

    return (
        <li>
            <button data-test="letter" type="button" className={keyClass} disabled={isDisabled} onClick={() => getUsedLetters(letra)}>{letra}</button>
        </li>
    );
}

export default function Letras(props) {

    const {getUsedLetters, usedLetters, gameStatus} = props;

    const alfabeto = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];

    return (
        <ul className="keyboard">
            {alfabeto.map(letra => <Letra key={letra} letra={letra} getUsedLetters={getUsedLetters} usedLetters={usedLetters} gameStatus={gameStatus} />)}
        </ul>
    );
}