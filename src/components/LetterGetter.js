import { useState } from 'react';
import Title from './Title';
import Board from './Board';
import CurrentSubmission from './CurrentSubmission';
import BoardManager from './BoardManager';
import SubmissionList from './SubmissionList';
import { generateBoard } from '../utilities/generateBoard.js';
import { dictionary } from '../data/dictionary.js';
import './LetterGetter.scss';

function submitTile(tileIndex, currentSubmission, setCurrentSubmission) {
    if (!currentSubmission.includes(tileIndex)) {
        setCurrentSubmission(currentSubmission.concat(tileIndex));
    }
}
function undoTile(currentSubmission, setCurrentSubmission) {
    setCurrentSubmission(currentSubmission.slice(0, -1));
}

function resetBoard(board, setBoard, setCurrentSubmission, setSubmissionList) {
    setBoard(board);
    setCurrentSubmission([]);
    setSubmissionList([]);
}

function submissionToString(board, currentSubmission) {
    var string = "";
    currentSubmission.forEach((tileIndex) => string += board[tileIndex]);
    return string;
}
function submitSubmission(board, currentSubmission, setCurrentSubmission, submissionList, setSubmissionList) {
    var newSubmission = {word: submissionToString(board, currentSubmission), score: 9999};
    if ((!submissionList.map((submission) => submission.word).includes(newSubmission.word)) && dictionary.includes(newSubmission.word.toLowerCase())) {
        setSubmissionList(submissionList.concat(newSubmission));
    }
    setCurrentSubmission([]);
}



function LetterGetter() {
    var [currentSubmission, setCurrentSubmission] = useState([]);
    var [submissionList, setSubmissionList] = useState([]);
    var [board, setBoard] = useState(generateBoard());

    return (
        <div id="LetterGetter">
            <div id="title-container">
                <Title>
                    Letter Getter
                </Title>
            </div>
            <div id="board-container">
                <Board name="main"
                       board={board}
                       currentSubmission={currentSubmission}
                       submitTile={(tileIndex) => submitTile(tileIndex, currentSubmission, setCurrentSubmission)}
                />
            </div>
            <div id="submission-container">
                <CurrentSubmission>
                    {submissionToString(board, currentSubmission)}
                </CurrentSubmission>
            </div>
            <div id="board-management-container">
               <BoardManager undoTile={() => undoTile(currentSubmission, setCurrentSubmission)}
                             submitSubmission={() => submitSubmission(board, currentSubmission, setCurrentSubmission, submissionList, setSubmissionList)}
                             scrambleBoard={() => resetBoard(generateBoard(), setBoard, setCurrentSubmission, setSubmissionList)}/> 
            </div>
            <div id="submission-list-container">
                <SubmissionList submissionList={submissionList} />
            </div>
        </div>
    );
}

export default LetterGetter;
