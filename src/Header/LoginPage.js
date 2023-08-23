import React from 'react'
import img from "../amazon logo.png"
import { useNavigate } from 'react-router-dom'
const LoginPage = () => {
  const navigate= useNavigate()
  const handleNavigation =()=>{
    navigate("/profile")
  }
  return (
    <div style={{height:500,backgroundColor:'white',display:"flex",alignItems:'center',flexDirection:'column'}}>
    <img src={img} style={{height:70,width:300}}/>
    <div style={{height:350,width:350,backgroundColor:"rgba(250,250,250)",borderRadius:10}}>
        <div style={{marginLeft:50}}>
        <h2>Sign In Here</h2>
      <h6>Enter Mobile Or Email Address</h6>
      <input type="text" style={{width:250}}/>
      <h6>PassWord</h6>
      <input type="text" style={{width:250}}/>
      <div style={{margin:80}}>
      <button onClick={handleNavigation}>Continue</button>
      </div>
      </div>

    </div>
    </div>
  )
}

export default LoginPage