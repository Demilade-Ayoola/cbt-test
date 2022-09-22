import React from 'react'
import Questions from './Questions'
import {useState} from 'react'


function Home() {

const [question, setQuestion] = useState(true)
let name = localStorage.getItem("Firstname").replace(/"/g,"")

function handleStart(e){
e.preventDefault()
 setQuestion(!question)
    
}
const toCapital = name=>{ return name.charAt(0).toUpperCase() + name.slice(1);
}
  return (
    <>
    {question ? (
  <div className='form-control2 fields mt-5'>
  <h3>Hey {toCapital(name)}, please read all instructions carefully</h3>
    <p>Do not quit or close this window</p>
    <p>Click on submit only when you are done to save your answers</p>
   <p>Cick on Start to begin the test</p>
    <form  onSubmit={handleStart}>
    <button  className="text-center m-1 my-2 btn btn-primary" type='submit'>
        Start
    </button>
    <p>Goodluck</p>


   </form>
   </div>
   ):(
       <Questions/>
   )}
     
</>
  )
}

export default Home