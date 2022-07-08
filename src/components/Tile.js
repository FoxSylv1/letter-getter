import './Tile.scss';

function Tile(props) {
    return (
        <div class="clickable-button tile">
            <button class={"tile " + (props.currentSubmission.includes(props.tileIndex) ? "used-tile" : "unused-tile")}
                    onClick={() => props.clickTile()}>
                {props.value}
            </button>
            <div class="tile-num">
                {props.currentSubmission.includes(props.tileIndex) ? props.currentSubmission.indexOf(props.tileIndex) + 1 : ""}
            </div>
        </div>
    );
}

export default Tile;
