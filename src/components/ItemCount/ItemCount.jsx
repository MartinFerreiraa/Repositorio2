import React, { useState } from "react";
import { Link } from "react-router-dom";
const ItemCount = ({ manejarClick, stock, }) => {
    const [count, setCount] = useState(1)

    function Sumar() {
        count < stock ? setCount(count + 1) : setCount(count)
    }
    function Restar() {
        count > 1 ? setCount(count - 1) : setCount(count)
    }



    return (
        <>
            Stock total {stock}
            <div className="d-flex justify-content-center text-white text-center">

                <button onClick={Restar} className="btn btn-success">-</button>
                <div >
                    Cantidad a comprar : {count}
                </div>
                <button onClick={Sumar} className="btn btn-success">+</button>
            </div>
            <Link to={""} onClick={() => manejarClick(count)} className="btn btn-success text-light"> Añadir al carrito </Link>
        </>
    )
}

export default ItemCount


