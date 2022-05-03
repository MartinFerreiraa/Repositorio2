import React from "react";
import Item from "../Item/Item";

const ItemList = ({ productos }) => {
    return (
        <>
            {productos.length > 0 ? productos.map((producto, index) => (
                <Item
                    key={index}
                    id={producto.id}
                    title={producto.title}
                    description={producto.description}
                    price={producto.price}
                    pictureUrl={producto.pictureUrl}
                />
            )) : (<h2 className="cargando"> Cargando... </h2>
            )}
        </>
    )
}

export default ItemList 