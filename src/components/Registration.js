import React from 'react';
import {useState} from 'react'
import {Alert} from 'react-bootstrap';
import Login from './Login';


function Regisration() {
const [fname, setFname] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [flag, setflag] = useState(false);
const [login, setLogin] = useState(true);

function handleSubmit(e){
    e.preventDefault();


if(!fname || !email || !password){
    setflag(true)
}
else{
    setflag(false)
    localStorage.setItem("Email", JSON.stringify(email))
    localStorage.setItem("Password", JSON.stringify(password))
localStorage.setItem("Firstname", JSON.stringify(fname))

setLogin(!login);
console.log(email);
}
}

function handleClick(){
    setLogin(!login)
}

    return (
    <>
    {login ? (
    <form className='form-control' onSubmit={handleSubmit}>
<h1 className='text-center py-2'>Sign up</h1>
<div className='fields'>
<div>
<input className='input m-1 p-1 px-3' type='text' placeholder='Enter First Name' onChange={(event)=>setFname(event.target.value)}/>
</div>

<div>
<input  className=' input m-1 p-1 px-3' type='email' placeholder='Enter Email Address'onChange={(event)=>setEmail(event.target.value)}/>
</div>
<div>
<input  className=' input m-1 p-1 px-3' type='password' placeholder='Enter Password'onChange={(event)=>setPassword(event.target.value)}/>
</div>
<button type='submit' className="text-center m-1 btn btn-primary">
    Sign up
</button>
<p >Already registered <span className = "span" onClick={handleClick}>log in?</span></p>
</div>
{flag && (
    <Alert color="primary" variant = 'danger'>
        Please fill every field
    </Alert>
)
}

</form>
):(
<Login/>
   )}
   </>
  )
}

export default Regisration