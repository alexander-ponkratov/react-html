function App() {
    return (
        <header>
            <GridFirst maxWidth="1200px" display="grid" gridTemplateColumns="3" />
        </header>
    );
}

function GridFirst(props) {
    let gridTemplateColumns = '';
    let count = JSON.parse(props.gridTemplateColumns);
    let i = 0;
    if (props.gridTemplateColumns > 0) {
        for (i = 0; i < count; i++) {
            gridTemplateColumns += "auto ";
        }
    }
    return (
        <div className="container" style={{
            maxWidth: props.maxWidth}}>
            <div className="gridFirst" style={{
                display: props.display,
                gridTemplateColumns: gridTemplateColumns}}>
                {props.maxWidth}
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));