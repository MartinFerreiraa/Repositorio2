import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

const Item = ({ productos }) => {

    const { id, title, description, price, pictureUrl, category, stock } = productos

    return (

        < >
            <div className="card-body w-25" >
                <h6 className="text-secondary invisible ">{id}</h6>
                <img className="card-img-top border" src={pictureUrl} alt="Card image cap" />
                <div className="card d text-center">
                    <title className="card-title">{title}</title>
                    <h2 className="invisible">{category}</h2>

                    <h5 className="card-text font-weight-light">{description}</h5>
                    <p className="card-subtitle text-muted"> {price}</p>
                    <h2 className="invisible">{stock}</h2>
                    <div>
                        <Link to={`/item/${id}`} type="button" className="btn btn-success text-light"> Ver detalles </Link>
                    </div>

                </div>
            </div>

        </>



    )
}
export default Item

