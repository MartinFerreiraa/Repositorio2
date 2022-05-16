import React, { useState } from "react";
import { Link } from "react-router-dom";
const ItemCount = ({ manejarClick, stock, }) => {
    const [count, setCount] = useState(1);

    function Sumar() {
        count < stock ? setCount(count + 1) : setCount(count)
    }
    function Restar() {
        count > 1 ? setCount(count - 1) : setCount(count)
    }



    return (
        <>
            <Link to={""} onClick={() => manejarClick(count)} className="btn btn-success text-light"> Añadir al carrito </Link>
            <p className="text-white text-center fs-5">
                <button onClick={Restar} className="btn btn-success">Restar</button>
                <div>
                    Stock total {stock}
                </div>
                <div>
                    Cantidad a comprar : {count}
                </div>
                <button onClick={Sumar} className="btn btn-success">Sumar</button>
            </p>
        </>
    )
}

export default ItemCount


