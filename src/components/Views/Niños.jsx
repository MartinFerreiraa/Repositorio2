import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../../config';
import ItemDetail from '../ItemDetail/ItemDetail';

const Niños = () => {

  const { categoriId } = useParams([]);
  const [productos, setProductos] = useState([]);
  const filtro = data.find((productos) => productos.categoriId === (categoriId));
  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(filtro);
      }, 2000);
    })
    promesa
      .then((res) => { setProductos(res); })
      .then(() => console.log(productos))
      .catch((err) => console.log(err));
  }, [])




  return (
    <>
      {productos ? <ItemDetail productos={categoriId} /> :
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>

      }
    </>
  )

}

export default Niños