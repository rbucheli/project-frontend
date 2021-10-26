import React, { useState, useEffect } from "react";
function Roster(props) {
  let house;
  let userRoster;
  let userRecruitable;

  function initialRoster(characters) {
    userRoster = characters.filter(char => char.startingHouse == house);
  }

  function initialRecruitable(characters) {
    userRecruitable = characters.filter(char => char.startingHouse !== house && char.recruitable);
  }

  function recruitCharacter(clickedChar) {
    setRecruitable( prevRecruitable => prevRecruitable.filter( character => character._id !== clickedChar._id));
    setRoster( prevRoster => [...prevRoster, clickedChar]);
  }

  function removeCharacter(clickedChar) {
    if (clickedChar.startingHouse === house) {
      return
    }
    setRoster( prevRoster => prevRoster.filter( character => character._id !== clickedChar._id));
    setRecruitable( prevRecruitable => [...prevRecruitable, clickedChar]);
  }

  function setHouse(houseName) {
    switch (houseName) {
      case 'be':
        return house = "Black Eagles"
      case 'bl':
        return house = "Blue Lions"
      case 'gd':
        return house = "Golden Deer"
      default:
        return house = "Black Eagles"
    }
  }

  function characterComponent(unit, recruit) {
    return (
      <div className="col-md-2"
        onClick={(e) => recruit ? recruitCharacter(unit, e) : removeCharacter(unit, e)}>
        <img src={unit.image} className="unitImg" />
        <div>{unit.name}</div>
      </div>
    );
  }

  setHouse(props.match.params.house);

  initialRoster(props.unit);

  initialRecruitable(props.unit);

  const [rosterChars, setRoster] = useState(userRoster);

  const [recruitChars, setRecruitable] = useState(userRecruitable);

  return (
    <div className="container">

      <h1>Roster</h1>
      <div className="row">
        {rosterChars.map((unit) =>
          characterComponent(unit, false))}
      </div>

      <h2>Recruitable</h2>
      <div className="row">
        {recruitChars.map((unit) =>
          characterComponent(unit, true))}
      </div>

    </div>

  )
}

export default Roster;