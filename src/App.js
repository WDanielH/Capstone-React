import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
// import './Tailwind.css';
import NavBar from "./NavBar";


// to do list:
// functionality: 
// -- implement the right answer with visual que 
// styling:
// -- Make it look better! -- pictures for the category? clear the question boxes on submit


function App() {

  const [inputText, setInputText] = useState('');
  const [allQuestions, setAllQuestions] = useState([]);
  const [newQuestionText, setNewQuestionText] = useState();
  const [newQuestionAnswerOne, setNewQuestionAnswerOne] = useState();
  const [newQuestionAnswerTwo, setNewQuestionAnswerTwo] = useState();
  const [newQuestionAnswerThree, setNewQuestionAnswerThree] = useState();
  const [newQuestionAnswerFour, setNewQuestionAnswerFour] = useState();
  const [currentCategory, setCurrentCategory] = useState();

// this will delete a question -- it calls the delete method and then fetchs the questions from the api
  async function deleteQuestion (question){
       await fetch('http://localhost:3000/api/questions/'+question.id,{method: 'DELETE'})
       // this took a minute -- just deleting the item doesnt let react know to update state so it wasnt actually clearing the question from the browser until I did something else.
       // re-fetching the questions did the trick
    //let res = await fetch('http://localhost:3000/api/questions');
    //let questions = await res.json();
    //setAllQuestions(questions);
    fetchQuestions();
  
    
  }

  // fetches the questions 
  let fetchQuestions = async () => {
    let res = await fetch('http://localhost:3000/api/questions');
    let questions = await res.json();
    setAllQuestions(questions);
    
  }

  useEffect(() => {

  fetchQuestions();

  }, [])

   const receiveInfoFromChild = async (info) => {
    console.log(info);
  };

  const runOnInputChange = async (event) => {
    
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
       <br/>
      <h1 className={'text-3xl'}>Super Nerd Trivia</h1>
      <p>Select a Category on the left to see and add questions</p>
   
    </div>

      
      <br/>
      <div class="categories">

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
  
      <ul>
        <li>
          
          <br/>
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

        <h1 className={'text-3xl'}>Current Questions</h1>
        <ul>
          {allQuestions.map((question) => {
            if(question.category == currentCategory){
              return <li key={question.id}>
                
                {question.questionText}
                
                
                &nbsp;&nbsp;&nbsp; ANSWERS:
                &nbsp;A:&nbsp;<button className={'border p-1 bg-gray-300'}>{question.answerOne}</button>&nbsp;&nbsp;&nbsp;
                &nbsp;B:&nbsp;<button className={'border p-1 bg-gray-300'}>{question.answerTwo}</button>&nbsp;&nbsp;&nbsp;
                &nbsp;C:&nbsp;<button className={'border p-1 bg-gray-300'}>{question.answerThree}</button>&nbsp;&nbsp;&nbsp;
                &nbsp;D:&nbsp;<button className={'border p-1 bg-gray-300'}>{question.answerFour}</button>&nbsp;&nbsp;&nbsp;
          
    
                &nbsp;&nbsp;&nbsp;<button className={'border p-2 bg-red-500'}onClick={() => {deleteQuestion(question)}}>Delete</button>
              </li>
            }

          })}
        </ul>

      </div>}

      {currentCategory && <div>


        <hr/>

        <div class="rightside">

      <br/>
      <br/>
</div>
        <div class="App-header">
          <br/>   
   
    </div>

<h1 className={'text-3xl'}>Add A Question</h1>

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
   
<div class="App-header">
          <br/>
          <br/> 
          <br/> 
          <br/> 
          <br/>    
   
    </div>

    </div>
  );
}

export default App;
