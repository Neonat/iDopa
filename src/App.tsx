import "/Users/natsim/iDopa/src/App.css";
import ListGroup from "./components/ListGroup.tsx";
import React, { useState } from "react";
import Alert from "./components/Alert.tsx";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      <Header />
      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>
            Submitted! Hold on tight until your schedule is out.
          </Alert>
        )}
      </div>
      <Button onClick={() => setAlertVisibility(true)}>Upload</Button>
    </div>
  );
}

export default App;
