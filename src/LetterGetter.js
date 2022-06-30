import {useState} from 'react';
import Board from './Board';
import './LetterGetter.scss';

function LetterGetter() {
    var [board, setBoard] = useState(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"]);

    return (
        <div id="LetterGetter">
            <div id="title-container">
                <h1>
                    Letter Getter
                </h1>
            </div>
            <div id="board-container">
                <Board board={board} name="main" />
            </div>
        </div>
    );
}

export default LetterGetter;
