import React from 'react'


export default function Cars(props) {
  return (
    <div>
      {
       props.displaycars.map((e)=>(
           <div key ={e.price}>
            <img src={e.carimage} alt={e.carname} style={{ width: '200px' }} />
            <p>{e.carname}</p>
            <p>{e.carprice}</p>
            <p>{e.cardescription}</p>
           </div>

        ))
       }
    </div>
  )
}
