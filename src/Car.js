import React,{useState} from 'react'
import Cars from './Cars'

export default function Car() {
    const[cardetails,setCarDetails]=useState([
        {
            carname : "benz",
               carimage : "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
            carprice : 600000,
            cardescription : "comfortable with seating arrangement"
        },
        {
            carname : "bmw",
            carimage :"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
            carprice : 800000,
            cardescription : "comfortable with gear system"  
        },
        {
            carname : "audi",
            carimage :"https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
            carprice : 1000000,
            cardescription : "comfortable with stearing system"
        }
    ])
  return (
    <div>
       <Cars displaycars={cardetails}/>
    </div>
  )
}
