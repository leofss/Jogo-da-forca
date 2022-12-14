export default function NewWord({WordToArray, setShow, setWord, word}) {
    return(
        <div>
            <form>
                <h1>Escolha sua palavra</h1>
                <input onChange={(e) => setWord(e.target.value)} value={word} type="text"></input>
                <button onClick={() => {setShow(false); WordToArray(word)}}>Enviar</button>
            </form>
        </div>
    )
}