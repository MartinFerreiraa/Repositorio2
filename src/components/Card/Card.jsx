import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalStateContext'

const Card = () => {
  const { carrito, eliminarProducto, vaciarCard, total } = useContext(GlobalContext)
  console.log(carrito.count)
  return (
    <>
      {carrito.lenght > 0 ? carrito.map((prod, index) => {
        return (
          <section key={index}>
            <div>
              <img src={prod.pictureUrl} alt="" />
            </div>
            <div>
              {prod.title}
            </div>
            <div>
              {prod.descripcion}
            </div>
            <div>
              <p> Cantidad:{prod.count}</p>
              <p>Total: {total}</p>
              <button className="btn btn-warning text-dark" onClick={() => eliminarProducto(prod.id)}>Eliminar</button>
            </div>
          </section>
        )
      }) : <h4>Nada agregado</h4>
      }
        {carrito.legth > 0 ?(
         <div>
            <button className="btn btn-danger" onClick={() => vaciarCard(carrito)}> Vaciar carrito</button>
            <button className="btn btn-danger" >Terminar compra</button>
          </div >
        ):
        (
         <Link to="/" className="btn btn-danger" >Volver </Link>
        )
      }
    </>
  )
}

export default Card