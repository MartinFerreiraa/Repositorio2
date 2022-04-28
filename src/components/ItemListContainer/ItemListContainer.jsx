import React from "react";
import ItemCount from "../ItemCount/ItemCount";


const ItemListContainer = ({greeting}) => {
   const onAdd = (count) => {
       console.log(`Seleccionaste` [count])
   }
   
    return (
        <div className='container text-warning bg-secondary d-flex justify-content-center aling-item-center' style={{padding:"10px"}}>
            <span style={{paddingRight:"30px"}}> {greeting ? greeting: "Bienvenidoss"}</span>
            <ItemCount stock={20} initaial={1} onAdd={onAdd}/>
        </div>
    )
}
export default ItemListContainer ;