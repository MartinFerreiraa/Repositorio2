import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { data } from "../../config/index";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);


    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data);
            }, 2000);
        })
        promesa
            .then((res) => { setProductos(res) })
            .then(() => console.log(productos))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className='container text-warning bg-secondary d-flex justify-content-center aling-item-center' style={{ padding: "10px" }}>

            <ItemList productos={productos} />

        </div>
    )
}
export default ItemListContainer










/**import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getFech } from "../../Helpers/getFech";

function ItemListContainer() {

    const [productos, setProductos] = useState([])
    const [detallesP, setDetallesP] = useState([true])

    useEffect(() => {
        getFech
            .then((respuesta) => {
                return respuesta
            })
            .then((resp) => setProductos(resp))
            .then(err => console.log(err))
            .finallly(() => setDetallesP(false))
    }, [])
    return (
        <div className='container text-warning bg-secondary d-flex justify-content-center aling-item-center' style={{ padding: "10px" }}>
            { detallesP ? <h2>Cargando detalles...</h2>
                :
                <ItemList productos={productos} />}
        </div>
    )

}
export default ItemListContainer**/
