import React, { useState } from "react";
import Item from "../Item/Item";
import Cargando from "../Views/Cargando";



const ItemList = ({productos }) => {
    return (
        <div>
            {productos.length > 0 ? (productos.map((productos) => (<Item key={productos.id} productos={productos} />)))
                : (
                    <Cargando />
                )}
        </div>
    )
}

export default ItemList;



