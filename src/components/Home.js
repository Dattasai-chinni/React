import React,{useState} from 'react'
import './Home.css'

export default function Home() {
  const[userName,setUserName]=useState('')
  const[password,setPassword]=useState('')
  function submit(){
    console.log(userName)
    console.log(password)
    setUserName('')
    setPassword('')
  }
  return (
    <div>
      <h1>this is home</h1>
      <div className = "form">
        <label className = "text">Username:</label>
      <p><input value = {userName} className = "input" type = "text"  placeholder = "enter username" onChange ={(e)=>(
        setUserName(e.target.value)
      )}/></p>
      <label className = "text">Password:</label>
      <p><input value = {password}  className = "input" type = "password"  placeholder = "enter passoword" onChange ={(s)=>(
        setPassword(s.target.value)
      )}/></p>
      <button  className ="button" onClick={submit}>Submit</button>
      </div>


    </div>
  )
}
