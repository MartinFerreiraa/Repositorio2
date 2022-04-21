import React from "react";
import Carrito from  '../../carrito.png'

const SumaCarrito =(cantidadCarrito,sumar) => {
    cantidadCarrito = 0;
    
return(
    <div>
        <form className="d-flex">
        <img src={Carrito}/>
        <p className="item-count">{cantidadCarrito}</p>
        </form>
    </div>
)
}
export default SumaCarrito