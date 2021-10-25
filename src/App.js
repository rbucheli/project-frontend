import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
// Import Components
import Header from "./components/Header";
// Import Pages
import Home from "./pages/Home";
import Roster from "./pages/Roster";

function App(props) {
  const [unit, setUnit] = useState(null);

  const URL = "http://fe3h-backend.herokuapp.com/";

  // API call function for units
  const getUnit = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setUnit(data)
    // line 18 does what, exactly?
  };
  
  useEffect(() => getUnit(), []);

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home unit={unit} />
        </Route>
        <Route path="/roster">
          <Roster />
        </Route>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;