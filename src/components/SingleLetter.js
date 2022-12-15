import './css/SingleLetter.css';

export default function SingleLetter({guess, Arr}) {
  return (
    <>
        {Arr.map((e) => (
          <div className="letters">
            <p className={e == guess ? '' : "letter"}>{e}</p>
          </div>
        ))}
    </>

    
  )
}