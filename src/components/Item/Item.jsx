import React from "react";
import { Link } from "react-router-dom";


const Item = ({ id, title, description, price, pictureUrl, category,stock }) => {
    return (
        <div className="">
            <h6 className="text-secondary invisible ">{id}</h6>
            <div className="text-center">
                <title className="title">{title}</title>
                <h2 className="invisible">{category}</h2>                                
                <img src={pictureUrl} alt="" />
                <h5 className="description">{description}</h5>
                <p className="price "> {price}</p>
                <h2 className="invisible">{stock}</h2>
                <div>
                    <Link to={`/item/${id}`} type="button" className="bg-danger text-white "> Ver detalles </Link>
                </div>
               
            </div>
        </div>

    )
}
export default Item