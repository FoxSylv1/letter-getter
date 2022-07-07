import './BoardManager.scss';

function BoardManager(props) {
    return (<>
        <button class="clickable-button control-button" onClick={() => props.undoTile()}>
            <p>
                Backspace
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
