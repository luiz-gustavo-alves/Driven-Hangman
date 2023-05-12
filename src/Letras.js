function Letra(props) {
    
    const {letra, getUsedLetters, usedLetters} = props;

    const isDisabled = usedLetters.includes(letra) ? true : false;
    const keyClass = isDisabled ? "key disabled" : "key";

    return (
        <li>
            <button type="button" className={keyClass} disabled={isDisabled} onClick={() => getUsedLetters(letra)}>{letra}</button>
        </li>
    );
}

export default function Letras(props) {

    const {getUsedLetters, usedLetters} = props;

    const alfabeto = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ];

    return (
        <ul className="keyboard">
            {alfabeto.map(letra => <Letra key={letra} letra={letra} getUsedLetters={getUsedLetters} usedLetters={usedLetters} />)}
        </ul>
    );
}