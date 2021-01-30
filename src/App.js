import { 
  Component, 
  useState,
} from 'react';
import { AwesomeButton } from "react-awesome-button";
import Dropdown from 'react-bootstrap/Dropdown'

import races from './races.json';

import logo from './logo.svg';

import './App.css';
import "react-awesome-button/dist/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// 1. Let people choose their race
// 2. Let people choose sub-race
// 3. Let people choose their "wildcard" attrs (if available)
// 4. Show people their correct modifier

function calcModifier(atb) {
  if (atb < 3) { return ""; }
  return Math.floor((atb - 10) / 2);
}

function Attribute(props) {
  const [ atb, setAtb ] = useState(0) 

  return <div>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className="attribute">
        {props.name} ({atb} + {props.bonus} = {atb + props.bonus})
        
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {props.options.map((value) => {
          return <Dropdown.Item onClick={() => { props.onSelect(atb, value); setAtb(value); }}>{value}</Dropdown.Item>
        })}
        <Dropdown.Item onClick={() => { props.onSelect(atb, 0); setAtb(0); }}>Clear</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <h2>Modifier: {calcModifier(atb + props.bonus)}</h2>
 </div> 
}



function App() {
  const [ stdArr, setStdArr ] = useState([ 15, 14, 13, 12, 10, 8, ]);
  function claimValue(oldValue, newValue) {
    for (let i = 0; i < stdArr.length; i++) {
      console.log(stdArr[i], newValue)
      if (stdArr[i] === newValue){
        stdArr.splice(i, 1)
      }
    }
    if (oldValue !== 0) {
      stdArr.push(oldValue)
    }
    setStdArr([...stdArr])
  }

  // COMPUTE RACE BONUS HERE
  const raceBonus = {
    Strength: 0,
    Dexterirty: 0,
    Constitution: 0,
    Intelligence: 0,
    Wisdom: 1,
    Charisma: 0,
  }

  const races = Object.keys(races); // [ "Human", "Elf", "Half-Orc" ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trevor will learn React! As you make changes and save...
        </a>

        <nav className="attributes">
          <Attribute name="Strength" options={stdArr} onSelect={claimValue} bonus={raceBonus.Strength}/>
          <Attribute name="Dexterirty" options={stdArr} onSelect={claimValue} bonus={raceBonus.Dexterirty} />
          <Attribute name="Constitution" options={stdArr} onSelect={claimValue} bonus={raceBonus.Constitution} />
          <Attribute name="Intelligence" options={stdArr} onSelect={claimValue} bonus={raceBonus.Intelligence}/>
          <Attribute name="Wisdom" options={stdArr} onSelect={claimValue} bonus={raceBonus.Wisdom}/>
          <Attribute name="Charisma" options={stdArr} onSelect={claimValue} bonus={raceBonus.Charisma} />
        </nav>



        {/* <AwesomeButton type="primary" >Touch me!</AwesomeButton>
        <CounterButton value={50}></CounterButton>
        <CounterFunc value={50}>
          <CounterFunc.Title>Something to it</CounterFunc.Title>
        </CounterFunc> */}
      </header>
    </div>
  );
}

export default App;
