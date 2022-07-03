import "./Tile.scss"

/* Tile operates by having two "tiles," one for being in a state of on or off.
The "front" tile is the black on white background and is the starting, unused
state of the tiles. The "back" tile is the beige on black background and 
occurs when the tile is hovered over or submitted. */

function Tile(props) {
    var tileData = [];
    if (!props.tileUsed) {
        tileData.push(
            <button class="unused-tile tile" key={props.id + "-front"} onClick={() => props.submitTile()}>
                {props.value}
            </button>
        );
    }
    tileData.push(
        <div class="used-tile tile" key={props.id + "-back"}>
            {props.value}
        </div>
    );

    return (
        <div class="clickable-button tile">
            {tileData}
        </div>
    );
}

export default Tile;
