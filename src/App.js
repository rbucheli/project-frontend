import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// Import Components
import Header from "./components/Header";
// Import Pages
import Home from "./pages/Home";
import Roster from "./pages/Roster";

function App(props) {
  const [unit, setUnit] = useState(null);

  const URL = "https://fe3h-backend.herokuapp.com/";

  // API call function for units
  const getUnit = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setUnit(data);
  };

  const createUnit = async (unit) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(unit),
    });
    getUnit();
  };

  useEffect(() => getUnit(), []);

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home unit={unit} createUnit={createUnit} />
          </Route>
          <Route
            path="/roster/:house"
            render={(routerProps) => <Roster unit={unit} {...routerProps} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;