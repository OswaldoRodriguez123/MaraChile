import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item: { id, title, pictureUrl, stock } }) => {

	return (
		<div className="col-sm-12 col-12 col-md-8 col-lg-5 col-xl-4">
			<div className="card bg-light">
				<img src={pictureUrl} className="card-pictureUrl-top" alt={title} />
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">Stock: {stock}</p>
					<div className="col-12 text-center mt-1 mb-1">
						<Link to={`/item/${id}`}><button className="btn btn-dark">Ver Producto</button></Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Item;
