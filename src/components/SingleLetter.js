import { useEffect, useState } from 'react';
import './css/SingleLetter.css';
import WrongGuess from './WrongGuess';
export default function SingleLetter({guess, obj, arr, handleWin, handleLost} ) {
  const [found, setFound] = useState([])
  const [img, setImg] = useState('./img/forca.jpg')
  const [erro, setErro] = useState(0)
  const [wrong, setWrong] = useState([])
    useEffect(() => {
      for (const key in obj) {
        // console.log(`${key}: ${obj[key]['letter']}`);
        arr.forEach(e => {
          if(!found.includes(obj[key]['letter'])){
            if(obj[key]['found'] === true){
              found.push(obj[key]['letter']);
            }else{
              if(e === guess && e === obj[key]['letter']){
                obj[key]['found']= true;
                found.push(obj[key]['letter']);
              }
            }
          }

        });
      }
      if(arr !== '' && guess !== '' && !arr.includes(guess)){
        setErro(e => e + 1)
        setWrong(wrong => [...wrong, guess])
      }
      if(guess != ''){
        if(arr.every( ai => found.includes(ai))){
          handleWin()
          setWrong('')
          setFound([])
        }
      }


    }, [guess])
    useEffect(() => {
      if(erro === 1){
        setImg('./img/forca-head.jpg')
      }

      if(erro === 2){
        setImg('./img/forca-body.jpg')
      }

      if(erro === 3){
        setImg('./img/forca-l-leg.jpg')
      }

      if(erro === 4){
        setImg('./img/forca-r-leg.jpg')
      }

      if(erro === 5){
        setImg('./img/forca-r-arm.jpg')
      }

      if(erro === 6){
        setImg('./img/forca-l-arm.jpg')
        handleLost()
        setWrong('')
        setFound([])
      }
    }, [erro])
    
  return(
    <div className='jogo' >
      <div className='img'>
        <img src={img}></img>
      </div>
      
      <div className='letters'>      
      {arr.map(e =>(
          <p className={found.includes(e) ? '' : 'letterinv'}>{e}</p>
      ))}</div>
      <WrongGuess wrong={wrong}/>

    </div>
    
  )
}

