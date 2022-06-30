import Board from './Board';
import './LetterGetter.scss';


function LetterGetter() {
    return (
        <div id="LetterGetter">
            <div id="title-container">
                <h1>
                    Letter Getter
                </h1>
            </div>
            <div id="board-container">
                <Board name="main" />
            </div>
        </div>
    );
}

export default LetterGetter;
