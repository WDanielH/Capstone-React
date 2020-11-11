import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [name, setName] = useState('John');
  const [showJaneText, setJaneShowText] = useState(false);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('this runs when the name changes');
    if(name == 'Jane'){
      setJaneShowText(true);
    }
    // (name=='Jane' && setJaneShowText(true))
  }, [name]);

  useEffect(() => {
    console.log('this code is run when the counter value changes')
    if(counter==10){
      alert('The counter is at 10!');
    }
    if(counter==20){
      alert('The counter is at 20!');
    }
  }, [counter]);

  const changeName = () => {
    console.log('change name is being called');
    setName('Jane');
  };

  const updateCounter = () => {
    let currentValue = counter;
    currentValue = currentValue + 1;
    setCounter(currentValue);


    // instead of writing code on counter change here
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1 onClick={changeName}>{name}</h1>

        {name=='Jane' && <p>The Name is now Jane</p>}



        <h1>Counter is : {counter}</h1>

        <button onClick={updateCounter}>Increment Counter</button>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <h1>useState</h1>
        <h1>useEffect</h1>
        <h1>Rendering Child Components</h1>


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
