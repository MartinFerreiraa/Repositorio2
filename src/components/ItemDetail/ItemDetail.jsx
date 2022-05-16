import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ producto }) => {
  const [carro, setCarro] = useState("")
  const quantityToAdd = (carro) => {
    setCarro(carro)
    console.log(carro)
  }
  return (
    <div className="card-body bg-secondary text-center justify-content-center ">
      <div className="card">
        <div className="card-title">
          {producto.title}
        </div>
        <div className="card-img-top">
          <h2 className="invisible"> {producto.category} </h2>
          <img src={producto.pictureUrl} alt="" />
        </div>
        <div className="card-text  my-1">
          {producto.description}
        </div>
        <div className="card-text my-1">
          {producto.price}
        </div >
        <div className="conteiner d-flex justify-content-center p-10" >
          <ItemCount manejarClick={quantityToAdd} stock={producto.stock} />
        </div>
        <div className="justify-content-center aling-item-center flex-column ">
          <Link to={"/Card"} className=" btn btn-success p-10 text-light"> Comprar </Link>
        </div>

      </div>
    </div>
  )
}

export default ItemDetail


