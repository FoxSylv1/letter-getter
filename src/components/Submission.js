import './Submission.scss';

/* A submission entry in the submission list.
   Not to be confused with the CurrentSubmission. */
function Submission(props) {
    return (
        <div class="submission">
            <div class="submission-word">
                {props.submission.word}
            </div>
            <div class="submission-score">
                {props.submission.score}
            </div>
        </div>
    );
}

export default Submission;
