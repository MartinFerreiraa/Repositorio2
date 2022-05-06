import React from "react";
import Item from "../Item/Item";

const ItemList = ({ productos }) => {
    return (
        <>
            {productos.length > 0 ? productos.map((producto) => (
                <Item
                    key={producto.id}
                    id={producto.id}
                    title={producto.title}
                    //description={producto.description}
                    //price={producto.price}
                    pictureUrl={producto.pictureUrl}

                />

            )) : <div class="spinner-border" role="status"> 
                        <span class="visually-hidden">Loading...</span>
                </div>
            }
        </>
    )
}

export default ItemList



