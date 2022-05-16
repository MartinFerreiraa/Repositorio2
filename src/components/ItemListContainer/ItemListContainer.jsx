import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { data } from "../../config/index";
import { Link, useParams } from "react-router-dom";

const ItemListContainer = () => {
    const { cat } = useParams()
    const [productos, setProductos] = useState([])

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                let Filtrado = data
                if (cat === 'M') {
                    Filtrado = data.filter((productos => productos.category === 'M'))
                }
                if (cat === 'F') {
                    Filtrado = data.filter((productos => productos.category === 'F'))
                }
                if (cat === 'N') {
                    Filtrado = data.filter((productos => productos.category === 'N'))
                }
                resolve(Filtrado)
            }, 2000);
        })
        promesa
            .then((res) => { setProductos(res) })
        return () => {

        }
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
