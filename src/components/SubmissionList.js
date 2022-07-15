import Submission from './Submission';
import './SubmissionList.scss';

function SubmissionList(props) {
    var submissions = props.submissionList.map((submission) =>
        <Submission key={submission.word}
                    submission={submission}
                    board={props.board}
                    isDaily={props.isDaily}
        />
    );

    return (
        <div id="submission-list">
            <h2 id="submission-list-header">
                {props.submissionList.length > 0 ? "Submission List" : ""}
            </h2>
            <div id="submission-list-words">
                {submissions}
            </div>
        </div>
    );
}

export default SubmissionList;
