import { 
  Component, 
  useState,
} from 'react';
import { AwesomeButton } from "react-awesome-button";
import Dropdown from 'react-bootstrap/Dropdown'

import logo from './logo.svg';

import './App.css';
import "react-awesome-button/dist/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// function CounterFunc(props) {
//   const [ count, setCount ] = useState(props.value);
//   return (
//     <div>
//       <h1>You've clicked the button {count} times!</h1>
//       {props.children}
//       <button onClick={() => setCount(count + 1)}>Increment!</button>
//       <button onClick={() => setCount(count - 1)}>Decrement!</button>
//     </div>
//   )
// }

// CounterFunc.Title = function Title(props) {
//   return <p className="fs-1">{props.children}</p>;
// }

// class CounterButton extends Component {
//   constructor(props) {
//     super();
//     this.state = {
//       count: props.value
//     };
//   }

//   increment() {
//     this.setState( {
//       count: this.state.count + 1
//     })
//   }

//   decrement() {
//     this.setState( {
//       count: this.state.count - 1
//     })  
//   }

//   render(props) {
//     return <div>
//       <h1>You've clicked the button {this.state.count} times!</h1>
//       <button onClick={() => this.decrement()}>Decrement</button>
//       <button onClick={() => this.increment()}>Increment</button>
//     </div>
//   }
// }

function Attribute(props) {
 const [ atb, setAtb ] = useState(0) 
 
  return <div>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className="attribute">
        {props.name}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {props.options.map((value) => {
          return <Dropdown.Item onClick={() => { props.onSelect(atb, value); setAtb(value); }}>{value}</Dropdown.Item>
        })}
      </Dropdown.Menu>
    </Dropdown>

    <h2>{atb}</h2>
 </div> 
}

function App() {
  const [ stdArr, setStdArr ] = useState([ 15, 14, 13, 12, 10, 8 ]);
  function claimValue(oldValue, newValue) {

    // 1. Remove newValue from stdArr
    for (let i = 0; i < stdArr.length; i++) {
      console.log(stdArr[i], newValue)
      if (stdArr[i] === newValue){
        stdArr.splice(i, 1)
      }
    }
    if (oldValue !== 0) {
      stdArr.push(oldValue)
    }

    // 2. Pass the new array with the value removed to setStrArr() to trigger a re-render
    setStdArr([...stdArr])
  }
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
          <Attribute name="Strength" options={stdArr} onSelect={claimValue} />
          <Attribute name="Dexterirty" options={stdArr} onSelect={claimValue} />
          <Attribute name="Constitution" options={stdArr} onSelect={claimValue} />
          <Attribute name="Intelligence" options={stdArr} onSelect={claimValue} />
          <Attribute name="Wisdom" options={stdArr} onSelect={claimValue} />
          <Attribute name="Charisma" options={stdArr} onSelect={claimValue} />
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
