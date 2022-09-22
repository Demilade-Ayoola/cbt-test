import React from 'react'
import {useState} from 'react'
import {Alert} from 'react-bootstrap'
import Home from './Home'

function Login() {
const [emaillog, setEmaillog] = useState('')
const [passwordlog, setPasswordlog] = useState('')
const [flag, setFlag] = useState(false)
const [home, setHome] = useState(true)


function handleLogin(e){
 
e.preventDefault();
let mail = localStorage.getItem("Email").replace(/"/g,"")
let pass = localStorage.getItem("Password").replace(/"/g,"")

if(!emaillog || !passwordlog){
    setFlag(true);
    
}else if(passwordlog !== pass || emaillog !== mail){
setFlag(true)
}else{
    setHome(!home);
    setFlag(false)
}
}

    return (
    <>
    {home ? (
    <form className='form-control' onSubmit={handleLogin}>
        <h3 className='text-center py-2'>Login</h3>
    <div className='fields'>
    <div>
    <input  className=' input m-1 p-1 px-3' type='email' placeholder='Enter Email Address'onChange={(event)=>setEmaillog(event.target.value)}/>
    </div>
    <div>
    <input  className=' input m-1 p-1 px-3' type='password' placeholder='Enter Password'onChange={(event)=>setPasswordlog(event.target.value)}/>
    </div>
    <button  className=" input text-center m-1 my-2 btn btn-primary" type='submit'>
        Login
    </button>
    </div>
    {flag && (
    <Alert color="primary" variant = 'danger'>
        Please fill correct info
    </Alert>
)
}
    </form>
 ):(
    <Home/>
)}

 </>
  )
}

export default Login