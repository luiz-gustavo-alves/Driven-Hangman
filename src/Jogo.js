export default function Jogo(props) {

    const {startGame, parseGuessWord, hangmanStatus, gameStatus} = props;

    const hangmanImagePath = `./assets/forca${hangmanStatus}.png`;
    const guessWord = parseGuessWord();
    const guessWordClass = `guess-word ${gameStatus}`;

    return (
        <div className="hangman-status">
            <img src={hangmanImagePath} alt={hangmanStatus}/>
            <button type="button" className="start-game" onClick={startGame}>Escolher Palavra</button>
            <h1 className={guessWordClass}>{guessWord}</h1>
        </div>
    );
}