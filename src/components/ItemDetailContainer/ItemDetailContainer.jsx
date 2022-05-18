import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../../config'
import ItemDetail from '../ItemDetail/ItemDetail'
import Loading from '../Loading/Loading'

const ItemDetailContainer = () => {

    const { id } = useParams()
    const [ productos, setProductos ] = useState([]);
    const filtrar = data.find((prod) => prod.id === Number(id));
    
    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(filtrar);
            }, 2500);
        })
        promesa
            .then((res) => { setProductos(res)
            })
            .then(() => console.log(productos))
            .catch((err) => console.log(err))
        return() =>{

        }
    }, [])


    return (
        <div>
            {productos ? <ItemDetail productos={productos} /> : 
                <Loading/>         
            
            }
        </div>
    )
}

export default ItemDetailContainer