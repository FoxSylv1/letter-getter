import './BoardManager.scss';

function BoardManager(props) {
    return (<>
        <button class="clickable-button control-button" onClick={() => props.resetSubmission()}>
            <p>
                Reset
            </p>
        </button>
        <button class="clickable-button control-button" onClick={() => props.submitSubmission()}>
            <p>
                Submit
            </p>
        </button>
        <button class="clickable-button control-button" onClick={() => props.scrambleBoard()}>
            <p>
                Scramble
            </p>
        </button>
    </>);
}

export default BoardManager;
