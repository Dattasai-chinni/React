import React,{useState} from 'react'

export default function Input() {
    const[userName,setUserName] = useState('')
    const[password,setPassWord] = useState('')
    function handleUsername(e){
        setUserName(e.target.value)
    }
    function Body() {
        document.body.innerHTML = `
            <div>
                <p>Username: ${userName}</p>
                <p>Password: ${password}</p>
            </div>
        `;
    }
    
    function submit(){
        console.log(userName)
        console.log(password)
        Body()
    }
  return (
    <div>
      <p>
        <input type = "text" placeholder = "enter name" onChange = {handleUsername}/>
        <input type = "password" placeholder = "enter password" onChange = {(e)=>(
            setPassWord(e.target.value)
        )}/>
        <button onClick = {submit}>Submit</button>
      </p>
    </div>
  )
}
