import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../../config';
import ItemDetail from '../ItemDetail/ItemDetail';


const Hombre = () => {

    const { categoriId } = useParams([]);
    const [producto, setProducto] = useState([]);
    const filtro = data.find((producto) => producto.categoriId === (categoriId));
    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(filtro);
            }, 2000);
        })
        promesa
            .then((res) => { setProducto(res); })
            .then(() => console.log(producto))
            .catch((err) => console.log(err));
    }, [])




    return (
        <>
            {producto ? <ItemDetail producto={categoriId} /> :
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>

            }
        </>
    )
}

export default Hombre