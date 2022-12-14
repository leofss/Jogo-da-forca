import './App.css';
import React, { useState } from 'react';
import Modal from './components/Modal';
import NewWord from './components/NewWord';
import  SingleLetter  from './components/SingleLetter';
function App() {
  const [show, setShow] = useState(false)
  const [word, setWord] = useState('')
  const [LetterArr, setLetterArr] = useState([])

  const WordToArray = (Word) => {
    setWord(Word)

    setLetterArr(Word.split(''))
  }
  const handleClose = () => {
    setShow(false)
  }

  return (
    <div className="App">
      <div className='container'>
        <button  onClick={() => {setShow(true)}}> Nova Plavra </button>
        {show && (<Modal handleClose={handleClose}>
          <NewWord WordToArray={WordToArray} setShow={setShow} setWord={setWord} word={word}/>
      </Modal>)}
      {LetterArr.map((e) => {
        <SingleLetter letter={e}/>
      })}
      </div>
    </div>
  );
}

export default App;
