import React, { useState } from "react";

const Item = ({
	item: { id, title, description, price, pictureUrl, stock }, addToCardWidget
}) => {

	const [quantity, setQuantity] = useState(1);
	
	function add() {
		if (quantity < stock) setQuantity(quantity + 1);
	}

	function remove() {
		if (quantity > 1) setQuantity(quantity - 1);
	}

	return (
		<div className="col-sm-12 col-xs-12 col-md-8 col-lg-5 col-xl-4">
			<div className="card">
				<img src={pictureUrl} className="card-pictureUrl-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">Stock: {stock}</p>
					<div className="w-100 d-flex mt-2">
						<button onClick={() => remove()} className="btn col-xs-6 btn-primary mx-auto">-</button>
						<span>Cantidad : {quantity} </span>
						<button onClick={() => add()} className="btn col-xs-6 btn-warning mx-auto">+</button>
					</div>
					<div className="row">
						<button onClick={() => addToCardWidget(quantity)} className="btn btn-success my-3">Agregar al Carrito</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Item;
