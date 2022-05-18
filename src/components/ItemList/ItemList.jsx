import React, { useState } from "react";
import Item from "../Item/Item";
import Loading from "../Loading/Loading";



const ItemList = ({productos }) => {
    return (
        <div>
            {productos.length > 0 ? (productos.map((productos) => (<Item key={productos.id} productos={productos} />)))
                : (
                    <Loading />
                )}
        </div>
    )
}

export default ItemList;



