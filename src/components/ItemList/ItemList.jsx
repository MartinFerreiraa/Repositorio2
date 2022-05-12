import React from "react";
import { data } from "../../config";
import Item from "../Item/Item";

const ItemList = ({ productos }) => {
    return (
        <div>
            {productos.length > 0 ? (
                productos.map((producto) => <Item data={producto}
                key={producto.id}
                id={producto.id}
                title={producto.title}
                category={producto.category}
                //description={producto.description}
                //price={producto.price}
                pictureUrl={producto.pictureUrl}
                stock={producto.stock}


                />)
            ) : (<div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            )}
        </div>
    );
};

export default ItemList;



