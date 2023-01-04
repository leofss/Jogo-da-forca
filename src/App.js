import './App.css';
import React, { useState } from 'react';
import Modal from './components/Modal';
import NewWord from './components/NewWord';
import  SingleLetter  from './components/SingleLetter';
import GuessLetter from './components/GuessLetter';

function App() {
  const [show, setShow] = useState(false)
  const [showRes, setRes] = useState(false)
  const [guess, setGuess] = useState('')
  const [word, setWord] = useState('')
  const [arr, setArr] = useState([])
  const [win, setWin] = useState(false)
  const [loss, setLoss] = useState(false)

  const CheckWord = (Word) => {
    if(word){
      setWord('')
    }
    setWord(Word)
    setArr(Array.from(Word))
  }

  
  const handleClose = () => {
    setShow(false)
    setRes(false)
  }
  const handleLost = () => {
    setRes(true)
    setLoss(true)

  }
  const handleWin = () => {
    setRes(true)
    setWin(true)
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
        {word && <GuessLetter setGuess={setGuess} guess={guess} />}
        {show && (<Modal handleClose={handleClose}>
          <NewWord CheckWord={CheckWord} setShow={setShow} setWord={setWord} word={word}/>
      </Modal>)}
        <SingleLetter setGuess={setGuess} guess={guess} obj={obj} arr={arr} handleWin={handleWin} handleLost={handleLost}/>
      </div>

      {win && ( showRes && <Modal handleClose={handleClose}>
          <h1>Você ganhou</h1>

      </Modal>)}

      {loss && ( showRes && <Modal handleClose={handleClose}>
          <h1>Você Perdeu</h1>
          <p>Plavara era: {word}</p>
      </Modal>)}
    </div>
  );
}

export default App;
