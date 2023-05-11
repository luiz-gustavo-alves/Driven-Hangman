function Letra(props) {

    const usedLetter = props.usedLetter;

    function getUsedLetters(letra) {
        props.setUsedLetter([...usedLetter, letra]);
    }

    const letra = props.letra;
    const isDisabled = props.usedLetter.includes(letra) ? true : false;
    const keyClass = isDisabled ? "key disabled" : "key"; 

    return (
        <li>
            <button type="button" className={keyClass} disabled={isDisabled} onClick={() => getUsedLetters(letra)}>{letra}</button>
        </li>
    );
}

export default function Letras(props) {

    const alfabeto = props.alfabeto;

    return (
        <ul className="keyboard">
            {alfabeto.map((letra, index) => <Letra key={letra} setUsedLetter={props.setUsedLetter} usedLetter={props.usedLetter} letra={letra}/>)}
        </ul>
    );
}