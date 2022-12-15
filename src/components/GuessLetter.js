import React from 'react'

export default function GuessLetter({setGuess, guess}) {  
  
  return (
    <div>
        <input onChange={(e) => setGuess(e.target.value)} value={guess} type="text" maxLength={1}></input>
        <button>Enviar</button>
    </div>
  )
}
