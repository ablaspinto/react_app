import Message from "./Message";
import ListGroup from "./components/listGroup";
import { Alert } from "./components/Alert";
import { Button } from "./components/Button";
import { useState } from "react";
function App() {
  //let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];
  //const handleSelectedItem = (item: string) => {
  // console.log(item);
  //};
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>Press Me</Button>
    </div>
  );
}

export default App;
