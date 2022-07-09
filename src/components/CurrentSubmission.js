import { dictionary } from '../data/dictionary.js';
import './CurrentSubmission.scss';

function CurrentSubmission(props) {
    var wordType = "illegal-word";
    if (!props.currentTiles.includes(-1)) {
        wordType = dictionary.includes(props.children.toLowerCase()) ? "valid-word" : "invalid-word";
    }

    return (
        <h3 id="current-submission" className={wordType}>
            {props.children}
        </h3>
    );
}

export default CurrentSubmission;
