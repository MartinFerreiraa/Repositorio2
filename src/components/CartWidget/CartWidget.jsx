import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalStateContext";
import imgCarrito from '../../imgCarrito.png'




const CartWidget = () => {
    const { carrito } = useContext(GlobalContext)


    return (
        <>


            <Link to="/Card">
                <span>{carrito.length}</span>
                <img to={"/Card"} src={imgCarrito} />
            </Link>

        </>
    )

}
export default CartWidget

//*const CartWidget = (cantidadCarrito) => {
   // cantidadCarrito = 0;

