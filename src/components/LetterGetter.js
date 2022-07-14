import { useState, useEffect } from 'react';
import Title from './Title';
import Board from './Board';
import CurrentSubmission from './CurrentSubmission';
import BoardManager from './BoardManager';
import SubmissionList from './SubmissionList';
import HowTo from './HowTo';
import { generateBoard } from '../utilities/generateBoard.js';
import { dailySeed } from '../utilities/dailySeed.js';
import { wordToTiles, tilesToWord } from '../utilities/converters.js';
import { dictionary } from '../data/dictionary.js';
import { validLetterKeys } from '../data/validLetterKeys.js';
import { wordScore } from '../utilities/wordScore.js';
import './LetterGetter.scss';

/*
Internally, the tiles used and word displayed are two differing values,
for the primary purpose of allowing inconsistencies between them. So
for example, it is possible to try and input a word which cannot be
spelled on the grid, and the differing values of the tiles used and
and the word would properly reflect that.

Using updateTiles() and updateWord() to change these values instead of
the default React set functions automatically keeps the other up-to-date.
*/


//Dual updaters
function updateTiles(board, newTiles, setCurrentTiles, setCurrentWord) {
    setCurrentTiles(newTiles);
    setCurrentWord(tilesToWord(board, newTiles));
}
function updateWord(board, newWord, setCurrentWord, setCurrentTiles) {
    setCurrentWord(newWord);
    setCurrentTiles(wordToTiles(board, newWord));
}

//Input Handlers
function clickTile(board, tileIndex, currentTiles, setCurrentTiles, setCurrentWord) {
    if (currentTiles[currentTiles.length - 1] === tileIndex) {
        updateTiles(board, currentTiles.slice(0, -1), setCurrentTiles, setCurrentWord);
    }
    else if (currentTiles.includes(tileIndex)) {
        updateTiles(board, currentTiles.slice(0, currentTiles.indexOf(tileIndex) + 1), setCurrentTiles, setCurrentWord);
    }
    else {
        updateTiles(board, currentTiles.concat(tileIndex), setCurrentTiles, setCurrentWord);
    }
}
function pressKey(rawKey, board, setBoard, currentWord, setCurrentWord, currentTiles, setCurrentTiles, submissionList, setSubmissionList, isDaily, setIsDaily) {
    var key = rawKey.toUpperCase();
    console.log(key);
    if (validLetterKeys.includes(key)) {
        if (currentWord.charAt(currentWord.length - 1) === "Q" && key === "U") {
            key = "u";
        }
        updateWord(board, currentWord.concat(key), setCurrentWord, setCurrentTiles);
    }
    else if (key === "BACKSPACE") {
        updateWord(board, currentWord.slice(0, -1), setCurrentWord, setCurrentTiles);
    }
    else if (key === "ENTER") {
        submitSubmission(board, currentWord, setCurrentWord, currentTiles, setCurrentTiles, submissionList, setSubmissionList);
    }
    else if (key === "CONTROL") {
        if (!isDaily) {
            resetBoard(generateBoard(), setBoard, setCurrentTiles, setCurrentWord, setSubmissionList);
        }
    }
    else if (key === "CAPSLOCK") {
        switchModes(isDaily, setIsDaily, setBoard, setCurrentTiles, setCurrentWord, setSubmissionList);
    }
    else if (key === "ESCAPE") {
        if (!isDaily) {
            setCustomBoard(setBoard, setCurrentTiles, setCurrentWord, setSubmissionList);
        }
    }
}



