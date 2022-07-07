import { dictionary } from '../data/dictionary.js';
import './CurrentSubmission.scss';

function CurrentSubmission(props) {
    return (
        <h2 id="current-submission" class={dictionary.includes(props.children.toLowerCase()) ? "valid-word" : "invalid-word"}>
            {props.children}
        </h2>
    );
}

export default CurrentSubmission;
