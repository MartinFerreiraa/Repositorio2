import React from "react";
import Carrito from '../../carrito.png'




const CartWidget = (cantidadCarrito) => {
    cantidadCarrito = (0);

    return (
        <div className="carrito">
            <form className="d-flex ">
                <img src={Carrito} />
                <p className="item-count">{cantidadCarrito}</p>
            </form>
        </div>
    )
}
export default CartWidget

//*const CartWidget = (cantidadCarrito) => {
   // cantidadCarrito = 0;