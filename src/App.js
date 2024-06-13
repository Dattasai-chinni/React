import React,{useState} from 'react'
import Student from './Student'
import List from './List'
import Input from './Input'
import Car from './Car'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navigation from './components/Navigation'



export default function App() {
  const[studentName,setStudentName] = useState('datta')
  const[studentAge,setStudentAge]=useState(21)
  return (
    <div>
      <BrowserRouter>
      <Navigation/> 
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "/about" element = {<About/>}/>
      </Routes>
      </BrowserRouter>



      {/* <p>hello world</p>
      <p>name is :{studentName} and the age is :{studentAge}</p> */}
      <div>
        {/* <Student name = "datta" rollno = "1234"/> 
        <List/>
        <Input/> */}
        {/* <Car/> */}
        
      </div>
    </div>
  )
}
