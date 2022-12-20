import './App.css';
import React, { useState } from 'react';
import Modal from './components/Modal';
import NewWord from './components/NewWord';
import  SingleLetter  from './components/SingleLetter';
import GuessLetter from './components/GuessLetter';
function App() {
  const [show, setShow] = useState(false)
  const [guess, setGuess] = useState('')
  const [word, setWord] = useState('')
  const [arr, setArr] = useState([])
  const [erro, setErro] = useState(0)

  const CheckWord = (Word) => {
    if(word){
      setWord('')
    }
    setWord(Word)
    setArr(Array.from(Word))
  }
  
  const handleClose = () => {
    setShow(false)
  }

  const obj = Object.fromEntries(
    arr.map((letter, index) => [index, {
      letter: letter,
      found: false
    }])
  )

  
  return (
    <div className="App">
      <div className='container'>
        <button  onClick={() => {setShow(true)}}> Nova Plavra </button>
        <GuessLetter setGuess={setGuess} guess={guess}/>
        {show && (<Modal handleClose={handleClose}>
          <NewWord CheckWord={CheckWord} setShow={setShow} setWord={setWord} word={word}/>
      </Modal>)}
        <SingleLetter guess={guess} obj={obj} arr={arr}/>

        <h2>Erros {erro}</h2>
      </div>
    </div>
  );
}

export default App;
