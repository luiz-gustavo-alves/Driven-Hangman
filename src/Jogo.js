export default function Jogo(props) {

    const {startGame, parseGuessWord, hangmanStatus, gameStatus} = props;

    const hangmanImagePath = `./assets/forca${hangmanStatus}.png`;
    const guessWord = parseGuessWord();
    const guessWordClass = `guess-word ${gameStatus}`;

    return (
        <div className="hangman-status">
            <img data-test="game-image" src={hangmanImagePath} alt={hangmanStatus}/>
            <button data-test="choose-word" type="button" className="start-game" onClick={startGame}>Escolher Palavra</button>
            <h1 data-test="word" className={guessWordClass}>{guessWord}</h1>
        </div>
    );
}