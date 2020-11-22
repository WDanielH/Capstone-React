import React, {useState, useEffect} from 'react';
import './App.css';
// import './Tailwind.css';
import NavBar from "./NavBar";

// useState
// useEffect
// Child components
// Relationship beween parent and child + Props
// Forms in React
// api key for alphavantage IK6FXYBJZ5VUU6JE
// https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AAPL&apikey=IK6FXYBJZ5VUU6JE

const STOCK_PRICES = [
    {name: 'AAPL', price: '120'},
  {name: 'MSFT', price: '110'},
  {name: 'INTL', price: '80'}
]

function App() {

  const [name, setName] = useState('John');
  const [showJaneText, setJaneShowText] = useState(false);

  const [inputText, setInputText] = useState('');

  const [counter, setCounter] = useState(0);

  const [cash, setCash] = useState(200000);

  const [searchStockStr, setSearchStockStr] = useState('');

  const [shares, setShares] = useState('1');

  const [selectedStock, setSelectedStock] = useState();

  // useEffect(() => {
  //   yahooFinance.quote({
  //     symbol: 'AAPL',
  //     // modules: [ 'price', 'summaryDetail' ] // see the docs for the full list
  //     modules: [ 'price']
  //   }, function (err, quotes) {
  //     console.log(err)
  //     console.log(quotes)
  //   });
  // }, [])

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

  const getQuote = async () => {
    let stock;
    STOCK_PRICES.map((s) => {
      if(s.name == searchStockStr){
        stock = s;
      }
    })

    // console.log(stock);

    setSelectedStock(stock);

    console.log('get quote was clicked! and the value of the search string is: ', searchStockStr);
    setSearchStockStr('');
  };

  const onInputChange = async (event) => {
    // console.log(event.currentTarget.value);
    setSearchStockStr(event.currentTarget.value);
  };

  // const updateShares = async () => {
  //
  // };

  const buyStock = async () => {
    console.log('The user wants to buy ', shares , ' quantity ', ' of ',  selectedStock.name ,  ' at ', selectedStock.price);
    let cost = shares * selectedStock.price;
    console.log('the cost is: ', cost);

  };

//var portfolioItems =[];
//portfolioItems.push({index: 1, value: "AAPL", Price: 120});
//portfolioItems.push({index: 2, value: "INTL", done: 80});
//portfolioItems.push({index: 3, value: "MSFT", done: 110});

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

        <div className={'col-span-12 md:col-span-7 border-4 border-gray-900 xl:border-teal-500 p-20'}>

          <h1 className={'font-bold text-2xl text-teal-600'}>Cash Available : {cash}</h1>

          <br/>

          <hr/>

          <br/>

          <input className={'border'} type={'text'}
                 onChange={onInputChange}
                 value={searchStockStr} />

          &nbsp;&nbsp;<button className={'border border-teal-500 text-white pl-2 pr-2 bg-teal-600 rounded'} onClick={getQuote}>Get Quote</button>


          {selectedStock && <div>
            <p className={'font-bold text-teal-600 text-xl p-5'}>Current Selected Stock: {selectedStock.name} | Price: ${selectedStock.price}</p>

            <br/>
            <button onClick={() => {
              setShares(1);
            }} className={shares==1 ? 'border border-teal-500 text-white pl-2 pr-2 bg-teal-600 rounded' : 'border border-gray-500 text-white pl-2 pr-2 bg-gray-500 rounded'}>1</button>&nbsp;&nbsp;

            <button onClick={() => {
              setShares(5);
            }} className={shares==5 ? 'border border-teal-500 text-white pl-2 pr-2 bg-teal-600 rounded' : 'border border-gray-500 text-white pl-2 pr-2 bg-gray-500 rounded'}>5</button>&nbsp;&nbsp;

            <button onClick={() => {
              setShares(10);
            }} className={shares==10 ? 'border border-teal-500 text-white pl-2 pr-2 bg-teal-600 rounded' : 'border border-gray-500 text-white pl-2 pr-2 bg-gray-500 rounded'}>10</button>&nbsp;&nbsp;

            <button onClick={() => {
              setShares(15);
            }} className={shares==15 ? 'border border-teal-500 text-white pl-2 pr-2 bg-teal-600 rounded' : 'border border-gray-500 text-white pl-2 pr-2 bg-gray-500 rounded'}>15</button>&nbsp;&nbsp;

            <button onClick={() => {
              setShares(20);
            }} className={shares==20 ? 'border border-teal-500 text-white pl-2 pr-2 bg-teal-600 rounded' : 'border border-gray-500 text-white pl-2 pr-2 bg-gray-500 rounded'}>20</button>&nbsp;&nbsp;
            {/*<button className={'border border-teal-500 text-white pl-2 pr-2 bg-teal-600 rounded'}>25</button>&nbsp;&nbsp;*/}
            {/*<button className={'border border-teal-500 text-white pl-2 pr-2 bg-teal-600 rounded'}>30</button>&nbsp;&nbsp;*/}

            <br/>
            <br/>
            <button className={'border border-teal-500 text-white pl-2 pr-2 bg-teal-600 rounded'} onClick={buyStock}>BUY</button>&nbsp;&nbsp;
            <button className={'border border-teal-500 text-white pl-2 pr-2 bg-teal-600 rounded'}>SELL</button>

          </div>}



        </div>

        <div className={'col-span-12 md:col-span-5 border-4 border-blue-900'}>
          Here is Your Portfolio 

          <p>SYMBOL -- Share Qty -- Share Price -- Total Value</p>
          <ul>
          <li>AAPL - 0 - 0 - 0</li>
          <li>INTL - 0 - 0 - 0</li>
          <li>MSFT - 0 - 0 - 0</li>
          </ul>
         
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
