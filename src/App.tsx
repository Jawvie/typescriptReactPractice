import ListGroup from "./components/ListGroup";

function App() {
    let items = ['San Francisco', 'Tokyo', 'London', 'New York', 'Paris'];

    return (
        <div>
            <ListGroup items={items} heading='Cities'/>
        </div>
    )
};

export default App;
