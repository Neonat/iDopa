import "/Users/natsim/iDopa/src/App.css";
import ListGroup from "./components/ListGroup.tsx";
import React, { useState } from "react";
import Alert from "./components/Alert.tsx";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>
  );
}

export default App;
