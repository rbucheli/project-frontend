import { Link, BrowserRouter } from "react-router-dom";

function characterComponent(unit) {
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
    
        <h2>Black Eagles</h2>
        

        <Link to={`/roster/be`}>
          <div className="row">  
            {props.unit.map((unit) => (
                unit.startingHouse === "Black Eagles"
                  ? characterComponent(unit)
                  : null
            ))}
          </div>
          </Link>

        <Link to={`/roster/bl`} >
        <h2>Blue Lions</h2>
        <div className="row">
          {props.unit.map((unit) => (
              unit.startingHouse === "Blue Lions"
                ? characterComponent(unit)
                : null
          ))}
          </div>
          </Link>

        <Link to={`/roster/gd`} >
          <h2>Golden Deer</h2>
          <div className="row">
          {props.unit.map((unit) => (
              unit.startingHouse === "Golden Deer"
                ? characterComponent(unit)
                : null
          ))}
        </div>
        </Link>
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return props.unit ? loaded() : loading();
}

export default Home;