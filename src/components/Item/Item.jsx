import React from "react";


const Item = ({ id, title, description, price, pictureUrl }) => {
    return (
        <div className="card-body">
            <h1 className="text-secondary">{id}</h1>
            <div className="text-center">
                <title className="title">{title}</title>
                <img src={pictureUrl} className="rounded" alt="Imagen producto" />
                <h5 className="description">{description}</h5>
                <div className="justify-content-center align-items-center">
                    <p className="price ">{price}</p>
                </div>
            </div>
        </div>

    )
}
export default Item