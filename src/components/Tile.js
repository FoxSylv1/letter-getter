import './Tile.scss';

function Tile(props) {
    return (
        <div class="clickable-button tile">
            <button class={"tile " + (props.currentTiles.includes(props.tileIndex) ? "used-tile" : "unused-tile")}
                    onClick={() => props.clickTile()}>
                {props.value}
            </button>
            <div class="tile-num">
                {props.currentTiles.includes(props.tileIndex) ? props.currentTiles.indexOf(props.tileIndex) + 1 : ""}
            </div>
        </div>
    );
}

export default Tile;
