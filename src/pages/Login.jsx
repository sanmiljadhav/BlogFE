
import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const Login = () => {
  const navigate = useNavigate()

  const [inputs,setInputs] = useState({
    username:"",
    password:""
  })

  const [err,setError] = useState(null)

  const {login} = useContext(AuthContext)


  const handleChange = e =>{
    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))

  }

  const handleSubmit = async e=>{
    //its an async function as we are making an API request
    e.preventDefault()
    try{
      await login(inputs)
      

        //If everything is Okay then navigate to the home page
        navigate("/")

      

    }catch(err){
      console.log(err)
      setError(err.response.data)

    }
    
  }

  return (
    <div className='auth'>
        <h1>Login</h1>
        <form>
            <input type="text" placeholder='username' name = 'username' onChange={handleChange}/>
            <input type="password" placeholder='password' name = 'password' onChange={handleChange}/>
            <button onClick={handleSubmit}>Login</button>
            {err && <p className='error-message'>{err}</p>}
            <span className='link'>Don't have an account? <Link to = '/register'>Register</Link></span>
            </form>

    </div>
  )
}

export default Login