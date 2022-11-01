import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {userRegister} from '../common/apis'
import axios from "axios";



const Register = () => {
  const navigate = useNavigate()

  const [inputs,setInputs] = useState({
    username:"",
    email:"",
    password:""
  })

  const [err,setError] = useState(null)


  const handleChange = e =>{
    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))

  }

  const handleSubmit = async e=>{
    //its an async function as we are making an API request
    e.preventDefault()
    try{
      const res = await axios.post("http://localhost:8800/api/auth/register",inputs)
      console.log("res is",res)
      if(res.status == 200){
        navigate("/login")

      }
     

    }catch(err){
      console.log(err)
      setError(err.response.data)

    }
    
  }


  return (
    <div className='auth'>
        <h1>Register</h1>
        <form>
            <input required type="text" placeholder='username' name = 'username' onChange={handleChange} />
            <input required type="email" placeholder='email' name = 'email' onChange={handleChange}/>

            <input required type="password" placeholder='password' name = 'password' onChange={handleChange} />
            <button onClick={handleSubmit}>Register</button>
            {err && <p className='error-message'>{err}</p>}
            <span className='link'>Do you have have an account? <Link to = '/login'>Login</Link></span>
        </form>

    </div>
  )
}

export default Register