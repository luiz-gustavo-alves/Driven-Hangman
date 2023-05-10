function Letra(props) {

    const letra = props.letra;
    return (
        <li>
            <button className="key" disabled>{letra}</button>
        </li>
    );
}

export default function Letras() {

    const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
                      "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    return (
        <ul className="keyboard">
            {alfabeto.map(letra => < Letra key={letra} letra={letra}/>) }
        </ul>
    );
}