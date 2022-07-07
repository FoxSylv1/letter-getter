import './Title.scss';

function Title(props) {
    return (
        <h1 id="title">
            {props.children}
        </h1>
    );
}

export default Title;
