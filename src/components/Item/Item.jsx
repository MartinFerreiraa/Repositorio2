import React from "react";
import { Link } from "react-router-dom";


const Item = ({ id, title, description, price, pictureUrl, categoriId }) => {
    return (
        <div className="">
            <h6 className="text-secondary invisible ">{id}</h6>
            <div className="text-center">
                <title className="title">{title}</title>
                <h2>{categoriId}</h2>                                
                <img src={pictureUrl} alt="" />
                <h5 className="description">{description}</h5>
                <p className="price "> {price}</p>
                <div>
                    <Link to={`/item/${id}`} type="button" className="bg-danger text-white "> Ver detalles</Link>
                </div>
               
            </div>
        </div>

    )
}
export default Item

/**
 * 
 *  <div>
                    <Link to={`/item-categoria/${categoria}`} type="button" className="bg-danger text-white rounded-pill">{categoria}</Link>
                </div>
 * <button  type="button" className="bg-danger text-white rounded-pill">
                        Ver Detalles
                    </button> */
/**import React from "react";


function Item  ({ prod })  {
    return (
        <div key={prod.id} className="card">
            <div className="text-center">
                <title className="title">{prod.title}</title>
                <div>
                    <img src={prod.pictureUrl} className="rounded" alt="Imagen producto" />
                    <h5 className="description">{prod.description}</h5>
                </div>
                <div className="justify-content-center align-items-center">
                    <p className="price ">{prod.price}</p>
                    <button onClick={prod.id} type="button" className="bg-danger text-white rounded-pill">
                        detalles
                    </button>

                </div>
            </div>
        </div>

    )
}
export default Item**/ 