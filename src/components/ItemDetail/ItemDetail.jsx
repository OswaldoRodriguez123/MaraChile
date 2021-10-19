import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({
	item, item: { title, description, price, pictureUrl, stock }, onAdd
}) => {
    return (
        <div className="col-sm-12 col-xs-12 col-md-8 col-lg-5 col-xl-4">
            <div className="card bg-light">
                <img src={pictureUrl} className="card-pictureUrl-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title mb-2">{title}</h5>
                    <h6 className="card-subtitle mb-1">{new Intl.NumberFormat().format(price)}</h6>
                    <p className="card-text">{description}</p>
                    <p className="card-text">Stock: {stock}</p>
                    <div className="d-flex justify-content-center w-100">
                        <Link to={`/`}><button className="btn btn-dark">Volver</button></Link>
                    </div>
                    {stock > 0 &&
                        <ItemCount
                            item={item}
                            onAdd={onAdd}
                        />
                    }
                    {stock === 0 &&
                        <div className="d-flex justify-content-center w-100 mt-3">
                            <Link to={`/cart`}><button className="btn btn-dark">Terminar Compra</button></Link>
                        </div>
                    }
                </div>
            </div>
        </div>
	);
};

export default Item;
