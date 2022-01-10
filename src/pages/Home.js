import { Link, BrowserRouter } from "react-router-dom";
import { useState } from "react";

function characterComponent(unit, createUnit) {
  return (
    <div className="col-md-2">
      <img src={unit.image} className="unitImg" />
      <div>{unit.name}</div>
    </div>
  );
}

function Home(props) {
  // loaded function
  const loaded = () => {
    return (
      <div className="container">
        <Link to={`/roster/be`} style={{ textDecoration: 'none', color: 'white', fontSize: "30px" }}>
        <h2>Black Eagles</h2>
          <div className="row">
            {props.unit.map((unit) =>
              unit.startingHouse === "Black Eagles"
                ? characterComponent(unit)
                : null
            )}
          </div>
        </Link>

        <Link to={`/roster/bl`}style={{ textDecoration: 'none', color: 'white', fontSize: "22px" }}>
          <h2>Blue Lions</h2>
          <div className="row">
            {props.unit.map((unit) =>
              unit.startingHouse === "Blue Lions"
                ? characterComponent(unit)
                : null
            )}
          </div>
        </Link>

        <Link to={`/roster/gd`}style={{ textDecoration: 'none', color: 'white', fontSize: "22px" }}>
          <h2>Golden Deer</h2>
          <div className="row">
            {props.unit.map((unit) =>
              unit.startingHouse === "Golden Deer"
                ? characterComponent(unit)
                : null
            )}
          </div>
        </Link>

        {/* <Link to={`/roster/cs`}>
          <h2>Church of Seiros</h2>
          <div className="row">
            {props.unit.map((unit) =>
              unit.startingHouse === "Church of Seiros"
                ? characterComponent(unit)
                : null
              )}
            </div>
          </Link> */}
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return props.unit ? loaded() : loading();
}

export default Home;