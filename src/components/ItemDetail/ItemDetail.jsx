import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalStateContext";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({ productos: { id, title, description, price, pictureUrl, category, stock } }) => {
  const { carrito, agregarCarrito } = useContext(GlobalContext)

  const [cantidadComprada, setCantidadComprada] = useState(0)
  const quantityToAdd = (count) => {
    setCantidadComprada(count)
    carrito.count = quantityToAdd
    console.log(carrito)
  }
  const [state, setState] = useState({})
  useEffect(() => {
    setState({ id, title, description, price, pictureUrl, category, stock })
  })
  const itemCarro = {
    id: id,
    title: title,
    description: description,
    price: price,
    pictureUrl: pictureUrl,
    category: category,
    stock: stock
  }
  return (
    <div className="card-body bg-secondary text-center justify-content-center ">
      <div className="card">
        <div className="font-weight-bold">
          {title}
        </div>
        <div className="card-img-top">
          <h2 className="invisible"> {category} </h2>
          <img src={pictureUrl} alt="" />
        </div>
        <div className="card-text font-weight-light">
          {description}
        </div>
        <div className="card-text">
          {price}
        </div >
      </div>
      <div className="d-block justify-content-center text-center ">
        {cantidadComprada > 0 ? (
          <Link to={"/Card"} onClick={() => agregarCarrito(itemCarro)} className='btn btn-success text-light'>Finalizar Compra </Link>
        ) : (<ItemCount manejarClick={quantityToAdd} stock={stock} />)
        }
      </div>

    </div>
  )

}

export default ItemDetail


