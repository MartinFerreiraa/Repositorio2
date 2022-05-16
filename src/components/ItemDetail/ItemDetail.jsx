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
    console.log(carrito.count)
  }
  const [state, setState] = useState({})
  useEffect(() => {
    setState({ id, title, description, price, pictureUrl, category, stock})
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
        <div className="card-title">
          {title}
        </div>
        <div className="card-img-top">
          <h2 className="invisible"> {category} </h2>
          <img src={pictureUrl} alt="" />
        </div>
        <div className="card-text  my-1">
          {description}
        </div>
        <div className="card-text my-1">
          {price}
        </div >
        <div className="conteiner d-flex justify-content-center p-10" >
        </div>
      </div>
      {cantidadComprada > 0 ? (
        <Link to={"/Card"} onClick={() => agregarCarrito(itemCarro)} className='btn btn-success text-light'>Finalizar Compra </Link>
      ) : (<ItemCount manejarClick={quantityToAdd} stock={stock} />)
      }
    </div>
  )

}

export default ItemDetail


