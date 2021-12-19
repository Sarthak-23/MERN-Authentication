import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [profession,setProfession] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const submitHandler = ()=> {
        if(!email || !password)
        {
            setError('Please Fill the details');
            return;
        }
        
        // Check if Email is Valid or not

        console.log(name,email,profession,password);
        setError('');
    }

    return (
        <div className='FormBox'>
            <h1 style={{color:"black"}}>SignUp Form</h1>
            {error? <p style={{color:"red"}}>{error}</p>
            :null}
            <form>
                <input type="text" name="name" value={name}  onChange={(e)=> setName(e.target.value)} placeholder='Name' />
                <input type="email" name="email" value={email}  onChange={(e)=> setEmail(e.target.value)} placeholder='Email'/>
                <input type="text" name="Professionality" value={profession}  onChange={(e)=> setProfession(e.target.value)} placeholder='Professional at?' />
                <input type="password" name="password" value={password}  onChange={(e)=> setPassword(e.target.value)} placeholder='Password' />
            </form>
            <button className='btn_submit' onClick={submitHandler}>Sign Up</button>
            <Link to="/login"><p style={{color:"black"}}>Already Have an Account? Log In</p></Link>
        </div>
    )
}

export default Signup
