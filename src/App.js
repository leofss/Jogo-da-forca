import './App.css';
import React, { useState } from 'react';
import Modal from './components/Modal';
import NewWord from './components/NewWord';
import  SingleLetter  from './components/SingleLetter';
import GuessLetter from './components/GuessLetter';
function App() {
  const [show, setShow] = useState(false)
  const [found, setFound] = useState(false)
  const [guess, setGuess] = useState('')
  const [word, setWord] = useState('')
 

  const CheckWord = (Word) => {
    if(word){
      setWord('')
    }
    setWord(Word)
  }
  const handleClose = () => {
    setShow(false)
  }
 

  return (
    <div className="App">
      <div className='container'>
        <button  onClick={() => {setShow(true)}}> Nova Plavra </button>
        <GuessLetter setGuess={setGuess} guess={guess}/>
        {show && (<Modal handleClose={handleClose}>
          <NewWord CheckWord={CheckWord} setShow={setShow} setWord={setWord} word={word}/>
      </Modal>)}
        <SingleLetter guess={guess} Arr={Array.from(word)}/>
      </div>
    </div>
  );
}

export default App;
