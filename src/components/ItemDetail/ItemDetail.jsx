import React from "react";


const ItemDetail = ({ producto }) => {


  return (
    <div className="card-body bg-secondary text-center justify-content-center ">
      <div className="card border">
        <div className="card-title text-capitalize">
          {producto.title}
        </div>
        <div className="card-img-top">
          <img src={producto.pictureUrl} className="img-fluid" alt="" />
        </div>
        <div className="card-text fst-italic my-1">
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