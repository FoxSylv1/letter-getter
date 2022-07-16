import { tilesToWord } from '../utilities/converters.js';
import './Submission.scss';

function copyToClipboard(board, tilesUsed, score, isDaily) {
    var clip = "";
    
    if (isDaily) {
        var timeElapsed = (new Date() - new Date(Date.UTC(2022, 6, 13, 0, 0, 0, 0)));
        clip = clip.concat("Puzzle " + Math.floor(timeElapsed / 86400000));
    }
    else {
        clip = clip.concat("Practice Score");
    }
    clip = clip.concat(": " + score + "pts");

    for (var i = 0; i < board.length; ++i) {
        if (i % 4 === 0) {
            clip = clip.concat("\n");
        }
        clip = clip.concat(tilesUsed.includes(i) ? "\u{1f7e9}" : "\u{2b1b}");
    }

    clip = clip.concat("\n<https://foxsylv1.github.io/letter-getter>");

    alert("Copy and Paste to Share!\n\n" + clip);
    navigator.clipboard.writeText(clip);
}


/* A submission entry in the submission list.
   Not to be confused with the CurrentSubmission. */
function Submission(props) {
    var word = tilesToWord(props.board, props.submission.tiles);

    return (
        <button class="submission" onClick={() => copyToClipboard(props.board, props.submission.tiles, props.submission.score, props.isDaily)}>
            <div class="submission-word">
                {word.slice(0, 20) + (word.length > 20 ? "..." : "")}
            </div>
            <div class="submission-score">
                {props.submission.score}
            </div>
        </button>
    );
}

export default Submission;
