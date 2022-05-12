import React from "react";

import ItemCount from "../ItemCount/ItemCount";




const ItemDetail = ({ producto }) => { 
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
        <ItemCount stock={producto.stock} />
      </div>
      
    </div>
  </div>
  )
}

export default ItemDetail