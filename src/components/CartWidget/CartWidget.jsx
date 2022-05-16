import React from "react";
import imgCarrito from '../../imgCarrito.png'




const CartWidget = (Carrito) => {
    Carrito = ("");

    return (
        <div className="carrito">
            <form className="d-flex ">
                <img src={imgCarrito} />
                <p className="item-count">{Carrito}</p>
            </form>
        </div>
    )
}
export default CartWidget

//*const CartWidget = (cantidadCarrito) => {
   // cantidadCarrito = 0;