import { dictionary } from '../data/dictionary.js';
import './CurrentSubmission.scss';

function CurrentSubmission(props) {
    return (
        <h3 id="current-submission" class={dictionary.includes(props.children.toLowerCase()) ? "valid-word" : "invalid-word"}>
            {props.children}
        </h3>
    );
}

export default CurrentSubmission;
