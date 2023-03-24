function ListGroup () {
    let items = ['San Francisco', 'Tokyo', 'London', 'New York', 'Paris'];
    items = [];

    return (
        <>
            <h1>List heading</h1>
            { items.length === 0 && <p>No items found</p> }
            <ul className="list-group">
                {items.map(item => <li key={item}>{item}</li>)}
            </ul>
        </>
    );
};

export default ListGroup;