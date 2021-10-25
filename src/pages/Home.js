import { Link, BrowserRouter } from "react-router-dom"

function Home(props) {

  // loaded function
  const loaded = () => {
    return props.unit.map((unit) => (
      <div class='row'>
        {/* if (startingHouse === "Black Eagles") {
        
        } */}
        <h1>{unit.name}</h1>
        <img src={unit.image} className="unitImg" />
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return props.unit ? loaded() : loading();
}

export default Home;