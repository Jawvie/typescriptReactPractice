// import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";


function App() {
    // let items = ['San Francisco', 'Tokyo', 'London', 'New York', 'Paris'];
    // const handleSelectItem = (item: string) => {
    //     console.log(item);
    // };

    return (
        <div>
            {/* <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}/> */}
            <Alert>
                Hello<span> World</span>
            </Alert>
            <Button color='primary' onClick={() => console.log('Clicked')}>
                My Button
            </Button>
        </div>
    )
};

export default App;
