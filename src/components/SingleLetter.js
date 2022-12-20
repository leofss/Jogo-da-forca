import './css/SingleLetter.css';
let found = []
export default function SingleLetter({ guess, obj, arr, setErro} ) {
  let erros = 0
    for (const key in obj) {
      // console.log(`${key}: ${obj[key]['letter']}`);
      arr.forEach(e => {
      if(obj[key]['found'] === true){
        found.push(obj[key]['letter']);
      }else{
        if(e === guess && e === obj[key]['letter']){
          obj[key]['found']= true;
          found.push(obj[key]['letter']);
        }
      }
      });
    }
    

    
  return(
    <div >
      {arr.map(e =>(
        <div className='letters'>
          <p className={found.includes(e) ? '' : 'letterinv'}>{e}</p>
        </div>
      ))}
    </div>
    
  )
}

