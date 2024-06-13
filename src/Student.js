import React from 'react'

export default function Student(props) {
  return (
    <div>
      <h1>student details</h1>
      <p>name : {props.name}</p>
      <p>roll no :{props.rollno}</p>
    </div>
  )
}
