import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
// import './Tailwind.css';
import NavBar from "./NavBar";



function App() {

  const [inputText, setInputText] = useState('');
  const [allQuestions, setAllQuestions] = useState([]);
  const [newQuestionText, setNewQuestionText] = useState();
  const [newQuestionAnswerOne, setNewQuestionAnswerOne] = useState();
  const [newQuestionAnswerTwo, setNewQuestionAnswerTwo] = useState();
  const [newQuestionAnswerThree, setNewQuestionAnswerThree] = useState();
  const [newQuestionAnswerFour, setNewQuestionAnswerFour] = useState();
  const [currentCategory, setCurrentCategory] = useState();


  let fetchQuestions = async () => {
    let res = await fetch('http://localhost:3000/api/questions');
    let questions = await res.json();
    setAllQuestions(questions);
    // console.log(allDogs);
  }

  useEffect(() => {

  fetchQuestions();

  }, [])

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

  
  const createNewQuestion = async (event) => {
    event.preventDefault();
    console.log('was here')
    console.log(newQuestionText)
    console.log(newQuestionAnswerOne)
    console.log(newQuestionAnswerTwo)
    console.log(newQuestionAnswerThree)
    console.log(newQuestionAnswerFour)

    let body = JSON.stringify({
      questionText: newQuestionText,
      answerOne: newQuestionAnswerOne,
      answerTwo: newQuestionAnswerTwo,
      answerThree: newQuestionAnswerThree,
      answerFour: newQuestionAnswerFour,
      category: currentCategory
    })

    let headers = {};
    headers["Accept"] = "application/json, text/plain, */*";
    headers["Content-Type"] = "application/json;charset=utf-8";

    await fetch('http://localhost:3000/api/questions', {method: 'POST', body: body, headers: headers});
    await fetchQuestions();

  };

  return (
    <div className="App">


     {/*<h1 className={'text-3xl'}>All the dogs in the database</h1>*/}

     <div class="App-header">
      <h1 className={'text-3xl'}>Super Nerd Trivia</h1>
      <p>Select a Category on the left to see and add questions</p>
   
    </div>

      
      <br/>
      <div class="categories">
      {/*<h1 className={'text-3xl'}>Categories</h1>*/}

      {/*Value for the current category is: {currentCategory}*/}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <ul>
        <li>
          {/*<button className={'bg-gray-300 p-1 border border-gray-400 rounded cursor-pointer'}>Category 1</button>*/}
          <button className={currentCategory==1
              ? 'bg-blue-600 p-2 border border-blue-400 text-white font-bold rounded cursor-pointer'
              : 'bg-gray-300 p-2 border border-gray-400 rounded cursor-pointer'} onClick={() => {
            setCurrentCategory(1)
          }}>Chemistry</button>
        </li>
        <li>
          <br/>
          <br/>
          <button className={currentCategory==2
              ? 'bg-blue-600 p-2 border border-blue-400 text-white font-bold rounded cursor-pointer'
              : 'bg-gray-300 p-2 border border-gray-400 rounded cursor-pointer'} onClick={() => {
            setCurrentCategory(2)
          }}>Dinosaurs</button>
        </li>
        <li>
          <br/>
          <br/>
          <button className={currentCategory==3
              ? 'bg-blue-600 p-2 border border-blue-400 text-white font-bold rounded cursor-pointer'
              : 'bg-gray-300 p-2 border border-gray-400 rounded cursor-pointer'} onClick={() => {
            setCurrentCategory(3)
          }}>Star Wars</button>
        </li>
        <li>
          <br/>
          <br/>
          <button className={currentCategory==4
              ? 'bg-blue-600 p-2 border border-blue-400 text-white font-bold rounded cursor-pointer'
              : 'bg-gray-300 p-2 border border-gray-400 rounded cursor-pointer'} onClick={() => {
            setCurrentCategory(4)
          }}>Video Games</button>
        </li>
        <li>
          <br/>
          <br/>
          <button className={currentCategory==5
              ? 'bg-blue-600 p-2 border border-blue-400 text-white font-bold rounded cursor-pointer'
              : 'bg-gray-300 p-2 border border-gray-400 rounded cursor-pointer'} onClick={() => {
            setCurrentCategory(5)
          }}>Web Development</button>
        </li>
      </ul>
      </div>


      {currentCategory && <div>

        <h1 className={'text-3xl'}>Questions for the category: {currentCategory}</h1>
        <ul>
          {allQuestions.map((question) => {
            if(question.category == currentCategory){
              return <li key={question.id}>
                id: {question.id}. &nbsp;&nbsp;&nbsp;
                {question.questionText}
                &nbsp;&nbsp;&nbsp;<button className={'border p-2 bg-red-500'}>Delete this Question</button>
              </li>
            }

          })}
        </ul>

      </div>}

      {currentCategory && <div>


        <hr/>

<h1 className={'text-3xl'}>Create a new question</h1>

<form action="" onSubmit={createNewQuestion}>
  <label htmlFor="">Question Text</label>
  <br/>
  <input type="text" className={'border border-gray-400'} onChange={(ev) => {
    setNewQuestionText(ev.currentTarget.value);
  }}/>
  <br/>
  <label htmlFor="">Answer One</label>
  <br/>
  <input type="text" className={'border border-gray-400'} onChange={(ev) => {
    setNewQuestionAnswerOne(ev.currentTarget.value);
  }}/>
  <br/>
  <label htmlFor="">Answer Two</label>
  <br/>
  <input type="text" className={'border border-gray-400'} onChange={(ev) => {
    setNewQuestionAnswerTwo(ev.currentTarget.value);
  }}/>
  <br/>
  <label htmlFor="">Answer Three</label>
  <br/>
  <input type="text" className={'border border-gray-400'} onChange={(ev) => {
    setNewQuestionAnswerThree(ev.currentTarget.value);
  }}/>
  <br/>
  <label htmlFor="">Answer Four</label>
  <br/>
  <input type="text" className={'border border-gray-400'} onChange={(ev) => {
    setNewQuestionAnswerFour(ev.currentTarget.value);
  }}/>
  <br/>
  <br/>
  <input type="submit"/>
</form>


</div>}




      {/*<ul>*/}
      {/*  {allDogs.map((dog) => {*/}
      {/*    return <li key={dog.id}>*/}
      {/*      id: {dog.id}. &nbsp;&nbsp;&nbsp;*/}
      {/*      {dog.name}*/}
      {/*      &nbsp;&nbsp;&nbsp;<button className={'border p-2 bg-red-500'}>Delete this dog</button>*/}
      {/*    </li>*/}
      {/*  })}*/}
      {/*</ul>*/}







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


      {/*<div className="grid grid-cols-12 gap-0 xl:p-20">*/}

      {/*  <div className={'col-span-12 md:col-span-7 border-4 border-gray-900 xl:border-red-500 p-20'}>*/}

      {/*    <h1 className={'font-bold text-2xl text-teal-600'}>Cash Available : {cash}</h1>*/}

      {/*    <br/>*/}

      {/*    <hr/>*/}

      {/*    <br/>*/}

      {/*    <input className={'border'} type={'text'}*/}
      {/*           onChange={onInputChange}*/}
      {/*           value={searchStockStr} />*/}

      {/*    &nbsp;&nbsp;<button className={'border border-teal-500 text-white pl-2 pr-2 bg-teal-600 rounded'} onClick={getQuote}>Get Quote</button>*/}


      {/*    {selectedStock && <div>*/}
      {/*      <p className={'font-bold text-teal-600 text-xl p-5'}>Current Selected Stock: {selectedStock.name} | Price: ${selectedStock.price}</p>*/}

      {/*      <br/>*/}
      {/*      <button onClick={() => {*/}
      {/*        setShares(1);*/}
      {/*      }} className={shares==1 ? 'border border-teal-500 text-white pl-2 pr-2 bg-teal-600 rounded' : 'border border-gray-500 text-white pl-2 pr-2 bg-gray-500 rounded'}>1</button>&nbsp;&nbsp;*/}

      {/*      <button onClick={() => {*/}
      {/*        setShares(5);*/}
      {/*      }} className={shares==5 ? 'border border-teal-500 text-white pl-2 pr-2 bg-teal-600 rounded' : 'border border-gray-500 text-white pl-2 pr-2 bg-gray-500 rounded'}>5</button>&nbsp;&nbsp;*/}

      {/*      <button onClick={() => {*/}
      {/*        setShares(10);*/}
      {/*      }} className={shares==10 ? 'border border-teal-500 text-white pl-2 pr-2 bg-teal-600 rounded' : 'border border-gray-500 text-white pl-2 pr-2 bg-gray-500 rounded'}>10</button>&nbsp;&nbsp;*/}

      {/*      <button onClick={() => {*/}
      {/*        setShares(15);*/}
      {/*      }} className={shares==15 ? 'border border-teal-500 text-white pl-2 pr-2 bg-teal-600 rounded' : 'border border-gray-500 text-white pl-2 pr-2 bg-gray-500 rounded'}>15</button>&nbsp;&nbsp;*/}

      {/*      <button onClick={() => {*/}
      {/*        setShares(20);*/}
      {/*      }} className={shares==20 ? 'border border-teal-500 text-white pl-2 pr-2 bg-teal-600 rounded' : 'border border-gray-500 text-white pl-2 pr-2 bg-gray-500 rounded'}>20</button>&nbsp;&nbsp;*/}
      {/*      /!*<button className={'border border-teal-500 text-white pl-2 pr-2 bg-teal-600 rounded'}>25</button>&nbsp;&nbsp;*!/*/}
      {/*      /!*<button className={'border border-teal-500 text-white pl-2 pr-2 bg-teal-600 rounded'}>30</button>&nbsp;&nbsp;*!/*/}

      {/*      <br/>*/}
      {/*      <br/>*/}
      {/*      <button className={'border border-teal-500 text-white pl-2 pr-2 bg-teal-600 rounded'} onClick={buyStock}>BUY</button>&nbsp;&nbsp;*/}
      {/*      <button className={'border border-teal-500 text-white pl-2 pr-2 bg-teal-600 rounded'}>SELL</button>*/}

      {/*    </div>}*/}



      {/*  </div>*/}

      {/*  <div className={'col-span-12 md:col-span-5 border-4 border-gray-900'}>*/}
      {/*    this is a portfolio box*/}

      {/*  </div>*/}

      {/*</div>*/}




















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
