import './HowTo.scss';

function HowTo(props) {
    return (
        <div id="how-to">
            <h2>
                How To Play
            </h2>
            <p class="how-to-text">
                Spell the largest word you can find from the 4x4 grid of tiles.
                Each tile may only be used once, but tiles with the same letters
                can be used however many times the tile appears. Either click or
                type to input letters for submissions. You can submit as many
                times you would like for any given board.
            </p>

            <h2>
                Scoring
            </h2>
            <p class="how-to-text">
                Score is awarded based primarily on the length of the word,
                with more points being given for harder-to-use letters and
                harder-to-use sequences of letters. There is almost always
                at least one 100+ score word in each rack!
                <br />
                (although it may not be easy to find...)
            </p>
        </div>
    );
}

export default HowTo;
