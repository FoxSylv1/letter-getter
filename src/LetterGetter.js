import { useState } from 'react';
import Board from './Board';
import { dictionary } from './dictionary.js';
import BoardManager from './BoardManager';
import './LetterGetter.scss';

function submitTile(tileData, index, isTileUsed, setIsTileUsed, currentSubmission, setCurrentSubmission) {
    var newIsTileUsed = isTileUsed.slice();
    newIsTileUsed[index] = true;
    setIsTileUsed(newIsTileUsed);
    setCurrentSubmission(currentSubmission + tileData);
}

function resetSubmission(isTileUsed, setIsTileUsed, setCurrentSubmission) {
    setIsTileUsed(new Array(isTileUsed.length).fill(false));
    setCurrentSubmission("");
}


function LetterGetter() {
    const DEFAULT_BOARD_SIZE = 16;

    var [currentSubmission, setCurrentSubmission] = useState("");
    var [isTileUsed, setIsTileUsed] = useState(new Array(DEFAULT_BOARD_SIZE).fill(false));
    var [board, setBoard] = useState(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"]);


    return (
        <div id="LetterGetter">
            <div id="title-container">
                <h1>
                    Letter Getter
                </h1>
            </div>
            <div id="board-container">
                <Board name="main"
                       board={board}
                       isTileUsed={isTileUsed}
                       submitTile={(tileData, index) => submitTile(tileData, index, isTileUsed, setIsTileUsed, currentSubmission, setCurrentSubmission)}
                />
            </div>
            <div id="submission-container">
                <h2 id={dictionary.includes(currentSubmission.toLowerCase()) ? "valid-word" : "invalid-word"}>
                    {currentSubmission}
                </h2>
            </div>
            <div id="board-management-container">
               <BoardManager resetSubmission={() => resetSubmission(isTileUsed, setIsTileUsed, setCurrentSubmission)}
                              setBoard={(board) => setBoard(board)}/> 
            </div>
        </div>
    );
}

export default LetterGetter;
