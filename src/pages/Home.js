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
        <h2>Black Eagles</h2>

        <Link to={`/roster/be`}>
          <div className="row">
            {props.unit.map((unit) =>
              unit.startingHouse === "Black Eagles"
                ? characterComponent(unit)
                : null
            )}
          </div>
        </Link>

        <Link to={`/roster/bl`}>
          <h2>Blue Lions</h2>
          <div className="row">
            {props.unit.map((unit) =>
              unit.startingHouse === "Blue Lions"
                ? characterComponent(unit)
                : null
            )}
          </div>
        </Link>

        <Link to={`/roster/gd`}>
          <h2>Golden Deer</h2>
          <div className="row">
            {props.unit.map((unit) =>
              unit.startingHouse === "Golden Deer"
                ? characterComponent(unit)
                : null
            )}
          </div>
        </Link>

        <Link to={`/roster/cs`}>
          <h2>Church of Seiros</h2>
          <div className="row">
            {props.unit.map((unit) =>
              unit.startingHouse === "Church of Seiros"
                ? characterComponent(unit)
                : null
              )}
            </div>
          </Link>
      </div>
    );
  };

  const [newForm, setNewForm] = useState({
    name: "",
    image: "",
    personal: "",
    crest: "",
    buddingTalent: "",
    startingHouse: "",
  });

  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createUnit(newForm);
    setNewForm({
      name: "",
      image: "",
      personal: "",
      crest: "",
      buddingTalent: "",
      startingHouse: "",
    });
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.personal}
          name="personal"
          placeholder="personal"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.crest}
          name="crest"
          placeholder="crest"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.buddingTalent}
          name="buddingTalent"
          placeholder="buddingTalent"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.startingHouse}
          name="startingHouse"
          placeholder="startingHouse"
          onChange={handleChange}
        />
        <input type="submit" value="Create Unit" />
      </form>
      {props.unit ? loaded() : loading()}
    </section>
  );
}

export default Home;