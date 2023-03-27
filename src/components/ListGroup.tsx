import { useState } from "react";

//{ items: [], heading: '' }
interface Props {
    items: string[],
    heading: string,
    onSelectItem: (item: string) => void,
}

//destructure props {it, hea}
function ListGroup ({items, heading, onSelectItem}: Props) {
    //State Hook data/state that will change overtime
    const [selectedIndex, setSelectedIndex] = useState(-1) //selectedindex is the func to change the state

    return (
        <>
            <h1>{heading}</h1>
            { items.length === 0 && <p>No items found</p> }
            <ul className="list-group">
                {items.map((item, index) => <li
                                    className={selectedIndex===index ? 'list-group-item active': 'list-group-item'}
                                    key={item}
                                    onClick={() => {
                                        setSelectedIndex(index)
                                        onSelectItem(item)
                                    }}>
                                        {item}
                                    </li>)}
            </ul>
        </>
    );
};

export default ListGroup;