import { useState } from 'react';
import Board from './Board';
import './LetterGetter.scss';


function LetterGetter() {
    var [currentSubmission, setCurrentSubmission] = useState("");

    return (
        <div id="LetterGetter">
            <div id="title-container">
                <h1>
                    Letter Getter
                </h1>
            </div>
            <div id="board-container">
                <Board name="main" 
                       submitTile={(newTile) => setCurrentSubmission(currentSubmission + newTile)}
                />
            </div>
            <div>
                <h2 id={(currentSubmission === "polka") ? "valid-word" : "invalid-word"}>
                    {currentSubmission}
                </h2>
            </div>
        </div>
    );
}

export default LetterGetter;
