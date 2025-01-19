import "/Users/natsim/iDopa/src/App.css";
import ListGroup from "./components/ListGroup.tsx";
import React, { useState } from "react";
import Alert from "./components/Alert.tsx";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  //Schedule
  let items = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  //Alerts and others
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
        <div>
          <ListGroup
            items={items}
            heading="Week"
            onSelectItem={handleSelectItem}
          />
        </div>
      </div>
      <Button
        style={{ marginTop: "20px" }}
        onClick={() => setAlertVisibility(true)}
      >
        Upload
      </Button>
    </div>
  );
}

export default App;