//Board Management
function switchModes(isDaily, setIsDaily, setBoard, setCurrentTiles, setCurrentWord, setSubmissionList) {
    if (isDaily) {
        resetBoard(generateBoard(), setBoard, setCurrentTiles, setCurrentWord, setSubmissionList);
    }
    else {
        resetBoard(generateBoard(dailySeed()), setBoard, setCurrentTiles, setCurrentWord, setSubmissionList);
    }
    setIsDaily(!isDaily);
}
function resetBoard(board, setBoard, setCurrentTiles, setCurrentWord, setSubmissionList) {
    setBoard(board);
    setCurrentTiles([]);
    setCurrentWord("");
    setSubmissionList([]);
}
function setCustomBoard(setBoard, setCurrentTiles, setCurrentWord, setSubmissionList) {
    var input = prompt("Please input your desired board:").toUpperCase();
    if (input !== null) {
        var newBoard = [];
        for (var c = 0; c < input.length; ++c) {
            var tile = input.charAt(c);
            if (validLetterKeys.includes(tile) && !(newBoard[newBoard.length - 1] === "Qu" && tile === "U")) {
                newBoard = newBoard.concat(tile === "Q" ? "Qu" : tile);
            }
        }
        if (newBoard.length > 0) {
            resetBoard(newBoard, setBoard, setCurrentTiles, setCurrentWord, setSubmissionList);
        }
    }
}
function submitSubmission(board, currentWord, setCurrentWord, currentTiles, setCurrentTiles, submissionList, setSubmissionList) {
    var newSubmission = {word: currentWord, score: wordScore(currentWord)};
    if ((!submissionList.map((submission) => submission.word).includes(currentWord)) && dictionary.includes(currentWord.toLowerCase()) && !currentTiles.includes(-1)) {
        var newSubmissionList = submissionList.concat(newSubmission);
        setSubmissionList(newSubmissionList.sort((s1, s2) => s2.score - s1.score));
    }
    updateWord(board, "", setCurrentWord, setCurrentTiles);
}



function LetterGetter() {
    var [currentTiles, setCurrentTiles] = useState([]);
    var [currentWord, setCurrentWord] = useState("");
    var [submissionList, setSubmissionList] = useState([]);
    var [board, setBoard] = useState(generateBoard(dailySeed()));
    var [isDaily, setIsDaily] = useState(true);

    useEffect(() => {
        var keyHandler = (e) => pressKey(e.key, board, setBoard, currentWord, setCurrentWord, currentTiles, setCurrentTiles, submissionList, setSubmissionList, isDaily, setIsDaily);
        window.addEventListener("keydown", keyHandler, false);
        return (() => {
            window.removeEventListener("keydown", keyHandler, false);});
    }, [board, currentWord, currentTiles, submissionList, isDaily]);


    return (
        <div id="LetterGetter">
            <div id="title-container">
                <Title isDaily={isDaily}>
                    Letter Getter
                </Title>
            </div>
            <div id="board-container">
                <Board name="main"
                       board={board}
                       currentTiles={currentTiles}
                       clickTile={(tileIndex) => clickTile(board, tileIndex, currentTiles, setCurrentTiles, setCurrentWord)}
                />
            </div>
            <div id="submission-container">
                <CurrentSubmission currentTiles={currentTiles}>
                    {currentWord}
                </CurrentSubmission>
            </div>
            <div id="board-management-container">
               <BoardManager undoTile={() => updateTiles(board, currentTiles.slice(0, -1), setCurrentTiles, setCurrentWord)}
                             submitSubmission={() => submitSubmission(board, currentWord, setCurrentWord, currentTiles, setCurrentTiles, submissionList, setSubmissionList)}
                             scrambleBoard={() => resetBoard(generateBoard(), setBoard, setCurrentTiles, setCurrentWord, setSubmissionList)}
                             switchModes={() => switchModes(isDaily, setIsDaily, setBoard, setCurrentTiles, setCurrentWord, setSubmissionList)}
                             setCustomBoard={() => setCustomBoard(setBoard, setCurrentTiles, setCurrentWord, setSubmissionList)}
                             isDaily={isDaily}
                /> 
            </div>
            <div id="submission-list-container">
                <SubmissionList submissionList={submissionList} />
            </div>
            <div>
                <HowTo />
            </div>
        </div>
    );
}

export default LetterGetter;
