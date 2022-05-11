import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../../config'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [ producto, setProducto ] = useState(null);
    const filtrar = data.find((producto) => producto.id === Number(id));
    
    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(filtrar);
            }, 2000);
        })
        promesa
            .then((res) => { setProducto(res); })
            .then(() => console.log(producto))
            .catch((err) => console.log(err));
    }, []);


    return (
        <div>
            {producto ? <ItemDetail producto={producto} /> : 
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>            
            
            }
        </div>
    )
}

export default ItemDetailContainer