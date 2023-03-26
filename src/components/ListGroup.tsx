import { MouseEvent } from "react";

function ListGroup () {
    let items = ['San Francisco', 'Tokyo', 'London', 'New York', 'Paris'];

    //Event Handler
    const handleClick = (event: MouseEvent) => {
        if (event.currentTarget.textContent === 'Tokyo') {
            console.log('Testing for certain click options') 
        }
        console.log(event);
    };

    return (
        <>
            <h1>List heading</h1>
            { items.length === 0 && <p>No items found</p> }
            <ul className="list-group">
                {items.map((item, index) => <li
                                    className="list-group-item"
                                    key={item}
                                    onClick={handleClick}>
                                        {item}
                                    </li>)}
            </ul>
        </>
    );
};

export default ListGroup;