import React, { useState, useEffect } from "react";
function Roster(props) {
  let house;
  
  let userRoster;

  let userRecruitable;

  const [rosterChars, setRoster] = useState([]);

  const [recruitChars, setRecruitable] = useState([]);

  function initialRoster(characters) {
    userRoster = characters.filter(char => char.startingHouse == house);
    // setRoster(userRoster);
  }

  function initialRecruitable(characters) {
    userRecruitable = characters.filter(char => char.startingHouse !== house && char.recruitable);
    // setRecruitable(userRecruitable);
  }
  function recruitCharacter(id) {
    // const charIndex = userRecruitable.findIndex(char => char._id == id);
    // userRoster.push(...userRecruitable.splice(charIndex, 1));
    // console.log(userRoster);
  }
  
  function removeCharacter(id) {
    // const charIndex = userRoster.findIndex(char => char._id == id);
    // userRecruitable.push(...userRoster.splice(charIndex, 1));
    // console.log(userRecruitable);
  }
  
  function setHouse(houseName) {
    switch (houseName) {
      case 'be':
      return  house = "Black Eagles"
      case 'bl':
      return  house = "Blue Lions"
      case 'gd':
      return  house = "Golden Deer"
      default:
      return house = "Black Eagles"
    }
  }
  function characterComponent(unit) {
    return (
      <div className="col-md-2">
        <img src={unit.image} className="unitImg" />
        <div>{unit.name}</div>
      </div>
    );
  }
  setHouse(props.match.params.house);
  initialRoster(props.unit);
  initialRecruitable(props.unit);
  return (
    <div className="container">
      <h1>Roster</h1>
      {/* {console.log(userRoster)} */}
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