import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'

const Card = () => {
  const { carrito} = useContext(GlobalContext)
  return (

    <div>
      <ul>
        {carrito.lenght > 0 ? carrito.map((item, index) => (
          <li key={index} > {item.title}</li>
          
        )) : <h1> Carrito vacio</h1>}
        
      </ul>
      
    </div>



  )
}

export default Card