import './Tile.scss';

function clickTile(currentSubmission, tileIndex, submitTile) {
    if (!currentSubmission.includes(tileIndex)) {
        submitTile();
    }
}

function Tile(props) {
    return (
        <div class="clickable-button tile">
            <button class={"tile " + (props.currentSubmission.includes(props.tileIndex) ? "used-tile" : "unused-tile")}
                    onClick={() => clickTile(props.currentSubmission, props.tileIndex, props.submitTile)}>
                {props.value}
            </button>
        </div>
    );
}

export default Tile;
