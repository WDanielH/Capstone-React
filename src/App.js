import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
// import './Tailwind.css';
import NavBar from "./NavBar";


// useState
// useEffect
// Child components
// Relationship beween parent and child + Props
// Forms in React


function App() {

  const [name, setName] = useState('John');
  const [showJaneText, setJaneShowText] = useState(false);

  const [inputText, setInputText] = useState('');

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

  const receiveInfoFromChild = async (info) => {
    console.log(info);
  };

  const runOnInputChange = async (event) => {
    // console.log(event.currentTarget.value);
    setInputText(event.currentTarget.value);
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    console.log('I was here after the form submitted')
    console.log('the value of the input text is: ', inputText);
    // send the data back to sserver
    // manipualte the input text
    // last step, you could clean up the inputText value
    setInputText('');

  };

  return (
    <div className="App">


      {/*Below is the flexbox way to design the page using tailwind*/}
      {/*<div className={'flex'}>*/}
      {/*  <div className={'w-full border p-5'}>*/}
      {/*    <h1 className={'text-4xl'}>Paper Trader</h1>*/}

      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className={'flex'}>*/}

      {/*  <div className={'w-2/3 border p-5'}>*/}
      {/*    Left Box*/}

      {/*  </div>*/}

      {/*  <div className={'w-1/3 border p-5'}>*/}
      {/*    Right Box*/}

      {/*  </div>*/}

      {/*</div>*/}



      {/*below is the css grid way of designing the page*/}


      <div className="grid grid-cols-12 gap-0 xl:p-20">

        <div className={'col-span-12 md:col-span-7 border-4 border-gray-900 xl:border-red-500'}>
          this is a graph box

        </div>

        <div className={'col-span-12 md:col-span-5 border-4 border-gray-900'}>
          this is a portfolio box

        </div>

      </div>




















      {/*<header className="App-header">*/}

      {/*  <NavBar firstName={'John'} lastName={'Doe'} aFunctionProp={receiveInfoFromChild}   />*/}

      {/*  <form onSubmit={onFormSubmit}>*/}
      {/*    <input type="text" onChange={runOnInputChange} value={inputText}/>*/}
      {/*    <input type="submit"/>*/}
      {/*  </form>*/}




      {/*  <img src={logo} className="App-logo" alt="logo" />*/}

      {/*  <h1 onClick={changeName}>{name}</h1>*/}

      {/*  {name=='Jane' && <p>The Name is now Jane</p>}*/}



      {/*  <h1>Counter is : {counter}</h1>*/}

      {/*  <button onClick={updateCounter}>Increment Counter</button>*/}

      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}

      {/*  <h1>useState</h1>*/}
      {/*  <h1>useEffect</h1>*/}
      {/*  <h1>Rendering Child Components</h1>*/}


      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}



      {/*<div style={{display: 'flex', justifyContent: 'center'}}>*/}
      {/*  <span>Home</span>*/}
      {/*  <span>About</span>*/}
      {/*  <span>Contact</span>*/}
      {/*</div>*/}



    </div>
  );
}

export default App;
