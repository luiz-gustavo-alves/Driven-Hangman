export default function Jogo(props) {

    const hangmanImagePath = `./assets/forca${props.hangmanStatus}.png`;
    const word = props.word;

    return (
        <div className="hangman-status">
            <img src={hangmanImagePath} alt={props.hangmanStatus}/>
            <button type="button" className="start-game" onClick={props.startGame}>Escolher Palavra</button>
            <h1 className="guess-word">{word}</h1>
        </div>
    );
}