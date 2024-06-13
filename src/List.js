import React,{useState} from 'react'
import './List.css'

export default function List() {
    const[employees,setEmployees]=useState([
        {
            name : "datta",
            age : 21,
            id : 1208,
            gender : "male",

        },
        {
            name : "sai",
            age : 21,
            id : 41,
            gender : "male"
        },
        {
            name : "bala",
            age : 32,
            id : 45,
            gender : "male"
        },
        {
            name : "venkat",
            age : 24,
            id : 36,
            gender : "male",
        }
    ])
  return (
    <div className = "employee-container">
        {
       employees.map((e) => (
        <div className = "employees" key = {e.id}>
            <p>name :{e.name}</p>
            <p>age : {e.age}</p>
            <p>id : {e.id}</p>
            <p>gender : {e.gender}</p>
        

        </div>
       ))
    }
    </div>
  )
}
