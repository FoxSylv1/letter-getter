import "./Tile.scss"

function clickTile(tileUsed, submitTile) {
    if (!tileUsed) {
        submitTile();
    }
}

function Tile(props) {
    return (
        <div class="clickable-button tile">
            <button class={"tile " + (props.tileUsed ? "used-tile" : "unused-tile")}
                    onClick={() => clickTile(props.tileUsed, props.submitTile)}>
                {props.value}
            </button>
        </div>
    );
}

export default Tile;
