import React from "react";


const ItemDetail = ({ producto }) => {


  return (
    <div className="container  bg-secondary text-center justify-content-center aling-item-center">
      <div className="  my-1">
        {producto.title}
      </div>
      <div className="  my-30">
        {producto.pictureUrl}
      </div>
      <div className="  my-1">
        {producto.description}
      </div>
      <div className="  my-1">
        {producto.price}
      </div>
         
    </div>
  )
}

export default ItemDetail