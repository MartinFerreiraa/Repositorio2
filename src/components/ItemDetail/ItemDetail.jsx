import React from "react";


const ItemDetail = ({ producto }) => {


  return (
    <div className="card-body bg-secondary text-center justify-content-center ">
      <div className="card">
        <div className="card-title">
          {producto.title}
        </div>
        <div className="card-img-top">
          <h2 className="invisible"> {producto.categoriId} </h2>
          <img src={producto.pictureUrl}  alt="" />
        </div>
        <div className="card-text  my-1">
          {producto.description}
        </div>
        <div className="card-text my-1">
          {producto.price}
        </div>

      </div>

    </div>
  )
}

export default ItemDetail