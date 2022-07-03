import './BoardManager.scss';

function BoardManager(props) {
    return (
        <button class="clickable-button" id="reset-button" onClick={() => props.resetSubmission()}>
            <p>
                Reset
            </p>
        </button>
    );
}

export default BoardManager;
