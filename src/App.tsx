// import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";


function App() {
    // let items = ['San Francisco', 'Tokyo', 'London', 'New York', 'Paris'];
    // const handleSelectItem = (item: string) => {
    //     console.log(item);
    // };
    const [alertVisible, setAlertVisible] = useState(false);

    return (
        <div>
            {/* <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}/> */}
            { alertVisible && <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>}
            <Button color='primary ' onClick={() => setAlertVisible(true)}>
                My Button
            </Button>
        </div>
    )
};

export default App;
