import React,{ useState } from "react";
const ItemCount = ({ stock, initaial, onAdd}) => {
    const [count, setCount] = useState(initaial || 20);

    const Restar = () =>{
        if (count === 1) {
            console.log(`error al seguir restando`)
        }else{
            setCount (count - 1);
        }
    };

    const Sumar = () =>{
        if (count >= stock) {
            console.log(`No hay mas stock`)
        }else{
            setCount(count + 1);
        }
    }
    const agregarCarrito = () => {
        onAdd(count)
    }
    return(
        <div className="card " style={{width: "18rem", height:"17rem"}}>
            <div className="card-body d-flex justify-content-center aling-item-center flex-column"> 
                <div
                    className="text-dark btn-group d-flex justify-content-center aling-item-center my-1 flex-column"
                    role="group"
                    arial-label="Basic outlined example"
                    >
                     <h2 class="h6"> Stock {stock}</h2>
                    <button type="button" className=" bg-primary text-white rounded-pill" onClick={Restar}> - </button>
                            
                    <div className=" d-flex justify-content-center aling-item-center" style={{padding:"5px"}}>
                        {count}
                    </div>
                    <button type="button" className="bg-primary text-white rounded-pill" onClick={Sumar}> + </button>
                </div>
                <button onClick={agregarCarrito} type="button" className="bg-danger text-white rounded-pill">
                    agregar al carrito
                </button>
            </div>
        </div>
        
        
    
    );

};
 
export default ItemCount;