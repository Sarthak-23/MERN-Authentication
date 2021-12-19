import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const submitHandler = ()=> {
        if(!email || !password)
        {
            setError('Please Fill the details');
            return;
        }
        console.log(email,password);
        setError('');
    }

    return (
        <div className='FormBox'>
            <h1 style={{color:"black"}}>Login Form</h1>
            {error? <p style={{color:"red"}}>{error}</p>
            :null}
            <form>
                <input type="email" name="email" value={email} onChange={e=> setEmail(e.target.value)} placeholder='Email' />
                <input type="password" name="password" value={password} onChange={e=> setPassword(e.target.value)} placeholder='Password' />
            </form>
            <button className='btn_submit' onClick={submitHandler}>Login</button>
            <Link to="/signup"><p style={{color:"black"}}>Don't have an Account? Sign Up</p></Link>
        </div>
    )
}

export default Login
