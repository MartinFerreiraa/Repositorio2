import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalStateContext'

const Card = () => {
  const { carrito, eliminarProducto, vaciarCard, total } = useContext(GlobalContext)
  console.log(carrito)
  return (
    <>
      {carrito.lenght > 0 ? carrito.map((productos, index) => {
        return (
          <section key={index}>
            <div>
              <img src={productos.pictureUrl} alt="" />
            </div>
            <div>
              {productos.title}
            </div>
            <div>
              {productos.descripcion}
            </div>
            <div>
              <p> Cantidad:{productos.count}</p>
              <p>Total: {total}</p>
              <button className="btn btn-warning text-dark" onClick={() => eliminarProducto(productos.id)}>Eliminar</button>
            </div>
          </section>
        )
      }) : <h4>Carrito vacio</h4>
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