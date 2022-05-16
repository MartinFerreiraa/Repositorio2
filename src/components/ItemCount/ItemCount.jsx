import React, { useState } from "react";
import { Link } from "react-router-dom";
const ItemCount = ({ manejarClick, stock, initaial, quantityToAdd }) => {
    const [count, setCount] = useState(initaial || 1);
    

    const Restar = () => {
        if (count === 1) {
            console.log(`error al seguir restando`)
        } else {
            setCount(count - 1);
        }
    };

    const Sumar = () => {
        if (count >= stock) {
            console.log(`No hay mas stock`)
        } else {
            setCount(count + 1);
        }
    }
    const carro = () => {
        quantityToAdd= (count)
    }
   
    return (
        <div className="contador " style={{ width: "10rem", height: "12rem" }}>
            <div className="justify-content-center aling-item-center flex-column">
                <div
                    className="text-dark btn-group d-flex justify-content-center aling-item-center my-2 flex-column"
                    role="group"
                    arial-label="Basic outlined example"
                >
                    <h2 class="h6"> Stock {stock} </h2>
                    <button type="button" className=" btn btn-success  text-light" onClick={Restar}> - </button>

                    <div className=" d-flex justify-content-center aling-item-center" style={{ padding: "2px" }}>
                        {count}
                    </div>
                    <button type="button" className="btn btn-success text-light" onClick={Sumar}> + </button>
                </div>
                <div>
                    <Link to={""} onClick={() => manejarClick(count)}  className="btn btn-success text-light"> Añadir al Carrito</Link>
                </div>
                
                
                
            </div>
        </div>



    );

};

export default ItemCount

